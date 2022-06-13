import { Component, OnInit, OnChanges, DoCheck, AfterContentInitiewInit,
  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <app-ng-style></app-ng-style>

    <app-css> </app-css>
    <p>
      Hola mundo desde app-componente
    </p>

    <app-clases> </app-clases>

    <p [appResaltado]="'blue'">
      Hola mundo
    </p>

    <app-ng-switch></app-ng-switch>
  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit, OnChanges, DoCheck, AfterContentInitiewInit,
  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  constructor() { }

  ngOnInit(): void {
    console.log("ngOnInit");
  }

  ngOnChanges(): void {
    console.log("OnChanges");
  }

  ngDoCheck(): void {
    console.log("DoCheck");
  }

  ngAfterContentInitiewInit(): void {
    console.log("ngAfterContentInitiewInit");
  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked");
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit");
  }

  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked");
  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy");
  }


}
