import { test, expect } from '@playwright/test';

test('Download first dataset as CSV', async ({ page }) => {
  await page.goto('https://demo.bexis2.uni-jena.de/');
  await page.getByRole('button', { name: 'Public Search' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('cell', { name: 'All select Search requests that include only special character, are not supported. Search first prev 1 10 select next last Displaying items 1 - 2 of 2 ID  Title  Owner Name  Contact Name  Dataset Description  Organisation Name  3 Biomass data from the drought experiment (2011) Anja Vogel Alexandra Weigelt This experiment was established in order to investigate the effects of biodiversity and prolonged summer drought and their interaction on aboveground productivity. core area = 2 cuts per year, not fertilized; Treatment: 1 roofed subplot, 1 roofed and watered subplot; roofs were installed from 2011-07-11 to 2011-08-29  2 Biomass data from the drought experiment (2017) Anja Vogel Anne Ebeling This experiment was established in order to investigate the effects of biodiversity and prolonged summer drought and their interaction on aboveground productivity. Target plant species biomass was collected seperatly. core area = 2 cuts per year, not fertilized; Treatment: 1 roofed subplot, 1 roofed and watered subplot;  first prev 1 10 select next last Displaying items 1 - 2 of 2' }).getByRole('row', { name: '3 Biomass data from the drought experiment (2011) Anja Vogel Alexandra Weigelt This experiment was established in order to investigate the effects of biodiversity and prolonged summer drought and their interaction on aboveground productivity. core area = 2 cuts per year, not fertilized; Treatment: 1 roofed subplot, 1 roofed and watered subplot; roofs were installed from 2011-07-11 to 2011-08-29 ' }).getByTitle('View details').click();
  const page1 = await page1Promise;
  await page1.getByRole('button', { name: 'Download Dataset' }).click();
  const downloadPromise = page1.waitForEvent('download');
  await page1.getByRole('link', { name: '... with CSV' }).click();
  const download = await downloadPromise;
});