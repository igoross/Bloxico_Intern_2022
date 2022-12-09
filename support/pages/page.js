/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
module.exports = class Page {
    getText(element){
        element.waitForDisplayed({timeout: 30000})
        browser.pause(50)
        return element.getText()
    }

    setValue(element, value){
        element.waitForDisplayed({timeout: 30000})
        browser.pause(50)
        element.setValue(value)
    }

    addValue(element, value){
        element.waitForDisplayed({timeout: 30000})
        browser.pause(50)
        element.addValue(value)
    }

    click(element){
        element.waitForDisplayed({ timeout: 30000 })
        browser.pause(50)
        element.click()
    }
}
