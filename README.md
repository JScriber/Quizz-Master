# Commands
## Install dependencies
```
npm install
```

## Run the project
```
npm run serve
```

## Launch unit tests
```
npm run test
```

## Launch coverage
```
npm run coverage
```

Then open up the file : `coverage/lcov-report/index.html`. Note: `coverage` will be generated at the root of the project.

## Launch e2e tests
```
npm run e2e
```

**Important**: The end-to-end tests require you to launch the server beforehand. As a result, launch `npm run serve` in another shell before launching `npm run e2e`.

## Static analysis
```
npm run lint [target file]
```

# Others
## Documentation
- [Jest](https://jestjs.io/docs/en/using-matchers)
- [Jest BDD wrapper](https://github.com/konnorandrews/jest-bdd)
- [Nightwatch](https://nightwatchjs.org/guide)

## Drivers for Nightwatch (end-to-end tests)
- [Selenium](http://selenium-release.storage.googleapis.com/index.html)
- [Firefox](https://github.com/mozilla/geckodriver/releases)
- [Chrome](https://chromedriver.chromium.org/)
