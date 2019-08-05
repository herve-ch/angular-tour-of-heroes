import {Injectable} from '@angular/core';
import {Hero} from './hero';
import {HEROES} from './mock-heroes';
import {Observable, of} from 'rxjs';
import {MessageService} from './message.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class HeroService {

    constructor(private messageService: MessageService,private http: HttpClient,) {}
    private heroesUrl = 'api/heroes';  // URL to web api
    /*getHeroes(): Hero[] {
    return HEROES;
    }*/
    /*getHeroes(): Observable<Hero[]> {
        this.messageService.add('HeroService: fetched heroes');
        return of(HEROES);
    }*/
    getHeroes (): Observable<Hero[]> {
        return this.http.get<Hero[]>(this.heroesUrl)
    }

    getHero(id: number): Observable<Hero> {
        // TODO: send the message _after_ fetching the hero
        this.messageService.add(`HeroService: fetched hero id=${id}`);
        return of(HEROES.find(hero => hero.id === id));
    }
}
