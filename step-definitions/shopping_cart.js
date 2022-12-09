const { Given, When, Then } = require('@wdio/cucumber-framework');
const LoginPage = require('../support/pages/login.page');
const HomePage = require('../support/pages/home.page');
const ProductPage = require("../support/pages/products.page");
const CartPage = require('../support/pages/cart.page');
const CheckoutPage = require('../support/pages/checkout.page');


// # Scenario: When I'm on the home page "SwagLabs" and I want to select a product and put it in the shop cart

Given(/as a user, I am on the homepage/, () =>{
    browser.url("https://www.saucedemo.com/");
    LoginPage.login("standard_user", "secret_sauce")
  });
When(/^I click on the add to cart$/, () => {
    ProductPage.clickOnaddToCartButton()
   
});
Then(/^the product should be added to cart$/, () => {
    CartPage.checkIfProductIsAdded()
});


// # Scenario: I choose the product and I want to continue with the checkout procedure

Given(/^The product is on shopping cart$/,()=>{
    // browser.url("https://www.saucedemo.com/");
    // LoginPage.login("standard_user", "secret_sauce")
    // ProductPage.clickOnaddToCartButton()
    ProductPage.clickOnCartIconLink()
})
When(/^I click checkout button$/, ()=>{
    CartPage.clickOnCheckouBtn()
});

Then(/^checkout information page should be displayed$/,()=>{
    CheckoutPage.checkIfYouAreOnCheckoutPage()
});


// # Scenario: I am on the checkout page and I fill al fields with data info and continue to purchesing

Given(/^as a user, I am on the checkout information page$/,()=>{
    // browser.url("https://www.saucedemo.com/");
    // LoginPage.login("standard_user", "secret_sauce")
    // ProductPage.clickOnaddToCartButton()
    // ProductPage.clickOnCartIconLink()
    CheckoutPage.checkIfYouAreOnCheckoutPage()
});


When(/^I fill all fields with data information$/,()=>{
    CheckoutPage.inputYourinformation("Igor", "Ostojic", "11000")  
   
});
When(/^click continue$/,()=>{
    CheckoutPage.clickOnContinuBtn()
})

Then(/^the overwiev page should be displayed with description and price$/, ()=>{
    CheckoutPage.checkIfYouAreOnCheckoutPage()
});


// # Scenario: Check the overview page and finish with the purchases

Given(/as a user, I am on the overwiev page/,()=>{
    // browser.url("https://www.saucedemo.com/");
    // LoginPage.login("standard_user", "secret_sauce")
    // ProductPage.clickOnaddToCartButton()
    // ProductPage.clickOnCartIconLink()
    // CartPage.clickOnCheckouBtn()
    CheckoutPage.checkIfYouAreOnCheckoutPage()
});

When(/^I click finish button$/,()=>{
    CheckoutPage.clickOnFinishButton()
});

Then(/^the page with message "Thank you for your order" should be displayed$/,()=>{
    CheckoutPage.checkIfYouCompleteYourPurches()
});


// Scenario: If I'm on the cart page and want to continue searching for another the product

// Given(/^as a user, I am on cart page$/,()=>{
//     browser.url("https://www.saucedemo.com/");
//     LoginPage.login("standard_user", "secret_sauce")
//     ProductPage.clickOnaddToCartButton()
//     ProductPage.clickOnCartIconLink()
// });

When(/^I click on the continue shopping button$/, ()=>{
    browser.url("https://www.saucedemo.com/");
    LoginPage.login("standard_user", "secret_sauce")
    ProductPage.clickOnaddToCartButton()
    ProductPage.clickOnCartIconLink()
    CartPage.goBackAndContinueShopping()
});

Then(/^I should be returned to the home page and continue shopping$/,()=>{
    HomePage.CheckIfYouAreOnHomepageProductsPage()
});


// Scenario: If I would like to remove a product from the cart


// Given(/^as a user, I am on home page$/, ()=>{
//     browser.url("https://www.saucedemo.com/");
//     LoginPage.login("standard_user", "secret_sauce")
//     ProductPage.clickOnaddToCartButton()
//     ProductPage.clickOnCartIconLink()
// });

When(/I click "Remove" button/, ()=>{
    browser.url("https://www.saucedemo.com/");
    LoginPage.login("standard_user", "secret_sauce")
    ProductPage.clickOnaddToCartButton()
    ProductPage.clickOnCartIconLink()
    CartPage.cLickOnRemoveBtn()
});

Then(/^the product should be removed from cart list$/,()=>{
    CartPage.checkIfYouAreRemovedItemFromList()
});









