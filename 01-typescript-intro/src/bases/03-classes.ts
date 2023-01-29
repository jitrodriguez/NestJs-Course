import axios from 'axios';
import { PokeapiResponse } from '../interfaces/pokeapi-response.interface';

export class Pokemon {
  constructor(public readonly id: number, public name: string) {}

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
    const resp = await axios.get<PokeapiResponse>(
      'https://pokeapi.co/api/v2/pokemon/4'
    );

    return resp.data.moves;
  }
}

export const charmander = new Pokemon(4, 'Charmander');

// charmander.scream();
// charmander.speak();

console.log(await charmander.getMoves());
