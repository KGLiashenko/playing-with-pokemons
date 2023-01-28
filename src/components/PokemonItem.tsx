import { Inter } from "@next/font/google";
import Image from "next/image";

import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

const PokemonItem: React.FC<{ name: string; image: string }> = ({
  name,
  image,
}) => {
  return (
    <div className={styles.card}>
      <Image src={image} alt={name} width={130} height={130} />
      <h2 className={inter.className}>{name}</h2>
    </div>
  );
};

export default PokemonItem;
