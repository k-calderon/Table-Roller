"use strict";

function randIntBetween(min, max) {
    if(min > max) {
        var tempMin = max;
        max = min;
        min = tempMin;
    };
    /* return a random number between the min and max. The min 
    and the max do not have to start with 1 */
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
    
};
var render = {
    result : function() {}
};
var test = function() {
    // var table = JSON.parse()
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
    // target.html = "<p>Testing sample-table. Value for key 1 is "
};

/*function init (){
    console.log("init fired");
}();*/

({console.log("anonymous function fired!")})()