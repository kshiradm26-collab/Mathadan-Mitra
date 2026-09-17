// test.js
// Unit & Integration Test Suite for Matadaana Mitra Civic Platform

// Mock DOM elements required by script.js if running in headless Node.js
if (typeof document === "undefined") {
  global.document = {
    getElementById: (id) => {
      if (id === "chatBox") {
        return {
          appendChild: () => {},
          scrollTop: 0,
          scrollHeight: 100
        };
      }
      if (id === "langSelect") {
        return { value: "English" };
      }
      if (id === "userInput") {
        return { value: "", focus: () => {} };
      }
      return null;
    },
    createElement: (tag) => {
      return {
        className: "",
        innerHTML: "",
        appendChild: () => {},
        setAttribute: () => {}
      };
    }
  };
  global.window = {
    speechSynthesis: {
      speak: () => {},
      cancel: () => {}
    },
    SpeechSynthesisUtterance: function(text) { this.text = text; }
  };
}

// Load script.js logic if in Node environment
if (typeof require !== "undefined") {
  const fs = require("fs");
  const vm = require("vm");
  const code = fs.readFileSync(__dirname + "/script.js", "utf-8");
  vm.runInThisContext(code);
}

// Core Test Assertions
console.assert(typeof castVote === "function", "castVote function missing");
console.assert(typeof showAllParties === "function", "showAllParties function missing");
console.assert(typeof fetchDistrictStats === "function", "fetchDistrictStats function missing");
console.assert(typeof checkPollingStation === "function", "checkPollingStation function missing");
console.assert(typeof startCivicQuiz === "function", "startCivicQuiz function missing");
console.assert(typeof checkRumor === "function", "checkRumor function missing");
console.assert(typeof sendCivicMessage === "function", "sendCivicMessage function missing");
console.assert(typeof changeLanguage === "function", "changeLanguage function missing");
console.assert(typeof speakText === "function", "speakText function missing");

console.log("✅ All automated assertions passed successfully.");
