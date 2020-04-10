//Create a guide system that makes as many guides as needed horizontally or vertically across the page

//Makes sure the value of the ruler is in pixels
if (app.preferences.rulerUnits != Units.PIXELS)
{
    app.preferences.rulerUnits = Units.PIXELS;
}

//Window dialog box to get the direction you want the guides to go
var win = new Window("dialog");
win.alignChildren = "left";
var buttonGroup = win.add("group");
buttonGroup.orientation = "column";
buttonGroup.alignment = "left";
var hor = buttonGroup.add("radiobutton", undefined, "Horizontal");
var ver = buttonGroup.add("radiobutton", undefined, "Vertical");
buttonGroup.add("button", undefined, "OK");
buttonGroup.add("button", undefined, "Cancel");

//Initialize direction with default horizontal direction
var dir = Direction.HORIZONTAL;

//Check for a successful submission of the direction, then run the rest of the code
if(win.show() == 1){
	var res = getVal(buttonGroup);
	if(res){
		getSpacing(dir);
	} 
} 

//Gets the direction
function getVal(BtnGrp){
	if(hor.value == true){
		dir = Direction.HORIZONTAL;
		return true;
	} else if (ver.value == true){
		dir = Direction.VERTICAL;
		return true;
	} else {
		alert("Error, please select a direction");
		return false;
	}
}

//Gets the spacing and implements the creation of the guides
function getSpacing(direct){
	var spacing = prompt("Spacing amount (in pixels): ", 200);
	if(spacing === null){
		return;
	}
	else if(spacing == "" || isNaN(spacing)){
		alert("Error, please enter a number");
		return;
	}  
	else {
		var doc = app.activeDocument;

		var winSize;
		if(direct == Direction.HORIZONTAL){
			winSize = doc.height.value;
		} else {
			winSize = doc.width.value;
		}

		if(winSize <= spacing){
			alert("Spacing is too high");
		} else {
			amnt = Math.floor(winSize/spacing);
			for(x = 1; x <= amnt; x++){
				doc.guides.add(direct, x*spacing);
			}
		}
	}
}



