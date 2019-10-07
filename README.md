# EdminifyAppFe

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.0.

This project is a work in progress. Effective Oct 6 2019 we are taking the approach of having many dumb components controlled by a few fat containers. The `src/app/components` directory is where we will put the dumb components. At a later date we may add a `containers` directory at the same level but for now we will continue to follow the structure of the `master` branch where everything is under the `src/app/modules` directory.

Dumb components should only be concerned with exposing controls that directly manipulate them and they should contain **NO** internal logic outside of these controls.

Dumb components should also always contain a `<component-name>.stories.ts` file that contains storybook stories for that component.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
