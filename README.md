# Project Details

# Design Choices

    Project Name: Mock
    Team Members: jestra10, mpizigo
    Totat Time: ~15 hours total

# Design Choices - explain relationships any specific data structures and why they were created, runtime optimizations

    This project is a website that accepts commands and returns an output based on the command inputted.
    The main portion of the project is in two folders, a commands folder and a components folder. The
    components folder is where we create the parts of the website by creating and returning HTML code.
    The App component calls the LoginButton component. This blocks the user from accessing the text box
    to enter commands until they press the button to log in. This is a good case of defensive programming
    as we can let only certain people accesss the command box. If we are logged in then App calls the REPL
    component. In the REPL component, it calls REPLInput and REPLHistory and passes in a shared use state
    into both. This allows them to access and manipulate the same state. In REPLInput, we call ControlledInput
    and create a button called submit. This is where the user can type in commands and click the submit button
    to have the commands be run. This is the overall structure of the components.

    For the structure of our commands, we have a CommandMap and a REPLFunction interface. The CommandMap is a
    class that contains a hashmap whose key is of type string and value is of type REPLFunction. The CommandMap
    provides functions such as adding and deleting files, so that other developers can use this class to add
    and remove their own functions. This gives them the ability to customize the program to their liking. By
    having the value in the CommandMap be of type REPLFunction, it guarantees that any function that is of type
    REPLFunction will work with the CommandMap and will work with the functionality of our command box. One
    optimization we did with this was the use of currying. When the submit button gets clicked it calls the
    handleSubmit method which is where we call the respective command. We used currying by getting the
    function from the command map by using the command the user passed in as a key, then immediately after
    pass in arguments into that returned function. This optimized our code and made it simpler.

    For our project, we implemented four different REPLFunctions: load, view, search, and mode. Load is the
    function that allows the user to upload a file that is supported by our program. To use it the user
    must follow the format of 'load <filepath>'. It doesn't allow for empty CSV's or files that are not supported
    to be uploaded. View allows the user to see the CSV they uploaded in a HTML table format. The formatting of
    the file to HTML table is handled in a helper function in REPLHistory. To use view all the user must type is
    'view'. If a CSV had not been uploaded, then it will provide an informative error. Search allows the user to
    search for data in the CSV they had uploaded. To use search the user must use the format of 'search
    <columnIdentifier> <value>'. If the a file has not been uploaded yet, or the columnIdentifier is out of index
    for the CSV it will provide a useful error message. If no search results are found, search willprovide an
    useful message telling the user that no results were found and repeat the arguments you type in.For mode,
    this changes the output from brief to verbose or vice-versa. This gives the user the ability to see the
    commands they typed in repeated back to them if they want. To use this command the user must type
    in 'mode brief' or 'mode verbose'.

    The functions must be able to access the files in order to run the commands. To set up the files, we created
    a class called MockedDataMap. This class is similar to the CommandMap in the way it is set up. It contains
    a hashmap whose key is string and value is string[][]. It contains functions that allow another developer
    to add or remove files from this hashmap so they can customize it to their needs. In our case, we import
    our own files from the mockedData class. This hashmap is then instantiated in REPLInput and passed into
    the respective functions through being a type in the REPLFunction interface. The functions can then access
    the file they need from the hashmap to run their command.

# Errors/Bugs

    No known errors or bugs with our code.

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

To run the program, open a terminal and run 'npm start'. From there it will provide a link that can be used
to access the website. Click the login button to get access to the text box to type in commands. The different
default commands and the format of them can be found above in the design choices. But for a brief summary:
load <filepath>
view
search <columnIdentifier> <value>
mode brief
mode verbose

    For different files to use, here are the file names:
    data/simpleData.csv
    data/headerData.csv
    data/oneColumnData.csv
    data/emptyData.csv
    data/malformedData.csv
    data/repeatedData.csv

To run the tests, please type npx playwright test into the terminal. Playwright will run, and a page will pop up detailing the test results on different browsers.

# Collaboration

No outside collaboration was used.
