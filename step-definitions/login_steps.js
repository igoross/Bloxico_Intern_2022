const { Given, When, Then } = require('@wdio/cucumber-framework');
const LoginPage = require('../support/pages/login.page');
const HomePage = require('../support/pages/home.page');

Given(/^I am on the login page$/, () => {
	browser.url("https://www.saucedemo.com/");
});

When(/^I login with username and password$/, () => {
	LoginPage.login("standard_user", "secret_sauce")
});

Then(/^I should see homepage SwagLabs$/, () => {
	HomePage.checkIfYouAreLoggedIn()
});
 