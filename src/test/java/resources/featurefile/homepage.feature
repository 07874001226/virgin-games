Feature: Login Test
  As a user I want to login into VirginGames website

  @Smoke
  Scenario: User should navigate to login page successfully
    Given I am on homepage
    When I click on login link
    Then I should navigate to login page successfully
  @Sanity,@Regression
  Scenario Outline:Verify User cannot Login using invalid emailID
    Given I am on homepage
    And I click on login link
    And I enter  email "<email>" in email field
    And I enter  password "<password>" in password field
    When I click on Login Button
    Then I should not be able Login successfully
    Examples:
      | email             | password  |
      | vrajesh@gmail.com | password1 |
      | siya1@yahoo.com   | password2   |