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

# What we gonna be talking about?

Let's follow up on Ruben Teijeiro's talk:

* What does *decouped* / headless Drupal building mean *in practice*?
* How should I *learn about modern frontend* stack?
* What is the *future of Drupal* administration interface?

---

# Follow the slides

*With latest Chrome*

https://kristjanjansen.ee/vilnius
https://github.com/kristjanjansen/vilnius

---

# Let's get started 

Three ways to get the data out of Drupal (and into Drupal) using APIs:

---
### REST API

In core

Needs configuration

You have to invent<br>your own standard
--

### JSON API

Soon in core (8.5 / 8.6)

No config, works out of box

Based on industry standard

Third-party tooling available

--

### GraphQL

Someday in core

Some config needed

By Facebook,<br>now a industry standard

Huge learning curve

Work in progress


---

# JSON API

Lets get started

```
composer require drupal/jsonapi
drupal module:install jsonapi
```
---


# Lets compare our three apporaches

---

## Javascript

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

## Vue

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

## React

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

### &nbsp;

**Development**

**Production**

--

## Javascript

Latest browsers

—

--

## Vue

Latest browsers

⚒ Needs compilation 

--

## React

⚒ Needs compilation 

⚒ Needs compilation 


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

# Takeaways

* JSON API data needs extra processing to be usable, for example `jsonapi-parse` in NPM
* You will have to create your own `format_*` functions
* Not all content on page can be included on a single request

---

# Getting related data

```
const uuid = '95a0a7b9-1d7e-4766-a412-fdf4da2099ba'

// 1. Get the article

axios.get('node/article/' + uuid)
  .then( /* do something with article data */ )

// 2. Get its comments

axios.get('comment/comment'), { params: { 'filter[entity_id.uuid]⌈value⌉': uuid } })
  .then( /* do something with comments data */ )

// 3. Get the logged in user

...

```

---

# Related data

**GraphQL** to the rescue?

---

### Ask for data in this shape

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

### Get this data back

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

> # Was it worth it?

---
# What we lost

* Helper functions for data rendering
* Accessibility markup
* Search engine optimization
* Authentication and authorization
* Localization
* Form building and validation
* Testing
* RDF 🤓

---

# What we lost

* In-place editing
* Contextual links
* Toolbar
* Layout management
* Settings tray
* Content preview (soon Workspaces)

---

# What we won?

We never exposed the true power of modern frontend frameworks, they are not just template engines:

--

<br>

* State management 
* Reactivity
* Realtime data
* Complex animation
* Data visualization

--

<br>

* Server rendering
* Offline apps
* Rendering to other platforms: native apps, VR etc

---

# What we won?

Redefine workflows: From code to design

---

> <video style="width: 100%; height: 100%;" src="https://airbnb.design/wp-content/uploads/2017/04/DLS-Component-Screen-Sizes.mp4" preload="metadata" autoplay="autoplay" loop="loop" width="1280" height="720"></video>

---

> <video style="width: 100%; height: 100%;" src="https://airbnb.design/wp-content/uploads/2017/04/2017-04-24-18_39_03.mp4?_=1" preload="metadata" autoplay="autoplay" loop="loop" width="1280" height="720"></video>

---

# What we won?

Perhaps the biggest gains are not technical

---

> # Freedom

---

# More choices to set up your products and teams

* Developing backend and frontend in different speeds
* Allows more experimentation on technologies, attract talent
* Hiring developers without forcing Drupal on them

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

---

![](./images/dries1.png)

---

![](./images/do1.png)

---

> # Drupal is _very likely_ going for React

---


