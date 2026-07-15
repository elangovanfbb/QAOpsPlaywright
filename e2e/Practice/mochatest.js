const{chromium} = require('@playwright/test')

describe("ELAN TEST", async function()
{

    before("Before all test", function()
{
    console.log("BEFORE ALL TEST")
})

after("AFTER ALL TEST", function()
{
    console.log("AFTER ALL TEST")
})

it("FIRST TEST", function()
{
    console.log("TEST one")
})
it("Second TEST", function()
{
    console.log("TEST TWO")
})

beforeEach("EACH TEST" , function()
{
    console.log("BEOFRE EACH")
})

afterEach("AFter Each", function(){
    console.log("AFTER EACH")
})

    
})