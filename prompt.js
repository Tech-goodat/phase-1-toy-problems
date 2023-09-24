function calculateGrade() {
    // Prompt the user for input and convert it to a number
    const marks = parseFloat(prompt("Enter student marks (0-100):"));

    // Check if the input is a valid number
    if (!isNaN(marks) && marks >= 0 && marks <= 100) {
        let grade;

        if (marks > 79) {
            grade = 'A';
        } else if (marks >= 60) {
            grade = 'B';
        } else if (marks >= 50) {
            grade = 'C';
        } else if (marks >= 40) {
            grade = 'D';
        } else {
            grade = 'E';
        }

        // Display the corresponding grade
        alert("Grade: " + grade);
    } else {
        alert("Invalid input");
    }
}

// Call the function to calculate and display the grade
calculateGrade();