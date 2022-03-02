// Basic for loop 

const scores = [
    94, 
    72, 
    17, 
    88, 
    97, 
    37,
    46, 
    100
];

const totalScoresCount = scores.length;
const passingGrade = 70; 

// Loop through all the scores 
for (let i=0; i < totalScoresCount; i++) {
    let currentLoopValue = scores[i];
    console.log("loop #" + i + " = " + currentLoopValue);
    if (currentLoopValue >=passingGrade) {
        console.log("You da best!");
    } else {
        console.log("mehhhh");
    }
}