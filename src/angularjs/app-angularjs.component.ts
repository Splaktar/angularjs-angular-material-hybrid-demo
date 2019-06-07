export const appAngularJSComponent = {
  selector: 'app-angularjs',
  template: '<app-component [name]="$ctrl.name"></app-component>',
  controller: class AngularComponent {
    name = 'ngUpgradeLite';
  }
};
