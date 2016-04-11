"use strict";

// generates an array with number from 1 to scale endpoint
function genereteScaleArray(scaleEndpoint, scaleNumberArray) {
    for (var i = 0; i < scaleEndpoint; i++) {
        scaleNumberArray.push(i + 1);
    }
}

// generate one row for the grid
function generateRow(rowSize, numberArray) {
    var row = [];
    for (var i = 0; i < rowSize; i++) {
        var randomNumber = Math.floor((Math.random() * numberArray.length));
        row.push(numberArray[randomNumber]);
        numberArray.splice(randomNumber, 1);
    }
    return row;
}

// render a 2d bingo grid
function generateGrid(rowSize, scaleEndpoint, scaleNumberArray) {
    if (rowSize > 2) {
        if (scaleEndpoint > rowSize * rowSize) {
            genereteScaleArray(scaleEndpoint, scaleNumberArray);
            var grid = [];
            var tempArray = scaleNumberArray.slice();
            for (var i = 0; i < rowSize; i++) {
                grid.push(generateRow(rowSize, tempArray));
            }
            return grid;
        } else {
            console.log('Scale has to be larger than (rowSize * rowSize)');
        }
    } else {
        console.log('Row size has to be more than 2.');
    }
}

// print bingo grids to console
function generateGrids(players, size, scale) {
    if (players > 0) {
        for (var i = 0; i < players; i++) {
            var scaleNumberArray = [];
            console.log(generateGrid(size, scale, scaleNumberArray));
        }
    } else {
        console.log('There has to be atleast 1 player.');
    }
}

generateGrids(2, 5, 26);