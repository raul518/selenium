const {Builder} = require("Selenium-webdriver");

async function example() {
  let driver = await new Builder().forBrowser("firefox").build();
  
    await driver.get("https://espanol.yahoo.com/?p=us");
    
}
example()