# Zollider
## Развернуть на сервере

```bash
# скорировать переменные окружение с .env.example в .env
# в .env внести изменения в соответсвии с текущим стендом
$ cp .env.example .env
```

```bash
# скопировать file ecosystem.config.js.example в ecosystem.config.js
# в ecosystem.config.js внести изменения для работы pm2
# достаточно задать имя в поле name
$ cp ecosystem.config.js.example ecosystem.config.js
```

## Развернуть на GitHub Pages (работает только в режиме static)

```bash
# Синхронизировать локальную ветку с удаленной
$ git add .
$ git commit -m "build"
$ git push
```
```bash
# Сгенерировать стат файлы
$ yarn generate
```

```bash
# Задеплоить
$ yarn deploy
```
## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev
# yarn devW for Windows

# build for production and launch server
$ yarn build
$ yarn start
# yarn buildW && yarn startW for Windows

# generate static project
$ yarn generate
# yarn generateW for Windows
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

## Special Directories

You can create the following extra directories, some of which have special behaviors. Only `pages` is required; you can delete them if you don't want to use their functionality.

### `assets`

The assets directory contains your uncompiled assets such as Stylus or Sass files, images, or fonts.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/assets).

### `components`

The components directory contains your Vue.js components. Components make up the different parts of your page and can be reused and imported into your pages, layouts and even other components.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/components).

### `layouts`

Layouts are a great help when you want to change the look and feel of your Nuxt app, whether you want to include a sidebar or have distinct layouts for mobile and desktop.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/layouts).


### `pages`

This directory contains your application views and routes. Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/get-started/routing).

### `plugins`

The plugins directory contains JavaScript plugins that you want to run before instantiating the root Vue.js Application. This is the place to add Vue plugins and to inject functions or constants. Every time you need to use `Vue.use()`, you should create a file in `plugins/` and add its path to plugins in `nuxt.config.js`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/plugins).

### `static`

This directory contains your static files. Each file inside this directory is mapped to `/`.

Example: `/static/robots.txt` is mapped as `/robots.txt`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/static).

### `store`

This directory contains your Vuex store files. Creating a file in this directory automatically activates Vuex.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/store).
