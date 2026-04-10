import { test } from '@playwright/test';



test('Test 1: Điền vào trang register page', async ({ page }) => {

    await test.step("Step 1: Mở website", async () => {

        await page.goto("https://material.playwrightvn.com/01-xpath-register-page.html");

    });
    await test.step("Step 2: Điền thông tin username", async () => {

        // await page.locator("//input[@id='username']").fill("Ngoc Vo");



        await page.locator("//input[@id='username']").pressSequentially("Ngoc Vo lop K22, Hong Nhung K22", { delay: 200 });

    });
// test('Test 2: Click chuột', async ({ page }) => {

//         await test.step("Step 1: Mở website", async () => {

//             await page.goto("https://material.playwrightvn.com/018-mouse.html");

//         });



//         await test.step("Step 2: Click chuột 1 lần", async () => {
//         await page.locator("//div[@id='clickArea']").click();
//             // await page.locator("//div[@id='clickArea']").click({
//             //     button: 'left',
//             //     clickCount: 10_000
//             // });
//             await page.locator("//div[@id='clickArea']").dblclick();

//         });

//     });
});