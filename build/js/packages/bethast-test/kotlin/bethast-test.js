(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'bethast', 'kotlin-test'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('bethast'), require('kotlin-test'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'bethast-test'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'bethast-test'.");
    }if (typeof bethast === 'undefined') {
      throw new Error("Error loading module 'bethast-test'. Its dependency 'bethast' was not found. Please, check whether 'bethast' is loaded prior to 'bethast-test'.");
    }if (typeof this['kotlin-test'] === 'undefined') {
      throw new Error("Error loading module 'bethast-test'. Its dependency 'kotlin-test' was not found. Please, check whether 'kotlin-test' is loaded prior to 'bethast-test'.");
    }root['bethast-test'] = factory(typeof this['bethast-test'] === 'undefined' ? {} : this['bethast-test'], kotlin, bethast, this['kotlin-test']);
  }
}(this, function (_, Kotlin, $module$bethast, $module$kotlin_test) {
  'use strict';
  var greeting = $module$bethast.greeting_61zpoe$;
  var assertEquals = $module$kotlin_test.kotlin.test.assertEquals_3m0tl5$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var test = $module$kotlin_test.kotlin.test.test;
  var suite = $module$kotlin_test.kotlin.test.suite;
  function GreetingTest() {
  }
  GreetingTest.prototype.testGreeting = function () {
    assertEquals(greeting('World'), 'Hello, World');
  };
  GreetingTest.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GreetingTest',
    interfaces: []
  };
  _.GreetingTest = GreetingTest;
  suite('', false, function () {
    suite('GreetingTest', false, function () {
      test('testGreeting', false, function () {
        return (new GreetingTest()).testGreeting();
      });
    });
  });
  Kotlin.defineModule('bethast-test', _);
  return _;
}));

//# sourceMappingURL=bethast-test.js.map
