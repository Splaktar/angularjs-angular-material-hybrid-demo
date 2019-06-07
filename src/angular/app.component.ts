import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-component',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  static selector = 'app-component';
  @Input() name: string;

  constructor() {
    console.log('AppComponent constructor');
  }

  ngOnInit(): void {
    console.log('AppComponent ngOnInit');
  }
}
