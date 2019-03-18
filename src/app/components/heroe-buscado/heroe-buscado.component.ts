import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe-buscado',
  templateUrl: './heroe-buscado.component.html',
  styleUrls: ['./heroe-buscado.component.css']
})


export class HeroeBuscadoComponent implements OnInit {

  heroes : any [];
  cadena : string;
  constructor(private _activatedRoute : ActivatedRoute , private _heroesService : HeroesService , private router : Router) { }

  ngOnInit() 
  {
    this._activatedRoute.params.subscribe(params => 
    {
      this.heroes = this._heroesService.buscarHeroes(params['cadena']);
      this.cadena = params['cadena'];
    })
  }

  getHeroe(id : number)
  {
    this.router.navigate(['/heroe',id]);
  }

}
