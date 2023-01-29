export type PokemonType = {
  id: number;
  name: string;
};

export type PokemonsType = {
  pokemons: PokemonType[];
};

export type NameType = {
  name: string;
};

export type StatType = {
  name: string;
  damageclass: NameType;
};

export type StatsType = {
  stat: StatType[];
};

export type AgregateStatsType = {
  nodes: StatsType[];
  base_stat: number;
};

export type CombatType = {
  type: NameType;
};

export type AggregateCombatsType = {
  nodes: CombatType[];
};

export type DetailsType = {
  name: string;
  types: AggregateCombatsType[];
  stats: AgregateStatsType[];
};

export type PokemonDetailType = {
  details: DetailsType[];
};



