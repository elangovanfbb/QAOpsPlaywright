let num = [10,20,30,40,50,59,29];

let inn = num.filter(n=> n%2==0 || n>30)
console.log(inn)

let alpha = [
   ["a","b","c"],
   ["c","d","e"],
   ["d","d","f"]
]

console.log(alpha.flat())

let test = alpha.flat().reduce((acc,cv)=>{ if(acc[cv])
{
acc[cv]++
}
else{
    acc[cv]=1
}
return acc;
},{})

console.log("TESTT", test)