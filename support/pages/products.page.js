const Page = require('./page');
const { strictEqual } = require("assert");
const { ftruncate } = require('fs');

class ProductPage extends Page{
    
   get addToCartBtn () {
        return $('#add-to-cart-sauce-labs-backpack');
    };
    get addToCartBtn2(){
        return $('#add-to-cart-sauce-labs-bolt-t-shirt');
    };
   get clickCartIcon (){
    return $('#shopping_cart_container')
   };
   get itemDescription (){
    return $('#inventory_item_container')
   };
   get backToProductsBtn (){
    return $('#back-to-products')
   };
   get removeBtn (){
    return $('#remove-sauce-labs-backpack')
   };
   

   
   
    //function

    clickOnaddToCartButton(){
        this.click(this.addToCartBtn)
        
    };
    clickOnaddToCartButton2(){
        this.click(this.addToCartBtn2)
    }

    clickOnCartIconLink(){
        this.click(this.clickCartIcon)
    };
    checkProductItemDescription(){
        strictEqual(this.itemDescription.isDisplayed(),true)
    };
    clickOnBacktToProductsBtn(){
        this.backToProductsBtn.click()
    };
    clickOnRemoveBtnFromProductPage(){
        this.removeBtn.click()
    };

    

    
    

    }

module.exports = new ProductPage(); 