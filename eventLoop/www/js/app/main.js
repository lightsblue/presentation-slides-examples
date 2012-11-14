define(function (require) {
  var start = new Date().getTime();
  
  console.log('before sleep');
  
  // here's a bit of code that takes 5 seconds to run
  // which causes the app (and scrolling) to freeze
  // for that long, as it starves all other rendering
  while (new Date().getTime() < start + 5000) {

  }
  
  console.log('after sleep');
});