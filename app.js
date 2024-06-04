//variable named kelvin set to equal 293
const kelvin = 293;

//converting kelvin to celsius
const celsius = kelvin - 273;

//equation used to calculate fahrenheit
let fahrenheit = celsius * (9/5) + 32;

//converting celsius to fahrenheit (rounding down to a whole number)
console.log(Math.floor(fahrenheit));
fahrenheit = (Math.floor(fahrenheit));

//logging string to console
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);

//Practice Portion
//converting celsius to newton
let newton = celsius * (33 / 100);

//Round down
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees Newton.`);