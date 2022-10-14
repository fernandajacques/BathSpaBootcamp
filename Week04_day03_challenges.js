// Task 1

// function letterFinder(word, match) {

//     // console.log(word.indexOf(match));

//     // Task 2
//     count = 0
//     for (let i = 0; i<word.length; i++){

//         // Task 3
//         if (word[i] == match){
//             // console.log(`It is the same letter: ${word[i]} = ${match}`);
//             // Task 4
//             console.log(`Found the ${match} at ${i}`)
//         } else {
//             // Task 5
//             console.log(`---No match found at ${i}`)
//         }
//         count++;
//     }
// }

// letterFinder("Fernanda", "a");

// Challenge 1

// function bmiCalculator(weight, height){
//     let bmi = weight / (height**2)
//     return console.log(Math.round(bmi))
// }

// bmiCalculator(65, 1.8)

// Challenge 2

// function bmiCalculator(weight, height){
//     let bmi = weight / (height**2);
//     let bmiRound = Math.round(bmi)
    
//     if (bmi < 18.5) {
//         return (`Your BMI is ${bmiRound}, so you are underweight.`)
//     } else if (bmi>=18.5 && bmi <=24.9) {
//         return (`Your BMI is ${bmiRound}, so you have a normal weight.`)
//     } else if (bmi > 24.9) {
//         return (`Your BMI is ${bmiRound}, so you are overweight.`)
//     }
// }

// bmiCalculator(90, 1.8)

// Challenge 3

function lunchBuyer(names) {
    let randNum = Math.floor(Math.random() * (names.length));
    // console.log(randNum)
    return (`${names[randNum]} is going to buy lunch today!`)
}



lunchBuyer(["Fernanda", "Nilson", "Oliver", "Giulia", "Thomas", "Vilma", "Sergio"])