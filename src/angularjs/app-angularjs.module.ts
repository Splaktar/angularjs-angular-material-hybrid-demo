import * as angular from 'angular';
import 'angular-animate';
import 'angular-aria';
import 'angular-messages';
import 'angular-material';
import './templates';
import {downgradeComponent, downgradeModule} from '@angular/upgrade/static';
import {AppComponent} from '../angular/app.component';
import {appAngularJSComponent} from './app-angularjs.component';
import {versionStampComponent} from './version-stamp.component';
import {tabsComponent} from './tabs.component';
import {bootstrapAngular} from './bootstrap-module';

const downgradedModule = downgradeModule(bootstrapAngular);

export const appAngularjsModule = angular.
  module('AngularJSApp', [
    'ngMaterial',
    'ngMessages',
    'templates',
    downgradedModule
  ])
  .component(appAngularJSComponent.selector, appAngularJSComponent)
  .component(versionStampComponent.selector, versionStampComponent)
  .component(tabsComponent.selector, tabsComponent)
  .directive(AppComponent.selector, downgradeComponent({
    component: AppComponent,
    downgradedModule: downgradedModule
  }));
