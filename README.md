# Spine in
Spine like a shell spinner \ | / -

## Why
Fun.

## Install
```sh
npm i spinein
```
```html
<script src="node_modules/spinein/spine.js"></script>
```

## Usage

### With presets frames
```js
spine('dots').in('.spinner-div');
```
```js
spine('triangle').in('.spinner-div');
```

> Check full list of [all available prests](https://github.com/renatorib/spinein/blob/master/src/data/spinners.js)

### With your own frames
```js
spine({
  interval: 100,
  frames: ['\\', '/']
}).in('.spinner-div');
```

### Share spinner
```js
var spinner = spine('dots');
spinner.in('.first-div');
spinner.in('.second-div');
```

### Stop spinning
```js
var spinner = spine('dots').in('.spinner-div');

setTimeout(function(){
  clearInterval(spinner);
}, 5000);

// will stop spinning after 5 seconds
```

### Real Example
```html
[...]
  <div class="spinner"></div>
  <script src="spine.js"></script>
  <script>
    document.addEventListener('DOMContentLoaded', function(){
      spine('dots').in('.spinner');
    });
  </script>
[...]
```

> Check [all examples here](https://github.com/renatorib/spinein/tree/master/examples)

## API

```js
spine(spinner).in(element)
```

**String|Object** `spinner`  
As *string*: it will use a preset spinner, you can check all in `spine.spinners`  
As *object*: it need two properties: `frames` as array of strings to rotate, and `interval` as integer of frame interval  

```js
// string
spine('dots').in(...)
// object
spine({ frames: ['1', '2'], interval: 100 }).in(...)
```

**String|DOMElement** `element`  
As *string*: it will use document.querySelector to find the DOM Element to use as wrapper of spinner.  
As *domelement*: it will used to wrapper of spinner.  

```js
// string
spine(...).in('.wrapper');
// domelement
var wrapper = document.querySelector('.wrapper');
spine(...).in(wrapper);
```
