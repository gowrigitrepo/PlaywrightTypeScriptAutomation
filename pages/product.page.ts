import { Page, Locator, expect } from '@playwright/test';

export class ProductPage {
  readonly page: Page;

  readonly addProductButton: Locator;
  readonly productTable: Locator;
  readonly productRows: Locator;
  readonly addProductForm: Locator;
  readonly productNameInput: Locator;
  readonly quantityInput: Locator;
  readonly priceInput: Locator;
  readonly categoryDropdown: Locator;
  readonly vendorDropdown: Locator;
  readonly addButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.addProductButton = page.getByRole('button', { name: 'Add Product' });

    this.productTable = page.locator('.table-wrapper table');
    this.productRows = page.locator('.table-wrapper table tbody tr');

    this.addProductForm = page.locator('form'); 

    this.productNameInput = page.getByLabel('Product Name');
    this.quantityInput = page.getByLabel('Quantity');
    this.priceInput = page.getByLabel('Price Per Unit');
    this.categoryDropdown = page.getByLabel('Select Category');
    this.vendorDropdown = page.getByLabel('Select Vendor');
    this.addButton = page.getByRole('button', { name: 'Add' });
  }

  async verifyProductPage() {
  await expect(this.productTable).toBeVisible();
  await expect(this.productRows.first()).toBeVisible();
  }

  async openAddProductForm() {
    await this.addProductButton.click();
    
    await expect(this.addProductForm).toBeVisible();
  }

  async fillProductDetails(name: string, qty: string, price: string) {
    await this.productNameInput.fill(name);
    await this.quantityInput.fill(qty);
    await this.priceInput.fill(price);
  }

  async selectCategory(category: string) {
    await this.categoryDropdown.selectOption({ label: category });
  }

  async selectVendor(vendor: string) {
    await this.vendorDropdown.selectOption({ label: vendor });
  }

  async submitProduct() {
    await Promise.all([
      this.page.waitForLoadState('networkidle'),
      this.addButton.click()
    ]);
  }

  async addProduct(name: string, qty: string, price: string, category: string, vendor: string) {
    await this.openAddProductForm();
    await this.fillProductDetails(name, qty, price);
    await this.selectCategory(category);
    await this.selectVendor(vendor);
    await this.submitProduct();
  }

 /* async verifyProductDetails(product: {
  name: string;
  qty: string;
  price: string;
}) {
  const row = this.page.locator('table tbody tr', {
    has: this.page.locator(`td:text-is("${product.name}")`)
  });

  await expect(row).toBeVisible();
  await expect(row).toContainText(product.qty);
  await expect(row).toContainText(product.price);
}*/
}