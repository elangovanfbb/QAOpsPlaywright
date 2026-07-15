Feature: Ecommerce Testing

@endtoend
Scenario: Placing an order and verifying the order ID
Given Login to the application using "elanelan@yopmail.com" and "Elangovan@123"
When Add product "ZARA COAT 3" to cart
Then Verify product "ZARA COAT 3" available in cart
When Provide all the valid details and place the order
Then Verify the new order is present in order details page

@uivalidation
Scenario Outline:  Validating the error Scenario
Given Login to the application using "<username>" and "<password>"
Then Verify that login fails and error message displays

Examples:
    | username | password | 
    | elanelan@yopmail.com  | Elangovan@123  | 
    | ram@yopmail.com | ram@123 |