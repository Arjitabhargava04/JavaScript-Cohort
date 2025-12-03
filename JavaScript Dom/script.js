/*

var h1= document.querySelector('h1')


// Changing HTML
h1.innerHTML = 'Prabhu Ki Maya'

h1.innerHTML = 'DOM PADLO GUYS ! YES GUYS ACCHE SE PDHNA SAB , SAB ACCHA HOGA'

// Changing CSS
 h1.style.color = 'crimson'

var box = document.querySelector('#box')
box.innerHTML = 'hey hey'

box.style.backgroundColor ='red'

*/
/*

var h1 = document.querySelector('h1')
var btn= document.querySelector('button')

btn.addEventListener('click', function() {

    h1.innerHTML = ' I am batman !'
    h1.style.color = 'red'
    h1.style.fontSize = '60px'
});
*/

var inc = document.querySelector('#inc')
var dec = document.querySelector('#dec')
var h1 = document.querySelector('h1')

var a= 0
inc.addEventListener('click', function() {
a++
h1.innerHTML = a
})
dec.addEventListener('click', function(){
    a--
    h1.innerHTML =a
})