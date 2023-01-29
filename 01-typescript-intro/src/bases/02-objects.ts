export const pokemonsIds = [1, 20, 30, 34, 66];

export interface Pokemon {
  id: number;
  name: string;
  age?: number;
}
export const bulbasaur: Pokemon = {
  id: 1,
  name: 'Bulbasaur',
};

export const pokemons: Pokemon[] = [];

pokemons.push(bulbasaur);
