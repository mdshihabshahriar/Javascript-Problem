const prompt = require("prompt-sync")();

let num = parseInt(prompt("Enter your number: "));

if(num <= 100 && num >= 80)
{
    console.log("You got A+");
}
else if(num <= 79 && num >= 70)
{
    console.log("You got A");
}
else if(num <= 69 && num >= 60)
{
    console.log("You got A-");
}
else if(num <= 59 && num >= 55)
{
    console.log("You got B");
}
else if(num <= 54 && num >= 50)
{
    console.log("You got C");
}
else if(num <= 49 && num >= 40)
{
    console.log("You got D");
}
else if(num < 40)
{
    console.log("You got F");
}
else
{
    console.log("Invalid input");
}