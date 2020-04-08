//Expand a selection by a certain pixel amount and fill it with the foreground color
var expandAmount = prompt("Expand amount: ", 2);
if(isNaN(expandAmount)){
	alert("Error, please enter a number");
} else {
	app.activeDocument.selection.expand(expandAmount);
	app.activeDocument.selection.fill(app.foregroundColor);	
	app.activeDocument.selection.deselect();
}
