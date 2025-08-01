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

const hour = new Date().getHours()
let greeting= "";

if(hour<12) {
    greeting = "Good Morning!";
}
else if(hour<18) {
    greeting = "Good Afternoon!";
}
else {
    greeting = "Good Evening!";
}

document.getElementById("greeting").innerText = greeting;