(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'bethast'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'bethast'.");
    }root.bethast = factory(typeof bethast === 'undefined' ? {} : bethast, kotlin);
  }
}(this, function (_, Kotlin) {
  'use strict';
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  function main() {
    println(greeting('bethast'));
  }
  function greeting(name) {
    return 'Hello, ' + name;
  }
  _.main = main;
  _.greeting_61zpoe$ = greeting;
  main();
  Kotlin.defineModule('bethast', _);
  return _;
}));

//# sourceMappingURL=bethast.js.map
