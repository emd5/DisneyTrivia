'use strict';

var currentFormPage = 0;
showPage(currentFormPage);

function showPage(n) {
    var x = document.getElementsByClassName("formPage");
    x[n].style.display = "block";

    if (n === 0) {
        document.getElementById("nextBtn").style.display = "inline";
    }
    if (n === (x.length - 3)) {
        x[n-1].style.display = "none";
    }
    if (n === (x.length - 2)) {
        document.getElementById("nextBtn").innerHTML = "Submit";
    }
    if (n === (x.length - 1)) {
        x[n-1].style.display = "none";
        results();
        document.getElementById("nextBtn").innerHTML = "Done";
    }
}

function nextDisplay(n) {
    var x = document.getElementsByClassName("formPage");

    // if(n == 1){return false}
    x[n].style.display = "none";
    currentFormPage = currentFormPage + n;

    if (currentFormPage === x.length) {
        document.getElementById("landingForm").submit();
        return false;

    }
    showPage(currentFormPage)
}

function results(){
    var terrain;
    var name = document.getElementById("first").value;
    // console.log(name);


    var distance = document.getElementById("distanceOption");
    var selectedDistance = distance.options[distance.selectedIndex].value
    // console.log (selectedDistance);

    var terrainElements  = document.getElementsByName("terrain");
    for(var i=0; i< terrainElements.length; i++){
        if(terrainElements[i].checked){
            terrain = terrainElements[i];
            // console.log("Terrain selected: "+ terrain);
        }
    }

    var result = 'Thank you '+ name + '! The terrain you have selected:  '
        + terrain.value + '. Distance selected: '
        + selectedDistance;

    // console.log(result);

    hikeResults(terrain,selectedDistance);

    return  document.getElementById("results").innerHTML = result;

}

function hikeResults(terrain, selectedDistance){
        var hikeResults = document.getElementById("hikeResultDisplay");

        if(terrain.value === "waterfall" && selectedDistance === "2 mile or less") {
            var textResult = "Snoqualmie Falls |Terrain: waterfall |  Distance: 1.4 miles, roundtrip";

        }else if(terrain.value === "waterfall" && selectedDistance === "2-5 miles") {
            var textResult = "Franklin Falls |Terrain: waterfall |  Distance: 2.0 miles, roundtrip";

        }else if(terrain.value === "waterfall" && selectedDistance === "5+ miles"){
            var textResult = "Lewis River Falls |Terrain: waterfall |  Distance: 8.8 miles, roundtrip";

        }else if(terrain.value === "mountain" && selectedDistance === "2-5 mile or less"){
            var textResult = "I hike longer hikes, sorry!";

        }else if(terrain.value === "mountain" && selectedDistance === "2-5 miles"){
            var textResult = "Rattlesnake Ledge |Terrain: mountain |  Distance: 5.0 miles, roundtrip";

        }else if(terrain.value === "mountain" && selectedDistance === "5+ miles"){
            var textResult = "Burroughs Mountain [Sunrise at Mt. Rainier] |Terrain: " +
                "mountain |  Distance: 7.4 miles, roundtrip";
        }else{
            var textResult = "Fremont Lookout [Sunrise at Mt. Rainier] |Terrain: mountain " +
                "|  Distance: 5.6 miles, roundtrip";
            return hikeResults.innerHTML = textResult;
        }
    return hikeResults.innerHTML = textResult;

}


