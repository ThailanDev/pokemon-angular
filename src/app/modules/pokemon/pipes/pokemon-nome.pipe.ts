import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonNome',
})
export class PokemonNomePipe implements PipeTransform {
  transform(type: string): string {
    const map = new Map<string, string>([
      ['grass', 'Grama'],
      ['fire', 'Fogo'],
      ['water', 'Agua'],
      ['thunder', 'Thunder'],
    ]);

    return map.get(type) ?? 'Normal';
  }
}
