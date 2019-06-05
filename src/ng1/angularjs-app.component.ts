export const angularJSAppComponent = {
  selector: 'angularjs-app',
  template: '<app-angular-component [name]="$ctrl.name"></app-angular-component>',
  controller: class AngularComponent {
    name = 'ngUpgradeLite';
  }
};
