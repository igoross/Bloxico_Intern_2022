Feature: Shopping Cart
@WIP
    Scenario: When I'm on the home page "SwagLabs" and I want to select a product and put it in the shop cart
        Given as a user, I am on the home page
        When I click on the add to cart
        Then the product should be added to cart

@WIP
    Scenario: I choose the product and I want to continue with the checkout procedure
        Given The product is on shopping cart
        When I click checkout button
        Then checkout information page should be displayed
@WIP
    Scenario: I am on the checkout page and I fill al fields with data info and continue to purchesing
        Given as a user, I am on the checkout information page
        When I fill all fields with data information
        And click continue
        Then the overwiev page should be displayed with description and price
@WIP
    Scenario: Check the overview page and finish with the purchases
        Given as a user, I am on the overwiev page
        When I click finish button
        Then the page with message "Thank you for your order" should be displayed
@WIP
    Scenario: If I'm on the cart page and want to continue searching for another the product
        Given as a user, I am on home page
        When I click on the continue shopping button
        Then I should be returned to the home page and continue shopping
@WIP
    Scenario: If I would like to remove a product from the cart page
        Given as a user, I am on the home page
        When I click "Remove" button
        Then the product should be removed from cart list



