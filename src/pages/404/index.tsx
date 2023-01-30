import styles from "@/styles/Home.module.css";
import Image from "next/image";

import image from "../../assets/pokemonball.png";

const NotFound: React.FC = () => {
  return (
    <div className="d-flex text-center">
      <div className="position-absolute translate-middle top-50 start-50">
        <Image
          src={image}
          alt="Pokémon ball"
          width={180}
          height={180}
          priority
        />
        <h1 className="p-3">Where did he go?!</h1>
      </div>
    </div>
  );
};

export default NotFound;
