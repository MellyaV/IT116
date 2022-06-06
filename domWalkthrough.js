//How we look at the full HTML document
//console.dir(document);

//We're running through the tree. We're accessing the dom through document.___ attribute
//console.log(document.domain);

//Accessing the URL through the console on the HTML page
//console.log(document.URL);

//Accessing the Title element through the DOM on the HTML page, running throught the tree
//console.log(document.title);

//Checking the doctype through the DOM, doctype = HTML
//console.log(document.doctype);

//Running through the tree to access everything in the header element
//console.log(document.head);

//Running through the tree to access everything in the body tag on the HTML page
//console.log(document.body);

//Listed out the entire document on the console, we're seeing the entire DOM
//console.log(document.all);

//entered the entire document and then passed onto a particualr tree element being the title
//console.log(document.all[10]);

//We just changed the text content for the specific object by stepping into the index number
//document.all[10].textContent = "Item Lister";

//Here we checked to see certain elements in the tree
//Here we checked how many forms we had in the DOM, we only have 1
//console.log(document.forms);

//We checked to see if we have any links
//console.log(document.links);

//We checked to see if we have any images
//console.log(document.images);

//////////////////////////////////////////////////////////////
//accessing the DOM with GETELEMENTBYID

//Here we accessed the header title with .getElementById
//console.log(document.getElementById('header-title'));

// created the object variable using the document function
//let headertitle = document.getElementById('header-title')

//used the .textcontent and .innertext sub functions to change the header of our created object
//headertitle.textcontent = "I'm Changing the Header";
//headertitle.innerText = "I'm Changing it Again"

//changed the text color to hot pink
//headertitle.style.color = 'hotpink';

////////////////////////////////////////////////////////////////
//GETELEMENTBYCLASSNAME

//Created the object to be passed in the console
//var items = document.getElementsByClassName('list-group-item');

//listed out every particular item
//console.log(items);

//went through the index of items to access the index of 1
//console.log(items[1])

//Changed the content of the item in the listed group
//item[1].textContent = 'Hello 2';

//Here are styling property attributes being used on the index of 0-2 of the listed items
//items[1].style.fontWeight = 'bold';
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
//QuerySelector

//var header = document.querySelector('#main-header');
//header.style.borderBottom = 'solid 4x hotpink';


//var input = document.querySelector('input');
//input.value = 'Changed the input box text';

//Declared the variable and used the document.queryselector to return?
//var submit = document.querySelector("input[type='submit']")
//submit.value = "SEND";

//
//var item = document.querySelector(".list-group-item");
//item.style.color = 'red';

//We're calling the last item of the list group items through the last-child element
//var lastitem = document.querySelector('.list-group-item:last-child');
//lastitem.style.color = 'blue'

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//QuerySelectorAll

//
var titles = document.querySelectorAll('.title');
console.log(titles);
titles[0].textContent = 'Hello Mellya'

//
var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even)');

//
for (var i=0; i<odd.length; i++) {
    odd[i].style.backgroundColor = 'pink';
    even[i].style.backgroundColor = 'lightblue';
    even[i].style.color = 'black'
}
