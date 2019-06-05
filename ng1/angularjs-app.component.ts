export const angularJSAppComponent = {
  selector: 'angularjs-app',
  template: '<angular-component [name]="$ctrl.name"></angular-component>',
  controller: class AngularComponent {
    name = 'ngUpgradeLite';
  }
};
