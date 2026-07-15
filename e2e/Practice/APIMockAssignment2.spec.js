const { test, expect, request } = require('@playwright/test')

const BASE_URL = 'https://eventhub.rahulshettyacademy.com'
const API_URL = BASE_URL + '/api'
const yahooLoginPayload = { email: "elanelan@yopmail.com", password: "Elangovan@123" }
const gmailLoginPayload = { email: "elanelan@gmail.com", password: "Elangovan@123" }
let yahooToken
let bookingPayload = { customerName: "ELAN", customerEmail: "elan@yopmail.com", customerPhone: "9898989898", quantity: 1, eventId: 3 }

//console.log("type of yahoo" + await typeof (yahooLoginPayload))

test("YAHOO EMAIL", async ({ page }) => {

    //Step 1 — Login as Yahoo user via API  

    const apiContext = await request.newContext({ ignoreHTTPSErrors: true, })
    const yahooResponse = await apiContext.post("https://api.eventhub.rahulshettyacademy.com/api/auth/login",
        {
            data: yahooLoginPayload
        }
    )

    expect(await yahooResponse.status()).toBe(200)

    const yahooResponseJson = await yahooResponse.json()
    console.log(yahooResponseJson)
    yahooToken = yahooResponseJson.token
    console.log("YAHOO TOKEN : " + yahooToken)

    //Step 2 — Fetch events via API to get a valid event ID

    const eventResponse = await apiContext.get("https://api.eventhub.rahulshettyacademy.com/api/events",
        {
            headers: {

                authorization: `Bearer ${yahooToken}`
            }
        })
    await expect(eventResponse).toBeOK()

    const eventResponseBody = await eventResponse.json()
    console.log(eventResponseBody)
    const id = eventResponseBody.data[1].id
    console.log("ID " + id, typeof (id))
    console.log("Type of Event ID", typeof(bookingPayload.eventId))
   bookingPayload.eventId=id
  // console.log("---", bookingPayload)
    //console.log("BOOKING PAYLOD : "+bookingPayload, typeof(bookingPayload))

    //Step 3 — Create a booking via API as Yahoo user

    const eventCreateResponse = await apiContext.post("https://api.eventhub.rahulshettyacademy.com/api/bookings",
        {
            headers: {

                authorization: `Bearer ${yahooToken}`
            }
            ,
            data: bookingPayload
        }
    )

    expect(await eventCreateResponse.toBeOK)

    const eventCreateResponseJson = await eventCreateResponse.json()
    console.log(eventCreateResponseJson)

    const yahooBookingId = await eventCreateResponseJson.data.id
    console.log("YAHOO BOOKING ID : "+yahooBookingId)

    await page.goto("https://eventhub.rahulshettyacademy.com/login")
    await page.locator("#email").fill("elanelan@gmail.com")
    await page.locator("#password").fill("Elangovan@123")
    await page.locator("#login-btn").click()
     await page.pause()

    await page.goto("https://eventhub.rahulshettyacademy.com/bookings/"+yahooBookingId+"/")
   

    await expect(page.getByText("Access Denied")).toBeVisible()
    await expect(page.getByText("You are not authorized to view this booking")).toBeVisible()


    


})