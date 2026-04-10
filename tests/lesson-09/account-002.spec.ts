import { test, expect } from '@playwright/test';

test.describe('ACCOUNT - Account', () => {

    // Login User
    const loginUrl = 'https://pw-practice-dev.playwrightvn.com/wp-admin';
    const loginUrlSuccess = 'https://pw-practice-dev.playwrightvn.com/wp-admin/';
    const userAdmin = 'betterbytes.academy.admin';
    const passAdmin = 'StrongPass@BetterBytesAcademy';

    // Create new user
    const userName = 'k22_hoadang';
    const email = 'danghoa131092@gmail.com';
    const newPass = 'RQfiqqxHps%h0i&UharY$k';
    const firstName = 'k22';
    const lastName = 'hoa';


    test.beforeEach(async ({ page }) => {
        await page.goto(loginUrl);
        await page.fill("//input[@id='user_login']", userAdmin);
        await page.fill("//input[@id='user_pass']", passAdmin);
        await page.click("//input[@id='wp-submit']");
        await expect(page).toHaveURL(loginUrlSuccess);

    });

    test('TC_ACC_002: Create account with subscriber permission', async ({ page }) => {

        await test.step('Go to user manage', async () => {
            const usersMenu = page.locator("//div[@class='wp-menu-name' and text()='Users']");
            await usersMenu.click();
            const userUrl = 'https://pw-practice-dev.playwrightvn.com/wp-admin/users.php';
            await expect(page).toHaveURL(userUrl);
            await expect(page.locator('h1')).toHaveText('Users');
        });

        await test.step('Button Add User is enable', async () => {
            const addUserBtn = page.locator('a.page-title-action:text("Add User")');
            await expect(addUserBtn).toBeEnabled();
        });

        await test.step('Create a new user', async () => {

            await page.click('a.page-title-action:text("Add User")');
            await page.fill("//input[@id='user_login']", userName);
            await page.fill("//input[@id='email']", email);
            await page.fill("//input[@id='first_name']", firstName);
            await page.fill("//input[@id='last_name']", lastName);
            await page.fill("//input[@id='pass1']", newPass);

            // Select role is Subcriber
            await page.selectOption("//select[@id='role']", 'subscriber');

            // Click add User 
            await page.click("//input[@id ='createusersub']");

            //Display message success 
            await expect(page.locator("//div[@id='message']")).toContainText('New user created');
        });

        await test.step('Login with new user', async () => {
            // Logout account admin
            await page.goto('https://pw-practice-dev.playwrightvn.com/wp-login.php?action=logout');
            await page.click('text=Log Out');
            //Login with new user
            await page.fill("//input[@id='user_login']", userName);
            await page.fill("//input[@id='user_pass']", newPass);
            await page.click("//input[@id='wp-submit']");

            // Check menu display with role Subcriber
            const visibleMenus = [
                'Dashboard', 'Profile'
            ];
            for (const menu of visibleMenus) {
                await expect(
                    page.locator("//div[@class='wp-menu-name']").filter({ hasText: menu })
                ).toBeVisible();
            }
            // Menu is hidden
            const hiddenMenus = ['Appearance', 'Users', 'Plugins', 'Posts', 'Media', 'Pages', 'Comments', 'Tools'];
            for (const menu of hiddenMenus) {
                await expect(page.locator("//div[@class='wp-menu-name']").filter({ hasText: menu })).toBeHidden();
            }


        });
        await test.step('Login account Admin to delete new account', async () => {
            // Logout user
            await page.goto('https://pw-practice-dev.playwrightvn.com/wp-login.php?action=logout');
            await page.click('text=Log Out');

            // Login account admin
            await page.fill("//input[@id='user_login']", userAdmin);
            await page.fill("//input[@id='user_pass']", passAdmin);
            await page.click("//input[@id='wp-submit']");
            await expect(page).toHaveURL(loginUrlSuccess);

            // Go to Users page
            await page.click("//div[@class='wp-menu-name' and text()='Users']");

            // Search new User
            await page.fill("//input[@id='user-search-input']", userName);
            await page.click("//input[@id='search-submit']");

            // Click Delete
            const checkbox = page.locator("//input[@name='users[]']");
            await checkbox.check();

            await page.click("//a[@class='submitdelete' and text()='Delete']");
            // Confirm
            await page.click("//input[@value ='Confirm Deletion']");
            // Expected: User not exist on dashboard
            //Display message success 
            await expect(page.locator("//div[@id='message']")).toContainText('User deleted.');
            await expect(
                page.locator('tr', { hasText: userName })
            ).toHaveCount(0);
        });
    });

});