//Adds multiple layers at once
var amount = prompt("How many layers?", "2");
if(isNaN(amount)){
    alert("Error, please use a number");
} else if (amount <= 0){
    alert("Error, please use a number greater than 0");
} else {
    var title = prompt("Base name of layer?", "Layer");
    for(var i = 1; i <= Math.floor(amount); i++){
        var newLayer = app.activeDocument.artLayers.add();
        if(title != "Layer" || title != null){
            newLayer.name = title + " #" + i;
        }
    }
}
