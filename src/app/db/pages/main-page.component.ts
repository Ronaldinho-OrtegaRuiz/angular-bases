import {Component} from "@angular/core";

import {DbService} from "../services/db.service";
import {Character} from "../interfaces/character.interface";

@Component({
    selector: "app-db-main-page",
    templateUrl: "./main-page.component.html"
})

export class MainPageComponent {
   constructor(private dbService: DbService) {}

    get characters() :Character[] {
        return [...this.dbService.characters];
    }

    onDeleteCharacter(id:string):void{
        this.dbService.deleteCharacterById(id);
    }

    onNewCharacter(character:Character):void{
        this.dbService.addCharacter(character);
    }
}
