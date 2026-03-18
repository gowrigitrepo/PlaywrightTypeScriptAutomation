import { Page, Locator } from '@playwright/test';

export class CampaignPage {
  readonly page: Page;
  readonly campaignsHeader : Locator
  readonly productTab: Locator;

  constructor(page: Page) {
    this.page = page;
    this.campaignsHeader = page.locator('.table-title b')
    this.productTab = page.getByRole('link', { name: 'Products' });
  }

  async openProducts(): Promise<void> {
    await this.productTab.click();
  }
}