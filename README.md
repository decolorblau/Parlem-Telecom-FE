# PARLEM TELECOM TEST TÉCNIC FRONT-END

Aquest test tècnic està realitzat amb la nova versió de Vue3, que utilitza una compilació basada en Vite, amb Pinia com a gestor dels stores i Bootstrap amb Sass pels estils.

El projecte consta de dues vistes. Una primera amb una llista de clients i un buscador per filtrar-los. I una segona vista, que és el detall de cada client, on podem trobar la seva fitxa tècnica i una llista amb els productes contractats.

Les dades s'obtenen de l'api creada amb el paquet npm Json Server. Que permet mockejar una REST API amb les teves pròpies dades. Aquest REST API es troba al repositori https://github.com/decolorblau/Parlem-API-REST, està deployada a Cyclic i es pot veure a https://ill-rose-ant-tux.cyclic.app/.

Tot i tractar-se d'un projecte molt petit, on no seria necessari fer servir cap gestor de store, perquè no creixerà més, he volgut simular un projecte que podria créixer en grans dimensions. Per això mateix he utilitzat Pinia com a gestor, ja que, a diferència de Vuex, permet tenir més d'un store a dins el projecte. A més a més, pinia no té mutacions, cosa que també simplifica el codi i permet modificar els estats des de les accions.

Les vistes i els components de Vue estan escrits seguint els principis de disseny KISS, DRY i SOLID. I Vue ens permet organitzar els components de dos formes diferents. He fet ús de l'estil "Options API" és més "rìgid en les formes" però a la vegada molt més ordenat i permet que el component sigui molt més accessible i fàcil d'entendre, sobretot quan es treballa en equip.

El disseny i el seu template està fet amb html amb classes de bootstrap 5, i també m'he ajudat de SASS, per aconseguir la personalització en el disseny que desitjava. En aquest cas no he utilitzat BEM per les classes, ja que no ho he necessitat.

Per aconseguir un codi net i uns commits organitzats, me ajudat amb Eslint i amb hooks de Husky.

El projecte esta testejat amb Vitest.

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Run unit tests

```
npm test
```

### Run unit tests with coverage

```
npm run coverage
```

### Lints and fixes files

```
npm run lint
```
