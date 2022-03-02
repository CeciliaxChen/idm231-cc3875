// basic function without parameters
function calculateTipOfBill() {
    console.log("calculateTipOfBill"); 
}

calculateTipOfBill();
// to call any code in js 
// you call the name of it 



// function with parameters 

function calculateTipOfBill(total, tipPercentage) {
    // we need to know the total of the bill 
    // percentage to tip 

    let percentage = tipPercentage * .01; // 20 --> .2 
    // above, we converted the percentage to decimal form

    let tip = total * percentage; // $100 * .2 = $20 
    //calculate the tip by doing math like $100 * .2 = $20 
    //goal = return the amount of money I should tip 
   
    return tip; // 20 
}

let totalTip = calculateTipOfBill(100, 20);
console.log(`You should tip ${tip}`); 
calculateTipOfBill(50, 30);
calculateTipOfBill(40, 10);



// Here we don't need a return or any action done back --> go get the groceries 

function emailJervo () {
    // write code to email Jervo 
}

emailJervo (); 

// old way 
function printHello() {
    console.log("Hello");
}


// new way --> BETTER USE THIS 
printHello = () => {
    // console.log("Hello"); 
    return "Hello World!"; 
}; 

let example = printHello(); 
console.log(example);




printHello = () => {
    console.log("Hello");
  };






function captureFormInfo () // for Zodiac 


function calculateZodiacSign (birthday, fullName) => {
    return "Hello";
}



// function calculateTipOfBill() {
//   console.log("calculateTipOfBill");
// }

// calculateTipOfBill();

function calculateTipOfBill(total, tipPercentage) {
  // convert the percentage to decimal form
  let percentage = tipPercentage * 0.01; // 20 -> .2
  let tip = total * percentage; // 100 * .2 = 20
  return tip; // 20
}
// calculateTipOfBill(50, 30);
// calculateTipOfBill(40, 10);
let totalTip = calculateTipOfBill(100, 20);
console.log(`You should tip $${totalTip}`);

function emailJervo() {
  // write code to email jervo
}

emailJervo();

printHello = () => {
  // console.log("Hello");
  return "Hello";
};

let example = printHello();
console.log(example);










// Copied from Paul's Github




// function calculateTipOfBill() {
//   console.log("calculateTipOfBill");
// }

// calculateTipOfBill();

function calculateTipOfBill(total, tipPercentage) {
    // convert the percentage to decimal form
    let percentage = tipPercentage * 0.01; // 20 -> .2
    let tip = total * percentage; // 100 * .2 = 20
    return tip; // 20
  }
  // calculateTipOfBill(50, 30);
  // calculateTipOfBill(40, 10);
  let totalTip = calculateTipOfBill(100, 20);
  console.log(`You should tip $${totalTip}`);
  
  function emailJervo() {
    // write code to email jervo
  }
  
  emailJervo();
  
  printHello = () => {
    // console.log("Hello");
    return "Hello";
  };
  
  let example = printHello();
  console.log(example);