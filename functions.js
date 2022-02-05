/**
 * Main components of a function:
 * 1. Creating the function
 *      -Set of parameters (optional)
 *          -Parameters are anything in between parenthesis
 *      -Set of instructions (required)
 *          -Instructions are anything in between the braces
 * 2. Calling the function 
 */

/*
Create a function that takes in 3 numbers
then console log the product of the numbers
(multiply them by each other)
answer below is a standalone function:
*/

//v1 of standalone function
//NO Expected Return value
//Function creation
function takeIn3Numbers (a, b, c) {
    let numbers3 = (a * b * c)
console.log(numbers3)
}
//Function Calling
takeIn3Numbers (2, 2, 2)

//v2 of the standalone  function
//Return Value is Expected
// Function creation
function product(x, y, z) {
    const answer = x * y * z
    return answer
}
//approach 1
console.log(product(932, 78 ,998))

//approach 2
const tips = product(160, 0.2, 1)
console.log(tips)

//approach 3 (same as #2 but different use case/application)
const salesTaxOfMacbookInFL = product(5000, .07, 1)
console.log(salesTaxOfMacbookInFL)