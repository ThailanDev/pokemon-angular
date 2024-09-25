import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonTypeComponent } from './components/pokemon-type/pokemon-type.component';
import { PokemonNomePipe } from './pipes/pokemon-nome.pipe';
import { ChangeTypeDirective } from './directives/change-type.directive';

const routes: Routes = [
  {
    path: '',
    component: PokemonListComponent,
  },
  {
    path: 'detalhe/:pokemonId',
    component: PokemonDetailComponent,
    canActivate: [],
    canDeactivate: [],
  },
];

@NgModule({
  declarations: [
    PokemonListComponent,
    PokemonDetailComponent,
    PokemonTypeComponent,
    PokemonNomePipe,
    ChangeTypeDirective,
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class PokemonModule {}
