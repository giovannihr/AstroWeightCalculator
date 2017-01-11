var planets = [ //array of 11 objects
    { planet: 'Sun', gravity: 27.9 },
    { planet: 'Mercury', gravity: 0.377 },
    { planet: 'Venus', gravity: 0.9032 },
    { planet: 'Earth', gravity: 1 },
    { planet: 'Moon', gravity: 0.1655 },
    { planet: 'Mars', gravity: 0.3895 },
    { planet: 'Jupiter', gravity: 2.640 },
    { planet: 'Saturn', gravity: 1.139 },
    { planet: 'Uranus', gravity: 0.917 },
    { planet: 'Neptune', gravity: 1.148 },
    { planet: 'Pluto', gravity: 0.06 }
];




//-----------------------------
/*
Title functions
*/
//-----------------------------


function reverseString(text) {
    // write code here
    var newString = '';

    for (var i = text.length - 1; i >= 0; i--) {

        newString += text[i];


    }

    return newString
}


function reverseTitleElement() {

    var title = document.getElementById("title");
    title.innerHTML = reverseString(title.innerHTML);

}


reverseTitleElement();

//-----------------------------
/*
Select Element Options functions
*/
//-----------------------------

/*var loopPlanetsArray = function() {

        for (var i = 0; i < planets.length; i += 1) {
            console.log(planets[i];
            }

        }*/




function populateOptionsElement() {

    var selectElement = document.getElementById("selectElement");
    for (var i = 0; i < planets.length; i += 1) {

        var optionElement = document.createElement("option");
        selectElement.appendChild(optionElement);
        var planetObject = planets[i];
        optionElement.innerHTML = planetObject.planet;
        optionElement.setAttribute('value', planetObject.planet);
        // console.log(planets[0].planet);
    }

}


populateOptionsElement();
//console.log(planets[0].planet)

//--------------
/*
Calculate Weight function
*/
//--------------

function calculateWeight() {

    var resultsObject = {};
    var newPlanetWeight;
    var inputElement = document.getElementById("inputElement");
    var inputElementValue = inputElement.value;
    var selectElement = document.getElementById("selectElement");
    var selectElementIndex = selectElement.selectedIndex;
    var newPlanetGravity;
    var planetName;

    for (var i = 0; i < planets.length; i += 1) {

        //if else statement to catch index value
        if (selectElementIndex === i) {

            newPlanetGravity = planets[i].gravity;

            planetName = planets[i].planet;
            break;

        }
        /*else {
    console.log('error ocurred on calculateWeight function')
}
*/


    }

    newPlanetWeight = inputElementValue * newPlanetGravity;
    newPlanetWeight = roundToTwoDecimals(newPlanetWeight);



    resultsObject['earthWeight'] = inputElementValue;
    resultsObject['planetSelected'] = planetName;
    resultsObject['newPlanetWeight'] = newPlanetWeight;



    return resultsObject;
}


//-------------
/*
Populate empty paragraph function
*/
//-------------

function populateResultsParagraph() {

    var paragraphElement = document.getElementById("resultsParagraph");
    var earthWeight = calculateWeight().earthWeight;
    var planetSelected = calculateWeight().planetSelected;
    var newPlanetWeight = calculateWeight().newPlanetWeight;


    var message = "Your weight on Earth is " + earthWeight + ", but if you travelled to " + planetSelected + " your weight would be " + newPlanetWeight;
    // your weight on earth is $inputweight but is you travelled to $planetname, your weight would be $newplanetweight
    paragraphElement.innerHTML = message;

}


//
/*
Round a number to two decimals function
*/
//

function roundToTwoDecimals(num) {

    var result = Math.round(num * 100) / 100;

    return result;



}
