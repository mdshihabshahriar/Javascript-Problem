const prompt = require("prompt-sync")();
let num = parseInt(prompt("Enter your number: "));
if(num % 2 == 0)
{
    console.log("Even")
}
else
{
    console.log("Odd")
}
