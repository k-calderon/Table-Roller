const startTime = Date.now();

const log = loggers.log;

const init = {
  testString: "testing",
  testFunction: () => log("test function fired"),
  button: function (){
    document.getElementById("rollButton").addEventListener("click", function(){
      let result = roll.simpleTable(SAMPLESIMPLETABLE);
      document.getElementById("target").innerHTML = result;
    })
  },
  all: function() {
    for (let key in init) {
      if (
        !!init[key] &&
        init[key] !== init.all &&
        typeof init[key] === "function"
      ) {
        init[key]();
      }
    }
  }
};

init.all()