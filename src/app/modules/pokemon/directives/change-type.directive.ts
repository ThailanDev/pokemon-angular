import { Directive, Input } from '@angular/core';
import { Pokemon } from '../pokemon';

@Directive({
  selector: '[changeType]',
})
export class ChangeTypeDirective {
  @Input() pokemon!: Pokemon;
}
