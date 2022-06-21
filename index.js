const {Builder, By, Key, until} = require ("selenium-webdriver");

async function ejemplo(){
    let driver = await new Builder().forBrowser("firefox").build();
    try {
    await driver.get("https://yahoo.com");

    //await driver.get("https://login.yahoo.com/?.lang=es-US&src=homepage&.done=https%3A%2F%2Fespanol.yahoo.com%2F%3Fp%3Dus&pspid=2142990676&activity=ybar-signin");
    
    await driver.findElement(By.xpath('//*[@id="root_3"]')).click();
    await driver.sleep(3000);

    var buscqueda = driver.findElement({xpath:'//*[@id="ybar-sbq"]'});
    buscqueda.sendKeys("cr7");

    await driver.findElement(By.xpath('//*[@id="ybar-search"]')).click();

    await driver.executeScript('arguments[0].scrollIntoView(0,300);', btn);
        await driver.sleep(5000);
    //finalizamos la tarea
  }finally {
    await driver.quit();
   //var submit = driver.findElement(By.xpath('//*[@id="login-signin"]'));
   //submit.click();
 
}
}
ejemplo();
