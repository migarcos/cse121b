// let new_array = arr.map(function callback( currentValue[, index[, array]]) {
//      return element for new_array
// }[, thisArg])

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#examples

// ** Acticity 1 **
const steps = ["one", "two", "three"];

console.log(steps.join()); // one, two, three

// document.querySelector('h1').innerText = "arreglos";

// map is great when we need to change each item in an array somehow. 
// It returns a new array and does NOT modify the original array.
const stepsHtml = steps.map( (step) => {
  return `<li>${step}</li>`;
});

console.log(stepsHtml.join()) // <li>one</li>,<li>two</li>,<li>three</li>

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
// document.getElementById("myList").innerHtml = stepsHtml.join();
document.createElement("ul").innerHTML = "<li>one</li>,<li>two</li>,<li>three</li>";


// - - - - - ** Acticity 2 ** - - - - - 
const grades = ["A", "B", "A"];
function convertGradeToPoints(grade) {
  let points = 0;
  if (grade === "A") {
    points = 4;
  } else if (grade === "B") {
    points = 3;
  }
  return points;
}
const gpaPoints = grades.map(convertGradeToPoints);


// ** Acticity 3 **
const pointsTotal = gpaPoints.reduce(function (total, item) {
  return total + item;
});
const gpa = pointsTotal / gpaPoints.length;


// this is the same thing as above, but with an arrow function
// const pointsTotal = gpaPoints.reduce((total, item) => total + item);
// const gpa = pointsTotal / gpaPoints.length;

// this could be further simplified as
// const gpa = gpaPoints.reduce((total, item) => total + item) / gpaPoints.length;
