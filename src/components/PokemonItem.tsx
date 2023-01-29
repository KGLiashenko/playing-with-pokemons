import { Inter } from "@next/font/google";
import Image from "next/image";

import styles from "@/styles/Home.module.css";
import { capitalizeFirstLetter } from "@/utils/utils";

const inter = Inter({ subsets: ["latin"] });

const PokemonItem: React.FC<{ name: string; image: string }> = ({
  name,
  image,
}) => {
  const nameCap = capitalizeFirstLetter(name);
  return (
    <div className={styles.card}>
      <Image src={image} alt={nameCap} width={130} height={130} />
      <h2 className={inter.className}>{nameCap}</h2>
    </div>
  );
};

export default PokemonItem;
