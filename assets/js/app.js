//alert('hello');
"use strict";
let cl = console.log;
//title >>phone image pic Gallary


//1. select element
const ImgSelector = document.getElementById('ImgSelector');
cl(ImgSelector);

const all = [...document.querySelectorAll('.all')];
cl(all);


// #################

//if h3 element added by using prepend by js

// const info = document.getElementById("info");
// cl(info);

// const addheadingElement = document.createElement('h3');
// cl(addheadingElement);

// addheadingElement.className= 'col-sm-12';
// addheadingElement.id = 'heading';  
// addheadingElement.innerHTML='Pick your favorite mobile phone';
// cl(addheadingElement);

// info.prepend(addheadingElement);

// addheadingElement.style.color='#ffffff';
// addheadingElement.style.padding='2px';


//2. function

const onchangeImg = eve =>{
  let getClass = "." + eve.target.value;
  cl(getClass);

  all.forEach(div => div.classList.add('d-none'));
  
  let getdiv = [...document.querySelectorAll(getClass)];
  getdiv.forEach(div => div.classList.remove('d-none'));
}

//3. bind event
ImgSelector.addEventListener('change', onchangeImg);


