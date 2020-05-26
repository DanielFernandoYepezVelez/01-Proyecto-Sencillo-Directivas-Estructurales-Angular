import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  name: string;
  year: number;

  constructor() {
    this.name = 'Daniel Fernando Yepez Velez';
    this.year = new Date().getFullYear();
  }
}
