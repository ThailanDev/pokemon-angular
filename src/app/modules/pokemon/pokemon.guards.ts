import { inject } from '@angular/core';
import { CanDeactivateFn, Router } from '@angular/router';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';

export const requiredLogin = () => {
  if (localStorage.getItem('login')) {
    return true;
  } else {
    inject(Router).navigate(['/login']);
    return false;
  }
};

export const confirmUnsaved: CanDeactivateFn<PokemonDetailComponent> = (c) => {
  if (c.pokemon && c.pokemon.id < 5) {
    return true;
  } else {
    alert('Pokemons > 5 não pode sair');
    return false;
  }
};
