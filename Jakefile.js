// Copyright (c) 2017 Richard Jackson. All rights reserved.
(function() {
  "use strict";

  const EXPECTED_NODE_VERSION = "v6.11.5";

  desc("Default build");
  task("default", ["version"], function() {
    console.log("\n\nBUILD OK");
  });

  desc("Check Node versions");
  task("version", function(){
    console.log("Checking Node version: .");

    let actualVersion = process.version;
    if (actualVersion !== EXPECTED_NODE_VERSION) {
      fail("Incorrect Node version: expected EXPECTED_NODE_VERSION");
    }
  });
}());
