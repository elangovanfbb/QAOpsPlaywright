class Rbi{
    educationLoan()
    {
        console.log("To All customers");
    }
}
class Sbi extends Rbi{
    goldLoan()
    {
        console.log("To selected customers")
    }
}
class axis extends Sbi{

    bikeLoan()
    {
        console.log("To good score customers");
    }
}
let myAxis = new axis();
myAxis.goldLoan();
myAxis.bikeLoan();
myAxis.educationLoan();