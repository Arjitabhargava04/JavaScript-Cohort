/*
var x =1;      // var is function scoped
 {

    var x=2;

 }

 console.log(x);
 */
/*
let a = 10;  //  let is braces scoped
{
    let a=20;
    console.log("Inside:", a);
}

console.log("Outside :", a);

*/

// Data types (Data  ka Type)-- (Primitives:  aisi sari values jinko copy karne par tumhe ek real copy mil jaye = String , number, boolean,null
// undefined,  symbol, bigint )  (Reference: inko copy karne pr real copy nhi millegi but aapko reference milega parent ka = arrays,  objects, functions ([], objects, functions))


// null ka matlb hai aapne jaan boojh kar koi value nahi di
// undefined ka matlb ki apne ek variable banaya aur usey value nhi di to jo value by default mili wo hai undefined


// symbol ->  unique immutable value 

/* future main hum koi libraries use karenge ab ish case m un libraries m kai bar kuch fieald hoti hai jinse similar hum bhi 
 banaa dete hai aur galti se hmari banai huyi fields us library ki original fields ko chnage kar deta hai
*/

/*
// Arithmetic, comparison, logical, assignment, unary, ternary

Arithmetic : +  -   *   /    %   **
Comparison:  = ,  ==  (Not strict comparison),  === (Strict),   != (Not strict),  !== (Strict),    >=,     <=,   <   >
Logical:   &&,   ||
?:

1    +      2 =3
"ha"  + "rsh"   =  "harsh"

12 == 13   // false
12 ==  "12"  // true
12 ===  "12"   // false


*/
let skills = ["js", "HTML"];
console.log(typeof skills);