import {Component, OnInit} from '@angular/core';
import {Hero} from '../hero';
import {HeroService} from '../hero.service';
//import {HEROES} from '../mock-heroes';

@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
    hero: Hero = {
        id: 1,
        name: 'Windstorm'
    };

   // heroes = HEROES;
    
    heroes : Hero[];
    //selectedHero: Hero;
    constructor(private heroService: HeroService) { }

    ngOnInit() {
         this.getHeroes();
    }

    /*onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }*/
    /*
    getHeroes(): void {
        this.heroes = this.heroService.getHeroes();
    }*/
    
    //The subscribe() method passes the emitted array to the callback, which sets the component's heroes property.
    //Heroes est la variable de retour de getHeroes
      getHeroes(): void {
       this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
      }
      
    add(name: string): void {
     name = name.trim();
     if (!name) { return; }
     this.heroService.addHero({ name } as Hero).subscribe(hero => {this.heroes.push(hero);});
   }
    
}
