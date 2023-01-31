export type PokemonPaginationType = {
  pokemons: PokemonType[];
  pageIndex: number;
};

export type PageIndexParamsType = {
  pageIndex: string;
};

export type PathsType = {
  params: PageIndexParamsType;
}[];

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
  id: number;
  base_stat: number;
  stat: StatType;
};

export type AgregateStatsType = {
  nodes: StatsType[];
};

export type CombatType = {
  id: number;
  type: NameType;
};

export type AggregateCombatsType = {
  nodes: CombatType[];
};

export type DetailsType = {
  id: number;
  name: string;
  types: AggregateCombatsType;
  stats: AgregateStatsType;
};

export type PokemonDetailType = {
  details: DetailsType[];
};
