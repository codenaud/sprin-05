// home.component.ts
import { Component } from '@angular/core';
import { EscenaComponent } from '../escena/escena.component';
import { IStep } from '../../interfaces/i-step';
import { StepsService } from '../../services/steps.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [EscenaComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  homeData: IStep[];
  // homeData es el nombre que exportaré a home.component.hmtl
  // la igualo a la interfaz IStep[] que a su vez es la interfaz que esta definida en los streps.sercices.ts

  constructor(private stepsService: StepsService) {
    this.homeData = this.stepsService.steps;
  }
}
