import { Suspense } from "react";
import PublicRoutes from "routes/PublicRoutes";
import PrivateRoutes from "routes/PrivateRoutes";
import Header from "features/Header";
import { AppStyles, PageWrapper, Footer } from "App.styled";

const App = () => {
  return (
    <>
      <AppStyles />

      <Header />
      <Suspense fallback={"Loading..."}>
        <PageWrapper>
          <PublicRoutes />
          {/* <PrivateRoutes /> */}
        </PageWrapper>
      </Suspense>

      <Footer>
        <div>© Маркетплейс PK</div>
      </Footer>
    </>
  );
};

export default App;
