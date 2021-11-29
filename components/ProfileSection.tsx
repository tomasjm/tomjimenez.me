import Heading from "./Heading";
import Text from "./Text";

const ProfileSection: React.FC = () => {
  return (
    <section>
      <div className="py-16">
        <Heading>Tomás Jiménez</Heading>
        <Text>
          Soy un desarrollador web, apasionado por la tecnología y la
          programación. Me gusta aprender nuevas tecnologías y me gusta crear
          cosas que me ayuden a mejorar mis habilidades.
        </Text>
        <Text>
          Me considero una persona que se mantiene enfocado en el trabajo y en
          el aprendizaje.
        </Text>
        <Text>
          Me gusta trabajar con personas que me ayuden a mejorar mis
          habilidades.
        </Text>
        <Text>
          Me gusta aprender nuevas tecnologías y me gusta crear cosas que me
          ayuden a mejorar mis habilidades.
        </Text>
      </div>
    </section>
  );
};

export default ProfileSection;
