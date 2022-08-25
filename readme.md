# OSE - on scroll effect

OSE is a fronted javascript library for handling animation when specific 
element enter the DOM

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install OSE.

```bash
npm install ose-library
```

## Usage

### On javascript

```javascript
import {OSE} from 'ose-library';

# initialise OSE
OSE.init({
  once: false,
  elementRatio: 1
})

```

### On html

```html
<div data-ose="fade" class="card is-second">
    <h1>fade</h1>
</div>

```

### 🔥 Advanced settings

```html
<div data-ose="fade" data-ose-delay="2" class="card is-second">
    <h1>fade</h1>
</div>

```

- Use *`data-ose-delay`* to set delay when starting animation in second
- Use your own css style by adding 

#### Custom property in data-ose

```html
<div data-ose="custom-style" class="card">
    <h1>custom-style</h1>
</div>

```

#### Custom CSS style

```css
[data-ose='custom-style']{
    &.custom-style{
        animation: custom-animation 1.5s ease;
    }
}

@keyframes custom-animation {
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
}

```

## Predefined animation

    * Fade animations:
        * fade
        * fade-up
        * fade-down
        * fade-left
        * fade-right

    * Bounce animations:
        * bounce
        * bounce-up
        * bounce-down
        * bounce-left

    * Slide animations:
        * slide