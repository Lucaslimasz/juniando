import { Input } from "@components/Input";

import * as S from "@styles/Pages/me";

const Jobs = () => {
  return (
    <S.Container>
      <img
        src="https://github.com/lucaslimasz.png"
        alt="Perfil"
        width={200}
        height={200}
      />
      <div>
        <Input placeholder="E-mail" color="light" disabled />
        <Input color="light" placeholder="Link da foto" />
      </div>
    </S.Container>
  );
};

export default Jobs;
