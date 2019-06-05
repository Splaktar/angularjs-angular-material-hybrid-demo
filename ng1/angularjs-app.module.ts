import angular from 'angular';
import 'angular-animate';
import 'angular-aria';
import 'angular-messages';
import 'angular-material';
import {downgradeComponent, downgradeModule} from '@angular/upgrade/static';
import {AngularComponent} from '../ng2/angular.component';
import {angularModuleBootstrapFn} from '../ng2/angular.module';
import {angularJSAppComponent} from './angularjs-app.component';
import {versionStampComponent} from './version-stamp.component';
import {tabsComponent} from './tabs.component';

export const angularJSAppModule = angular.
  module('angularjsApp', ['ngMaterial', 'ngMessages', downgradeModule(angularModuleBootstrapFn)]).
  component(angularJSAppComponent.selector, angularJSAppComponent).
  component(versionStampComponent.selector, versionStampComponent).
  component(tabsComponent.selector, tabsComponent).
  directive(AngularComponent.selector, downgradeComponent({
    component: AngularComponent
  }));
