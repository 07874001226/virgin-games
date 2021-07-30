$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/featurefile/homepage.feature");
formatter.feature({
  "line": 1,
  "name": "Login Test",
  "description": "As a user I want to login into VirginGames website",
  "id": "login-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 30227612100,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User should navigate to login page successfully",
  "description": "",
  "id": "login-test;user-should-navigate-to-login-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should navigate to login page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "VirginGameStepdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 241922100,
  "status": "passed"
});
formatter.match({
  "location": "VirginGameStepdefs.iClickOnLoginLink()"
});
formatter.result({
  "duration": 10229667600,
  "status": "passed"
});
formatter.match({
  "location": "VirginGameStepdefs.iShouldNavigateToLoginPageSuccessfully()"
});
formatter.result({
  "duration": 20074675500,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//title[contains(text(),\u0027Virgin Games\u0027)]\"}\n  (Session info: chrome\u003d90.0.4430.72)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-KDKBGFP\u0027, ip: \u0027192.168.1.193\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 90.0.4430.72, chrome: {chromedriverVersion: 90.0.4430.24 (4c6d850f087da..., userDataDir: C:\\Users\\Vrajesh\\AppData\\Lo...}, goog:chromeOptions: {debuggerAddress: localhost:54245}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: d4e58e802517d57806f0015c40b9d4d4\n*** Element info: {Using\u003dxpath, value\u003d//title[contains(text(),\u0027Virgin Games\u0027)]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy19.getText(Unknown Source)\r\n\tat com.virgingames.utility.Utility.getTextFromElement(Utility.java:53)\r\n\tat com.virgingames.pages.HomePage.getVirginGameText(HomePage.java:30)\r\n\tat com.virgingames.stepdefs.VirginGameStepdefs.iShouldNavigateToLoginPageSuccessfully(VirginGameStepdefs.java:26)\r\n\tat ✽.Then I should navigate to login page successfully(src/test/java/resources/featurefile/homepage.feature:8)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1056327200,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 10,
  "name": "Verify User cannot Login using invalid emailID",
  "description": "",
  "id": "login-test;verify-user-cannot-login-using-invalid-emailid",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@Sanity,"
    },
    {
      "line": 9,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click on login link",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter  email \"\u003cemail\u003e\" in email field",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter  password \"\u003cpassword\u003e\" in password field",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on Login Button",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I should not be able Login successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "login-test;verify-user-cannot-login-using-invalid-emailid;",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ],
      "line": 18,
      "id": "login-test;verify-user-cannot-login-using-invalid-emailid;;1"
    },
    {
      "cells": [
        "vrajesh@gmail.com",
        "password1"
      ],
      "line": 19,
      "id": "login-test;verify-user-cannot-login-using-invalid-emailid;;2"
    },
    {
      "cells": [
        "siya1@yahoo.com",
        "password2"
      ],
      "line": 20,
      "id": "login-test;verify-user-cannot-login-using-invalid-emailid;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 28065179000,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Verify User cannot Login using invalid emailID",
  "description": "",
  "id": "login-test;verify-user-cannot-login-using-invalid-emailid;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@Regression"
    },
    {
      "line": 9,
      "name": "@Sanity,"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click on login link",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter  email \"vrajesh@gmail.com\" in email field",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter  password \"password1\" in password field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on Login Button",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I should not be able Login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "VirginGameStepdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 6251500,
  "status": "passed"
});
formatter.match({
  "location": "VirginGameStepdefs.iClickOnLoginLink()"
});
formatter.result({
  "duration": 11188196200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vrajesh@gmail.com",
      "offset": 16
    }
  ],
  "location": "VirginGameStepdefs.iEnterEmailInEmailField(String)"
});
formatter.result({
  "duration": 10025311200,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[@id\u003d\u0027field-username\u0027]\"}\n  (Session info: chrome\u003d90.0.4430.72)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-KDKBGFP\u0027, ip: \u0027192.168.1.193\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 90.0.4430.72, chrome: {chromedriverVersion: 90.0.4430.24 (4c6d850f087da..., userDataDir: C:\\Users\\Vrajesh\\AppData\\Lo...}, goog:chromeOptions: {debuggerAddress: localhost:54326}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: f289aae6398b463bc1605e915d6fae61\n*** Element info: {Using\u003dxpath, value\u003d//input[@id\u003d\u0027field-username\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy19.sendKeys(Unknown Source)\r\n\tat com.virgingames.utility.Utility.sendTextToElement(Utility.java:64)\r\n\tat com.virgingames.pages.LoginPage.enterEmailId(LoginPage.java:29)\r\n\tat com.virgingames.stepdefs.VirginGameStepdefs.iEnterEmailInEmailField(VirginGameStepdefs.java:31)\r\n\tat ✽.And I enter  email \"vrajesh@gmail.com\" in email field(src/test/java/resources/featurefile/homepage.feature:13)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "password1",
      "offset": 19
    }
  ],
  "location": "VirginGameStepdefs.iEnterPasswordInPasswordField(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "VirginGameStepdefs.iClickOnLoginButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "VirginGameStepdefs.iShouldNotBeAbleLoginSuccessfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 953610100,
  "status": "passed"
});
formatter.before({
  "duration": 27723252700,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Verify User cannot Login using invalid emailID",
  "description": "",
  "id": "login-test;verify-user-cannot-login-using-invalid-emailid;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@Regression"
    },
    {
      "line": 9,
      "name": "@Sanity,"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click on login link",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter  email \"siya1@yahoo.com\" in email field",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter  password \"password2\" in password field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on Login Button",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I should not be able Login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "VirginGameStepdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 6634000,
  "status": "passed"
});
formatter.match({
  "location": "VirginGameStepdefs.iClickOnLoginLink()"
});
formatter.result({
  "duration": 12294643300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "siya1@yahoo.com",
      "offset": 16
    }
  ],
  "location": "VirginGameStepdefs.iEnterEmailInEmailField(String)"
});
formatter.result({
  "duration": 10076643000,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[@id\u003d\u0027field-username\u0027]\"}\n  (Session info: chrome\u003d90.0.4430.72)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-KDKBGFP\u0027, ip: \u0027192.168.1.193\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 90.0.4430.72, chrome: {chromedriverVersion: 90.0.4430.24 (4c6d850f087da..., userDataDir: C:\\Users\\Vrajesh\\AppData\\Lo...}, goog:chromeOptions: {debuggerAddress: localhost:54380}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: cc793f89bd18f48e2ff9623caed7a2a0\n*** Element info: {Using\u003dxpath, value\u003d//input[@id\u003d\u0027field-username\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy19.sendKeys(Unknown Source)\r\n\tat com.virgingames.utility.Utility.sendTextToElement(Utility.java:64)\r\n\tat com.virgingames.pages.LoginPage.enterEmailId(LoginPage.java:29)\r\n\tat com.virgingames.stepdefs.VirginGameStepdefs.iEnterEmailInEmailField(VirginGameStepdefs.java:31)\r\n\tat ✽.And I enter  email \"siya1@yahoo.com\" in email field(src/test/java/resources/featurefile/homepage.feature:13)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "password2",
      "offset": 19
    }
  ],
  "location": "VirginGameStepdefs.iEnterPasswordInPasswordField(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "VirginGameStepdefs.iClickOnLoginButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "VirginGameStepdefs.iShouldNotBeAbleLoginSuccessfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 974325500,
  "status": "passed"
});
});