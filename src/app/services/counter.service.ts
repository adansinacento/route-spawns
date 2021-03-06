import { Pokemon } from '../models/pokemon.model';
import AllPokes from '../../names.json';
import { Injectable } from '@angular/core';
import { PerserveDataService } from './storage.service';

@Injectable()
export class CounterService {
  picked: Pokemon[];

  constructor(private storageService: PerserveDataService) {
    this.picked = storageService.getData();
  }

  removeByValue(value: string) {
    var pokemon = this.picked.findIndex((poke: Pokemon) => {
      return poke.value.toLowerCase() === value.toLowerCase();
    });

    if (pokemon < 0) {
      //do not remove if is not on the array
      return;
    }

    //remove from array
    this.picked.splice(pokemon, 1);

    //save data
    this.storageService.saveData(this.picked);

    //re calculate percentages
    this.updatePercentages();
  }

  addByValue(value: string) {
    var pokemon = AllPokes.find((poke: Pokemon) => {
      return poke.value.toLowerCase() === value.toLowerCase();
    });

    if (!pokemon) {
      //no pokemon was found
      return;
    }

    if (this.pickedContains(value)) {
      //do not repeat pokemon
      return;
    }

    //set the encounters of that pokemon to 1
    pokemon.encounters = 1;

    //finally add to array
    this.picked.push(pokemon);

    //save data
    this.storageService.saveData(this.picked);

    //re-balance percentages
    this.updatePercentages();
  }

  private pickedContains(value: string) {
    return (
      this.picked.filter((poke: Pokemon) => {
        return poke.value === value;
      }).length > 0
    );
  }

  updateEncounters(label: string, newVal: number) {
    //find element based on the label
    let item = this.picked.find((poke: Pokemon) => {
      return poke.label === label;
    });

    if (!item) {
      //verify that an item was found
      return;
    }

    //get index of the item in array
    let index = this.picked.indexOf(item);

    //update encounters in array
    this.picked[index].encounters = newVal;

    //save data
    this.storageService.saveData(this.picked);

    //update percentages
    this.updatePercentages();
  }

  private updatePercentages() {
    let totalEncounters = this.sumEncounters();

    for (let i = 0; i < this.picked.length; i++) {
      let percentage = this.percentage(
        totalEncounters,
        this.picked[i].encounters
      );
      this.picked[i].percentage = percentage;
    }
  }

  private percentage(total: number, encounters: number) {
    if (encounters < 1) return 0; //dont divide over zero
    return (100 / total) * encounters;
  }

  sumEncounters() {
    return this.picked.reduce(function (a, b) {
      return a + b.encounters;
    }, 0);
  }

  clearAll() {
    //clear the picked array
    this.picked.splice(0, this.picked.length);

    //save data
    this.storageService.saveData(this.picked);

    //update percentages
    this.updatePercentages();
  }
}
