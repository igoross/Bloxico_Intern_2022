const { Given, When, Then} = require("@wdio/cucumber-framework")
const LoginPage = require('../support/pages/login.page')
const HomePage = require('../support/pages/home.page');


Given(/^as a user, I am on the homepage^/, ()=>{
    browser.url("https://www.saucedemo.com/");
    LoginPage.login("standard_user", "secret_sauce")
});

Then(/^the products should be listed in that order$/, ()=>{
    HomePage.clickOnSortOption();
    HomePage.clickOnOptionAZ();

});

When(/^I click on the search filter name A to Z$/, () => {
    
});
