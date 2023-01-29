interface PokemonNameandApi {
  url: string;
}

export interface PokemonCollection {
  next: string;
  previous: string;
  results: PokemonNameandApi[];
}

interface PokemonHabilities {
  ability: { name: string };
}

interface PokemonStats {
  base_stat: number;
  stat: { name: string };
}

interface PokemonTypes {
  type: {
    name: string;
  };
}

export interface PokemonData {
  name: string;
  id: number;
  abilities: PokemonHabilities[];
  stats: PokemonStats[];
  types: PokemonTypes[];
  weight: number;
  height: number;
  sprites: { other: { "official-artwork": { front_default: string } } };
}
