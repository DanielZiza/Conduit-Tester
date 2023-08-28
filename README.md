# Conduit-Tester

Welcome to the repository for automated testing using Cypress in conjunction with the **Cucumber (Gherkin) Support Enhanced for Behat** extension. This repository contains automated tests that combine the powerful Cypress testing tool with the natural language scenario writing syntax provided by the Behat extension for Gherkin.

## Overview

This repository was created with the aim of demonstrating how to use Cypress alongside the Behat extension for Gherkin, enhancing readability and collaboration in the creation and maintenance of automated tests. The combination of these technologies allows writing tests in natural language using the Gherkin format and then executing them with the power of Cypress.

## Configuration

Make sure you have Node.js and npm (or yarn) installed on your system before proceeding. Follow the steps below to set up and run the automated tests:

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-user/test-cypress-cucumber-repository.git
   cd test-cypress-cucumber-repository
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Run the tests:**
   ```sh
   npx cypress open
   ```

## Project Structure

The project follows an organized structure to facilitate the creation, maintenance, and execution of automated tests:

- `cypress/`
  - `integration/`: Contains the test files written in Gherkin.
  - `plugins/`: Enables extending Cypress functionalities.
  - `support/`: Includes support files like custom commands.

## Writing Tests

Tests are written in `.feature` files in the `cypress/integration` folder, using the Gherkin syntax. An example scenario could be:

```gherkin
Feature: Login
  As a user
  I want to log in to my account
  So that I can access restricted resources

  Scenario: Login with valid credentials
    Given I am on the login page
    When I fill in "username" with "my_username"
    And I fill in "password" with "my_password"
    And I click the "Login" button
    Then I should be redirected to the home page
```

## Cucumber (Gherkin) Support Enhanced for Behat Extension

The Behat extension provides syntax highlighting and additional features for `.feature` files, enhancing readability and the writing experience. Additionally, it assists in generating automated test steps based on the steps defined in the scenarios.

## Contribution

Contributions are welcome! Feel free to open issues or pull requests to propose improvements, bug fixes, or new features.

## Additional Resources
