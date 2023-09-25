
function getGrade(){
   //prompting user to enter marks
    const marks= prompt("enter your marks(0-100)");
    //validating marks
    const points= parseFloat(marks);
    if (isNaN(points) ||points<0||points>100){
        alert("please enter a valisd number");
        return;
    }
    //calculating grades
    let grade;
    if(points>79){
        grade="A";
    }
    else if(points>=60&&points<=79){
        grade="B";
    }
    else if(points>=49&&points<=59){
        grade="C";
    }
    else if (points>=40&&points<=49){
        grade="D";
    }
    else{
        grade='E';
    }
    alert(`your grade is ${grade}`);
}
getGrade()