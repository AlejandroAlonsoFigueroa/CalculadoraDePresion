import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-micalculadora',
  templateUrl: './micalculadora.component.html',
  styleUrls: ['./micalculadora.component.css']
})
export class MicalculadoraComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  resultado = 100;
  titulo = "Calculadora de presión"

}
