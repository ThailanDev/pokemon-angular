import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from '../../pokemon';
import { pokemons } from '../../pokemons.const';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
})
export class PokemonDetailComponent implements OnInit {

  pokemon?: Pokemon;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    const id = Number(this.activatedRoute.snapshot.params['pokemonId']);
    this.pokemon = pokemons.find((pokemon) => pokemon.id === id);
  }

}
