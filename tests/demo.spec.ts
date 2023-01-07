import {test} from "@playwright/test";

test.describe('Test tool QA', () => {
    test("Elements", async ({page}) => {
        await page.goto("https://demoqa.com/");
        await page.click("text=Elements");
        await page.getByText('Text Box').click();
        await page.getByPlaceholder('Full Name').click();
        await page.getByPlaceholder('Full Name').fill('Duong Thi My');
        await page.getByPlaceholder('name@example.com').click();
        await page.getByPlaceholder('name@example.com').fill('myduong@gmail.com');
        await page.getByPlaceholder('Current Address').click();
        await page.getByPlaceholder('Current Address').fill('Ha Dong, Ha Noi');
        await page.locator('#permanentAddress').click();
        await page.locator('#permanentAddress').fill('Ha Noi');
        await page.getByRole('button', {name: 'Submit'}).click();
    });
});