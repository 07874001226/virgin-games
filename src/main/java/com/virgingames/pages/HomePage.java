package com.virgingames.pages;

import com.virgingames.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;


public class HomePage extends Utility {

    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    @FindBy(linkText = "Login")
    WebElement loginLink;

    @FindBy(xpath = "//title[contains(text(),'Virgin Games')]")
    WebElement virginGameText;

    public void clickOnLoginLink(){
        clickOnElement(loginLink);
        log.info("Clicking on login link : " + loginLink.toString());


    }

    public String getVirginGameText() {

        log.info("Getting text from : " + virginGameText.toString());
        return getTextFromElement(virginGameText);
    }
}
