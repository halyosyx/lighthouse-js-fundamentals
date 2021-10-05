//const cold = false;
const raining = false;
const isCitizen = true;
const age = 26;

const temperature = 12;

// Basic conditional statement example

if(temperature < 0){
  console.log("Make sure you pick out a scarf!");
}
if(temperature < 15){
  console.log("Short sleeves won't cut it!");
}
else{
  console.log("Short sleeves are fine.");
}

// Logical operator examples
if (isCitizen && age > 18) {
  console.log("You are eligible to vote.");
}

if (temperature < -40 || temperature > 40) {
  console.log("Maybe going outside isn't such a great idea…");
}

if (!raining) {
  console.log("Leave your umbrella at home!");
}


console.log("Now you're ready to go outside!");