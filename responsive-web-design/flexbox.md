# Flexbox

Flexbox (Flexible Box) is a layout method that aims to provide a clean and straight-forward way to align, scale, and distribute the space of items in a container. It is one the most powerful tools we have to create responsive web application.

Flexbox is composed of two pieces:

1. The container, called a flex container
2. The children of the container, called flex items

![Flexbox Figure](https://css-tricks.com/wp-content/uploads/2018/11/00-basic-terminology.svg)

## Container Properties

- **display** - This enables flex content among the container and it's children.
  - _flex_ and _inline-flex_ are the main values of this property
- **flex-direction** - This sets the main-axis. It is worth noting that besides wrapping, flexbox is a single direction layout tool
  - _row (default)_, _row-reverse_, _column_, _column-reverse_
- **flex-wrap** - By default all of the flex items will try to fit on one line, this property changes that
  - _nowrap (default)_, _wrap_, _wrap-reverse_
