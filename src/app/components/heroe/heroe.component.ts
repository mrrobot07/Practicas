import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.service';
import { ActivatedRoute } from '@angular/router';
import { Heroes } from 'src/app/models/Heroes.interface';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe : Heroes;
  constructor(private _heroesService : HeroesService , private _activatedRoute : ActivatedRoute) { }
  ngOnInit() 
  {
    this._activatedRoute.params.subscribe(params => 
    {
      this.heroe = this._heroesService.getHeroe(params['id']); 
    });
  }


}
