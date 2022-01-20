import { Component, Input } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';
import { CounterService } from 'src/app/services/counter.service';

@Component({
  selector: '[app-single-visualizer]',
  templateUrl: './single-visualizer.component.html',
  styleUrls: ['./single-visualizer.component.css'],
})
export class SingleVisualizerComponent {
  @Input('poke') selected: Pokemon;

  constructor(private counterService: CounterService) {}

  getImage() {
    return '/assets/sprites/' + this.getSprite(this.selected.value) + '.png';
  }

  getRoundedPercent() {
    return Math.round(this.selected.percentage * 100) / 100;
  }

  increaseCounter() {
    this.selected.encounters++;

    this.onUpdateEncounters();
  }

  decreaseCounter() {
    this.selected.encounters--;

    if (this.selected.encounters <= 0) {
      this.selected.encounters = 0;
    }

    this.onUpdateEncounters();
  }

  onUpdateEncounters() {
    this.counterService.updateEncounters(
      this.selected.label,
      this.selected.encounters
    );
  }

  getSprite(sel: string) {
    if (!sel.includes('-') && !sel.includes('(')) {
      sel = parseInt(sel).toString(); //parse to int and then string to remove leading 0s
    }

    return sel;
  }

  removePoke() {
    this.counterService.removeByValue(this.selected.value);
  }
}
