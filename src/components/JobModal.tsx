import * as S from "@styles/Components/Modal";
import Button from "./Button";

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

export function JobModal({ job }: { job: IJob | undefined }) {
  return (
    <S.Container>
      <div
        dangerouslySetInnerHTML={{
          __html: `<h1>${job?.title}</h1> ${job?.content.replace(
            "&nbsp;",
            " "
          )}`,
        }}
      />
      <a href="/jobs">
        <Button title="Ver mais vagas" />
      </a>
    </S.Container>
  );
}
