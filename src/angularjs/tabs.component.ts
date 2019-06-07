import {Directive, ElementRef, Injector} from '@angular/core';
import {UpgradeComponent} from '@angular/upgrade/static';

export const tabsComponent = {
  selector: 'tabs',
  templateUrl: 'angularjs/tabs.component.html',
  controller: class TabsComponent {
    $digestCount = 0;
    showTabsContainer = false;

    constructor($scope) {
      this.$digestCount = 0;
      $scope.$watch(() => {
        this.$digestCount++;
        if (this.$digestCount % 100 === 0) {
          console.log('$digest', this.$digestCount);
        }
      });
    }
  }
};

@Directive({selector: tabsComponent.selector})
export class TabsComponentFacade extends UpgradeComponent {
  constructor(elementRef: ElementRef, injector: Injector) {
    super(tabsComponent.selector, elementRef, injector);
  }
}
