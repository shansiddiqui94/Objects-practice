// Exercise #1
// Create an object to hold information on your favorite recipe.
// It should have properties for *title* (a string), *servings*(a number)
// and *ingredients*(an array of strings)
// On separate lines (one console.log statement for each), log the
// recipe information so it looks like:
// Mole
// Serves: 2
// Ingredients:
// cinnamon
// cumin
// cocoa

const recipe = {
    title: "Mole",
    servings: 2,
    ingredients: ["cinnamon", "cumin", "cocoa"]
};
console.log(recipe.title);
console.log(`Servings:${
        recipe.servings
    }`);
console.log("Ingredients: ");
for (let items = 0; items < recipe.ingredients.length; items++) {
    console.log(recipe.ingredients[items]);
}
)
// Exercise #2
// Create an array of objects, where each object describes
// a book and has properties for the *title*(a string), *author*(a string)
// and *alreadyRead* (a boolean indicating if you read it yet)
// Iterate through the array of objects of books. For each book, log the book title and book
// author like so: "1984 by George Orwell"
// Now use an if/else statement to change the output depending on whether you read it
// or not. If you read it, log a string like "You already read "1984" by George Orwell"
// and vice versa

const booksRead = [{
    title: "1984",
    author: "George Orwell",
    read: true
}, {
    title: "After",
    author: "Francine Prose",
    read: true
}, {
    title: "Riddles Of Epsilon",
    author: "Christine Morton-Shaw",
    read: true
}, {
    title: "Eloquent JavaScript: A Modern Introduction to Programming",
    author: "Marijn Haverbeke",
    read: false
}];
for (let i = 0; i < books.length; i++) {
    let book = books[i];
    let reading = `${
        book.title
    } by ${
        book.author
    }`;
    if (book.alreadyread) {
        console.log(`I already read ${reading}.`);
    } else {
        console.log(`I have not read ${reading}.`);
    }
}


// Exercise #3
// Create your object representing your favorite movie, like so
// const shawshank = {
// title: 'Shawshank Redemption',
// director: 'Frank Darabont',
// actors: ['Tim Robbins', 'Morgan Freeman', 'Bob Gunton'],
// releaseYear: 1994,
// duration: 142
// }
const shawshank = {
        title: 'Shawshank Redemption',
        director: 'Frank Darabont',
        actors: [
            'Tim Robbins', 'Morgan Freeman', 'Bob Gunton'
        ],
        releaseYear: 1994,
        duration: 142
    }
    // After you have crreated your movie object, print the title
    // of your movie using dot notation
    // Print the director's name
    // Print the release year
    // Maybe your favorite came with an extended cut, including deleted scenes.
    // Write a statement that increases your movie object's duration by 30 minutes.
console.log(`Movie: ${
    shawshank.title
}`);
console.log(`Directed by: ${
    shawshank.director
}`);
console.log(`Release Year: ${
    shawshank.releaseYear
}`);
shawshank.extendedCut = shawshank.duration + 30;
console.log(`Extended Cut Duration: ${
    shawshank.extendedCut
}`);

// Exercise #4
// using the array provided below,
// How do you check if an object is an array or not?
// You are checking if arrayList is an array, assuming it were an object before testing it
// That it is not an object
let arrayList = [1, 2, 3]
Array.isArray = (arrayList);


// Exercise #5
// Write a function countCharacters that, when given a string as an argument,
// returns an object containing counts of the ocurrences of each character in
// the string
// function countCharacters(){
//
// }
// countCharacters("hello"); => {"h": 1, "e": 1, "l": 2, "o": 1}
function countCharacters(string) { // declare empty object
    let object = {};
    // split string into characters in an array
    split = string.split('');
    // iterating for each character in variable split
    for (let i = 0; i < split.length; i++) {
        if (object[split[i]] === undefined) {
            object[split[i]] = 0;
        }
        object[split[i]]++;
    }
    return object;
}
console.log(countCharacters("hello"));

// Exercise #6
// Write a function that accepts two objects
// as arguments and
// *extends* all of the key/value pairs of the second one to the first one
// function extend(obj1, obj2) {

// }
// extend({a: 1, c: 3}, {b: 2, c: 4}) => {a: 1, b:2, c:4}

object1 = {
    a: 1,
    b: 2,
    c: 3
};

object2 = {
    c: 4,
    d: 5,
    e: 6
};

function extend(a, b) {
    for (let key in b)
        if (b.hasOwnProperty(key))
            a[key] = b[key];




    return a;
}
console.log(extend(object1, object2));