import * as angular from 'angular';
import 'angular-animate';
import 'angular-aria';
import 'angular-messages';
import 'angular-material';
import 'angular-sanitize';
import './templates/index';
import { downgradeComponent, downgradeModule } from '@angular/upgrade/static';
import { environment } from '../../environments/environment';
import { AppComponent } from '../angular/app.component';
import { appAngularJSComponent } from './app-angularjs.component';
import { versionStampComponent } from './version-stamp.component';
import { tabsComponent } from './tabs.component';
import { bootstrapAngular } from './bootstrap-module';

const downgradedModule = downgradeModule(bootstrapAngular);

const configFunction = ($mdThemingProvider, $mdGestureProvider) => {
  $mdThemingProvider
    .theme('default')
    .primaryPalette('indigo')
    .accentPalette('green', { default: '500' })
    .backgroundPalette('grey', { default: 'A100' });
  $mdThemingProvider.setNonce(`${btoa(environment.version)}`);
  $mdGestureProvider.skipClickHijack();
};
configFunction.$inject = ['$mdThemingProvider', '$mdGestureProvider'];

export const appAngularjsModule = angular
  .module('AngularJSApp', ['ngMaterial', 'ngMessages', 'ngSanitize', 'templates', downgradedModule])
  .config(configFunction)
  .component(appAngularJSComponent.selector, appAngularJSComponent)
  .component(versionStampComponent.selector, versionStampComponent)
  .component(tabsComponent.selector, tabsComponent)
  .directive(
    AppComponent.selector,
    downgradeComponent({
      component: AppComponent,
      downgradedModule,
    })
  );
