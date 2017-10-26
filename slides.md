> ![](./images/logo.png)

> # Decoupled in practice:<br>the modern web frontend

> Kristjan Jansen
> Drupalcamp Baltics
> Vilnius 2018

---

# About me

I am Kristjan Jansen

I am *prototyping* digital products, *develop* design systems and fullstack code, *mentor* tech teams and *teach* the next generation of designers.

---

# About me

I am currently working in *Proekspert*, a data science tooling startup to build the best possible user experience for AI development.

https://proekspert.ee

---

![](./images/proekspert2.png)

---

# About me

I am also a Drupal oldie

https://www.drupal.org/user/11

I made some early core themes, helped on user experience, founded Estonian Drupal community and I am a co-author of Druplicon.

---

![](./images/logos.png)

---

# What we are talking about?

Let's follow up on Ruben Teijeiro's talk:

* What does *decouped* / headless Drupal building mean *in practice*?
* Where should I start *learning modern frontend* stack?
* What is the *future of Drupal* user interdace?

---

# Follow the slides

*With latest Chrome*

https://kristjanjansen.ee/vilnius
https://github.com/kristjanjansen/vilnius

---

# Headless → Decoupled

Using Drupal 

---

# Lets start with JSON API

https://www.drupal.org/project/jsonapi

```
composer require drupal/jsonapi
drupal module:install jsonapi
```

---

# Lets start with JSON API

## Documentation

https://www.drupal.org/docs/8/modules/json-api/fetching-resources-get

## Videos by module author

https://www.youtube.com/playlist?list=PLZOQ_ZMpYrZsyO-3IstImK1okrpfAjuMZ
http://javascript.info/

---

# Takeaways

* JSON API data needs extra wrangling to be usable
* You will have to create your own format_ functions

# Related data

Not all content can be included in a single request:

```
const uuid = '95a0a7b9-1d7e-4766-a412-fdf4da2099ba'

// 1. Get the article

axios.get('node/article/' + uuid)
  .then( /* do something with article data */ )

// 2. Get its comments

axios.get('comment/comment'), { params: { 'filter[entity_id.uuid]⌈value⌉': uuid } })
  .then( /* do something with comments data */ )

```

---

# Related data

*GraphQL* to the rescue?

http://graphql.org/
https://www.drupal.org/project/graphql

---

```
{
  nodeQuery(offset: 0, limit: 0) {
    entities {
      entityLabel
      entityId
      entityBundle
      fieldTags {
        entityType
        entityLabel
        entityId
      }
    }
  }  
}
```
--

```
{
  "data": {
    "nodeQuery": {
      "entities": [
        {
          "entityLabel": "My Article",
          "entityId": 1,
          "entityBundle": "article",
          "fieldTags": [
            {
              "entityType": "taxonomy_term",
              "entityLabel": "apple",
              "entityId": 5
            },
            {
              "entityType": "taxonomy_term",
              "entityLabel": "banana",
              "entityId": 4
            }
          ]
        }
      ]
  }
}
```
---

Caveats:

* The latest version is going through the rewrite
* Documentation is not yet updated

---

# What we lost

* Accessibility
* SEO
* i18n
* RDF 🤓

* Reactivity
* State
* Forms

---

# What we won?

---


---

## Getting started with React

Actually, it's not that hard. You will need to have:

## ES6 resources

http://javascript.info to guide you

## Vue resources

https://vuejs.org to guide you
https://laracasts.com/series/learn-vue-2-step-by-step for video tutorials

---

# React resources

http://www.react.express to guide you
https://www.webpackbin.com to play around in the web editor

---

# Getting started with React

Why not https://github.com/facebookincubator/create-react-app?

👌 Great for getting started super-fast, without writing configuration
💉 Does not teach you about *components*, the key concept writing modern UIs
💉 Pushing you using another package manager, Yarn
💉 Although minimal, still contains a lot of extra baggage...
💉 ...especially when moving on to production use

---

# Lets compare our three apporaches

---

### Simple component:<br>*JS*

```


export default title => `
  <header>
    <a href="/">
      <h1>${ title }</h1>
    </a>
  </header>
`
```
--

### Simple component: *Vue*

```


export default {
  template: `
    <header>
      <a href="/">
        <h1>{{ title }}</h1>
      </a>
    </header>
  `,
  props: ['title']
}
```

--

### Simple component: *React*

```
import React from 'react'

export default ({ title }) =>
    <header>
        <a href="/">
            <h1>{ title }</h1>
        </a>
    </header>
```
---

# Use React in your Drupal theme

❶ Install NodeJS
❷ Add these three files to Drupal root:

---

```
// webpack.config.js

module.exports = options => {
  return {
    entry: './themes/custom/example_react/src/main.js',
    output: {
      path: require('path')
        .resolve(__dirname, './sites/default/files/dist'),
        filename: 'build.js'
    },
    module: {
      rules: [{
        test: /.js$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: { cacheDirectory: true },
        }],
      }],
    },
  }
}
```

--

```
// package.json

{
  "name": "example",
  "private": "true",
  "scripts": {
    "build": "webpack --hide-modules",
    "build": "webpack --hide-modules --watch",
  },
  "devDependencies": {
    "babel-core": "^6.22.0",
    "babel-loader": "^6.2.10",
    "babel-plugin-transform-runtime": "^6.22.0",
    "babel-preset-env": "^1.5.2",
    "babel-preset-react": "^6.22.0",
    "babel-preset-stage-1": "^6.22.0",
    "webpack": "^2.2.0",
  },
  "dependencies": {
    "babel-runtime": "^6.23.0",
    "react": "^15.6.1",
    "react-dom": "^15.6.1"
  }
}
```
--

```
// .babelrc

{
  "presets": [
    ["env", {"modules": false}],
    "stage-1",
    "react"
  ],
  "plugins": [
    "transform-runtime"
  ]
}
```

---

![](./images/dries1.png)

---

![](./images/do1.png)

---

> # Drupal is _very likely_ going for React

---

# We gonna miss a lot

* In-place editing
* Contextual links
* Toolbar
* Layout management
* Settings tray
* Content preview (soon Workspaces)
