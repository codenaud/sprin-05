import { Component } from '@angular/core';
import { EscenaComponent } from '../escena/escena.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [EscenaComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  // 4.- Asegúrate de que homeData esté definida en la clase de HomeComponent:
  homeData = {
    /* tus datos aquí */
  };
}
