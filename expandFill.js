//Expand a selection by a certain pixel amount and fill it with the foreground color
var expandAmount = prompt("Expand amount: ", 2);
if(isNaN(expandAmount)){
	alert("Error, please enter a number");
} else {
	var fillSpace = app.activeDocument.selection;
	fillSpace.expand(parseInt(expandAmount));
	fillSpace.fill(app.foregroundColor);	
	fillSpace.deselect();
}
