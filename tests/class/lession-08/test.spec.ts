import { test } from '@playwright/test';

test.describe("Test suite: Material site", async () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("https://material.playwrightvn.com/index.html");
    });

    test("Test 1: User registration page", async ({ page }) => {
        // await test.step("Step 1: Goto material page", async () => {
        //     await page.goto("https://material.playwrightvn.com/index.html");
        // });

        await test.step("Step 2: Click 'User registration'", async () => {
            await page.locator('//a[@href="01-xpath-register-page.html"]').click();
        });

        await test.step("Step 3: Fill information", async () => {
            console.log("Filling information");
        });
    });

    test("Test 2: Product page", async ({ page }) => {
        // await test.step("Step 1: Goto material page", async () => {
        //     await page.goto("https://material.playwrightvn.com/index.html");
        // });

        await test.step("Step 2: Click 'Product Page'", async () => {
            await page.locator('//a[@href="02-xpath-product-page.html"]').click();
        });

        await test.step("Step 3: Add products to cart", async () => {
            console.log("Adding products to cart");
        });
    });
});