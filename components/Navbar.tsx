import ToggleThemeButton from "./ToggleThemeButton";
import LinkItem from "./LinkItem";
const Navbar: React.FC = () => {
  return (
    <nav className="flex flex-col sm:flex-row justify-between py-12">
      <div className="flex w-full sm:w-5/12 justify-between mt-1">
        <LinkItem href="/" label="Inicio" />
        <LinkItem href="/comments" label="Comentarios" />
        <LinkItem href="/blog" label="Blog" />
        <LinkItem href="/snippets" label="Snippets" />
      </div>
      <div className="flex justify-around w-full mt-5 sm:mt-0 sm:w-4/12">
        <div className="mt-1">
          <LinkItem href="/apps" label="Mis Apps" />
        </div>
        <ToggleThemeButton />
      </div>
    </nav>
  );
};

export default Navbar;
