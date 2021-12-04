import "tailwindcss/tailwind.css";
import "../styles/global.css";
import { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import Container from "../components/Container";
import { SessionProvider } from "next-auth/react";
function MyApp({ Component, pageProps }: AppProps) {
  const { session } = pageProps;
  return (
    <SessionProvider session={session}>
      <Container>
        <Navbar />
        <Component {...pageProps} />
      </Container>
    </SessionProvider>
  );
}

export default MyApp;
