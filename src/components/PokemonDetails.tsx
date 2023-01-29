import { Inter } from "@next/font/google";
import Image from "next/image";

import styles from "@/styles/Home.module.css";
import { PokemonDetailType } from "@/models/types";
import { capitalizeFirstLetter } from "@/utils/utils";

const inter = Inter({ subsets: ["latin"] });

const PokemonDetails: React.FC<PokemonDetailType> = ({ details }) => {
  const name = capitalizeFirstLetter(details[0]?.name);
  const id = details[0].id;

  const types = details[0].types.nodes;
  const stats = details[0].stats.nodes;

  return (
    <div className={styles.center}>
      <h1 className={inter.className}>{name}</h1>
      <div className={styles.card}>
        <Image
          className={styles.logo}
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
          alt={name}
          width={100}
          height={100}
        />
        <Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${id}.png`}
          alt={name}
          width={100}
          height={100}
        />
        <p className={styles.description}>
          {`This pokémon is of type `}
          {types.map((combatType) => (
            <span key={combatType.id}>{` ${combatType.type.name} `}</span>
          ))}
          <span>. With a </span>
          {stats.map((stat) => (
            <span key={stat.id}>
              {` ${stat.stat.damageclass ? stat.stat.damageclass.name : ""} `}
              {stat.stat.name} with base stat of <span>{stat.base_stat}</span>
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default PokemonDetails;
