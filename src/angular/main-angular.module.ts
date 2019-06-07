import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {VersionStampComponentFacade} from '../angularjs/version-stamp.component';
import {TabsComponentFacade} from '../angularjs/tabs.component';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule
  ],
  declarations: [
    AppComponent,
    VersionStampComponentFacade,
    TabsComponentFacade
  ]
})
export class MainAngularModule {
  ngDoBootstrap() {}
}
