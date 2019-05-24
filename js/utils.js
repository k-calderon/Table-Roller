const utils = {
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