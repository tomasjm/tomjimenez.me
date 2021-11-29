import React from "react";
import {
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiNextdotjs,
  SiTailwindcss,
  SiCplusplus,
  SiDocker,
  SiNestjs,
  SiPython,
  SiArduino,
  SiRailway,
  SiVercel,
} from "react-icons/si";

const TechContainer = ({
  children,
  href,
}: React.PropsWithChildren<{ href: string }>) => {
  return (
    <div className="p-5 mx-3 dark:text-white">
      <a href={href}>{children}</a>
    </div>
  );
};
const Technologies = () => {
  return (
    <div className="flex flex-row flex-wrap  dark:text-white">
      <TechContainer href="https://www.typescriptlang.org/">
        <SiTypescript size={72} />
      </TechContainer>
      <TechContainer href="https://es.reactjs.org/">
        <SiReact size={72} />
      </TechContainer>
      <TechContainer href="https://nextjs.org/">
        <SiNextdotjs size={72} />
      </TechContainer>
      <TechContainer href="https://tailwindcss.com/">
        <SiTailwindcss size={72} />
      </TechContainer>
      <TechContainer href="https://www.cplusplus.com/">
        <SiCplusplus size={72} />
      </TechContainer>
      <TechContainer href="https://nodejs.org/es/">
        <SiNodedotjs size={72} />
      </TechContainer>
      <TechContainer href="https://www.docker.com/">
        <SiDocker size={72} />
      </TechContainer>
      <TechContainer href="https://nestjs.com/">
        <SiNestjs size={72} />
      </TechContainer>
      <TechContainer href="https://vercel.com/">
        <SiVercel size={72} />
      </TechContainer>
      <TechContainer href="https://railway.app/">
        <SiRailway size={72} />
      </TechContainer>
      <TechContainer href="https://www.arduino.cc/">
        <SiArduino size={72} />
      </TechContainer>
      <TechContainer href="https://www.python.org/">
        <SiPython size={72} />
      </TechContainer>
    </div>
  );
};
export default Technologies;
