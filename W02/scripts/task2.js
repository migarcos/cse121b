/* Lesson 2 */

/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name
let name = "Miguel";

// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())
document.querySelector('#name').innerHTML = name;

// Step 3: declare and instantiate a variable to hold the current year
let year = '2023';

// Step 4: place the value of the current year variable into the HTML file
document.querySelector('#year').innerHTML = year;


// Step 5: declare and instantiate a variable to hold the name of your picture
let picture_name = "images/portrait.jpg";

// Step 6: copy your image into the "images" folder

// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())

// document.querySelector('#picture').setAttribute('src', picture_name);
document.querySelector('img').setAttribute('src', picture_name);


/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods
const favorite_foods = ['Mango', 'Pineapple', 'Lulo', 'Guanabana', 'Banana'];

// Step 2: place the values of the favorite foods variable into the HTML file
document.querySelector('#food').innerHTML = favorite_foods;

// Step 3: declare and instantiate a variable to hold another favorite food
let more_food = 'chinese rice';

// Step 4: add the variable holding another favorite food to the favorite food array
favorite_foods.push(more_food);

// Step 5: repeat Step 2
document.querySelector('#food').innerHTML = favorite_foods;

// Step 6: remove the first element in the favorite foods array
favorite_foods.shift();

// Step 7: repeat Step 2
document.querySelector('#food').innerHTML = favorite_foods;

// Step 8: remove the last element in the favorite foods array
favorite_foods.pop();

// Step 9: repeat Step 2
document.querySelector('#food').innerHTML = favorite_foods;


