import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { CampaignPage } from '../pages/campaign.page';
import { ProductPage } from '../pages/product.page';

test.describe('Product Creation Flow', () => {

  test('Valid Login', async ({ page }) => {
    const loginPage = new LoginPage(page);
    // Login
    await loginPage.goto();
    await loginPage.login('rmgyantra', 'rmgy@9999');

  })

  test('Create product', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const campaignPage = new CampaignPage(page);
    const productPage = new ProductPage(page);

    // Login
    await loginPage.goto();
    await loginPage.login('rmgyantra', 'rmgy@9999');

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