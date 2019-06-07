import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {VersionStampComponentFacade} from '../angularjs/version-stamp.component';
import {TabsComponentFacade} from '../angularjs/tabs.component';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CommonModule} from '@angular/common';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    MatToolbarModule,
    MatProgressSpinnerModule
  ],
  declarations: [
    AppComponent,
    VersionStampComponentFacade,
    TabsComponentFacade
  ],
  entryComponents: [
    AppComponent
  ]
})
export class MainAngularModule {
  ngDoBootstrap() {}
}
