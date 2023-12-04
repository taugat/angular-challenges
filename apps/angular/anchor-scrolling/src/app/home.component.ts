import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterLink],
  selector: 'app-home',
  template: `
    <button routerLink="/foo" class="fixed top-3 left-1/2">Foo Page</button>
    <div id="top" class="h-screen bg-gray-500">
      Empty
      <button routerLink="" fragment="bottom">Scroll Bottom</button>
    </div>
    <div id="bottom" class="h-screen bg-blue-300">
      I want to scroll each
      <button routerLink="" fragment="top">Scroll Top</button>
    </div>
  `,
})
export class HomeComponent {}
