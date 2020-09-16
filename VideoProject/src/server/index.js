require('ignore-styles'); //=> no se pueden cargar las hojas de estilo en el lado del servidor
require('@babel/polyfill');

require('@babel/register')({
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
  ],
});

require('asset-require-hook')({
  extensions: ['jpg', 'png', 'gif'],
  name: '/assets/[hash].[ext]',
});

require('./server');

