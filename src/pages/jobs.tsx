import LoadingPage from "@components/LoadingPage";
import Tags from "@components/Tags";
import { api } from "@config/api";
import * as S from "@styles/Pages/jobs";
import Image from "next/image";
import Modal from "react-modal";
import { useRouter } from "next/router";

import { useEffect, useState } from "react";
import { LIMIT } from ".";
import Pagination from "@components/Pagination";
import { JobModal } from "@components/JobModal";
import { useContextualRouting } from "next-use-contextual-routing";

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
  currentPage: number;
  totalPages: number;
}

Modal.setAppElement("#__next");

const Jobs = () => {
  const [jobs, setJobs] = useState<IJobs>();
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [currentCategory, setCurrentCategory] = useState<ICategory>();
  const [page, setPage] = useState<number>(1);
  const [total, setTotal] = useState<number>(1);

  const router = useRouter();
  const { makeContextualHref } = useContextualRouting();

  const handleSegmentArea = (area: string) => {
    const category = categories.filter((cat) => cat.name === area)[0];
    setCurrentCategory(category);
  };

  useEffect(() => {
    api.get("/categoriesJobs").then((response) => {
      setCategories(response.data);
    });
  }, []);

  useEffect(() => {
    if (currentCategory) {
      api
        .get(`/jobs/${currentCategory?._id}`, {
          params: {
            page: page,
            limit: LIMIT,
          },
        })
        .then((response) => {
          setPage(response.data.currentPage);
          setJobs(response.data);
          setTotal(response.data.totalPages);
        });
    }
  }, [page, currentCategory]);

  useEffect(() => {
    if (categories && categories.length > 0) {
      setCurrentCategory(categories[0]);
    }
  }, [categories]);

  if (!jobs || !categories) {
    return <LoadingPage />;
  }

  function openModal(id: string) {
    router.push(makeContextualHref({ jobId: id }), `/job/${id}`, {
      shallow: true,
    });
  }

  return (
    <>
      <Modal
        isOpen={!!router.query.jobId}
        onRequestClose={() => router.push("/jobs")}
        contentLabel="Detalhes da vaga"
        style={{
          content: {
            position: "relative",
            height: "max-content",
            width: "max-content",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            borderRadius: "0.5rem",
          },
          overlay: {
            backgroundColor: "rgba(0, 51, 132, 0.3)",
          },
        }}
      >
        <JobModal
          job={jobs.jobs.find((job) => job._id == router.query.jobId)}
        />
      </Modal>
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
                active={name === currentCategory?.name}
                onClick={() => handleSegmentArea(name)}
              />
            ))}
          </S.ContainerTags>
          <h1>Vagas Disponíveis</h1>
          <S.ContainerJobs>
            {jobs.jobs.map((job) => {
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
                    <button onClick={() => openModal(job._id)}>
                      Cadastre-se
                    </button>
                  </S.Bot>
                </S.Job>
              );
            })}
          </S.ContainerJobs>
          <Pagination
            totalCount={total}
            onPageChange={setPage}
            currentPage={page}
            pageSize={1}
          />
        </S.Body>
      </S.Container>
    </>
  );
};

export default Jobs;
