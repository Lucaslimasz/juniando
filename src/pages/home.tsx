/* eslint-disable prettier/prettier */
import Footer from "@components/Footer";
import Header from "@components/Header";
import RelevantMatters from "@components/RelevantMatters";
import * as S from "@styles/Pages/home";

const Home = () => {
  return (
    <S.Wrapper>
      <Header />
      <Footer />
    </S.Wrapper>
  );
};

export default Home;
