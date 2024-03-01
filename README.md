> **GETTING STARTED:** You should likely start with the `/mock` folder from your solution code for the mock gearup.

# Project Details

# Design Choices


# Errors/Bugs
None we are aware of.

# Tests

They are all packaged in the tests/e2e file. They include:

App.spec.ts (tests for general website login and submit button behavior):
- on page load, i see a login button
- on page load and login, i see a sign out button
- on page load, i dont see the input box until login
- on page load, login, and sign out, i dont see the input box
- after I type into the input box, its text changes
- on page load, i see a button
- after I click the button, my command gets pushed
- on page load, login, command push, and sign out, i dont see the input box

testMode.spec.ts (tests for mode command behavior):
- no mode args inputted, in brief and verbose mode
- wrong mode args inputted, in brief and verbose mode
- too many mode args inputted, in brief mode and verbose mode

- on mode brief & brief inputted, stating that history is already in mode brief
- on mode brief & verbose inputted, switching to mode verbose
- on mode verbose & verbose inputted, stating that history is already in mode verbose
- on mode verbose & brief inputted, switching to mode brief

testLoad.spec.ts (tests for load command behavior):
- no load args inputted, in brief and verbose mode
- wrong load args inputted, in brief and verbose mode
- too many load args inputted, in brief and verbose mode
- loading an empty file
- loading a valid file
- loading the same file twice
- loading one file then another

testView.spec.ts (tests for view command behavior):
- too many args inputted, in brief and verbose mode
- viewing a valid file, in brief and verbose mode
- viewing a file with headers, in brief and verbose mode
- veiwing a malformed file, in brief and verbose mode
- viewing a file twice

testSearch.spec.ts (tests for search command behavior):
- too many args inputted, in brief and verbose mode
- too few args inputted, in brief and verbose mode
- searching through a valid file by column name and id, for a value that exists (brief and verbose mode)
- searching through a valid file by column name and id, for a value that does not exist (brief and verbose mode)
- searching through a valid file for a value that is present multiple times
- searching through a valid file for value that is present, but not in the specified column
- searching through a malformed dataset
- inputting column names or ids that are not present/out of bounds
- searching twice consecutively

testIntegration.spec.ts (tests for integration behavior between all functions):
- view no load, then load and view works
- search no load, then load and search works
- view after loading a nonexistent file
- search after loading a nonexistent file
- load and view, then load different file and view
- load and search, then load different file and search
- view search view, and verifying that the views are the same
- search view search, and verifying that the searches are the same
- view switch mode view switch mode view, and verifying that the first and last views are the same
- search switch mode search switch mode search, and verifying that the first and last searches are the same


# How to
To run the localhost, please type npm start into the terminal. You can then access the website by navigating to the printed-out link.
To run the tests, please type npx playwright test into the terminal. Playwright will run, and a page will pop up detailing the test results on different browsers.

# Collaboration
No outside collaboration was used.
