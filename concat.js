var concat = require('concat')

const es5 = [
  './dist/microfrontends-capability2/runtime-es5.js', 
  './dist/microfrontends-capability2/polyfills-es5.js', 
  './dist/microfrontends-capability2/main-es5.js',
  './dist/microfrontends-capability2/scripts.js'
];

const es2015 = [
  './dist/microfrontends-capability2/runtime-es2015.js', 
  './dist/microfrontends-capability2/polyfills-es2015.js', 
  './dist/microfrontends-capability2/main-es2015.js',
  './dist/microfrontends-capability2/scripts.js'
];

concat(es5, './preview/elements-es5.js');
concat(es2015, './preview/elements-es2015.js');