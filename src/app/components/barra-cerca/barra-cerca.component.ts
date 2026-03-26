import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-barra-cerca',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <form class="formulari-cerca" (ngSubmit)="cercar()" #formCerca="ngForm">
      <div class="grup-camp">
        <label for="camp-cerca">Cerca llibres:</label>
        
        <div class="contenidor-input">
          <input 
            type="text" 
            id="camp-cerca" 
            name="cerca" 
            [(ngModel)]="textCerca" 
            #campCerca="ngModel" 
            minlength="3" 
            placeholder="Mínim 3 caràcters..." 
            class="input-cerca" 
            [class.invalid]="campCerca.invalid && campCerca.touched"
            aria-describedby="error-cerca">

          <button type="submit" [disabled]="formCerca.invalid" class="boto-cerca">
            Cercar
          </button>

          <button *ngIf="textCerca" type="button" (click)="netejar()" class="boto-netejar">
            ✕
          </button>
        </div>

        <div *ngIf="campCerca.invalid && campCerca.touched" id="error-cerca" class="error">
          <small *ngIf="campCerca.errors?.['minlength']">
            Cal un mínim de 3 caràcters
          </small>
        </div>
      </div>
    </form>
  `,
  styles: [`
    .formulari-cerca { margin-bottom: 32px; width: 100%; max-width: 500px; margin-inline: auto; }
    .grup-camp { display: flex; flex-direction: column; gap: 8px; }
    
    label { font-weight: 500; color: #38bdf8; }
    
    .contenidor-input { display: flex; gap: 8px; align-items: stretch; }
    
    .input-cerca {
      flex: 1;
      padding: 12px 16px;
      background: rgba(255, 255, 255, 0.05);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: 12px;
      color: white;
      font-size: 1rem;
      transition: all 0.3s;
    }
    
    .input-cerca:focus { outline: none; border-color: #38bdf8; background: rgba(255, 255, 255, 0.1); }
    .input-cerca.invalid { border-color: #f87171; }
    
    .boto-cerca {
      padding: 0 24px;
      background: #38bdf8;
      color: #0f172a;
      border: none;
      border-radius: 12px;
      font-weight: bold;
      cursor: pointer;
    }
    
    .boto-cerca:disabled { background: #475569; color: #94a3b8; cursor: not-allowed; }
    
    .boto-netejar {
      padding: 0 15px;
      background: rgba(248, 113, 113, 0.2);
      color: #f87171;
      border: 1px solid #f87171;
      border-radius: 12px;
      cursor: pointer;
    }
    
    .error { color: #f87171; font-size: 0.85rem; font-weight: 500; }

    @media (max-width: 600px) {
      .contenidor-input { flex-direction: column; }
      .boto-cerca, .boto-netejar { padding: 12px; }
    }
  `]
})
export class BarraCercaComponent {
  @Output() cercaCanviada = new EventEmitter<string>();
  textCerca = '';

  cercar(): void {
    if (this.textCerca.length >= 3) {
      this.cercaCanviada.emit(this.textCerca);
    }
  }

  netejar(): void {
    this.textCerca = '';
    this.cercaCanviada.emit('');
  }
}