const {Builder, By, Key, until} = require ("selenium-webdriver");

async function ejemplo(){
    let driver = await new Builder().forBrowser("firefox").build();
    await driver.get("https://yahoo.com");

    await driver.get("https://login.yahoo.com/?.lang=es-US&src=homepage&.done=https%3A%2F%2Fespanol.yahoo.com%2F%3Fp%3Dus&pspid=2142990676&activity=ybar-signin");
     

}
ejemplo();