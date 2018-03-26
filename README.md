# Webpack About Loader

Include information about the npm project in your web app without including the whole `package.json` file

```
npm install --save-dev about-loader
```

```
yarn add --dev about-loader
```

```
import about from 'about-loader!./package.json';

console.log(about.name);
console.log(about.description);
console.log(about.version);
```