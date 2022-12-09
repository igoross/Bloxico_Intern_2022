const Page = require('./page');
const { strictEqual } = require("assert");
const { ftruncate } = require('fs');


class CheckoutPage extends Page{

    get checkoutInformationPage(){
        return $('#contents_wrapper')
    };
    get checkOutInfo(){
        return $('#checkout_info_container')
    };
    get inputFirstName(){
        return $('#first-name')
    };
    get inputLastName(){
        return $('#last-name')
    };
    get inputZipPostalCode(){
        return $('#postal-code')
    };
    get continueBtn(){
        return $('#continue')
    };
    get overviewPage(){
        return $('#checkout_summary_container')
    };
    get finishBtn(){
        return $('#finish')
    };
    get completePage(){
        return $('#checkout_complete_container')
    };
    
//function

    checkIfYouAreOnCheckoutPage(){
        strictEqual(this.checkoutInformationPage.isDisplayed(),true)
    };
    checkYourInfoPage(){
        strictEqual(this.checkOutInfo.isDisplayed(),true)
    };

    inputYourinformation(firstname, lastname, postalcode){
        this.inputFirstName.setValue(firstname);
        this.inputLastName.setValue(lastname);
        this.inputZipPostalCode.setValue(postalcode);
    };

    clickOnContinuBtn(){
        this.continueBtn.click()
    };

    checkIfYouAreOnOverviewPage(){
        strictEqual(this.overviewPage.isDisplayed(),true)
    };

    clickOnFinishButton(){
        this.finishBtn.click()
    };

    checkIfYouCompleteYourPurches(){
        strictEqual(this.completePage.isDisplayed(),true)
    };



    open () {
        return super.open('inputYourinformation');
    }
    
}
module.exports = new CheckoutPage();