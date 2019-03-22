import { Component, OnInit , Input , Output , EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.css']
})
export class HeroCardComponent implements OnInit {

  @Input() heroe : any = {};
  @Input() index : number;
  @Output() heroeSeleccionado : EventEmitter<number>;

  constructor(private router : Router) 
  {
    this.heroeSeleccionado = new EventEmitter();
  }
  ngOnInit() {
  }

  getHeroe()
  {

    this.router.navigate(['/heroe',this.index]);
    this.heroeSeleccionado.emit(this.index);
  }

}
