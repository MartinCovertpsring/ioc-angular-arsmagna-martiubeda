import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Element } from '../../models/element.model';
import { TargetaElementComponent } from '../targeta-element/targeta-element.component';

@Component({
  selector: 'app-llista-elements',
  standalone: true,
  imports: [CommonModule, TargetaElementComponent],
  template: `
    <div class="grid-container">
      <app-targeta-element 
        *ngFor="let item of llista; trackBy: trackById" 
        [element]="item">
      </app-targeta-element>
    </div>

    <div *ngIf="llista.length === 0">
      Cap producte coincideix amb la cerca.
    </div>
  `,
  styles: [`
.grid-container {
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr; 
}

@media (min-width: 600px) {
  .grid-container { grid-template-columns: repeat(2, 1fr); }
}

@media (min-width: 900px) {
  .grid-container { grid-template-columns: repeat(3, 1fr); }
}

.empty-state {
  text-align: center;
  padding: 40px;
  background: #eee;
  border-radius: 10px;
}
  `]
})
export class LlistaElementsComponent {
  @Input() llista: Element[] = [];

  trackById(index: number, item: Element): number {
    return item.id;
  }
}