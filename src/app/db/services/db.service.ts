import {Injectable} from "@angular/core";
import {v4 as uuid} from 'uuid';
import {Character} from "../interfaces/character.interface";

@Injectable({
  providedIn: 'root'
})
export class DbService{

  public characters: Character[] = [{
    id: uuid(),
    name: "Goku",
    power: 9000
  }, {
    id: uuid(),
    name: "Vegeta",
    power: 8000
  }, {
    id: uuid(),
    name: "Gohan",
    power: 5000
  }, {
    id: uuid(),
    name: "Trunks",
    power: 4000
  }];

  public addCharacter(character: Character): void {
    const newCharacter: Character = {
      id: uuid(),...character
    };
    this.characters.push(newCharacter);
    console.log(newCharacter);
  }

  deleteCharacterById(id: string): void {
    this.characters = this.characters.filter(character => character.id !== id);
  }

}
