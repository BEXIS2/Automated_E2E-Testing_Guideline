# Recording
Playwright provides a user-friendly approach to writing tests. By simulating the behavior we expect in a browser window, Playwright records mouse clicks and keyboard input and turns these actions into code. In the below tutorial we will record a test scenario in which:
1. We will open BEXIS2 Demo instance.
2. Click on Public Search button.
3. Select and view the first dataset displayed.
4. Download the data as CSV.

## Tutorial
To begin with, open the Testing menu from the left sidebar. And click on the Playwright action menu on the bottom which will reveal some options.

### Opening BEXIS2 Demo instance
<img src="screenshots/recording/screenshot.jpg" height="400">

Clicking on "Record new" will open a new browser window and will start to track our input. Click on "Record new".

<img src="screenshots/recording/screenshot2.jpg" height="400">

You will notice a new file is created with the name `test-1.spec.ts` in which our recorded input will be transformed into TypeScript code. Also, this file and the test instance in it will appear in the Test Explorer on the left.

We can go ahead and start entering the BEXIS2 Demo instance's URL.

<img src="screenshots/recording/screenshot4.jpg" height="400">

As you might notice, automatically a line of code is inserted after entering the URL. We may now continue by clicking on the "Public Search" button.

### Clicking on Public Search

<img src="screenshots/recording/screenshot5.jpg" height="400">

Again, the input is reflected as a line of code in our file.

### Viewing the first dataset displayed

<img src="screenshots/recording/screenshot6.jpg" height="400">

As the page loads with the available datasets, 3 lines of code are added. The code might seem confusing, however, Playwright is simply reflecting the exact behavior that it is observing. This guarantees a unique selection process for the tests to be stable and return the same outcome each time.

We now proceeed with choosing the first dataset and viewing it. You may notice the grayish transparent window appearing under the button before clicking it. This is the code it will generate to find the button you're about to click. We don't need to worry about it for now.

### Download as CSV

<img src="screenshots/recording/screenshot7.jpg" height="400">

Our previous click resulted in a new tab to be opened. In the code it appears as `page1` to distinguish between the 2. In the new page click on "Download Dataset".

<img src="screenshots/recording/screenshot8.jpg" height="400">

Choose the "... with CSV" option from the dropdown.

<img src="screenshots/recording/screenshot9.jpg" height="400">

It will download the dataset and add more lines into the code. We can see the file is downloaded and the scenario is successfully recorded and transformed into a test file.

<img src="screenshots/recording/screenshot10.jpg" height="400">

You may now close the browser window and save the file. 
In the file explorer menu (first menu on the left sidebar), you will also find this file in the `tests` folder. Every test will appear in this folder after being generated. You may rename the file to make it more specific and distinguishable. In this tutorial, we will keep it as it is.

### Running the recorded test

<img src="screenshots/recording/screenshot11.jpg" height="400">

If we head now back to the Testing menu, we will notice our test appearing in the Test Explorer. This test file is now ready to be run. To run the tests you can see 2 triangular buttons. The first highlighted button will run every test there is to run. The second highlighted button, the one next to our test module, will only run this test. At this point, both buttons will do the same thing. However, when you have many tests, you may need to specifically run a single module and ignore others.

Next highlighted feature is the "Show browser" checkbox. When checked, Playwright will open a browser and run the test automatically in the browser. It will simulate every click and input. You may also uncheck it as it does not affect the testing process.

Last highlighted feature is "Reveal test output". This can be a very helpful tool as it will let you know what test it is currently working on, how many to go, and the result of it.

We will now go ahead and run the test by clicking on the button next to our test in the Test Explorer. Also, click on the "Reveal test output" to see the progress and result.

<img src="screenshots/recording/screenshot12.jpg" height="400">

You will now notice the checkmark next to the test (and its file name and folder as you go up) which means the test was successful and no problem occured along the way.

In the Terminal below you may also see that "1 passed" output. Also, as we have checked "Show browser" option, you may notice the browser with opened pages and the downloaded file.

