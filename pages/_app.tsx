import "tailwindcss/tailwind.css";
import "../styles/global.css";
import { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import Container from "../components/Container";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Navbar />
      <Component {...pageProps} />
    </Container>
  );
}

export default MyApp;
