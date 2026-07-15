function isPositive(num)
{
    return num>0;
}

console.log(isPositive(-10))

function greet(name)
{
   
    console.log("hi", name)
}

greet()
greet("ELANGOVAN")

function greeting(name = "RAJESH")
{
    console.log("hi", name)
}
greeting()
greeting("RAMHES")

let arr = [2,3,4,5,1,]
let sumarr = function(arr)
{
    let sum = 0;
    for(let val of arr)
    {
        sum = sum+val;
    }
    return sum;
}

console.log("find sum : ", sumarr(arr))

console.log("ARROW FUN")

let volume = (l,b,h)=>{ return l*b*h}

console.log(volume(2,3,4))

let arr1 = [2,3,4,5,1,]
let sumarr1 = (arr)=>
{
    let sum = 0;
    for(let val of arr)
    {
        sum = sum+val;
    }
    return sum;
}
console.log("ARROW FUN")

console.log(sumarr1(arr1))
console.clear

let prod = function(...args)
{
    let result = 1;
    for(val of args)
    {
        result = result * val
    }
    return result;
}

console.log(prod(2,4,5,9))