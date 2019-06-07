import * as angular from 'angular';
import 'angular-animate';
import 'angular-aria';
import 'angular-messages';
import 'angular-material';
import {downgradeComponent, downgradeModule, setAngularJSGlobal} from '@angular/upgrade/static';
import {AppComponent} from '../angular/app.component';
// @ts-ignore
import {MainAngularModuleNgFactory} from '../angular/main-angular.module.ngfactory';
import {MainAngularModule} from '../angular/main-angular.module';
import {appAngularJSComponent} from './app-angularjs.component';
import {versionStampComponent} from './version-stamp.component';
import {tabsComponent} from './tabs.component';
import {StaticProvider} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {templates} from './template-list';

function bootstrapAngular(extraProviders: StaticProvider[]): any {
  setAngularJSGlobal(angular);
  // if (environment.production) {
  //   enableProdMode();
  // }
  return platformBrowserDynamic(extraProviders)
  // .bootstrapModuleFactory(MainAngularModuleNgFactory)
  .bootstrapModule(MainAngularModule)
  .catch(err => console.log(err));
}

const downgradedModule = downgradeModule(bootstrapAngular);

export const appAngularjsModule = angular.
  module('AngularJSApp', [
    'ngMaterial',
    'ngMessages',
     downgradedModule
  ])
  .run(($templateCache, $templateRequest) => {
    templates.forEach((templateUrl: string) => {
      $templateRequest(templateUrl).then((template) => $templateCache.put(templateUrl, template));
    });
  })
  .component(appAngularJSComponent.selector, appAngularJSComponent)
  .component(versionStampComponent.selector, versionStampComponent)
  .component(tabsComponent.selector, tabsComponent)
  .directive(AppComponent.selector, downgradeComponent({
    component: AppComponent,
    downgradedModule: downgradedModule
  }));
