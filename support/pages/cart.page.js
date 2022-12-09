const Page = require('./page');
const { strictEqual } = require("assert");
const { ftruncate } = require('fs');


class CartPage extends Page{


    get cartNotificaton () {
        return $('#shopping_cart_badge');
    };
    get checkoutBtn(){
        return $('#checkout')
    };
    get continueShopingBtn(){
        return $('#continue-shopping')
    };
    get removeBtn(){
        return $('#remove-sauce-labs-backpack')
    };
    get removeItemFromList(){
        return $('#shopping_cart_container')
    };

    //Function

    checkIfProductIsAdded(){
         strictEqual(this.cartNotificaton.isDisplayed(),false)
    };

    clickOnCheckouBtn(){
        this.checkoutBtn.click()
    };

    goBackAndContinueShopping(){
        this.continueShopingBtn.click()
    };
    
    cLickOnRemoveBtn(){
        this.removeBtn.click()
    };
    checkIfYouAreRemovedItemFromList(){
        strictEqual(this.removeItemFromList.isDisplayed(),true)
    };

 

    

}
module.exports = new CartPage;
