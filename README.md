# foundry-js-blueprint-react

React blueprint for Foundry UI application development.  

## Getting started

- `npm install`
- `npm run watch`

`npm run watch` will start [Rollup](https://rollupjs.org/) in watch mode and your application's output will be under `/src/dist`.  The contents of `src/dist` is what will be rendered by Foundry.

## UI development

Included in this blueprint are some common css and React components you can use in your app. They're already styled to be consistent with the rest of Falcon Console and handle light and dark mode for you.

- [Shoelace](https://shoelace.style/frameworks/react) is already installed and we've also included [shoelace specific Falcon css](https://github.com/CrowdStrike/falcon-shoelace) to make the components provided by Shoelace look consistent with the rest of Falcon.

- [Tailwind Toucan Base](https://github.com/CrowdStrike/tailwind-toucan-base) is a [tailwindcss](https://tailwindcss.com/) theme that gives you utility classes you can use in html or React components. You have the full power of tailwind in this boilerplate.  The Falcon specific [colors](https://tailwind-toucan-base.pages.dev/#Colors) are a great place to start in Tailwind Toucan Base.


## Building your app

Before deploying your Foundry app, you must do a final build of your UI extension so the app has access to the latest files in `/src/dist`.  Run the following build command when you're ready to deploy:

- `npm run build` 