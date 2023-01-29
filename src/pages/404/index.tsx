import styles from "@/styles/Home.module.css";
import Image from "next/image";

import image from "../../assets/pokemonball.png";

const NotFound: React.FC = () => {
  return (
    <div className={styles.center}>
      <div style={{ textAlign: "center" }}>
        <Image
          className={styles.logo}
          src={image}
          alt="Pokémon ball"
          width={180}
          height={180}
          priority
        />
        <h1>Where did he go?!</h1>
      </div>
    </div>
  );
};

export default NotFound;
