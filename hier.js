class AnnaUniv{

    syllabus()
    {
        console.log("OG syllabus")
    }
}

class siet extends AnnaUniv{

    sietSyllabus()
    {
        console.log("Affliated syllabus")
    }
}

let mySiet = new siet();
mySiet.sietSyllabus();
mySiet.syllabus();

class rvs extends AnnaUniv{
    rvsSyllabus()
    {
        console.log("Anna Affliated syllabus")
    }
}
let myRvs = new rvs();
myRvs.rvsSyllabus();
myRvs.syllabus();