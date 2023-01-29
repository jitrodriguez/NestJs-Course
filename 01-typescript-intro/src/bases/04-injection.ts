import {
  HttpAdapter,
  PokeApiAdapter,
  PokeApiFetchAdapter,
} from '../api/pokeApi.adapter';
import { PokeapiResponse } from '../interfaces/pokeapi-response.interface';

export class Pokemon {
  constructor(
    public readonly id: number,
    public name: string,
    private readonly hhtp: HttpAdapter
  ) {}

  get imageUrl(): string {
    return `https://pokemon.com/${this.id}jpg`;
  }

  scream() {
    console.log(`${this.name.toUpperCase()}!`);
  }
  speak() {
    console.log(`${this.name} says hello`);
  }

  async getMoves() {
    const data = await this.hhtp.get<PokeapiResponse>(
      'https://pokeapi.co/api/v2/pokemon/4'
    );
    return data.moves;
  }
}
const pokeApi = new PokeApiAdapter();
const pokeApiFetch = new PokeApiFetchAdapter();

export const charmander = new Pokemon(4, 'Charmander', pokeApiFetch);

// charmander.scream();
// charmander.speak();

console.log(await charmander.getMoves());
