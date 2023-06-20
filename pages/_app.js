import { ThemeContextProvider } from "../components/theme";
import "../styles/global.css";

const App = ({ Component, pageProps }) => {
  return (
    <ThemeContextProvider>
      <Component {...pageProps} />
    </ThemeContextProvider>
  );
};

export default App;
