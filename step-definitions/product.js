const { Given, When, Then } = require('@wdio/cucumber-framework');
const LoginPage = require('../support/pages/login.page');
const HomePage = require('../support/pages/home.page');
const ProductPage = require("../support/pages/products.page");
const CartPage = require('../support/pages/cart.page');
const CheckoutPage = require('../support/pages/checkout.page');


//  Scenario: I'm logged in to website "SwagLabs" and I want to open any product item


Given(/as a user, I am on logged in website SwagLabs/ , ()=> {
    browser.url("https://www.saucedemo.com/")
    LoginPage.login("standard_user", "secret_sauce")
    
   
});
When(/I click on the product/, ()=>{
    HomePage.clickOnProductItem()
   
});
Then(/the selected product page with price and description, should be displayed/ ,()=>{
    ProductPage.checkProductItemDescription()
});

// Scenario: I am on the product page, and I want to add product on Cart

Given(/as a user, I am on product page SwagLabs/ ,()=>{
    browser.url("https://www.saucedemo.com/")
    LoginPage.login("standard_user", "secret_sauce")
});
When(/I click on the add to cart button/, ()=>{
    ProductPage.clickOnaddToCartButton()
});
Then(/a notification would be appear that the product has been added/,()=>{
    CartPage.checkIfProductIsAdded()
});

//Scenario: I am on the product page, and I want to continue shopping on the webpage page

Given(/as a user, I am on product page Swaglabs/,()=>{
    // browser.url("https://www.saucedemo.com/")
    // LoginPage.login("standard_user", "secret_sauce")
});
When(/I click on back to products button/,()=>{
    browser.url("https://www.saucedemo.com/")
    LoginPage.login("standard_user", "secret_sauce")
    HomePage.clickOnProductItem()
    ProductPage.clickOnBacktToProductsBtn()
});
Then(/the page with all products should be displayed/,()=>{
    HomePage.CheckIfYouAreOnHomepageProductsPage()
});

// Scenario: I am on the product page, and I want to remove product from cart

Given(/as a user, I am on the product page/,()=>{
    // browser.url("https://www.saucedemo.com/")
    // LoginPage.login("standard_user", "secret_sauce")
    
});
When(/I click on the remove button/, ()=>{
    browser.url("https://www.saucedemo.com/")
    LoginPage.login("standard_user", "secret_sauce")
    ProductPage.clickOnaddToCartButton()
    HomePage.clickOnProductItem()
    CartPage.cLickOnRemoveBtn()
});
Then(/the product should be removed from cart/, ()=>{
    CartPage.checkIfYouAreRemovedItemFromList()
})




