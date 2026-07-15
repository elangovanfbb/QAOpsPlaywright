class person{
    age = 31;

    constructor()
    {
        console.log("ELANGOVAN")
    }
}

let per = new person()

class state
{

    
    constructor(fName, lName)
    {
        this.firstName = fName
        this.lastName = lName


    }

    fullName()
    {
        return(this.firstName+this.lastName)
    }

   
}

let s = new state();
let s1 = new state("ELAN", "RAM");
console.log(s1.fullName())

console.log(s.fullName())