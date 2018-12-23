"use strict";

function log (msg) {
    console.log(msg);
};

let randIntBetween = function (min, max) {
    /* return a random number between the min and max. The min 
    and the max do not have to start with 1 */
    if(min > max) {
        return Math.floor(Math.random()*(min-max+1)+max)
    };    
    return Math.floor(Math.random()*(max-min+1)+min);
};

let roll = {
    /* Usage examples:
        roll.d4();
        roll.d20();
        roll.dX(25);
    */
    "d4" : function() {
        return randIntBetween(1, 4);
    },
    "d6" : function() {
        return randIntBetween(1, 6);
    },
    "d8" : function() {
        return randIntBetween(1, 8);
    },
    "d10" : function() {
        return randIntBetween(1, 10);
    },
    "d12" : function() {
        return randIntBetween(1, 12);
    },
    "d20" : function() {
        return randIntBetween(1, 20);
    },
    "d30" : function() {
        return randIntBetween(1, 30);
    },
    "d100" : function() {
        return randIntBetween(1, 100);
    },
    "dX" : function(X) {
        return randIntBetween(1, X);
    }
};

function validateTable(tableData) {
    var tableDataValid = false,
        metaValid = false,
        tableValid = false,
        tableType;
    if (tableData) {        
        log("Table data found.")
        log("Validation not fully supported at this time")        
        if (tableData.meta) {
            log("Found meta data.");
            log("Validating table type.");
            if (tableData.meta.type) {
                log("Table type found.");
                switch (tableData.meta.type){
                    case "simple":
                        tableType = "simple"
                        log("Found a simple table.");                        
                        break;
                    case "probability":
                        tableType = "probability";
                        log("Found a probability table.");
                        // ***To-do: more code here***
                        break;
                    default:
                        log("Table type is not specified or not supported.");
                }
            } else {
                log("No table type;")
            }
            // ***To-do: More code to validate the table here***
        } else {
            log("No meta data in this table.");
        }
        // ***To-do: More code to validate the table here***
    } else {
        log("No table to handle");
    };   
    
    // ***To-do: further validation

    if (metaValid && tableValid) {
        tableDataValid = true;
    }
    return tableDataValid;
}

function rollOnTable(tableData, roll) {
    var rollIsInRange,
    tableRangeMin,
    tableRangeMax,
    tableType;
    //Handle validating the table here
    if (tableData) {
        validateTable(tableData);
    };
    
    // Beyond this point assumes a valid table

    // Setting the range for rollOnTable,  
    log("Finding the range.");
    switch (tableData.meta.type){
        case "simple":
            tableType = "simple"
            log("Setting range for simple table.");
            tableRangeMin = tableData.meta.rangeMin;
            tableRangeMax = tableData.meta.rangeMax;
            // ***To-do: more code here***
            break;
        case "probability":
            log("It is a probability table.");
            // ***To-do: more code here***
            break;
        default:
            log("Table type is not specified or not supported.");
    }

    /* ***check to see if there's a roll, ***
        if there's not, roll one randomly based on the range and table type
        if there's a roll, check to see if the roll is within table's range, if not, roll a new one randomly as above
        **************************************
    */

    // Beyond this point assumes a valid roll.
    
    // ***start comparing the roll to the table here***
    // DO THIS NEXT DO THIS NEXT DO THIS NEXT DO THIS NEXT
    roll = randIntBetween(tableRangeMin, tableRangeMax);
    log ("Roll: " + roll);
    (function (table, roll) {
        for (var i = 0; i < table.length; i += 2) {
            if (roll >= table[i][0] && roll <= table[i][1]) {
                log("Result: " + table[i+1]);
            }
        }
      }(tableData.table, roll));
      
};




// Grabs the first element of the 
// tableRangeMin = tableData.table[0][0];
// tableRangeMax = (function (table) {
//     var result = table[table.length - 2][1];
//     return result;
//   }(tableData.table)); 





// var handlers = {
//     getRange: function() {        
//         var target = document.getElementById("target")
//         target.innerHTML = "";
//         for (var key in sampleTable) {
//             if (sampleTable.hasOwnProperty(key)) {
//                 if (key !== "meta") {
//                     console.log(sampleTable[key]);
//                     target.innerHTML += "<p>" + sampleTable[key] + "</p>";
//                 };
//             };
//         };            
//     }
// };
// var render = {
//     result : function() {}
// };
// var test = function(roll) {
//     // var table = JSON.parse()
//     var target = document.getElementById("target"),
//         minRange = 0,
//         maxRange = 0,
//         parseKeyValue = function (key) {
//             var keyMin = "",
//                 keyMax = "",                
//                 keyMaxToggle = false;
//             for (var i= 0; i < key.length; i++) {                    
//                 if (key[i] !== "-") {
//                     !keyMaxToggle ? keyMin += key[i] : keyMax += key[i];
//                 } else {
//                     keyMaxToggle = !keyMaxToggle;
//                 };
//             };
//             keyMin = parseInt(keyMin);
//             keyMax = parseInt(keyMax);
//             var result = [keyMin, keyMax];
//             return result
//         };
//     target.innerHTML = "";
//     for (var key in sampleTable) {
//         if (sampleTable.hasOwnProperty(key)) {
//             if (key !== "meta") {
//                 /* BEGIN broken section */
//                 var test = sampleTable[key],
//                     test2 = sampleTable[1], //sampleTable[1] returns undefined
//                     test3 = sampleTable[sampleTable.length]; // sampleTable[sampleTable.length] returns undefined
//                 if (sampleTable[key] === sampleTable[1]) {
//                     minRange = min;
//                 } else if (sampleTable[key] === sampleTable[sampleTable.length]){
//                     maxRange = max;
//                 };                     
//                 /* END broken section */   
//             };
//         };
//     };
//     var roll = randIntBetween(minRange, maxRange);
//     for(var key in sampleTable) {
//         if (key !== "meta"){
//             var keyRange = parseKeyValue(key);
//             if (keyRange[0] <= roll && roll <= keyRange[1]) {
//                 console.log(roll);
//                 console.log(sampleTable[key]);
//                 target.innerHTML = "";
//                 target.innerHTML += "<p>" + sampleTable[key] + "</p>";
//             };
//         };
//     };
    
// };
