import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {VersionStampComponentFacade} from '../ng1/version-stamp.component';
import {TabsComponentFacade} from '../ng1/tabs.component';
import {AngularComponent} from './angular.component';

@NgModule({
  imports: [
    BrowserModule,
  ],
  declarations: [
    AngularComponent,
    VersionStampComponentFacade,
    TabsComponentFacade
  ],
  entryComponents: [
    AngularComponent
  ]
})
export class AngularModule {
  ngDoBootstrap() {}
}


export function angularModuleBootstrapFn(extraProviders) {
  return platformBrowserDynamic(extraProviders).
    bootstrapModule(AngularModule);
}
