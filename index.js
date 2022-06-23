const {Builder, By, Key, until} = require ("selenium-webdriver");

async function ejemplo(){
    let driver = await new Builder().forBrowser("firefox").build();
    try {
    await driver.get("https://yahoo.com");
    await driver.sleep(3000);

    //await driver.get("https://login.yahoo.com/?.lang=es-US&src=homepage&.done=https%3A%2F%2Fespanol.yahoo.com%2F%3Fp%3Dus&pspid=2142990676&activity=ybar-signin");
    
    await driver.findElement(By.xpath('//*[@id="root_3"]')).click();
    await driver.sleep(3000);
    //*[@id="root_2"]

    //*[@id="ybar-sbq"]



    var buscqueda = driver.findElement({xpath:'//*[@id="ybar-sbq"]'});
     buscqueda.sendKeys("Cristiano Ronaldo -cr7");

     await driver.findElement(By.xpath('//*[@id="ybar-search"]')).click();
     await driver.sleep(3000);
     await driver.findElement(By.xpath('//*[@id="main"]')).click();
     await driver.sleep(3000);


    //await driver.findElement(By.xpath('/html/body/div[5]/div[4]/div[2]/div[1]/div[2]/ul/li[1]/div/div[2]/a/h3')).click();
    //await driver.sleep(5000);
    

    await driver.findElement(By.xpath('//*[@id="root_4"]"]')).click();
     await driver.sleep(2000);
    var buscqueda = driver.findElement({xpath:'//*[@id="ybar-sbq"]'});
    buscqueda.sendKeys("noticias");

    await driver.executeScript('arguments[0].scrollIntoView(0,1000);', btn);
       await driver.sleep(2000);
     
    var buscqueda = driver.findElement({xpath:'//*[@id="ybar-sbq"]'});
     
      
      

    //finalizamos la tarea
  }finally {
    await driver.quit();
  // var submit = driver.findElement(By.xpath('//*[@id="login-signin"]'));
  //  submit.click();
 
}
}
ejemplo();
