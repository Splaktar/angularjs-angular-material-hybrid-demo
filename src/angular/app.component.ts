import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-component',
  template: `
    <app-tabs></app-tabs>
    <app-version-stamp></app-version-stamp>
    Hello, {{ name }}!
  `
})
export class AppComponent {
  static selector = 'app-component';
  @Input() name: string;
}
