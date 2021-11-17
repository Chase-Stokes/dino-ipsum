import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import $ from 'jquery';
import DinoDNA from './dino.js'


("#gameStart").click(function() {
  let promise = DinoDNA.getDinosaur();
  promise.then(function(response) {
    const jsonParse = JSON.parse(response);
    // code
  }, function(error) {
    // some div .text("you is dumb as hell: ${error}");
  });
});

// function dinoToHangman();
let blankSpaces = []
let dino1 = jsonParse[0].split("")
dino1.forEach(function(){
  blankSpaces.push("__")
})
// count the number of letters in dino1 .push those into blankSpaces