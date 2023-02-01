import Tags from "@components/Tags";
import { api } from "@config/api";
import * as S from "@styles/Pages/jobs";
import Image from "next/image";

import { useEffect, useState } from "react";

interface IJob {
  id: string;
  company: {
    id: string;
    name: string;
    photo: string;
  };
  title: string;
  description: string;
  link: string;
  salary: number;
  workingModel: string;
}

interface IJobs {
  id: string;
  segmentArea: string;
  jobs: IJob[];
}

const Jobs = () => {
  const [segmentArea, setSegmentArea] = useState<string>("Back-End");
  const [jobs, setJobs] = useState<IJobs[]>([]);

  const handleSegmentArea = (area: string) => {
    setSegmentArea(area);
  };

  const tags = jobs.map((item) => item.segmentArea);

  useEffect(() => {
    (async () => {
      const { data } = await api.get("/63da5e2eebd26539d07291e5");
      setJobs(data.record);
    })();
  }, []);

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
          {tags.map((title) => (
            <Tags
              key={title}
              title={title}
              active={title === segmentArea}
              onClick={() => handleSegmentArea(title)}
            />
          ))}
        </S.ContainerTags>
        <h1>Vagas Disponíveis</h1>
        <S.ContainerJobs>
          {jobs
            .filter((companies) => companies.segmentArea === segmentArea)
            .map((item) =>
              item.jobs.map((job) => (
                <S.Job>
                  <S.Top>
                    <Image
                      src={
                        job.company.photo.length === 0
                          ? "/assets/perfil-company-null.png"
                          : job.company.photo
                      }
                      width={45}
                      height={45}
                    />
                    <b>{job.company.name}</b>
                  </S.Top>
                  <S.Mid>
                    <b>{job.title}</b>
                    <p>João Pessoa - PB, a 12,6 Km de você.</p>
                  </S.Mid>
                  <S.Bot>
                    <b>
                      {job.salary.toLocaleString("pt-br", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </b>
                    <button>Cadastre-se</button>
                  </S.Bot>
                </S.Job>
              ))
            )}
        </S.ContainerJobs>
      </S.Body>
    </S.Container>
  );
};

export default Jobs;
