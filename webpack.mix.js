let mix = require('laravel-mix');

mix.sass('public/assets/global.scss', 'public/dist/');

mix.js(
  'public/template/D326M3E/assets/js/home-v1.js',
  'public/template/D326M3E/dist/js',
);
mix.sass(
  'public/template/D326M3E/assets/sass/global.scss',
  'public/template/D326M3E/dist/css',
);
mix.sass(
  'public/template/D326M3E/assets/sass/common.scss',
  'public/template/D326M3E/dist/css',
);
mix.sass(
  'public/template/D326M3E/assets/sass/home-v1.scss',
  'public/template/D326M3E/dist/css',
);
