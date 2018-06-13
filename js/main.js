"use strict";

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
    var target = document.getElementById("target")
    target.innerHTML = "";
    for (var key in sampleTable) {
        if (sampleTable.hasOwnProperty(key)) {
            if (key !== "meta") {
                var min = "",
                    max = "",
                    result = "",
                    maxToggle = false;
                for (var i= 0; i < key.length; i++) {                    
                    if (key[i] !== "-") {
                        !maxToggle ? min += key[i] : max += key[i];
                    } else {
                        maxToggle = !maxToggle;
                    };
                }
                if ((parseInt(min)) <= roll <= (parseInt(max))) {
                    console.log(sampleTable[key]);
                };
                //target.innerHTML += "<p>" + sampleTable[key] + "</p>";
            };
        };
    };    
    // target.html = "<p>Testing sample-table. Value for key 1 is "
};

/*function init (){
    console.log("init fired");
}();*/

/*({console.log("anonymous function fired!")})()*/