import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <p [style.fontSize.px] = "tamanho" [style.color] = "'blue'">
      Hola mundo.. esta es una etiqueta
    </p>

    <button class="btn btn-primary" (click)="tamanho = tamanho + 5">
      <i class="fa fa-plus"></i>
    </button>

    <button class="btn btn-primary" (click)="tamanho = tamanho - 5">
      <i class="fa fa-minus"></i>
    </button>
  `,
  styles: [
  ]
})
export class NgStyleComponent implements OnInit {

  tamanho: number = 30;

  constructor() { }

  ngOnInit(): void {
  }

}
