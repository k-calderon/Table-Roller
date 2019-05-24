"use strict";

let utils = {
  helloWorld: function() {
    console.log("hello world! this is a utility function.");
  },
  log: function(msg) {
    let now = Date.now().valueOf();
    console.log(now - startTime + "ms > " + msg);
    // console.log(msg);
  },
  isObject: function(obj) {
    if (!Array.isArray(obj) && typeof obj === "object") {
      return true;
    } else {
      return false;
    }
  }
};

// Generates a random number between the min and max.
let randIntBetween = function(min, max) {
  // Guard against non numbers
  if (typeof min !== "number" || typeof max !== "number") {
    log("A non-number was passed to randIntBetween.");
    return;
  }
  // Ensure only integers remain
  min = Math.floor(min);
  max = Math.floor(max);
  // Swap min and max with recursion if min > max
  if (min > max) {
    return randIntBetween(max, min);
  }
  // Generate a number between min and max!
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// Takes an array and returns a random index of that array
let simpleTableRoll = function(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

let roll = {
  simpleTable: function(obj) {
    return simpleTableRoll(obj["table"]);
  },
  rangeTable: function(obj) {
    // do things
    let rangeMin = obj["meta"]["rangeMin"];
    let rangeMax = obj["meta"]["rangeMax"];
    let rollResult = randIntBetween(rangeMin, rangeMax);
    let table = obj["table"];
    for (let i = 0; i < table.length; i++) {
      if (rollResult >= table[i][0] && rollResult <= table[i][1]) {
        return table[i][2];
      }
    }
    return "not found";
  },
  probabilityTable: function(obj) {
    // find the maximum range
    let table = obj["table"];
    let rangeMax = 0;
    table.forEach(function(entry) {
      rangeMax += entry[0];
    });
    // roll the dice
    let rollResult = randIntBetween(1, rangeMax);
    // figure out which result wins
    for (let i = 0; i < table.length; i++) {
      // if the roll is less than the probability of the entry, return it
      if (rollResult <= table[i][0]) {
        return table[i][1];
      }
      // otherwise subtract the probability of the entry from the roll.
      rollResult -= table[i][0];
    }
    return "not found";
  }
};
