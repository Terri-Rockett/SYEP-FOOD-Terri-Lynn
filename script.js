const testimonials = [
  {
    name: "Mrs. Ortiz",
    role: "Global History Teacher",
    text: "Terri-Lynn always brought creativity and focus to our classroom. Although she can be pretty chatty at times, she usually makes it right with her participation and good grades."
  },
  {
    name: "Mr. DaVila",
    role: "Algebra 1 Teacher",
    text: "She tackled every challenge with curiosity and persistence. Her kindness and dedication shows real growth and originality."
  },
  {
    name: "Gabriella R.",
    role: "Friend & Collaborator",
    text: "We worked together on a coding project and Terri-Lynn was really fun and helped us finish off strong. She’s a pretty good leader and a great friend."
  }
];

const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentItem = 0;

// ✅ Load initial testimonial
window.addEventListener('DOMContentLoaded', function () {
  showTestimonial(currentItem);
});

// ✅ Display testimonial
function showTestimonial(index) {
  const item = testimonials[index];
  author.textContent = item.name;
  job.textContent = item.role;
  info.textContent = item.text;
}

// ✅ Next button
nextBtn.addEventListener('click', function () {
  currentItem++;
  if (currentItem > testimonials.length - 1) {
    currentItem = 0;
  }
  showTestimonial(currentItem);
});

// ✅ Previous button
prevBtn.addEventListener('click', function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = testimonials.length - 1;
  }
  showTestimonial(currentItem);
});












/*
// console.log("Hello, world");

// //String has quotes/number no quotes
// let myTest="123";
// console.log(typeof myTest);

// console.log(10 + " eggs");
// console.log( 10 + 8 + " eggs");
// console.log( " eggs" + 10 + 8);

// //both conditions must be true
// console.log(7>3)&&(5>2);

// //only one condition must be true
// console.log(10>3)||(10>12);

// //logical not
// console.log(!5<3);

// function introduction(name,age) {
//     console.log("Hello, my name is " + name +"And I am " + age + " years old");
// }
// introduction("Terri ", 14);

// const hour = new Date().getHours()
// let greeting= "";

// if(hour<12) {
//     greeting = "Good Morning!";
// }
// else if(hour<18) {
//     greeting = "Good Afternoon!";
// }
// else {
//     greeting = "Good Evening!";
// }

// document.getElementById("greeting").innerText = greeting;
*/