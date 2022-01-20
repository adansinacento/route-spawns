import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Pokemon } from 'src/app/models/pokemon.model';
import { CounterService } from 'src/app/services/counter.service';
import data from '../../../names.json';

@Component({
  selector: '[app-pokemon-selector]',
  templateUrl: './pokemon-selector.component.html',
  styleUrls: ['./pokemon-selector.component.css'],
})
export class PokemonSelectorComponent implements OnInit {
  options: Pokemon[] = [];
  filteredOptions: Pokemon[] = [];
  myControl = new FormControl();
  inputReference: string;

  constructor(private counterService: CounterService) {}

  ngOnInit(): void {
    this.options = data;
  }

  getImage() {
    return 'assets/sprites/0.png';
  }

  reFilter(newVal: string) {
    this.filteredOptions = this.options.slice();
    if (newVal === '') {
      return;
    }

    this.filteredOptions = this.options.filter((poke: Pokemon) => {
      return poke.label.toLowerCase().includes(newVal);
    });
  }

  onIputChange(event: Event) {
    var value = (<HTMLInputElement>event.target).value.toLowerCase();
    this.reFilter(value);
  }

  onPokeSelected(selected: string) {
    this.counterService.addByValue(selected);

    //clear input
    this.inputReference = '';
  }
}
