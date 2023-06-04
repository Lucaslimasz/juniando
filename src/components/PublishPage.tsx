import React from "react";

import * as S from "@styles/Components/PublishPage";

const PublishPage: React.FC = () => {
  const [dropdown, showDropdown] = React.useState<boolean>(false);

  return (
    <S.Container>
      <S.Content>
        <S.Wrapper>
          <S.Logo />
          <S.Title>Novo post</S.Title>
          <S.Details>
            Descreva detalhamente sobre o assunto do seu tema.
          </S.Details>
          <S.BackButton href="/">Voltar para home</S.BackButton>
        </S.Wrapper>
        <S.InputArea>
          <S.Inputs>
            <div style={{ display: "flex", gap: "4px" }}>
              <S.InputItem type="text" placeholder="Título do post" />
              <S.InputSelect onClick={() => showDropdown(!dropdown)}>
                Tema
              </S.InputSelect>
            </div>
            <S.InputItem type="text" placeholder="Descrição" />
            <S.UploadImage>
              Escolher imagem
              <S.InputItem type="file" placeholder="Escolher imagem" />
              <span>Nenhuma imagem selecionada</span>
            </S.UploadImage>
          </S.Inputs>
          <S.Buttons>
            <S.CancelButton>Cancelar</S.CancelButton>
            <S.SubmitButton>Postar</S.SubmitButton>
          </S.Buttons>
        </S.InputArea>
        {dropdown && (
          <S.Dropdown>
            {["Javascript", "Html", "Reactjs", "Vue"].map((label, key) => {
              return (
                <>
                  <S.DropdownItem key={key}>{label}</S.DropdownItem>
                  <S.DropdownSeparator />
                </>
              );
            })}
          </S.Dropdown>
        )}
      </S.Content>
    </S.Container>
  );
};

export default PublishPage;
