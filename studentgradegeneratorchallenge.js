//Challenge 0ne: Student Grade Generator
function generateGrade() {
    // Prompt the user to enter the input(student's marks)
    const userInput = (prompt("Enter student's marks,between 0 and 100:", "Enter a number value"));
    //use parseFloat to accept the string input and convert it to a floating-point number 
    const marks = parseFloat(userInput);
  
    // Check for the validity of the input, brings an error message when user enters a non-number or a number>100, or a number<0
    if (isNaN(marks) || marks < 0 || marks > 100) {
      return "Input is invalid. Marks should be between 0 and 100. Check if you entered a non-number";
    }
  let grade = isNaN;
    // Determine the grade from the userInput
    switch (true) {
        case marks > 79:
          grade = "A";
          break;
        case marks >= 60:
          grade = "B";
          break;
        case marks >= 50:
          grade = "C";
          break;
        case marks >= 40:
          grade = "D";
          break;
        default:
          grade = "E";
      }
    return `Student's Grade: ${grade}`;
  }
  
  // Display the resultant grade as per the inputted marks
  const studentGrade= generateGrade();
  console.log(studentGrade);
  