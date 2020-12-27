//Fills your working path with the foreground color (not in the most elegant way, but it works)
//Good for quickly filling in areas where you can't use magic wand or want more control than a basic select and fill

var len = app.activeDocument.pathItems.length;

if(len){
    var pth = app.activeDocument.pathItems[len-1];
    pth.makeSelection();
    var sel = app.activeDocument.selection;
    sel.fill(app.foregroundColor);
    pth.deselect();
    sel.deselect();
} else {
    alert("No Path to fill");
}