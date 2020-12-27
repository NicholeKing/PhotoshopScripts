//Strokes your working path with the current brush tool and foreground color
//I use this a ton when making simple lineart or for lining backgrounds/background objects

var len = app.activeDocument.pathItems.length;

if(len){
    var pth = app.activeDocument.pathItems[len-1];
    pth.strokePath(ToolType.BRUSH);
    pth.deselect();
} else {
    alert("No Path to stroke");
}