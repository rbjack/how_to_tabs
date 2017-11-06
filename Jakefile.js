// Copyright (c) 2017 Richard Jackson. All rights reserved.
(function() {
  "use strict";

  var semver = require("semver");

  desc("Default build");
  task("default", ["version"], function() {
    console.log("\n\nBUILD OK");
  });

  desc("Check Node versions");
  task("version", function(){
    console.log("Checking Node version: .");
    let packageJson = require("./package.json");
    let expectedVersion = packageJson.engines.node;

    let actualVersion = process.version;
    if (semver.neq(expectedVersion, actualVersion)) {
      fail("Incorrect Node version: expected "+ expectedVersion +" but was "+ actualVersion);
    }
  });
}());
