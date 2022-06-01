//console.dir(document);
//We're running through the tree. We're accessing the dom through document.___ attribute
//console.log(document.domain);
//
//console.log(document.URL);
//
//console.log(document.title);
//
//console.log(document.doctype);
//
//console.log(document.head);
//
//console.log(document.body);
//Listed out the entire document on the console
//console.log(document.all);
//entered the entire document and passed onto a particualr index
//console.log(document.all[10]);
//
//document.all[10].textContent = "Item Lister";

//
//console.log(document.forms);
//console.log(document.links);
//console.log(document.images);

//////////////////////////////////////////////////////////////
//accessing the DOM with GETELEMENTBYID

//console.log(document.getElementById('header-title'));

// Creaton of an object variable using the document function.
//let headertitle = document.getElementById('header-title')

//
//headertitle.textcontent = "I'm Changing the Header";
//headertitle.innerText = "I'm Changing it Again"

//headertitle.style.color = 'hotpink';

////////////////////////////////////////////////////////////////
//GETELEMENTBYCLASSNAME

//var items = document.getElementsByClassName('list-group-item');

//console.log(items);
//console.log(items[1])

//Styling proerty attributes through the variable

//tems[1].style.fontWeight = 'bold';
//items[1].style.backgroundColor = 'pink';
//items[1].textContent = 'Porto';
//items[1].style.color = 'brown';

//tems[0].style.fontWeight = 'bold';
//items[0].style.backgroundColor = 'brown';
//items[0].textContent = 'Me';
//items[0].style.color = 'white';

//items[2].style.fontWeight = 'bold';
//items[2].style.backgroundColor = 'blue';
//items[2].textContent = 'Bonito';
//items[2].style.color = 'pink';

//This is a counter which will loop all the way until 10
//for (let i = 1; i<= 10; i++) {
//    console.log(i);
//}

//This is a counter which will loop all the way until 20
//for (let i = 0; i <=20; i +=2) {
//    console.log(i);
//}

//This is a counter which will decrement by two
//for (let i = 100; i >= 0; i-=2) {
//    console.log(i);
//}

// incramenting through the for loop in the header
//for (var i = 0; i < items.length; i++) {

//    items[i].style.backgroundColor = 'pink';
//    items[i].style.color = 'green';
//    items[i].textContent = 'Me porto Bonito';
//}

//
//const Bonito = ['que', 'anda', 'pasando', 'aqui', 'no', 'entiendo', 'para', 'nada', 'ayuda']

//for (let i = 0; i < Bonito.length; i++){
//    console.log(i, Bonito[i]);
//}

/////////////////////////////////////////////////////////////////////////////////////////////////////
//GETELEMENTBYTAGNAME

//using document function to change elements by the tag name for list group item 1 
//var li = document.getElementsByTagName('li');

//console.log(li);
//console.log(li[1]);

//
//li[1].textContent = 'Hello 2'
//li[1].style.fontWeight = 'bold';
//li[1].style.backgroundColor = 'lavender';
//li[1].style.color = 'black';

//for( var i = 0; i < li.length; i++){

//    li[i].style.backgroundColor = 'lavender';
//    li[i].textContent = 'Me Porto Bonito';
//}

///////////////////////////////////////////////////////////////////////////////////////////////////////
//Query Selector

var header = document.querySelector('#main-header');
header.style.borderBottom = 'solid 4x hotpink';


var input = document.querySelector('input');
input.value = 'Changed the input box text';

//Declared the variable and used the document.queryselector to return?
var submit = document.querySelector("input[type='submit']")
submit.value = "SEND";

//
var item = document.querySelector(".list-group-item");
item.style.color = 'red';

//
var lastitem = document.querySelector('.list-group-item:last-child');
lastitem.style.color = 'blue'
