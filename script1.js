function calculateGrade() {
    // Prompt the user to enter the input(student's marks)
    const userInput = (prompt("Enter student's marks (between 0 and 100):"));
    const marks = parseFloat(userInput);
  
    // Check if the input is valid (between 0 and 100)
    if (isNaN(marks) || marks < 0 || marks > 100) {
      return "Input is invalid. Marks should be between 0 and 100.";
    }
  
    // Determine the grade based on the grading scale
    let grade;
    if (marks > 79) {
      grade = "A";
    } else if (marks >= 60) {
      grade = "B";
    } else if (marks >= 50) {
      grade = "C";
    } else if (marks >= 40) {
      grade = "D";
    } else {
      grade = "E";
    }
  
    return `Student's Grade: ${grade}`;
  }
  
  // Call the function and display the result
  const studentGrade= calculateGrade();
  console.log(studentGrade);
  