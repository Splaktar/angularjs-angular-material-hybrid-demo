import * as angular from 'angular';
import {Directive, ElementRef, Injector, VERSION} from '@angular/core';
import {UpgradeComponent} from '@angular/upgrade/static';

export const versionStampComponent = {
  selector: 'version-stamp',
  template: `
    <style>
      .version-container {
        border-bottom: 1px solid lightgray;
        color: gray;
        display: flex;
        justify-content: space-between;
        margin: 0 0 5px;
       padding: 25px 0 5px;
      }
      .version {
        font-size: 0.75em;
        font-style: italic;
      }
    </style>

    <div class="version-container">
      <span class="version angularjs">AngularJS v{{ $ctrl.versions.angularjs }}</span>
      <span class="version angular">Angular v{{ $ctrl.versions.angular }}</span>
    </div>
  `,
  controller: class VersionStampComponent {
    versions = {
      angularjs: angular.version.full,
      angular: VERSION.full
    };
  }
};


@Directive({selector: versionStampComponent.selector})
export class VersionStampComponentFacade extends UpgradeComponent {
  constructor(elementRef: ElementRef, injector: Injector) {
    super(versionStampComponent.selector, elementRef, injector);
  }
}
