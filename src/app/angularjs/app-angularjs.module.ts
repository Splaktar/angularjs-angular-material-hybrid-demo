import * as angular from 'angular';
import 'angular-animate';
import 'angular-aria';
import 'angular-messages';
import 'angular-material';
import './templates/index';
import {downgradeComponent, downgradeModule} from '@angular/upgrade/static';
import {AppComponent} from '../angular/app.component';
import {appAngularJSComponent} from './app-angularjs.component';
import {versionStampComponent} from './version-stamp.component';
import {tabsComponent} from './tabs.component';
import {bootstrapAngular} from './bootstrap-module';
import {TabsComponent} from '../angular/tabs/tabs.component';
import {CdkTreeComponent} from '../angular/cdk-tree/cdk-tree.component';
import {ButtonsComponent} from '../angular/buttons/buttons.component';
import {MatIcon} from '@angular/material/icon';

const downgradedModule = downgradeModule(bootstrapAngular);

export const appAngularjsModule = angular.module('AngularJSApp', [
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
}))
.directive(TabsComponent.selector, downgradeComponent({
  component: TabsComponent,
  downgradedModule: downgradedModule
}))
.directive(ButtonsComponent.selector, downgradeComponent({
  component: ButtonsComponent,
  downgradedModule: downgradedModule
}))
.directive(CdkTreeComponent.selector, downgradeComponent({
  component: CdkTreeComponent,
  downgradedModule: downgradedModule
}));
