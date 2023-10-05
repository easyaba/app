# Easyaba

This project is an open source project to help the behavioral analyst (BCBA) using applied behavior analysis (ABA) gather the behavior of the children with autism.

## Needed data to gather

In order to help those children the BCBAs needs to collect some behavior data with two methods:
* ABC Form -> Observing Behavior Using A-B-C Data Antecedent-Behavior-Consequence
* Gathering behavior during a therapist session using different measuring methods
  * Frequency - counting the number of ocurences of a behavior
  * Duration - how long does a behavior last
  * Partial Interval - an observer indicates whether the behavior occurred at any point during the time interval
  * Full Interval - an observer indicates whether the behavior occurred for the entire time interval
 
## Application requirement

Simple angular app connected to DB (firebase) that gather all data mentioned above.
Application should work on phones, tablets, pc.

Following use cases are necessary:
* Add/Update/Remove Students/Children with basic information about a person
* List overview of the Students/Children
* Add/Update/Remove ABC Master data -> master data set of Antecedent-Behavior-Consequence
* Collect ABC Data -> for a specific student at collected time specify the ABC combination
* Start/Stop session for a student -> BCBA works with the students on sessions where the behavior needs to be gathered
* Collect behavior during session -> before a session is started the BCBA creates/assings Behavior gathering methods for a student
* Show graph and overview data of the sessions

# Easyaba

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
