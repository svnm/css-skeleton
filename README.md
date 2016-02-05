# [css-skeleton]()

[![npm version](https://badge.fury.io/js/pure-css.svg)](https://badge.fury.io/js/pure-css)

A [css module](https://github.com/css-modules/css-modules) compatible version of [skeleton](http://getskeleton.com).

You will need to use [react-css-modules](https://github.com/gajus/react-css-modules) to make use of the class names as skeleton classes are not camelCase.

It would be possible to make a version compatible to just css modules in the future. 

## Installation

`npm install css-skeleton --save-dev`

## Usage
Simply import your skeleton css modules

`import { base, buttons, grid } from 'css-skeleton'`

Then use it for styling your elements.

```jsx
<div styleName="container">
  <div styleName="row">
    <div styleName="six column">
      <h2>Heading</h2>
    </div>
  <div styleName="six columns">
    <input type="button" value="button input">
  </div>
</div>
```

## Example

Check out the full working example [here](https://github.com/StevenIseki/css-skelton/tree/master/example)

```jsx
import React from 'react'
import CSSModules from 'react-css-modules'

import { base, buttons, grid } from 'css-skeleton'
let styles = {}
Object.assign(styles, base, buttons, grid)

class Test extends React.Component {
    render () {
        return (
        <div styleName="container">
          <div styleName="row">
          <div styleName="six column">
            <h2>Heading</h2>
          </div>
          <div styleName="six columns">
            <input type="button" value="button input">
          </div>
        </div>
        );
    }
}

export default CSSModules(Test, styles);
```

## modules

You should include the font on the page as follows if you want Raleway as is used in CSS Skeleton's examples:

```html
<link href='//fonts.googleapis.com/css?family=Raleway:400,300,600' rel='stylesheet' type='text/css'>
```

- normalize
- base (this includes misc and clearing)
- grid
- typography
- links
- buttons
- forms
- lists
- code
- tables
- spacing
- utilities
- media queries (no need to import these, you just use them in your own modules)

```css
/* Larger than mobile */
@media (min-width: 400px) {}

/* Larger than phablet (also point when grid becomes active) */
@media (min-width: 550px) {}

/* Larger than tablet */
@media (min-width: 750px) {}

/* Larger than desktop */
@media (min-width: 1000px) {}

/* Larger than Desktop HD */
@media (min-width: 1200px) {}
```

## License

[MIT](http://isekivacenz.mit-license.org/)
