let prom = new Promise((resolv, rejec) => {

    let a = 20;
    let b = 20;
    let sum = a+b;

    if(sum==40)
    {
        resolv("success")
    }
    else{
        rejec("failure");
    }

}
)

prom.then((messa)=>
{
    console.log(messa);
}
).catch((mess) =>
{
    console.log(mess);
}
)
