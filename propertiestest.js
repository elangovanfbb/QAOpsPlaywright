let person = {
    firstName : 'Elangovan', 
    LastName : 'Vengat',
    age : 31,
    fullName : function()
    {
        console.log("FIRST NAME: ", this.firstName+this.LastName)
       return this.firstName+this.LastName;
       
    }
}
console.log("FULLNAME : "+person.fullName())
console.log("______________________________")

