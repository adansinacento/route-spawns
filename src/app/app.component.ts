import { Component, OnInit } from '@angular/core';
import data from '../names.json';
import { Pokemon } from './models/pokemon.model';
import { CounterService } from './services/counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  pokes: Pokemon[] = [];

  constructor(private counterService: CounterService) {
    //
  }

  ngOnInit(): void {
    this.pokes = this.counterService.picked;
  }
}
