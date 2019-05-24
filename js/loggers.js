const loggers = {
  log: function() {
    let args = [...arguments];
    let now = Date.now().valueOf();
    console.log(`${now - startTime}ms>, ${args}`);
  }
};

exports = {
  loggers: loggers
};
