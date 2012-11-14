define(function (require) {

  var one = 5;
  
  function print () {

    console.log('one', one); // surprised that this logs undefined?

    var one = 10;

    console.log('one', one);  
  }
  
  print();

  
});