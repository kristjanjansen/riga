# Getting started with React

Why not https://github.com/facebookincubator/create-react-app?

👌 Great for getting started super-fast, without writing configuration
💉 Does not teach you about *components*, the key concept writing modern UIs
💉 Pushing you using another package manager, Yarn
💉 Although minimal, still contains a lot of extra baggage...
💉 ...especially when moving on to production use


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
> It comes with new level of **responsibility**

---

# JSON API

## Documentation

https://www.drupal.org/docs/8/modules/json-api/fetching-resources-get

## Videos

https://www.youtube.com/playlist?list=PLZOQ_ZMpYrZsyO-3IstImK1okrpfAjuMZ

---

# From Headless to Decoupled

*Headless* came first, it is a developers term

*Decoupling* illustrates the concept better and is now a preferred term

"Get data in and out of Drupal using some API, b"

---

Headless

https://www.youtube.com/watch?v=dgbQn2bfKJI
https://www.youtube.com/watch?v=wWc3DY5l9H8

---

# How it feels to learn Javascript in 2016

https://hackernoon.com/how-it-feels-to-learn-javascript-in-2016-d3a717dd577f

---

https://www.tandemseven.com/technology/6-reasons-component-based-ui-development/

---


```
<!-- HTML -->

<div class="btn-group" role="group">
  <button type="button" class="btn btn-default" id="question-company-wide">
    <i class="fa fa-building fa-lg"></i> company_label
  </button>
  <button type="button" class="btn btn-default" id="question-group-specific">
    <i class="fa fa-users fa-lg"></i> groups_label
  </button>
  <button type="button" class="btn btn-default" id="question-user-specific">
    <i class="fa fa-user fa-lg"></i> employees_label
  </button>
</div>
```

--

```
/* CSS */

.activeButton {
    color:blue;
}
```

--

```
// JS

$(document).ready(function(){
  $("div.btn-group button.btn").click(function(){
    $("div.btn-group").find(".activeButton").removeClass("activeButton");
    $(this).addClass("activeButton");
  });  
});
```
