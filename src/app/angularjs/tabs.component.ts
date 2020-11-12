import { Directive, ElementRef, Injector } from '@angular/core';
import { UpgradeComponent } from '@angular/upgrade/static';
import { IScope } from 'angular';

export const tabsComponent = {
  selector: 'ng1-tabs',
  templateUrl: '/tabs.component.html',
  controller: class TabsComponent {
    static $inject = ['$scope'];
    $digestCount = 0;

    constructor($scope: IScope) {
      this.$digestCount = 0;
      $scope.$watch(() => {
        this.$digestCount++;
        if (this.$digestCount % 100 === 0) {
          console.log('$digest', this.$digestCount);
        }
      });
    }
  },
};

@Directive({ selector: tabsComponent.selector })
export class TabsComponentFacade extends UpgradeComponent {
  constructor(elementRef: ElementRef, injector: Injector) {
    super(tabsComponent.selector, elementRef, injector);
  }
}
