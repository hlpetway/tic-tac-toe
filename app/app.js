"use strict";
var canvasClicked = require("./canvasClicked");

var app = function(){

  //Instanciate Arrays
  window.onload=function(){
    var painted = [];
    var content = [];
    var winningCombinations = [[0,1,2],[3,4,5],[6,7,8],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

    for(var i = 0; i <= 8; i++) {
    painted[i] = false;
    content[i] = "";
    }

    var canvas1 = document.getElemenById("canvas1");
    canvas1.addEventListener = ('onclick', canvasClicked(1));

    var canvas2 = document.getElemenById("canvas2");
    canvas2.addEventListener = ('onclick', canvasClicked(2));

    var canvas3 = document.getElemenById("canvas3");
    canvas3.addEventListener = ('onclick', canvasClicked(3));

    var canvas4 = document.getElemenById("canvas4");
    canvas4.addEventListener = ('onclick', canvasClicked(4));

    var canvas5 = document.getElemenById("canvas5");
    canvas5.addEventListener = ('onclick', canvasClicked(5));

    var canvas6 = document.getElemenById("canvas6");
    canvas6.addEventListener = ('onclick', canvasClicked(6));

    var canvas7 = document.getElemenById("canvas7");
    canvas7.addEventListener = ('onclick', canvasClicked(7));

    var canvas8 = document.getElemenById("canvas8");
    canvas8.addEventListener = ('onclick', canvasClicked(8));

    var canvas9 = document.getElemenById("canvas9");
    canvas9.addEventListener = ('onclick', canvasClicked(9));

    module.exports.painted = painted;
    module.exports.content = content;
    module.exports.winningCombinations = winningCombinations;

  };

};

