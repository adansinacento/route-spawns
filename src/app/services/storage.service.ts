import { Pokemon } from '../models/pokemon.model';

export class PerserveDataService {
  private keyData = 'pokemonData';

  saveData(data: Pokemon[]) {
    localStorage.setItem(this.keyData, JSON.stringify(data));
  }

  getData() {
    var data = localStorage.getItem(this.keyData);
    if (data) {
      var parsedData = JSON.parse(data);
      return <Pokemon[]>parsedData;
    }
    return [];
  }
}
