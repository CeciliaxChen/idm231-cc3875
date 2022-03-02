var fruit = "apple";
console.log(fruit); // prints "Apple"
// User can re-declare 
// varaible using var 
var fruit = "pear";
console.log(fruit); // prints "Pear"

// let or const --> this is best practice 

// let ------------

let snack = "pizza";
console.log(snack); // print pizza 

let snack = "chips";
console.log (snack); // error because snack already = pizza 

snack = "chips";
console.log(snack); //print chips


// const -----------

const paulBirthday = "7/12";
console.log(paulBirthday); // print 7/12 

const paulBirthday = "7/22"; 
console.log(paulBirthday); // error 

paulBirthday = "12/22";
console.log(paulBirthday); //error 

//concatenate ---- 

let firstName = "Paul"; // print "PaulPhan"
let lastName = "Phan"; //  print "Paul and Phan;p"
console.log(firstName + lastName); // print "PaulPhan"
console.log(firstName + " " + lastName); // print "Paul Phan"

firstName = "Jervis";
lastName = "thompson"; 
console.log(firstName + " " + lastName); 

const one = "1";
console.log("one:" + one)


// String Interpolation -----------
/* string inerpolation, using template literals, allows us to include varibales and expressions in our strings, 
we can make multi-pline strings without the need for an escape character, 
we can use apostrophes and quotes easily. they can make our strings and therefore  
*/ 

let fullName = `${firstName} ${lastName}`; //prints Jervis THompson 
let greeting = `Hello ${fullName}!`; 
console.log (greeting); 