export const appAngularJSComponent = {
  selector: 'appAngularjs',
  template: '<app-component [name]="$ctrl.name"></app-component>',
  controller: class AngularComponent {
    name = 'AngularJS/Angular Material';
  },
};
