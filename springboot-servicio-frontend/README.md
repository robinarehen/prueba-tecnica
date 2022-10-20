# Springboot Servicio Fronted
Proyecto en el cual se desarrolla el **Frontend** para consumir el servicio de usuarios, donde podremos crear nuevos usuarios con los dos roles ya definidos.

# Instalaciones

## Angular Material
Se implementa el framework de diseño web [Angular Material](https://material.angular.io/) del cual se utilizan los diferentes componentes.<br>
```
ng add @angular/material
```

## Bootstrap 4
Desde la pagina oficial de [Bootstrap](https://getbootstrap.com/docs/4.5/getting-started/introduction/) se descarga el archivo `bootstrap.min.css` y se guarda en la carpeta `~/asserts/css/`.<br>
Se abre el archivo `~/src/index.html` y en el `head` se agrega el siguiente link.
```xml
<link rel="stylesheet" href="assets/css/bootstrap.min.css">
```

# Angular Information
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.5.

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
