import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
const SocialContainer = ({
  children,
  href,
}: React.PropsWithChildren<{ href: string }>) => {
  return (
    <div className="p-5 mx-3 dark:text-white">
      <a href={href}>{children}</a>
    </div>
  );
};
const SocialNetworks = () => {
  return (
    <div className="flex flex-row flex-wrap  dark:text-white">
      <SocialContainer href="https://github.com/tomasjm">
        <FaGithub size={72} />
      </SocialContainer>
      <SocialContainer href="https://linkedin.com/in/tomasjm">
        <FaLinkedin size={72} />
      </SocialContainer>
      <SocialContainer href="https://instagram.com/tom_jmz">
        <FaInstagram size={72} />
      </SocialContainer>
      <SocialContainer href="https://twitter.com/TomJimenez05">
        <FaTwitter size={72} />
      </SocialContainer>
      <SocialContainer href="https://www.facebook.com/TomJimenez05/">
        <FaFacebook size={72} />
      </SocialContainer>
    </div>
  );
};

export default SocialNetworks;
