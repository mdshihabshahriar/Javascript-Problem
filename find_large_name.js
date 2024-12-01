let friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];

let largestName = friends[0]; 

for (let i = 1; i < 5; i++) 
{
    if (friends[i].length > largestName.length) 
    {
        largestName = friends[i]; 
    }
}

console.log("The largest name is:", largestName);
