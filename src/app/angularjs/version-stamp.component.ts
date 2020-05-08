import * as angular from 'angular';
import { Directive, ElementRef, Injector, VERSION } from '@angular/core';
import { VERSION as cdkVersion } from '@angular/cdk';
import { VERSION as matVersion } from '@angular/material/core';
import { UpgradeComponent } from '@angular/upgrade/static';

export const versionStampComponent = {
  selector: 'version-stamp',
  template: `
    <style>
      .version-container {
        color: gray;
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        margin: 8px;
        padding: 8px;
      }
      .version {
        font-size: 0.75em;
        font-style: italic;
      }
      .version img {
        vertical-align: top;
      }
      md-divider {
        margin-top: 64px;
      }
    </style>

    <md-divider></md-divider>
    <div class="version-container">
      <span class="version"><img src="/assets/angularjs.svg" alt="AngularJS icon" height="24px"> AngularJS v{{ $ctrl.versions.angularjs.full }} ({{ $ctrl.versions.angularjs.codeName }})</span>
      <span class="version"><img src="/assets/angularjs-material.png" alt="AngularJS Material icon" height="24px"> AngularJS Material v{{ $ctrl.versions.md }}</span>
      <span class="version"><img src="/assets/angular.svg" alt="Angular icon" height="24px"> Angular v{{ $ctrl.versions.angular }}</span>
      <span class="version"><img src="/assets/angular-cdk.svg" alt="Angular CDK icon" height="24px"> Angular CDK v{{ $ctrl.versions.cdk }}</span>
      <span class="version"><img src="/assets/angular-material.svg" alt="Angular Material icon" height="24px"> Angular Material v{{ $ctrl.versions.mat }}</span>
    </div>
  `,
  controller: class VersionStampComponent {
    static $inject = ['$window'];
    versions: object;

    constructor($window) {
      this.versions = {
        angularjs: angular.version,
        md: $window.ngMaterial.version.full,
        angular: VERSION.full,
        cdk: cdkVersion.full,
        mat: matVersion.full,
      };
    }
  },
};

@Directive({ selector: versionStampComponent.selector })
export class VersionStampComponentFacade extends UpgradeComponent {
  constructor(elementRef: ElementRef, injector: Injector) {
    super(versionStampComponent.selector, elementRef, injector);
  }
}
