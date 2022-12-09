const Page = require('./page')
const { strictEqual } = require("assert");
const { ftruncate } = require('fs');

class HomePage extends Page{
    
    get appLogo () {
        return $('#header_container');
    };
    get productItem(){
        return $('#item_4_title_link');
    };
    get homePageProducts(){
        return $('#inventory_container')
    };
    get hamburgerMenu(){
        return $('#react-burger-menu-btn')
    };
    get dropDownMenu(){
        return $('#inventory_sidebar_link')
    };
    get linkAbout(){
        return $('#about_sidebar_link')
    };
    get pageSauceLab(){
        return $('#template__page')
    };
    get linkLogin(){
        return $('#logout_sidebar_link')
    };
    get loginPage(){
        return $('#login_button_container')
    };
    get sortBtn(){
        return $('#active_option')
    };
    get optionAZ(){
        return $('#az')
    };

    
    
    //functions

    checkIfYouAreLoggedIn(){
        strictEqual(this.appLogo.isDisplayed(),true)
    };
    clickOnProductItem(){
        this.productItem.click();
    };
    CheckIfYouAreOnHomepageProductsPage(){
        strictEqual(this.homePageProducts.isDisplayed(),true)
    };
    clickOnHamburgerMenu(){
        this.hamburgerMenu.click()
    };
    checkIfDeopdownMenuOpen(){
        strictEqual(this.dropDownMenu.isDisplayed(),true)
    };
    clickOnAboutLink(){
        this.linkAbout.click()
    };
    checkIfYouAreRedirectedOnSaucLabasPage(){
        strictEqual(this.pageSauceLab.isDisplayed(),true)
    };
    clickOnLoginLink(){
        this.linkLogin.click()
    };
    checkIfYouAreOnLoginPage(){
        strictEqual(this.loginPage.isDisplayed(),true)
    };
    clickOnSortOption(){
        this.sortBtn.click()
    };
    clickOnOptionAZ(){
        this.optionAZ.click()
    };

    
}



module.exports = new HomePage();