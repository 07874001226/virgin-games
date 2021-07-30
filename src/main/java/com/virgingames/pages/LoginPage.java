package com.virgingames.pages;

import com.virgingames.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;


public class LoginPage extends Utility {
    private static final Logger log = LogManager.getLogger(LoginPage.class.getName());


    @FindBy(xpath = "//input[@id='field-username']")
    WebElement emailField;

    @FindBy(xpath = "//input[@id='field-password']")
    WebElement passwordField;

    @FindBy(xpath = "//li[@class='field-item field-item-button']//button")
    WebElement loginBtn;

    @FindBy(xpath = "//div[contains(text(),'Please try again, your username/email or password ')]")
    WebElement errorMessage;


    public void enterEmailId(String email) {
        sendTextToElement(emailField, email);
        log.info("Entering email address : " + email + " to email field : " + emailField.toString());
    }

    public void enterPassword(String password) {
        sendTextToElement(passwordField, password);
        log.info("Entering password : " + password + " to password field : " + passwordField.toString());
    }

    public void clickOnLoginButton() {
        log.info("Clicking On Login Butto : " + loginBtn.toString());
        clickOnElement(loginBtn);
    }
    public void verifyErrorMessage() {
        log.info("Verify Error Message " +errorMessage.toString());
        String actual = "Please try again, your username/email or password ";
        Assert.assertEquals(actual,errorMessage);
    }


}
