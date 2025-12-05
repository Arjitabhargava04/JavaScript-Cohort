// createElement : Element ko create karne ki method hai
/*
var h1 = document.createElement('h1') // matlb aapne ek element create kar diya hai

console.log(h1);

*/

/*
 var btn = document.querySelector('button'); // Selection of an element

  btn.addEventListener('click', function() {

        var h1 = document.createElement('div')

        h1.innerHTML = 'Hello from JS';
        console.log( h1 ) ;
});

*/

/* 

var btn = document.createElement('button')  // button create kiya

btn.innerHTML = 'download'

console.log(btn);

*/

/*
var btn = document.querySelector('button')

  btn.addEventListener('click', function(){

    var h1 = document.createElement('h1')
     console.log('hello');
  })

  */

var btn = document.createElement('h2')

btn.innerHTML = 'download'

var main = document.querySelector('main')

main.appendChild(btn)