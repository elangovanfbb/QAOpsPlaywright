let priceUSD = [10,20,30]

let priceINR = priceUSD.map(x => x*80)

console.log(priceINR)

function convert(x)
{

    console.log(x)
    return x*20
}

let priceRS = priceUSD.map(convert)



console.log(priceRS)

console.log("____________________________")

let input = [{"name" : "Elangovan", "age"  : 20},
    {"name":"Ramesh", "age":30}

]
console.log(input[0].name)

let age = input.map(a => a.age)

console.log("AGES", age)

let cost = [10,20,30,40,50,60,70]

let unit = cost.map(x => x<50)
console.log(unit)

unit = cost.filter(x =>x<50)
console.log(unit)

let total = unit.reduce((total, x, ind, arr)=> total+x+ind,200);

console.log(total)