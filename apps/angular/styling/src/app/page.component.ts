/* eslint-disable @angular-eslint/component-selector */
import { Component } from '@angular/core';
import { TextStaticComponent } from './static-text.component';
import { TextComponent } from './text.component';

@Component({
  selector: 'page',
  standalone: true,
  imports: [TextStaticComponent, TextComponent],
  template: `
    <static-text></static-text>
    <static-text class="error"></static-text>
    <static-text class="warning"></static-text>
    <text class="blue-text">This a a blue text</text>
    <text> Nothing </text>
  `,
  styles: [
    `
      .blue-text {
        --text-color: blue;
        --text-font-size: 15px;
      }
    `,
  ],
})
export class PageComponent {}
