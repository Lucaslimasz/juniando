import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Loading from "react-loading";

export default function JobDetails({ id }: { id: string }) {
  const router = useRouter();

  useEffect(() => {
    router.push(`/jobs?jobId=${id}`, `/job/${id}`, {
      shallow: true,
    });
  }, []);

  return <Loading />;
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const id = ctx.params?.jobId;

  return {
    props: {
      id,
    },
  };
};
