// escena.component.ts

import { Component, Input } from '@angular/core';
import { IStep } from '../../interfaces/i-step';

@Component({
  selector: 'app-escena',
  standalone: true,
  imports: [],
  templateUrl: './escena.component.html',
  styleUrl: './escena.component.css',
})
export class EscenaComponent {
  // 1.- Comunicación entre Componentes [home]:padre y [escena]:hijo
  // 2.- decorador @Input() para declarar una propiedad que pueda recibir datos del componente padre
  // 3.- Enviar Datos desde el Componente Padre (HomeComponent) => home.component.html
  @Input() data: IStep[] = []; // Puedes cambiar 'any' por un tipo más específico
  steps: any;
}
