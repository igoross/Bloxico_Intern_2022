const { Given, When, Then} = require("@wdio/cucumber-framework")
const LoginPage = require('../support/pages/login.page')
const HomePage = require('../support/pages/home.page');


// Scenario: I am logged in to website "SwagLabs" And I want to check menu button

Given(/^as a user, I am on the home page$/,()=>{
    browser.url("https://www.saucedemo.com/");
    LoginPage.login("standard_user", "secret_sauce");
});
When(/^I click on the "Menu" button$/,()=>{
    HomePage.clickOnHamburgerMenu()
});
Then(/^I should open drop-down menu with items$/,()=>{
    HomePage.checkIfDeopdownMenuOpen()
});


// Scenario: I am logged in to the website "SwagLabs" and I  "About" from drop down menu and reserch about SauceLab page 

// Given(/s a user, I am on the homepage/,()=>{
//     browser.url("https://www.saucedemo.com/");
//     LoginPage.login("standard_user", "secret_sauce");
// });
// When(/I click on the "Menu"/, ()=>{
//     HomePage.clickOnHamburgerMenu()
// });
When(/I click menu button "About"/, ()=>{
    browser.url("https://www.saucedemo.com/");
    LoginPage.login("standard_user", "secret_sauce");
    HomePage.clickOnHamburgerMenu()
    HomePage.clickOnAboutLink()
});
Then(/I should be redirected on SouceLabs page/, ()=>{
    HomePage.checkIfYouAreRedirectedOnSaucLabasPage()
});

// Scenario: I am logged in to website "SwagLabs" and I want to Logout

// Given(/^as a user, I am on the homepage SwagLAbs$/,()=>{
//     browser.url("https://www.saucedemo.com/");
//     LoginPage.login("standard_user", "secret_sauce")
// });
// When(/^I click on the "Menu" $/,()=>{
//     HomePage.clickOnHamburgerMenu()
// });
When(/^I click menu button "Logout"/,()=>{
    browser.url("https://www.saucedemo.com/");
    LoginPage.login("standard_user", "secret_sauce");
    HomePage.clickOnHamburgerMenu()
    HomePage.clickOnLoginLink()
});
Then(/^I should be redirected on login page$/,()=>{
    HomePage.checkIfYouAreOnLoginPage()
});