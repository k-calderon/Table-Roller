"use strict";

var testJSON = JSON.parse(sampleTable);
function randIntBetween(min, max) {
    /* return a random number between the min and max. The min 
    and the max do not have to start with 1 */
    if(min > max) {
        return Math.floor(Math.random()*(min-max+1)+max)
    };    
    return Math.floor(Math.random()*(max-min+1)+min);
};
var roll = {
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
var handlers = {
    getRange: function() {        
        var target = document.getElementById("target")
        target.innerHTML = "";
        for (var key in sampleTable) {
            if (sampleTable.hasOwnProperty(key)) {
                if (key !== "meta") {
                    console.log(sampleTable[key]);
                    target.innerHTML += "<p>" + sampleTable[key] + "</p>";
                };
            };
        };            
    }
};
var render = {
    result : function() {}
};
var test = function(roll) {
    // var table = JSON.parse()
    var target = document.getElementById("target"),
        minRange = 0,
        maxRange = 0,
        parseKeyValue = function (key) {
            var keyMin = "",
                keyMax = "",                
                keyMaxToggle = false;
            for (var i= 0; i < key.length; i++) {                    
                if (key[i] !== "-") {
                    !keyMaxToggle ? keyMin += key[i] : keyMax += key[i];
                } else {
                    keyMaxToggle = !keyMaxToggle;
                };
            };
            keyMin = parseInt(keyMin);
            keyMax = parseInt(keyMax);
            var result = [keyMin, keyMax];
            return result
        };
    target.innerHTML = "";
    for (var key in sampleTable) {
        if (sampleTable.hasOwnProperty(key)) {
            if (key !== "meta") {
                /* BEGIN broken section */
                var test = sampleTable[key],
                    test2 = sampleTable[1], //sampleTable[1] returns undefined
                    test3 = sampleTable[sampleTable.length]; // sampleTable[sampleTable.length] returns undefined
                if (sampleTable[key] === sampleTable[1]) {
                    minRange = min;
                } else if (sampleTable[key] === sampleTable[sampleTable.length]){
                    maxRange = max;
                };                     
                /* END broken section */   
            };
        };
    };
    var roll = randIntBetween(minRange, maxRange);
    for(var key in sampleTable) {
        if (key !== "meta"){
            var keyRange = parseKeyValue(key);
            if (keyRange[0] <= roll && roll <= keyRange[1]) {
                console.log(roll);
                console.log(sampleTable[key]);
                target.innerHTML = "";
                target.innerHTML += "<p>" + sampleTable[key] + "</p>";
            };
        };
    };
    
};
