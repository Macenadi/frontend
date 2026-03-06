let firstName = "Nadia";
let lastName = "Macedo";
let favSinger = "NoOne";

//console.log(`Hi! My name is ${firstName} ${lastName} and my favorite singer is ${favSinger}`);

let someText = "JavaScript is super fun!";

//console.log(`The string lenght is: ${someText.length}`);

//console.log(`The first character is: ${someText[0]}`);

//console.log(`The last character is: ${someText[someText.length-1]}`);

let cityInput = "londON ";

//console.log(`Empty space removed: ${cityInput.trim()}`);
//console.log(`Empty space removed and uppercase: ${cityInput.trim().toUpperCase()}`);
//console.log(`Empty space removed and uppercase: ${cityInput.trim().toLowerCase()}`);

let tempCelsius = 25;
let tempFaren = (tempCelsius * 9/5) + 32;

//console.log(`25 Celsius is: ${tempFaren} Farenheit.`);

let score = 0;
score += 10; 
score = score * 2;
score ++;       //increment by 1

//console.log(`Final score: ${score}`);



// function calcArea(x,y) 
//{
//    return (x * y);
//}

//let result = calcArea (12,20);
//console.log(`Area of rectangle 12 by 20: ${result}`);



// Function to demonstrate type coercion
function demonstrateCoercion(value1, value2)
{
    console.log(`Addition: ${value1} + ${value2} = ${value1 + value2}`);
    console.log(`Subtraction: ${value1} - ${value2} = ${value1 - value2}`);
    console.log(`Multiplication: ${value1} * ${value2} = ${value1 * value2}`);
    console.log(`Division ${value1} / ${value2} = ${value1 / value2}`);
}
    
demonstrateCoercion(5, "10");
demonstrateCoercion("5", 10);
