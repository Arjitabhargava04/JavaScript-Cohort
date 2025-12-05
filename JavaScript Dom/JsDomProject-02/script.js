 /*
 var h1 = document.querySelector('h1')
h1.addEventListener('click', function(){
   
h1.innerHTML = "Let's  Go ! ! !"

 h1.style.color ='red'
h1.style.backgroundColor = 'royalblue' 

})
*/

// Math.random() : ek method h jiski help se aap random no genrate kar sakte ho, Math.random ki range o se 1 hoti hai

/*
var a= Math.random()*100

var b= Math.floor(a)
console.log(b);

*/
/*
var a = Math.floor(Math.random()*100)
console.log(a);
*/
/*
var r = Math.random()*100

console.log(r);
*/
/*

var btn = document.querySelector('button')
var box = document.querySelector('#box')

btn.addEventListener('click', function(){
   // console.log('hello');
var c1 = Math.floor(Math.random()* 255)
var c2= Math.floor(Math.random()* 255)
var c3= Math.floor(Math.random()* 255)
// console.log(c1);

box.style.backgroundColor = `rgb(${c1}, ${c2}, ${c3})`
})
*/
/*
var arr= ['vedant', 'abhi', 'souvik', 'sumit', 'ankit', 'satvik']

var a = Math.floor(Math.random() * arr.length)

console.log(arr[a]);

*/

var arr = [
   {
      team : 'CSK',
      primary: 'Yellow',
      secondary: 'Blue'
   },
   {
      team: 'RCB',
      primary: 'Red',
      secondary: 'black'
   },
   {
      team: 'MI',
      primary: 'Blue',
      secondary: 'Gold'
   },
   {
      team: 'KKR',
      primary: 'Purple',
      secondary: 'Gold'
   }
]

var a =  Math.floor(Math.random()*arr.length)

console.log(arr[a]);

btn.addEventListener('click', function(){

   var num = Math.floor(Math.random()*arr.length)

   console.log(arr[num].team);

})