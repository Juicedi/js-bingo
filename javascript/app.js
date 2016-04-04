var sheetsInput = document.querySelectorAll(".sheets.input")[0];
var sheetsSubmit = document.querySelectorAll(".sheets.submit")[0];
var sizeInput = document.querySelectorAll(".size.input")[0];
var sizeSubmit = document.querySelectorAll(".size.submit")[0];
var scaleInput = document.querySelectorAll(".scale.input")[0];
var scaleSubmit = document.querySelectorAll(".scale.submit")[0];

var sheets = 0;
var size = 0;
var scale = 0;
var scaleNumberArray = [];

// all buttons will change variables and call a check function
// to see if variables are good enough to make tables
var readyInputs = function () {
    sheetsSubmit.addEventListener("click", function () {
        if (sheetsInput.value < 1) {
            document.getElementById("sheetsInputFail").innerHTML = "Number of sheets must be over 1";
        } else {
            sheets = sheetsInput.value;
            document.getElementById("sheetsInputFail").innerHTML = "";
            checkVariables();
        }
    });
    sizeSubmit.addEventListener("click", function () {
        if (sizeInput.value < 1) {
            document.getElementById("sizeInputFail").innerHTML = "Size must be over 1x1";
        } else {
            size = sizeInput.value;
            document.getElementById("sizeInputFail").innerHTML = "";
            checkVariables();
        }
    });
    scaleSubmit.addEventListener("click", function () {
        if (scaleInput.value < (size * size)) {
            document.getElementById("scaleInputFail").innerHTML = "scale must be bigger than (size x size)";
        } else {
            scale = scaleInput.value;
            document.getElementById("scaleInputFail").innerHTML = "";
            checkVariables();
        }
    });
};

// makes array of numbers 1-scale number
var checkVariables = function () {
    if (sheets > 0 && size > 0 && scale >= (size * size)) {
        for (var i = 0; i < scale; i++) {
            scaleNumberArray.push(i + 1);
        }
        document.getElementById("specs").style.display = 'none';
        makeBingoSheets();
    }
};

// creates bingo sheets
// first it will make div which contains all the number rows and then br to separate sheets
var makeBingoSheets = function () {
    
    // how many sheets
    for (var a = 0; a < sheets; a++) {
        
        var tempArray = scaleNumberArray.slice();
        var newSheet = document.createElement('div');
        var newBr = document.createElement('br');
        
        document.getElementById('sheets').appendChild(newSheet);
        document.getElementById('sheets').appendChild(newBr);
        
        // how many rows
        for (var b = 0; b < size; b++) {
            
            var newRow = document.createElement('p');
            var textRow = "";
            
            // how many numbers in a row
            for (var c = 0; c < size; c++) {
                var randomNumber = Math.floor((Math.random() * tempArray.length));
                textRow = textRow + tempArray[randomNumber] + " ";
                tempArray.splice(randomNumber, 1);
            }
            
            newRow.innerHTML = textRow;
            document.querySelectorAll("#sheets div")[a].appendChild(newRow);
        }
    }
};

readyInputs();