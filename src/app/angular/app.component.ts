import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-component',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  static selector = 'appComponent';
  @Input() name: string = 'Material';
}
