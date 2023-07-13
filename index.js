// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

// Destructively appending a cat name
function destructivelyAppendCat(name) {
    return cats.push(name);
}

// Destructively prepend cat name
function destructivelyPrependCat(name){
    return cats.unshift(name);
}

// Destructively removing the first cat
function destructivelyRemoveFirstCat(){
    return cats.shift()
}

// Destructively removing last cat
function destructivelyRemoveLastCat(){
    return cats.pop()
}

// Append cat name
function appendCat(name){
    // Create a new array by concatenating the existing cats array with the new cat
    let newCats = cats.concat(name);

    // Return the new array
    return newCats;
}

// Prepend cat name
function prependCat(name){
    let newCats = [name, ...cats]
    return newCats;
}

// Removing last item and leaving cat array unchanged
// Remove last cat non-destructively
function removeLastCat(){
    const newCats = cats.slice(0, -1)
    return newCats
}

// Remove first cat non-destructively
function removeFirstCat(){
    const newCats = cats.slice(1)
    return newCats
}