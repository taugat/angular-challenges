import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterLink],
  selector: 'app-foo',
  template: `
    Welcome to foo page
    <button routerLink="home" class="fixed top-3 left-1/2">Home Page</button>
    <div class="h-screen bg-blue-200">section 1</div>
    <div class="h-screen bg-red-200">section 2</div>
  `,
})
export class FooComponent {}
