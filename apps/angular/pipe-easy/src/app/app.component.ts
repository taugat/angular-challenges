import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { PersonIndexPipe } from './person-index.pipe';

@Component({
  standalone: true,
  imports: [NgFor, PersonIndexPipe],
  selector: 'app-root',
  template: `
    <div *ngFor="let person of persons; let index = index">
      {{ person | personIndex: index }}
    </div>
  `,
})
export class AppComponent {
  persons = ['toto', 'jack'];
}
