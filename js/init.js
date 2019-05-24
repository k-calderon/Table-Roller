const startTime = Date.now();

const log = loggers.log;

const init = {
  testString: "testing",
  testFunction: () => log("test function fired"),
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
