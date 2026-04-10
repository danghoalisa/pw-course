import { test, expect } from '@playwright/test';

test.describe('AUTH - Authentication', () => {

    const loginUrl = 'https://pw-practice-dev.playwrightvn.com/wp-admin';
    
    test.beforeEach(async ({ page }) => {
        await page.goto(loginUrl);
    });

    test('TC_AUTH_002: Login success', async ({ page }) => {
        await test.step('Enter username and password', async () => {
            await page.fill("//input[@id='user_login']", 'betterbytes.academy.admin');
            await page.fill("//input[@id='user_pass']", 'StrongPass@BetterBytesAcademy');
        });

        await test.step('Click Login button', async () => {
            await page.click("//input[@id='wp-submit']");
        });
        const loginUrlSuccess ='https://pw-practice-dev.playwrightvn.com/wp-admin/';
        await test.step('Verify login success', async () => {
            await expect(page).toHaveURL(loginUrlSuccess);
            await expect(page.locator('h1')).toHaveText('Dashboard');
        });
    });

});