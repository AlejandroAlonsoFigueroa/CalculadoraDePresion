import { Component, OnInit } from '@angular/core';
import { calcularAreaBase } from '../c-area-base/c-area-base.component';
import { calcularAreaCara } from '../calcularAreaCara/calcularAreaCara';
import { calcularAreaFinal } from '../cAreaFinal/calcularAreaFinal';
import { calcularAreaSuperior } from '../cAreaSuperior/calcular-area-superior';

@Component({
  selector: 'app-micalculadora',
  templateUrl: './micalculadora.component.html',
  styleUrls: ['./micalculadora.component.css']
})
export class MicalculadoraComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  base = 0;
  altura = 0;

  resultado = 100;
  titulo = "Calcular area de una piramide cuadrangular"
  hola(){
    alert("Hola mundo")
  }

  obtenerArea(){
    // Todo funciona, bien, pero, me confundí en la formula del area superior :v

    let areaBase = calcularAreaBase(this.base);
    alert(areaBase);

    let areaSuperior = calcularAreaSuperior(calcularAreaCara(this.base, this.altura));

    let areaTotal = calcularAreaFinal(areaBase, areaSuperior);

    this.resultado = areaTotal;
  }

}
