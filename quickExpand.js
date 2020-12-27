//Simple script to expand a selection 1 pixel at a time

var fillSpace = app.activeDocument.selection;
if(fillSpace){
    fillSpace.expand(1);
} else {
    alert("Please make a selection to expand");
}