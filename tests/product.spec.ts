import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { CampaignPage } from '../pages/campaign.page';
import { ProductPage } from '../pages/product.page';

test.describe('Product Creation Flow', () => {
  const username = process.env.TEST_USERNAME || '';
  const password = process.env.TEST_PASSWORD || '';
  test('Valid Login', async ({ page }) => {
    const loginPage = new LoginPage(page);
    // Login
    await loginPage.goto();
    await page.screenshot({
      path: 'screenshots/homepage.png',
      fullPage: true,
    });
    await loginPage.login(username, password);

  })

    test('Navigate To products', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const campaignPage = new CampaignPage(page);
    const productPage = new ProductPage(page);

    // Login
    await loginPage.goto();
    await loginPage.login(username, password);

    // Navigate to Products
    await campaignPage.openProducts();

    })

  test('Create product', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const campaignPage = new CampaignPage(page);
    const productPage = new ProductPage(page);

    // Login
    await loginPage.goto();
    await loginPage.login(username, password);

    // Navigate to Products
    await campaignPage.openProducts();

    // Verify Products page is loaded
    await productPage.verifyProductPage();

    // Verify we're on the Products page
    //await expect(page.locator('h2')).toHaveText('Products');

    // Click Add Product and wait for form to appear
    await productPage.openAddProductForm();

    // Add Product Details
    //await productPage.addProduct('Test Product', '10', '15.99', 'Electronics', 'Vendor A');

  });
});