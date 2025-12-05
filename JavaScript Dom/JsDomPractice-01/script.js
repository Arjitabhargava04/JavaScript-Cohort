
/*
var h2 = document.querySelector('h2');

h2.addEventListener('click', function(){

    h2.innerHTML = "Hello Hello Hello !!!!";
    h2.style.color = 'blue';
    h2.style.backgroundColor = 'white';
})
    */
/*
var a = Math.floor(Math.random()* 50);
console.log(a);
*/

var bulb = document.querySelector("#bulb");
var button =  document.querySelector("button");

var flag = 0;
button.addEventListener('click', function (){

    if(flag == 0){
        bulb.style.backgroundColor = 'yellow';

        console.log('bulb on');
        flag = 1;
    }

    else{
        bulb.style.backgroundColor = 'transparent';
        console.log('bulb off');
        flag =0;
    }
})