Feature: Menu hamburger button
@WIP
   Scenario: I am logged in to website "SwagLabs" And I want to check menu button
      Given as a user, I am on the home page
      When I click on the "Menu" button
      Then I should open drop-down menu with items

#    Scenario: I am logged in to the website "SwagLabs" and I click "All Item" from menu button
#       Given as a user, I am on the home page
#       When I click menu "All"
#       Then the product page should be displayed
@WIP
   Scenario: I am logged in to the website "SwagLabs" and I  "About" from drop down menu and reserch about SauceLab page 
      Given as a user, I am on the home page
      When I click on the "Menu" button
      And I click menu button "About"
      Then I should be redirected on SouceLabs page
@WIP
   Scenario: I am logged in to website "SwagLabs" and I want to Logout 
      Given as a user, I am on the home page
      When I click on the "Menu" button
      And I click menu button "Logout"
      Then I should be redirected on login page
# @WIP
#    Scenario: I am logged on to website "Swaglabs", and I want to resset app 
#       Given as a user, I am on the webpage
#       When I click on the top menu
#       And click reset app state
#       Then app should be reset state