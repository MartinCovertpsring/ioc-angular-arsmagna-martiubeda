import { Component } from '@angular/core';
import { ELEMENTS } from './mocks/dades-mock';
import { Element } from './models/element.model';
import { BarraCercaComponent } from './components/barra-cerca/barra-cerca.component';
import { LlistaElementsComponent } from './components//llista-elements/llista-elements.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BarraCercaComponent, LlistaElementsComponent],
  template: `
    <h1>Ars Magna</h1>
    <app-barra-cerca (cercaCanviada)="filtrar($event)"></app-barra-cerca>
    <app-llista-elements [llista]="elementsFiltrats"></app-llista-elements>
  `
})
export class AppComponent {
  elementsTotals: Element[] = ELEMENTS;
  elementsFiltrats: Element[] = [...ELEMENTS];

filtrar(event: any) {
  const terme = event.toString(); 
  
  this.elementsFiltrats = this.elementsTotals.filter(e => 
    e.nom.toLowerCase().includes(terme.toLowerCase())
  );
}
}