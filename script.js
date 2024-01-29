// Wrap the entire contents of script.js inside of an IIFE
(function () {

  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  for (var i = 0; i < names.length; i++) {
    var firstLetter = names[i].charAt(0).toLowerCase();

    if (firstLetter === 'j') {
      // Use byeSpeaker's 'speak' method
      byeSpeaker.speak(names[i]);
    } else {
      // Use helloSpeaker's 'speak' method
      helloSpeaker.speak(names[i]);
    }
  }

})();
