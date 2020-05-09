# AngularJS/Angular Material Hybrid Demo

This was started on [StackBlitz](https://stackblitz.com/edit/angularjs-material-ngupgradelite-demo),
based on a demo by [George Kalpakas](https://github.com/gkalpak), but using Angular Upgrade can be
done in a way that is either compatible with StackBlitz or the Angular CLI, not both. This repo uses
the Angular CLI along with the `downgradeModule()`.

Find out more in the [Upgrading for Performance Guide](https://angular.io/guide/upgrade-performance).

## AngularJS Material Migration Guide

We recently published a [comprehensive guide](https://material.angularjs.org/latest/migration)
for upgrading AngularJS Material apps to Angular. It includes guidance for migrating to
Angular Material, the Angular Component Dev Kit (CDK), and the Angular Flex Layout library.
Additionally, we provide guidance on using pure CSS Grid and Flexbox for application layout,
migration of theming features, services, typography, and more.

Learn more in the [AngularJS Material Migration Guide](https://material.angularjs.org/latest/migration).

## Caveats found so far

- Different `selector` formatting and conversions between AngularJS and Angular. It depends on which
  framework refers to the component, not which framework compiled the component.
  - AngularJS referring to any component: `appComponent`
    - I.e. to use `<app-angularjs>` in `index.html`, it's defined as [`selector: appAngularjs`](https://github.com/Splaktar/angularjs-angular-material-hybrid-demo/blob/862bedffaae3e7a856b3c8e547dc9cc2d5551e4f/src/app/angularjs/app-angularjs.component.ts#L2)
  - Angular referring to any component: `app-component`
    - I.e. to use `<ng1-tabs>` in `app.component.html`, it's defined as [`selector: 'ng1-tabs'`](https://github.com/Splaktar/angularjs-angular-material-hybrid-demo/blob/862bedffaae3e7a856b3c8e547dc9cc2d5551e4f/src/app/angularjs/tabs.component.ts#L5)
- ngUpgrade projects that work on StackBlitz, don’t work in the CLI and vice versa.

### Minification-friendly AngularJS Code

- Enable `strictDi` to help you catch issues early:
  - `angular.bootstrap(rootElement, [appAngularjsModule.name], { strictDi: true });`
  - [Example](https://github.com/Splaktar/angularjs-angular-material-hybrid-demo/blob/862bedffaae3e7a856b3c8e547dc9cc2d5551e4f/src/main.ts#L13)
- For injections into `.run()`, `.config()`, etc. You can use either of:
  - Inline Function Annotation:
    - `.run([ '$templateCache', ($templateCache) => {`
    - [Example](https://github.com/Splaktar/angularjs-angular-material-hybrid-demo/blob/862bedffaae3e7a856b3c8e547dc9cc2d5551e4f/src/app/angularjs/templates/templates.js#L1-L3)
  - `$inject` Annotation
    - `configFunction.$inject = ['$mdThemingProvider', '$mdGestureProvider'];`
    - [Example](https://github.com/Splaktar/angularjs-angular-material-hybrid-demo/blob/862bedffaae3e7a856b3c8e547dc9cc2d5551e4f/src/app/angularjs/app-angularjs.module.ts#L24)
- For TypeScript classes use `$inject` Annotation:
  - `static $inject = ['$scope'];`
  - [Example](https://github.com/Splaktar/angularjs-angular-material-hybrid-demo/blob/862bedffaae3e7a856b3c8e547dc9cc2d5551e4f/src/app/angularjs/tabs.component.ts#L8)

### AngularJS Components w/ templateUrl

`templateUrl` in AngularJS components does not work out of the box with Angular CLI.
The following steps will configure a module that loads `$templateCache` at build time:

- `gulp-angular-templatecache` automates `$templateCache` loading. See simple [gulpfile](gulpfile.ts).
- `gulp-htmlmin` minifies the templates before putting them in the `$templateCache`
- The output goes in [src/app/angularjs/templates/templates.js](src/app/angularjs/templates/templates.js).
- The [src/app/angularjs/templates/index.js](src/app/angularjs/templates/index.js) file sets up a module.
- Then we import the module and use the `'templates'` string in our AngularJS module creation.

If you are working on AngularJS Templates (`.html` files referenced via `templateUrl`), and you want
to enable the Angular CLI to auto-reload on changes, run:

```sh
npm run watch:templates
```

## TODO

- [ ] Add some AngularJS Material services.
- [ ] Add some Angular Material services.
- [ ] Add some CDK services.
- [x] Set up a watcher to rebuild AngularJS `$templateCache`
- [x] Customize the AngularJS Material theme.
- [x] Customize the Angular Material theme.
- [x] Add more AngularJS Material components.
- [x] Add more Angular Material components.
- [x] Add more CDK components.
- [x] Work around Terser mangling, using [dependency annotation](https://docs.angularjs.org/guide/di#dependency-annotation).
- [x] Look into loading `$templateCache` at build time, using Gulp.
