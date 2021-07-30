package com.virgingames.stepdefs;

import com.virgingames.pages.HomePage;
import com.virgingames.pages.LoginPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class VirginGameStepdefs {
    HomePage homePage = new HomePage();
    LoginPage loginPage = new LoginPage();

    @Given("^I am on homepage$")
    public void iAmOnHomepage() {
    }

    @When("^I click on login link$")
    public void iClickOnLoginLink() {
        homePage.clickOnLoginLink();
    }

    @Then("^I should navigate to login page successfully$")
    public void iShouldNavigateToLoginPageSuccessfully() {
        homePage.getVirginGameText();
    }

    @And("^I enter  email \"([^\"]*)\" in email field$")
    public void iEnterEmailInEmailField(String email)  {
        loginPage.enterEmailId(email);
    }

    @And("^I enter  password \"([^\"]*)\" in password field$")
    public void iEnterPasswordInPasswordField(String password)  {
        loginPage.enterPassword(password);
    }

    @When("^I click on Login Button$")
    public void iClickOnLoginButton() {
        loginPage.clickOnLoginButton();
    }

    @Then("^I should not be able Login successfully$")
    public void iShouldNotBeAbleLoginSuccessfully() {
        loginPage.verifyErrorMessage();
    }
}
