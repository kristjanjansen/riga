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
