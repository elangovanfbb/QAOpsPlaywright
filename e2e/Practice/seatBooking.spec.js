const{test, expect} = require("@playwright/test")



test("SEAT BOOKING", async({page})=>
{

    const email = "elanelan@yopmail.com"
    const title = "ELANS EVENT";
    const description = "ELANS NEW EVENT"
    const cityName = "Chennai"
    const venueName = "Egmore"
    const dateValue = "11-09-2026"
    const price = "50"
    const totalSeats = "101"
    const eventTitle = `Test Event ${Date.now()}`;
    console.log(eventTitle)

    function futureDateValue(days = 7) {
  const d = new Date();
  d.setDate(d.getDate() + days);

  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}T${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}`;
}
  
    //Step 1 — Login
    await page.goto("https://eventhub.rahulshettyacademy.com")
    await page.getByPlaceholder("you@email.com").fill(email)
    await page.locator("#password").fill("Elangovan@123")
    await page.locator("#login-btn").click()

    //Step 2 — Create a new event
    await page.getByRole("button",{name:"Admin"}).click()

    await page.getByRole('link', { name: 'Manage Events' }).first().click()
    await page.locator("#event-title-input").fill(eventTitle);
    await page.getByPlaceholder("Describe the event…").fill(description)
    await page.getByLabel("city").fill(cityName)
    await page.getByLabel("venue").fill(venueName)
    await page.locator("input[id*='event-date-&-time']").fill(futureDateValue().toString());
    await page.getByPlaceholder("0.00").fill(price)
    await page.locator("#total-seats").fill(totalSeats)
    await page.getByRole("button", {name : "+ Add Event"}).click()
    await page.getByText("Event created!").isVisible()

    //Step 3 — Find the event card and capture seats

    await page.locator("[data-testid='nav-events']").click()

    await page.locator("#event-card").first().waitFor()
    const allEventCard = await page.locator("#event-card");

    const checking = await page.locator("#event-card").first().isVisible();
    console.log(checking)
     expect(checking).toBeTruthy()

     const eventCard = await page .locator('div.p-4.flex.flex-col.flex-1').filter({has: page.locator(`h3:has-text("${eventTitle}")`) });
     
     const seatsBeforeBooking = await eventCard.locator('span').filter({ hasText: 'seats available' }).textContent();

     console.log(seatsBeforeBooking);

     await eventCard.getByRole("link",{name : 'Book Now'}).click()

     await page.locator("//h2[text()='About this event']").waitFor()
     const eventHeader = await page.locator('h1', { hasText: eventTitle }).textContent();
     console.log("HEADING : "+eventHeader)

     await expect(eventTitle).toBe(eventHeader)

     //Step 5 — Fill booking form
    expect(await page.locator("#ticket-count").textContent()).toBe("1")
    await page.locator("#customerName").fill("ELANGOVAN")
    await page.locator("#customer-email").fill(email)
    await page.locator("#phone").fill("9898989898")
    await page.getByRole("button",{name : 'Confirm Booking'}).click()

    //Step 6 — Verify booking confirmation

    await page.locator(".booking-ref").waitFor()
    expect(await page.locator(".booking-ref").isVisible()).toBeTruthy()
    const bookingRefNum = await page.locator(".booking-ref").textContent()
    console.log(bookingRefNum)

    //Step 7 — Verify in My Bookings


    await page.getByRole("button",{name : 'View My Bookings'}).click()
    const bookingCard = await page.locator("#booking-card")

    expect(bookingCard.first().isVisible()).toBeTruthy()
    console.log("TEST : "+ await page.locator('span',{hasText : bookingRefNum}).textContent())
    expect(await page.locator('span',{hasText : bookingRefNum}).isVisible()).toBeTruthy()

    //Step 8 — Verify seat reduction

    await page.locator("[data-testid='nav-events']").click()

    await page.locator("#event-card").first().waitFor()
    const allEventCard1 = await page.locator("#event-card");

    const checking1 = await page.locator("#event-card").first().isVisible();
    console.log(checking1)
     expect(checking1).toBeTruthy()

     const eventCard1 = await page .locator('div.p-4.flex.flex-col.flex-1').filter({has: page.locator(`h3:has-text("${eventTitle}")`) });
     const seatsAfterBooking = await eventCard.locator('span').filter({ hasText: 'seats available' }).textContent();

     console.log(seatsAfterBooking);

     await expect(Number(seatsAfterBooking)-1).toBe(Number(seatsBeforeBooking))


   
})
