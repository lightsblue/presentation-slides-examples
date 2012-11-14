define(function (require) {
  'use strict';

  var _ = require('underscore'),
    obj,
    obj2,
    MyClass;
  
  ////////////////////////////////////////////////////////////////////////////////
  //
  // object literal
  //
  ////////////////////////////////////////////////////////////////////////////////

  obj = {
    name: 'BSS'
  };

  obj.hello = function () { console.log('hello ' + this.name); };
  obj.hello();


  ////////////////////////////////////////////////////////////////////////////////
  //
  // constructor function
  //
  ////////////////////////////////////////////////////////////////////////////////

  MyClass = function MyClass(name) {
    this.name = name;
  };

  MyClass.prototype = obj;
    
  obj2 = new MyClass('bluefin');
  obj2.hello();

  ////////////////////////////////////////////////////////////////////////////////
  //
  // self - this
  //
  ////////////////////////////////////////////////////////////////////////////////

  obj2.helloRepeatedly = function (n) {
    var self = this;
    _(n).times(function () {
      self.hello();
    });
  };

  obj2.name = 'boston';
  obj2.helloRepeatedly(5);

});