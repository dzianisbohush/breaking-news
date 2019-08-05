# BreakingNews

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.3.

## Environment files

Rename `environment.prod.template.ts` to `environment.prod.ts` and `environment.template.ts` to `environment.ts`, put your news API key to these files.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Production server

After `ng build --prod` you can start http-server, go to `cd dist/breaking-news` and `http-server -c-1 .`

## Firebase deploy
- `firebase login`
- `firebase init`
- `ng build --prod`
- `firebase serve --only hosting` - test locally
- `firebase deploy`
