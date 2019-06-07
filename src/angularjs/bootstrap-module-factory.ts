import {enableProdMode, StaticProvider} from '@angular/core';
import {setAngularJSGlobal} from '@angular/upgrade/static';
import * as angular from 'angular';
import {environment} from '../environments/environment';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
// @ts-ignore
import {MainAngularModuleNgFactory} from '../angular/main-angular.module.ngfactory';


export function bootstrapAngular(extraProviders: StaticProvider[]): any {
  setAngularJSGlobal(angular);
  if (!environment.production) {
    enableProdMode();
  }
  return platformBrowserDynamic(extraProviders)
    .bootstrapModuleFactory(MainAngularModuleNgFactory)
    .catch(err => console.log(err));
}
