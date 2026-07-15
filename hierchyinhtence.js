class Bmw{
    design()
    {
        console.log("2026 design");
    }
}

// let myBmw = new Bmw();
// myBmw.design();
class Audi{
    service()
    {
        console.log("All type service");
    }
}

// let myAudi = new Audi()
// myAudi.design();
// myAudi.service();

class maruthi extends Bmw, Audi{
    type()
    {
        console.log("commercial");
    }
}


