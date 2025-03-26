import puppeteer from 'puppeteer';
const { smartuiSnapshot } = require("@lambdatest/puppeteer-driver");
(async () => {
  // Launch a browser instance locally
  const browser = await puppeteer.launch({
    headless: false, // Set to false to see the UI
    args: ['--start-maximized'], // Start browser maximized, remove if not needed
  });
  
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 720 });

  // Navigate to the desired URL
  await page.goto('https://www.coursera.org/');

  // Take a screenshot with SmartUI
  await smartuiSnapshot(page, "Coursera-Home");

  await page.goto('https://www.coursera.org/business/')

  await smartuiSnapshot(page, "Coursera-ForBusiness")
  
  console.log("SmartUI Snapshot captured successfully!");

  // Close the browser
  await browser.close();
})();
