"use strict";

// var loadTime = new Date.now() // this is busted

function log (msg) {
    // let now = new Date.now(); // this is busted
    // let timer = now - loadTime;
    // console.log(loadTime + "ms > "+ msg);
    console.log(msg);
};

// Generates a random number between the min and max. 
let randIntBetween = function (min, max) {    
    // Guard against non numbers
    if (typeof min !== "number" || typeof max !=="number"){
        log("A non-number was passed to randIntBetween.");
        return;
    };
    // Ensure only integers remain
    min = Math.floor(min);
    max = Math.floor(max);
    // Swap min and max with recursion if min > max
    if(min > max) {
        return randIntBetween(max, min);
    };
    // Generate a number between min and max!    
    return Math.floor(Math.random()*(max-min+1)+min);
};

// Takes an array and returns a random index of that array
let simpleTableRoll = function (arr){
    return arr[Math.floor(Math.random()*arr.length)];
};

let isObject = function (obj){
    if (!Array.isArray(obj) && typeof obj ==="object"){
        return true;
    } else {
        return false;
    };
};

// Takes an object for rngTable
let rangeTableRoll = function (rngTable, roll){
    let keys;
    let result = "Nothing."
    if (isObject(rngTable)){
        keys = Object.keys(rngTable)
    } else {
        return result;
    };
    // Limit i roll value and to 5000 to prevent infinite loops.
    for (let i = 0; i < keys.length && i <= roll && i <= 5000; i ++){
        let key = keys[i];
        let range = key.split("-")
        if (roll >= range[0] && roll <= range[1]){
            result = rngTable[key];
            break;
        };
    };
    return result;
};

let probabilityTableRoll = function (probTable, roll){
    let keys;
    let result = "Nothing.";
    let total = 0;
    let newRangeTable = {};

    // DRY this up
    if (isObject(probTable)){
        keys = Object.keys(probTable)
    } else {
        return result;
    };
    
    for (let i in probTable){
        let probability = Array.from(probTable[i]);
        total = total += parseInt(probability.shift());
    };

    /* Construct the new object in the range table format,
    then pass it to the range table roller */
    for (let j in probTable){
        // grab the key
        // convert it to a range
        // grab its paired value
        // assign both to newRangeTable
    }

    

    console.log(total);
}