import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/molecules/Global/Navbar";
import { MyAppContainer } from "./styles";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MyAppContainer>
      <Navbar />
      <Component {...pageProps} />
    </MyAppContainer>
  );
}

export default MyApp;
