import { test, expect } from '@playwright/test';

test.describe('AUTH - Authentication', () => {

    const loginUrl = 'https://pw-practice-dev.playwrightvn.com/wp-admin';
    test.beforeEach(async ({ page }) => {
        await page.goto(loginUrl);
    });

    test('TC_AUTH_001: Login fail', async ({ page }) => {
        await test.step('Enter username and password', async () => {
            await page.fill("//input[@id='user_login']", 'hoadang');
            await page.fill("//input[@id='user_pass']", '123456');
        });

        await test.step('Click Login button', async () => {
            await page.click("//input[@id='wp-submit']");
        });
        await test.step('Verify the error message display', async () => {
            await expect(page.locator("//div[@id='login_error']")).toContainText(
                'Error: The username'
            );
        });
    });

});