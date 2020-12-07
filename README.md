# ts_env_scripts
boilerplate z konfiguracją środowiska i testów do pisania zadań w typescript dla studentów w Akademii Localhost

[Akademia Localhost](https://academy.localhost-group.com/ "Stronka Akademii Localhost")

## aby zacząć pracę z repo:
```javascript
// musisz mieć node oraz npm, resztę zawiera package.json
// Zainstaluj zależności poprzez terminal
npm install
```

## info o strukturze taska:
```javascript
// app.ts - tutaj jest tworzona logika działania z taskiem
// task.ts - tutaj jest tworzona logika taska
// helpers.ts - tutaj jest tworzona pomocnicza logika do realizacji taska
```
```javascript
// odpal środowisko poprzez terminal:
npm run start
```

```javascript
// modyfikacja środowiska (poczytaj o nodemon):
// możesz w pliku nodemon.json łatwo zmienić główny plik wejściowy z app.ts na dowolny
// strukturę taska możesz dowolnie zmieniać oraz dodawać kolejne foldery jako taski, wywołując je w app.ts
```


## info o strukturze taska do testów:
```javascript
// __tests__/integration.test.ts - tutaj są testy integracyjne między funkcjonalnościami
// __tests__/unit.test.ts - tutaj są testy jednostkowe pojedynczych funkcjonalności
```
```javascript
// odpal środowisko testowe poprzez terminal:
npm run test
```
