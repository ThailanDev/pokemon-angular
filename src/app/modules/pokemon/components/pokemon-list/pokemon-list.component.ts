import { Component } from '@angular/core';
import { Pokemon } from '../../pokemon';
import { pokemons } from '../../pokemons.const';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styles: [
    `
      a {
        text-decoration: none;
      }
    `,
  ],
})
export class PokemonListComponent {
  pokemons: Pokemon[] = pokemons;
}