Now that we have finished our tutorial on Recording tests, we may now proceed with editing the recorded test with some Test Verification.

You may find the code for this test in the `examples` folder, in file `downloadCSV.spec.ts`.

# Testing
Recording process is not very useful on its own as it does not verify or test any feature, content, information on the page. It simply automates the navigation. In this tutorial, we will utilize our recorded test and by editing it slightly with minimal code, we will make our test functional and verify some content displayed.

In this tutorial:
1. We will start a new recording.
2. Open BEXIS2 Demo instance.
3. Click on Public Search button.
4. Select and view the first dataset displayed.
5. Click on General.
6. Click on Title text.
7. Edit the last line of the generated test file to verify the title contains the text "Biomass" in it.

## Tutorial
As the first 3 steps are the same, you may follow the previous tutorial until downloading part.

### Navigating to General Tab

<img src="screenshots/recording/screenshot13.jpg" height="400">

Now, on the opened dataset webpage, we will click on General tab.

### Selecting the title text

<img src="screenshots/recording/screenshot14.jpg" height="400">

We will now click on the title content. And after our click is registered, we may now close the browser as the recording part of our test is done.

To make the code more readable, the code will be formatted. 

### Adding test verification

<img src="screenshots/recording/screenshot15.jpg" height="400">

You will find the last command starting on line 21, highlighted. The last line in the command is `.click();`. We can go ahead and remove this line. We do not want to click on the text, but simply select it.

After removing the `.click();` part, we are left with the selection code. To make this piece of code functional and actually verify an expected outcome, we simply add `expect` in front after the `await` keyword. We also need to put the remainder of the code in parantheses.

Finally, we will add `.toContainText("Biomass");` to the bottom of the statement.

<img src="screenshots/recording/screenshot16.jpg" height="400">

This code simply reads "expect the selected text component (between the parantheses) to contain Biomass in it".

`expect` keyword will transform the code from a navigatory one into a verifying one. To specify what is it we expect, we need to add the last line where we tell what we expect, in this case, to contain the Biomass text.

Hence:

`expect(`the selected component`).toContainText(`text we expect to find`);`


We can now save and test the file.

### Running the test

<img src="screenshots/recording/screenshot17.jpg" height="400">

Navigating to test explorer and running the file will now return a success. As you may notice, this time "Show browser" option was not selected. In the test output we see that our test has passed. You may also notice we lack a checkmark next to the previous file. Because the second test file was run with the button next to it, it tells Playwright to isolate and only run the second test file.

Now we have learned how to implement a simple text verification into our test. In the next and final section, we will see how to run all tests at once and how we can choose a different browser.

You may find the code for this test in the `examples` folder, in file `containsBiomass.spec.ts`.

# Testing options
In the previous tutorials we have only run the tests we were interested in. Now we will see:

1. How to run all the tests at once.
2. How to select a different browser.

## Tutorial
Now that we have 2 different tests, we would like to learn how to run both at the same time.

<img src="screenshots/recording/screenshot18.jpg" height="400">

By clicking the triangular button on top you can run all the tests. By default, it will choose Chromium. However, if we click on the arrow next to it, a dropdown will appear with all available choices. You may see chromium and firefox listed for Playwright section. Also, you may notice chromium has (Default) wrtitten next to it, which denotes this is the default browser it will run the tests at unless commanded otherwise. You may select a different Default Profile by clicking "Select Default Profile".

Now, we will choose firefox and it will run all the tests with firefox. 

We will again omit the "Show browser" option. This type of testing is also called "Headless mode".

<img src="screenshots/recording/screenshot19.jpg" height="400">

If we reveal the test output we may now see the information outputted in the Terminal. In the first sqaure brackets it denotes which test it's running and how many is there. It indicates which browser it is using in the next square brackets. It also indicates on which line the test resides. :3:5 means 3rd line and 5th character. This information will help to distinguish which tests failed, where they failed and why.

<img src="screenshots/recording/screenshot20.jpg" height="400">

And now we can see all the tests have passed and this time there are checkmarks next to both the files.