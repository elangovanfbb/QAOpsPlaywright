let fruits = ["Apple", "Orange", "Banana"]
console.log(fruits)

fruits.push("Guava");
console.log(fruits);

fruits.pop();
console.log("Removed", fruits)

fruits.shift()
console.log("First element removed", fruits)

fruits.unshift("Ginger", "Watermelon")
console.log(fruits)

let newFruits = ["tomato","onion"]
let oldFruits = ["dragon", "grapes"]

let allFruits = fruits.concat(newFruits, oldFruits)
console.log("ALL FRUITS",allFruits)

//console.log(allFruits.join())

//let slicedFruits = allFruits.slice(2,5);
//console.log("Sliced fruits", slicedFruits)

let splicedFruits = allFruits.splice(2,3,"ELANGOVAN")

console.log("SPLICED",splicedFruits)

console.log("INDEX OF", splicedFruits.indexOf("tomato"))

console.log("INCLIDED", splicedFruits.includes("tomato"))

for(let i=0;i<splicedFruits.length;i++)
{
    console.log(splicedFruits[i]);
}



