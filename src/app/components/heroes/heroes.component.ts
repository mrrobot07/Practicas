import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service'
import { Heroes } from 'src/app/models/Heroes.interface';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes : Heroes [] = [];
  heroe : Heroes;
  constructor( private _heroesService : HeroesService , private router : Router)  { }
  ngOnInit() 
  {
    this.heroes = this._heroesService.getHeroes();
  }

  getHeroe(id : number)
  {
    this.router.navigate(['/heroe',id]);
  }


}
