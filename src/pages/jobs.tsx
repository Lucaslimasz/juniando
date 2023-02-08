import LoadingPage from "@components/LoadingPage";
import Tags from "@components/Tags";
import { api } from "@config/api";
import * as S from "@styles/Pages/jobs";
import { GetServerSideProps } from "next";
import Image from "next/image";

import { useEffect, useState } from "react";

interface IJob {
  _id: string;
  categoryJob: string;
  company: string;
  content: string;
  createdAt: string;
  image: string;
  registrationLink: string;
  title: string;
  salary: number;
}

interface ICategory {
  _id: string;
  name: string;
}

interface IJobs {
  jobs: IJob[];
  categories: ICategory[];
}

const Jobs = ({ jobs, categories }: IJobs) => {
  const [currentCategory, setCurrentCategory] = useState<ICategory>(
    categories[0] || ({} as ICategory)
  );
  const [jobsView, setJobsView] = useState<IJob[]>();

  const handleSegmentArea = (area: string) => {
    const category = categories.filter((cat) => cat.name === area)[0];
    setCurrentCategory(category);
  };

  useEffect(() => {
    const response = jobs.filter(
      (item) => item.categoryJob === currentCategory._id
    );
    setJobsView(response);
  }, [currentCategory]);

  if (!jobs || !categories) {
    return <LoadingPage />;
  }

  return (
    <S.Container>
      <S.Header>
        <div>
          <h1>Vagas para</h1>
          <h2>Desenvolvedores Jr</h2>
        </div>
      </S.Header>
      <S.Body>
        <S.ContainerTags>
          {categories.map(({ _id, name }) => (
            <Tags
              key={_id}
              title={name}
              active={name === currentCategory.name}
              onClick={() => handleSegmentArea(name)}
            />
          ))}
        </S.ContainerTags>
        <h1>Vagas Disponíveis</h1>
        <S.ContainerJobs>
          {jobsView?.map((job) => {
            console.log(job);
            return (
              <S.Job key={job._id}>
                <S.Top>
                  <Image
                    src={"/assets/perfil-company-null.png"}
                    width={45}
                    height={45}
                  />
                  <b>{job.company}</b>
                </S.Top>
                <S.Mid>
                  <b>{job.title}</b>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: `${job.content
                        .replace("&nbsp;", " ")
                        .substring(0, 200)}...`,
                    }}
                  />
                </S.Mid>
                <S.Bot>
                  <b>
                    {job.salary.toLocaleString("pt-br", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </b>
                  <button>
                    <a href={job.registrationLink} target="_blank">
                      Cadastre-se
                    </a>
                  </button>
                </S.Bot>
              </S.Job>
            );
          })}
        </S.ContainerJobs>
      </S.Body>
    </S.Container>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const response: { data: IJob[] } = await api.get("/jobs");
  const categoriesJobs: { data: IJob[] } = await api.get("/categoriesJobs");

  return {
    props: {
      jobs: response.data,
      categories: categoriesJobs.data,
    },
  };
};

export default Jobs;
