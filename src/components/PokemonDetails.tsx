import { Inter } from "@next/font/google";
import Image from "next/image";

import { PokemonDetailType } from "@/models/types";

const inter = Inter({ subsets: ["latin"] });

const PokemonDetails: React.FC<PokemonDetailType> = ({ details }) => {
  const name = details[0]?.name;
  const id = details[0].id;

  const types = details[0].types.nodes;
  const stats = details[0].stats.nodes;

  return (
    <div
      className="card d-flex position-absolute translate-middle top-50 start-50 shadow p-3 mb-5 bg-body rounded"
      style={{ width: 300 }}
    >
      <h1 className={`${inter.className} text-capitalize  text-center`}>
        {name}
      </h1>
      <div className="d-flex justify-content-between p-3">
        <Image
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
      </div>
      <p className="text-center">
        This pokémon is of type &nbsp;
        {types.map((combatType) => (
          <span key={combatType.id}>{combatType.type.name}&nbsp;</span>
        ))}
        <span>. With a </span>
        {stats.map((stat) => (
          <span key={stat.id}>
            {stat.stat.damageclass ? stat.stat.damageclass.name : ""}
            &nbsp;
            {stat.stat.name} with base stat of{" "}
            <span>
              {stat.base_stat}
              &nbsp;
            </span>
          </span>
        ))}
      </p>
    </div>
  );
};

export default PokemonDetails;
