/**
 * A loops is applying a 
 * set of instructions 
 * `X` number of times
 */

// Create a dummy list listing 50 random student names
// Declaring an empty
let studentNamesList = []
//   Starting point
for (let index = 1; 
    // Condition of when the loop ends. Ends at EXACTLY 50
    index <= 50; 
    // Incrementing the index variable
    index++) {

    studentNamesList.push('Ahmed ' + index)
}


/**
 > Ahmed 1
 >> Ahmed 2
 >>> Ahmed 3
 >>>> Ahmed 4
 >>>>> Ahmed 5
 >>>>>> Ahmed 6
 */

 for (let index = 0; index < studentNamesList.length; index++) {
     const studentName = studentNamesList[index]
     /**
      * 1. Store one arrow in a variable
      * 2. Add more arrows, the bigger the index
      * 3. Add the final arrows string as a prefix of the string
      */
     let arrows = ''
     for (let arrowCounter = 0; arrowCounter < index; arrowCounter++) {
         arrows = arrows + '>'
     }

     const student = arrows + studentName
     console.log(student)
 }