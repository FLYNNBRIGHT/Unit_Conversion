//Function for Temperature Conversion
function celcToFarh() {

    //Get reference Ids and assign to variables
    var c = document.getElementById("celcius").value;
    var f = (c * 9/5) + 32
    document.getElementById("farenheit").value = f;
}

//Function for Weight Conversion
function kiloToPds() {

    //Get reference Ids and assign to variables
    var kg = document.getElementById("kilogram").value;
    var lb = kg * 2.2
    document.getElementById("pounds").value = lb;
}

//Function for distance Conversion
function kmeterToMi() {

    //Get reference Ids and assign to variables
    var km = document.getElementById("kilometer").value;
    var M = km * 0.62137;
    document.getElementById("miles").value = M;
}
