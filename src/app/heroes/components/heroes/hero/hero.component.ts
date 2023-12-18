import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name:string = 'ben';
  public age:number = 13;

  get capitalizedName():string {
    return this.name.toUpperCase();
  }

  getHeroDescription():string {
    return `${this.name} is ${this.age} years old.`;
  }

  changeName():void {
    this.name = 'Spiderman';
  }

  changeAge():void {
    this.age = 18;
  }

  reset():void {
    this.name = 'ben';
    this.age = 13;
  }

}
