const { test, expect } = require('@playwright/test');
//const { test } = require('../fixture');


test('BStackDemo test checkout flow', async ({ page }) => {
  // visit the site
  await page.goto('https://bstackdemo.com/');
  //await page.screenshot({ path: 'debug/landing-page.png' });

  // sign in
  await page.click('#signin', { delay: 100 });
  await page.fill('#react-select-2-input', 'fav_user');
  await page.press('#react-select-2-input', 'Enter');
  await page.fill('#react-select-3-input', 'testingisfun99');
  await page.press('#react-select-3-input', 'Enter');
  //await page.screenshot({ path: 'login-page.png' });
  await page.click('#login-btn');
  await page.waitForNavigation();
  console.log("Login successful");
  //expect(false).toBe(true);

  // click on buy item
  //await page.click('#\\31 > .shelf-item__buy-btn');
  await page.click('#\\31 > .buy-btn');
  await page.click('div.float-cart__close-btn');
  await page.click('#\\32 > .shelf-item__buy-btn');
  await page.click('.buy-btn');
  await page.pause();
  console.log("Items added to cart");


  // add address details
  await page.fill('#firstNameInput', 'John');
  await page.fill('#lastNameInput', 'Doe');
  await page.fill('#addressLine1Input', '265 Slater Street');
  await page.fill('#provinceInput', 'Manchester');
  await page.fill('#postCodeInput', '06042');
  //await page.screenshot({ path: 'debug/address-page.png' });
  console.log("Address details added");

  // checkout
  await page.click('#checkout-shipping-continue');
  await page.click('text=Continue');
  await page.click('text=Orders');
  //await page.screenshot({ path: 'debug/orders-page.png' });
  console.log("Orders page displayed");

  const list = page.locator('.a-fixed-left-grid-inner');
  await expect(list).toHaveCount(2);
});


/*test('BStackDemo test add to cart', async ({page}) => {

   page.on('console', msg => {
    console.log(`BROWSER LOG: [${msg.type()}] ${msg.text()}`);
  });

  

   await page.evaluate(() => {
    console.log("Hello from the browser console");
    console.error("This is an error log");
  });

  // visit the site
  await page.goto('https://bstackdemo.com/');

  // get name of product we want to add to cart\
  const productToAdd = await page.locator('#\\33  > p').textContent();

  // click on add to cart
  await page.click('#\\33 > .shelf-item__buy-btn');

  // get name of item in cart
  const productInCart = await page.textContent('#__next > div > div > div.float-cart.float-cart--open > div.float-cart__content > div.float-cart__shelf-container > div > div.shelf-item__details > p.title');
  
  // check if product in cart is same as one added
  expect(productInCart).toEqual(productToAdd);
});*/