import Head from "next/head";
import Heading from "../components/Heading";
import Text from "../components/Text";
import Image from "next/image";
import Technologies from "../components/Technologies";
import SocialNetworks from "../components/SocialNetworks";
export default function Home() {
  return (
    <>
      <Head>
        <title>Tom Portfolio</title>
      </Head>
      <main>
        <div className="text-left flex flex-col-reverse items-start sm:flex-row">
          <div className="w-10/12">
            <Heading className="text-6xl">Tomás Jiménez</Heading>
            <Text>
              Desarrollador fullstack chileno en <b>Innovate</b> y en{" "}
              <b>Universidad de la Frontera</b>
            </Text>
            <br />
            <Text>
              Soy un estudiante de Ingeniería en Electrónica en la Universidad
              de la Frontera, con conocimientos y experiencia en programación,
              diseño y desarrollo de aplicaciones web y proyectos electrónicos.
            </Text>
          </div>
          {/* <div className="w-[80px] sm:w-[176px] relative mb-8 sm:mb-0 mx-5 sm:mx-auto">
            <Image
              alt="Tomás Jiménez"
              height={176}
              width={176}
              src="/static/images/tom.jpg"
              className="rounded-full"
            />
          </div> */}
        </div>
        <div className="mt-16 w-10/12">
          <Heading>Experiencia</Heading>
          <Text>
            Actualmente me estoy desempeñando como desarrollador fullstack en
            proyectos de almacenamiento y visualización de datos, y como
            electrónico en el diseño e implementación de un dron metereológico.
          </Text>
          <br />
          <Text>
            En mi repositorio de{" "}
            <b className="font-extrabold">
              <a href="https://github.com/tomasjm">Github</a>
            </b>{" "}
            puedes encontrar una serie de proyectos públicos en los que me he
            desempeñado y en mi perfil de{" "}
            <b>
              <a href="https://www.linkedin.com/in/tomasjm/">LinkedIn</a>
            </b>{" "}
            podrás encontrar más sobre los proyectos en los que he trabajado.
          </Text>
        </div>
        <div className="mt-16">
          <Heading>Tecnologías</Heading>
          <Technologies />
        </div>
        <div className="mt-16">
          <Heading>Redes sociales</Heading>
          <SocialNetworks />
        </div>
      </main>
    </>
  );
}
