console.log("Script loaded successfully.");
console.log("hi , my name is Rehema Wambui,i am 21 years old and i am studying software engineering.");
const yourName = "Rehema Wambui";
console.log("My name is " + yourName);
const age = 21;
console.log("I am " + age + " years old.");
const fieldOfStudy = "software engineering";
console.log("I am studying " + fieldOfStudy + ".");

console.log("hi,my name is " + yourName + ",i am " + age + " years old and i am studying " + fieldOfStudy );


const myAge = 16;
if(myAge>=18){
    console.log("eligible ");
}
else{
    console.log("not eligible");
}

function greet() {
  console.log("Hello!");
}
greet();


function greet(name) {
  console.log("Hello, " + name + "!");
}
greet("Rehema");
greet("visitor");



function greet(person) {
  console.log("Hello " + person);
}

greet("Rehema");
greet("Friend");

function yourAge(age) {
    if(age>=18){
        console.log("Adult");
    } else{
        console.log("Minor");
    }
}
yourAge(20);
yourAge(16);




function multiply(r,w){
    console.log(r*w);
}
multiply(3,4);
multiply(10,5);


function double(num) {
    return num * 2;
}

const answer = double(6);
console.log(answer);
function add(a, b) {
    return a + b;
}
const sum = add(5, 7);
console.log(sum);   

function eligibility(age) {
    if (age >= 18) {
        return "Allowed";
    } else {
        return "Not Allowed";
    }
}

const person1 = eligibility(20);
const person2 = eligibility(16);
console.log(person1);
console.log(person2);



function square(num) {
    return num * num;
}
const result = square(5);
console.log(result);
console.log(result + 5);

const paragraph=document.getElementById("words");
paragraph.textContent="i love me";

const button1=document.getElementById("btn");
const paragraph=document.getElementById("wordss");
button1.addEventListener("click", function() {
    paragraph.textContent="Button clicked!";
});




const button  = document.getElementById("btn");
const inputField = document.getElementById("nameInput");
const displayText = document.getElementById("text");
button.addEventListener("click", function() {
   if(inputField.value === "") {
      displayText.textContent = "Please enter your name.";
   } else {
      displayText.textContent = "Hello, " + inputField.value ; 
   }   
});


const paragraph = document.getElementById("message");
const buttons = document.getElementById("btn");
buttons.addEventListener("click", function() {
    paragraph.classList.toggle("highlight");
});

const infoParagraph = document.getElementById("info");
const toggleButton = document.getElementById("toggleBtn");
toggleButton.addEventListener("click", function() {
    infoParagraph.classList.toggle("hidden");
});

const fadeText = document.getElementById("fadeText");
const fadeButton = document.getElementById("fadeBtn");

fadeButton.addEventListener("click", function() {
    fadeText.classList.toggle("show");
});
