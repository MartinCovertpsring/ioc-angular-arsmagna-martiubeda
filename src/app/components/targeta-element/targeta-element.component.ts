import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Element } from '../../models/element.model';

@Component({
  selector: 'app-targeta-element',
  standalone: true,
  imports: [CommonModule],
template: `
    <div class="card">
      <h3>{{ element.nom | uppercase }}</h3>
      
      <p class="valoracio">
        Valoració: {{ element.valor }} <span class="estrella">★</span>
      </p>

      <div *ngIf="element.descripcio" class="seccio-comentari">
        <span class="titol-comentari">Comentari:</span>
        <p class="text-descripcio">{{ element.descripcio }}</p>
      </div>
    </div>
  `,
  styles: [`
.card {
  background: rgba(255, 255, 255, 0.05); 
  backdrop-filter: blur(12px); 
  -webkit-backdrop-filter: blur(12px);
  
  padding: 25px;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
  transition: all 0.2s ease;
}

.card:hover {
  transform: translateY(-8px);
  background: rgba(255, 255, 255, 0.1);
  border-color: #38bdf8;
}

h3 {
  margin: 0 0 10px 0;
  color: #38bdf8;
  font-size: 1.3rem;
}

p {
  color: #94a3b8; 
}
    `]
})
export class TargetaElementComponent {
  @Input() element!: Element; 
}