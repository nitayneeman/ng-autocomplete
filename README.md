#ng-autocomplete
An AngularJS directive for search hints, based on Autocomplete.js.

##Getting started
Make sure those files are included in your page:
* jQuery
* autocomplete.js
* AngularJs
* ng-autocomplete.js
* autocomplete.css

All the options of Autocomplete.js are available, for example:

```html
<autocomplete hints='proposals' placeholder='type your text' width='500' height='25'
  showButton='true' buttonText='Submit' on-submit='submit()'></autocomplete>
```

Note: proposals array and submit method should be on your controller.
