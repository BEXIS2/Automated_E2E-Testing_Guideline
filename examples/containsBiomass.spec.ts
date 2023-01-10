import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://demo.bexis2.uni-jena.de/");
  await page.getByRole("button", { name: "Public Search" }).click();
  const page1Promise = page.waitForEvent("popup");
  await page
    .getByRole("cell", {
      name: "All select Search requests that include only special character, are not supported. Search first prev 1 10 select next last Displaying items 1 - 2 of 2 ID  Title  Owner Name  Contact Name  Dataset Description  Organisation Name  3 Biomass data from the drought experiment (2011) Anja Vogel Alexandra Weigelt This experiment was established in order to investigate the effects of biodiversity and prolonged summer drought and their interaction on aboveground productivity. core area = 2 cuts per year, not fertilized; Treatment: 1 roofed subplot, 1 roofed and watered subplot; roofs were installed from 2011-07-11 to 2011-08-29  2 Biomass data from the drought experiment (2017) Anja Vogel Anne Ebeling This experiment was established in order to investigate the effects of biodiversity and prolonged summer drought and their interaction on aboveground productivity. Target plant species biomass was collected seperatly. core area = 2 cuts per year, not fertilized; Treatment: 1 roofed subplot, 1 roofed and watered subplot;  first prev 1 10 select next last Displaying items 1 - 2 of 2",
    })
    .getByRole("row", {
      name: "3 Biomass data from the drought experiment (2011) Anja Vogel Alexandra Weigelt This experiment was established in order to investigate the effects of biodiversity and prolonged summer drought and their interaction on aboveground productivity. core area = 2 cuts per year, not fertilized; Treatment: 1 roofed subplot, 1 roofed and watered subplot; roofs were installed from 2011-07-11 to 2011-08-29 ",
    })
    .getByTitle("View details")
    .click();
  const page1 = await page1Promise;
  await page1
    .locator('[id="\\31 _1_LabelContainerMenu"]')
    .getByText("General")
    .click();
  await expect(page1
    .getByRole("cell", {
      name: "Biomass data from the drought experiment (2011) Dataset id: 3 Version: Download Dataset Metadata Primary Data Data Structure Links Dataset Permissions Publish Attachments Download Metadata show all fields  All General Authorship Methods Treatments Weeding Keywords Coverage Data Status  General Title Biomass data from the drought experiment (2011)  Abstract This experiment was established in order to investigate the effects of biodiversity and prolonged summer drought and their interaction on aboveground productivity. core area = 2 cuts per year, not fertilized; Treatment: 1 roofed subplot, 1 roofed and watered subplot; roofs were installed from 2011-07-11 to 2011-08-29  Synthesis No  Experiment Main Dataset ID  Version ID  Registration date 1/13/2021 3:30:26 PM  Metadata last modification date 1/13/2021 5:50:52 PM  Data creation date 1/13/2021 3:35:26 PM  Data last modification date 1/13/2021 3:35:26 PM ",
    })
    .getByRole("cell", {
      name: "Biomass data from the drought experiment (2011)",
    })
    .getByText("Biomass data from the drought experiment (2011)")
  ).toContainText("Biomass");
});
