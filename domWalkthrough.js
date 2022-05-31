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

var items = document.getElementsByClassName('list-group-item');

console.log(items);
console.log(items[1])

//Styling proerty attributes through the variable

items[1].style.fontWeight = 'bold';
items[1].style.backgroundColor = 'pink';
items[1].textContent = 'Alpha Kappa Alpha';
items[1].style.color = 'green';

items[0].textContent = "Delta Sigma Theta"
items[0].style.fontWeight = 'bold';
items[0].style.backgroundColor = 'red';
items[0].textContent = 'Oooop - Coleman Love';
items[0].style.color = 'white';

items[2].style.fontWeight = 'bold';
items[2].style.backgroundColor = 'blue';
items[2].textContent = 'Zee Phi - Zeta Phi Beta';
items[2].style.color = 'white';