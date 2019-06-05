import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-angular-component',
  template: `
    <angularjs-tabs></angularjs-tabs>
    <version-stamp></version-stamp>
    Hello, {{ name }}!
  `
})
export class AngularComponent {
  static selector = 'app-angular-component';
  @Input() name: string;
}
