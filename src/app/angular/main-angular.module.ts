import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { VersionStampComponentFacade } from '../angularjs/version-stamp.component';
import { TabsComponentFacade } from '../angularjs/tabs.component';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { TabsComponent } from './tabs/tabs.component';
import { MatTabsModule } from '@angular/material/tabs';
import { ButtonsComponent } from './buttons/buttons.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { CdkTreeComponent } from './cdk-tree/cdk-tree.component';
import { CdkTreeModule } from '@angular/cdk/tree';
import { TopNavComponent } from './top-nav/top-nav.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatExpansionModule,
    MatTabsModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    CdkTreeModule,
  ],
  declarations: [
    AppComponent,
    VersionStampComponentFacade,
    TabsComponentFacade,
    TabsComponent,
    ButtonsComponent,
    CdkTreeComponent,
    TopNavComponent,
  ],
})
export class MainAngularModule {
  ngDoBootstrap() {}
}
