import Providers from "./contexts";
import Router from "./router";
import GlobalStyle from "./styles/global";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Providers>
        <Router />
      </Providers>
    </>
  );
};

export default App;
