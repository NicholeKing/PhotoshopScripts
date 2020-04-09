//Create a guide system that makes as many guides as needed down the page

if (app.preferences.rulerUnits != Units.PIXELS)
{
    app.preferences.rulerUnits = Units.PIXELS;
}

var spacing = prompt("Spacing amount (in pixels): ", 200);

if(isNaN(spacing)){
	alert("Error, please enter a number");
} else {
	var doc = app.activeDocument;

	var h = doc.height.value;

	if(h <= spacing){
		alert("Spacing is too high");
	} else {
		amnt = Math.floor(h/spacing);
		for(x = 1; x <= amnt; x++){
			doc.guides.add(Direction.HORIZONTAL, x*spacing);
		}
	}
}



