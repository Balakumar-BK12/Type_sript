// string Literal Type

let mouseEvent: 'click' | 'dblclick' | 'mouseup' | 'mousedown';
mouseEvent = 'click'; // valid
mouseEvent = 'dblclick'; // valid
mouseEvent = 'mouseup'; // valid
mouseEvent = 'mousedown'; // valid
//mouseEvent = 'mouseover'; // compiler error

console.log(mouseEvent);

let click: 'click'='click';
console.log(click);
