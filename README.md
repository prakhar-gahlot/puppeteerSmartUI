**Step 1**
Create a SmartUI Project
The first step is to create a project with the application in which we will combine all your builds run on the project. To create a SmartUI Project, follow these steps:

Go to Projects page https://smartui.lambdatest.com/
Click on the new project button
Select the platform as CLI for executing your SDK tests.
Add name of the project, approvers for the changes found, tags for any filter or easy navigation.
Click on the Submit.

**Step 2**
Clone the repo and install all dependencies

**Step3**
Export the Project token and Credentials in the terminal of your IDE
![image](https://github.com/user-attachments/assets/7e51cc7a-1e3d-43d1-b13f-863e2f95ec9e)


**Step 4:**
Create and Configure SmartUI Config
You can now configure your project configurations on using various available options to run your tests with the SmartUI integration. To generate the configuration file, please execute the following command:

npx smartui config:create .smartui.json


**Step 5** 
Adding SmartUI function to take screenshot
You can incorporate SmartUI into your custom Puppeteer automation test (any platform) script by adding the smartuiSnapshot function in the required segment of Puppeteer script of which we would like to take the screenshot, as done in the sample test in src/

**Step 6**
Execute the Tests on SmartUI Cloud
Execute visual regression tests on SmartUI using the following commands

npx smartui exec npm test --config smartui-web.json
