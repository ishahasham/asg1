// Q1: Write a program in which you have to create your own biodata details are: your name, email, city,
// education, occupation, phone number, institute name etc. Using template literals and variable using let
// and const and final output is shown in document.write() same as in below:

let name = "John Doe";
let email = "john.doe@example.com";
let city = "New York";
let occupation = "Software Developer";
let phoneNumber = "123-456-7890";
let instituteName = "Jawan Pakistan";
let education = "ABC";

document.write(`
Name: ${name} <br>Age: 30 <br>Occupation: ${occupation}<br>Email: ${email}<br>Phone Number: ${phoneNumber}<br>Institute Name: ${instituteName}<br>Education: ${education}<br>`);



// Q2: Write a program of a basic mark sheet using JavaScript involves let, const variables to store marks
// for different subjects and then calculating the total marks, percentage, and grade based on those marks.
// Using template literals and variable using let and const and final output is shown in document.write().

let maths= 80;
let science= 90;
let english= 70;
let totalMarks = maths + science + english;
let percentage = (totalMarks / 240) * 100;
let grade;
if (percentage >= 80) {
    grade = "A";
} else if (percentage >= 60) {
    grade = "B";
} else if (percentage >= 40) {
    grade = "C";
} else {
    grade = "F";
}

document.write(`
Total Marks: ${totalMarks} Percentage: ${percentage}% Grade: ${grade}`);

// Q3: Students using this below image you have to create each variable keyword apply at least one
// example for tasks executing. I share the output everyone must same as in the image.

var a="Isha";
var abc;
var a="Hasham";
console.log(a);
var a="isha"

function abc(){
    var a="hasham";
    console.log(a)
}
abc();