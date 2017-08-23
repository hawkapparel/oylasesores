# Plantilla de desarrollo para página web oylasesora

> Se esta usando de preferencia Yarn como gestor de dependencias por la velocidad y manejo de modulos offline(cache) a comparacion de Npm.
>> Se puede trabajar con **npm** con tontal normalidad

#### Instalando Yarn
* Instalar [Yarn](https://yarnpkg.com) de manera global siguiendo los pasos del
* [Instalador](https://yarnpkg.com/en/docs/install) oficial para macOS, Windows, Linux
* _En caso de Windows, favor de reinicar el ordenador luego de realizar la instalacion_

**Para agregar o remover dependencias**
```sh
$ yarn add [package]
$ yarn remove [package]
$ yarn add [package] --dev
```
**En la raiz de la carpeta del proyecto, ejecutar los siguiente comandos**
```sh
$ yarn || npm install (dependiendo del gestor preferido)
$ gulp
$ gulp prod (Minifica los archivos y borra los console.log)
```

#### Dependencias
* Pug
* Sass
* ImagenMin
* Browser-sync
* EditorConfig (para Sublime Text3, Atom, Brackets instalar el [plugin](http://editorconfig.org/#download) oficial previamente)

#### ¡IMPORTANTE!

Para este proyecto tener en consideración estos puntos importantes:

* Trabajar en localhost: **$url:'';**
* ¿Las fuentes no se ven en local?
Instala el plugin **Allow-Control-Allow-Origin** en Google Chrome y sigue estos pasos:
