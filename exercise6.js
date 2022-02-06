//window.onload = function(){
setTimeout(() => {
let mainTitle = document.getElementById('firstTitle');
mainTitle.style.color = "red";
console.log(mainTitle);
}, 5000);

var divElements = document.querySelector('div'); // any html element
console.log(divElement);
console.log(divElement.attributes);
console.log(divElement.getAttribute('class'));

console.log('Div element has Id? :' +  divElement.hasAttribute('id'));

var hasId = divElement.hasAttribute('id');

if(hasId == false){
    divElement.setAttribute('id', 'firstDiv');
}
console.log('Div element has Id? :' +  divElement.hasAttribute('id'));


var allDivElements = documents.querySelectionAll('div');
console.log(allDivElements);

//alert(mainTitle);

//console.log(mainTitle);
//}