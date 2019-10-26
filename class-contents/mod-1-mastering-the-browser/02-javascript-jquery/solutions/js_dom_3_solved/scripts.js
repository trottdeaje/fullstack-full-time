/*
1. document.body returns the body element

2. element.style.property changes the property style of an element

E.g document.body.style.marginBottom = "2px" changes the "margin-bottom" of the body to 2px (note how instead of the - we use camelCase and note how the value is a string)
*/

// Give the body the following styles:
// height of 100vh
// 2px of border left and right widths
// both left and right border styles of dashed
// left border color of blue
// right border color of red

document.body.style.height = "100vh";

// Left border
document.body.style.borderLeft = "2px dashed blue";

// Right border
document.body.style.borderRightWidth = "2px";
document.body.style.borderRightStyle = "dashed";
document.body.style.borderRightColor = "red";