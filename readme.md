<h1>Webpack Starter</h1>

A yarn or npm project for an initial webpack project.
Uses
- babel loader
- HTMLWebpackPlugin
- sass/css loader and mini-css-extract-plugin
- file loader and html-loader
- webpack-dev-server
- CleanWebpackPlugin
- mocha for Testing
- possibly typeScript (with ts-loader)
    - with mocha / chai for testing
    - with custom declaration d.ts file

Use `master` branch to code with javaScript or use `with-typescript` branch to code with typeScript

Run:
- `yarn install` or `npm install` for install all dependencies.
- `yarn build` or `npm build` for create a dist/ folder with the index.html, the index.js as bundle.js, the main.css and a img folder with a puppy picture.
- `yarn start` or `npm start` for opening the webpack-dev-server on port 9000.
