import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
})
export class BodyComponent {
  author: string;
  phrase: string;
  mostrar: boolean;
  persons: string[];

  constructor() {
    this.author = 'Daniel Fernando Yepez Vélez';
    this.phrase = 'Si Siempre Tomas Buenas Decisiones Nunca Te Equivocarás';
    this.mostrar = true;
    this.persons = ['Daniel', 'Fernando', 'Dario'];
  }
}
