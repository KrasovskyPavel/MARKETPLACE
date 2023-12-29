import { Helmet } from "react-helmet";
import { TestDiv } from "./styled";

const HomePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Главная - Marketplace</title>
      </Helmet>
      <TestDiv />

      <h1>Главная - Marketplace</h1>
    </>
  );
};

export default HomePage;
