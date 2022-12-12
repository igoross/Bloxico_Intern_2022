Feature: Product page
@WIP
   Scenario: I'm logged in to website "SwagLabs" and I want to open any product item
      Given as a user, I am on logged in website SwagLabs
      When I click on the product
      Then the selected product page with price and description, should be displayed
@WIP
   Scenario: I am on the product page, and I want to add product on Cart
      Given as a user, I am on product page SwagLabs
      When I click on the add to cart button
      Then a notification would be appear that the product has been added
@WIP
   Scenario: I am on the product page, and I want to continue shopping on the webpage page
      Given as a user, I am on product page Swaglabs
      When I click on back to products button
      Then the page with all products should be displayed
@WIP
   Scenario: I am on the product page, and I want to remove product from cart
      Given as a user, I am on the product page
      When I click on the remove button
      Then the product should be removed from cart