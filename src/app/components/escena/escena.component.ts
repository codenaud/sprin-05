// escena.component.ts

import { Component, Input } from '@angular/core';
import { IStep } from '../../interfaces/i-step';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-escena',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './escena.component.html',
  styleUrls: ['./escena.component.css'], // Vinculación del archivo de estilos
})
export class EscenaComponent {
  // 1.- Comunicación entre Componentes [home]:padre y [escena]:hijo
  // 2.- decorador @Input() para declarar una propiedad que pueda recibir datos del componente padre
  // 3.- Enviar Datos al Componente Padre (HomeComponent) => home.component.html
  // 4.- data => es el nombre de la varibale que utilizaremos en el bucle @for en home.component.html
  @Input() data: IStep[] = []; // Puedes cambiar 'any' por un tipo más específico

  // variable para la animación
  currentStep: number = 0;

  constructor() {}

  nextStep(): void {
    if (this.currentStep < this.data.length - 1) {
      this.currentStep++;
    }
  }

  previousStep(): void {
    if (this.currentStep > 0) {
      this.currentStep--;
    }
  }
}
