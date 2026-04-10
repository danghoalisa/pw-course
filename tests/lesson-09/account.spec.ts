import { test, expect } from '@playwright/test';

test.describe('ACCOUNT - Account', () => {
    const now = Date.now();

    const testData = {
        username: "betterbytes.academy.admin",
        password: "StrongPass@BetterBytesAcademy",

        newUser: {
            username: `phong-${now}`,
            email: `phong-${now}-@gmail.com`,
            password: 'lbsty2gr*fd8h4^ZDpWQaEST',
            firstName: 'Phong',
            lastName: 'Do',
            messageCreateSuccess: "New user created.",
            visibleMenus: ["Dashboard", "Posts", "Media"],
            invisibleMenus: ["Appearance", "Users", "Plugins"],
            menus: [
                {
                    name: "Dashboard",
                    visible: true
                },
                {
                    name: "Posts",
                    visible: true
                },
                {
                    name: "Media",
                    visible: true
                },
                {
                    name: "Appearance",
                    visible: false
                },
                {
                    name: "Users",
                    visible: false
                },
                {
                    name: "Plugins",
                    visible: false
                }
            ]
        }
    };
    test.beforeEach(async ({ page }) => {

        const locator = {
            username: page.locator("//input[@id='user_login']"),
            password: page.locator("//input[@id='user_pass']"),
            loginBtn: page.locator("//input[@id='wp-submit']"),
            loginErrorNotice: page.locator("//div[@id='login_error']"),

            dashboard: {
                usernameMenu: page.locator("//div[@class='wp-menu-name' and text()='Users']"),
                addUserMenu: page.locator("//a[text()='Add User']"),
                addNewUserHeading: page.locator("//h1[@id='add-new-user']")
            }
        }

        const dashboardPage = {
            atGalence: page.locator("//h2[text()='At a Glance']"),

        };

        await test.step("Đi tới trang login, login vào với account admin", async () => {
            await page.goto("https://pw-practice-dev.playwrightvn.com/wp-admin");
            await locator.username.fill(testData.username);
            await locator.password.fill(testData.password);
            await locator.loginBtn.click();

            // Assert
            await expect(page).toHaveURL(/wp-admin/);
            await expect(dashboardPage.atGalence).toBeVisible();
            //await page.waitForTimeout(1_000);
        });
        // Cach 1: hover
        await test.step("Đi tới màn quản lý user", async () => {
            await expect(async () => {
                await locator.dashboard.usernameMenu.hover();
                await expect(locator.dashboard.addUserMenu).toBeVisible();
                await locator.dashboard.addUserMenu.click();
            }).toPass();

            await expect(locator.dashboard.addNewUserHeading).toBeVisible();
        })
    });
    test.afterAll(async () => {
        await test.step("", async () => {
            // Thực hiện đăng xuất và đăng nhập lại với user name vừa tạo
        })
    });
    test("@TC_ACC_001: Create account with editor permission", async ({ page }) => {

        const locator = {

            loginPage: {
                username: page.locator("//input[@id='user_login']"),
                password: page.locator("//input[@id='user_pass']"),
                loginBtn: page.locator("//input[@id='wp-submit']"),
            },
            username: page.locator("//input[@id='user_login']"),
            email: page.locator("//input[@id='email']"),
            firstName: page.locator("//input[@id='first_name']"),
            lastName: page.locator("//input[@id='last_name']"),
            password: page.locator("//input[@id='pass1']"),
            role: page.locator("//select[@id='role']"),
            btnCreate: page.locator("//input[@id='createusersub']"),
            messageBar: page.locator("//div[@id='message']")
        }
        await test.step("Click Add User to add new user", async () => {

            //Arrage 
            const role = "Editor";
            const newUser = testData.newUser;
            //Act
            await locator.username.fill(newUser.username);
            await locator.username.fill(newUser.username);
            await locator.email.fill(newUser.email);
            await locator.firstName.fill(newUser.firstName);
            await locator.lastName.fill(newUser.lastName);
            await locator.password.fill(newUser.password);
            await locator.role.selectOption(role);
            await locator.btnCreate.click();
            //Assert
            await expect(locator.messageBar).toContainText(testData.newUser.messageCreateSuccess);
        });

        await test.step("Thực hiện đăng xuất và đăng nhập lại với user name vừa tạo", async () => {
            // Thực hiện đăng xuất và đăng nhập lại với user name vừa tạo
            await page.goto("https://pw-practice-dev.playwrightvn.com/wp-login.php?loggedout=true&wp_lang=en_US");

            const loginPage = locator.loginPage;
            await loginPage.username.fill(testData.newUser.username);
            await loginPage.password.fill(testData.newUser.password);
            await loginPage.loginBtn.click();

            // Assert
            //  Đăng nhập thành công
            await expect(page).toHaveURL(/wp-admin/);
            // Hiển thị các menu:
            // Cách 1: nông dân
            // await expect(page.locator("//div[@class='wp-menu-name' and text()='Posts']")).toBeVisible();
            // await expect(page.locator("//div[@class='wp-menu-name' and text()='Media']")).toBeVisible();
            // await expect(page.locator("//div[@class='wp-menu-name' and text()='Pages']")).toBeVisible();
            // await expect(page.locator("//div[@class='wp-menu-name' and text()='Appearance']")).not.toBeVisible();

            // Cách 2: xịn hơn tí, dùng 2 vòng lặp
            //  const visibleMenus = testData.newUser.visibleMenus;
            // for (let i = 0; i < visibleMenus.length; i++) {
            //     const menuLocator = page.locator(`//div[@class='wp-menu-name' and text()='${visibleMenus[i]}']`);
            //     await expect(menuLocator).toBeVisible();
            // }

            // const invisibleMenus = testData.newUser.invisibleMenus;
            // for (let i = 0; i < invisibleMenus.length; i++) {
            //     const menuLocator = page.locator(`//div[@class='wp-menu-name' and text()='${visibleMenus[i]}']`);
            //     await expect(menuLocator).not.toBeVisible();
            // }

            // Cách 3: xịn, 1 vòng lặp
            const menus = testData.newUser.menus;
            for (let i = 0; i < menus.length; i++) {
                const item = menus[i];

                const menuLocator = page.locator(`//div[@class='wp-menu-name' and text()='${item.name}']`);
                if (item.visible) {
                    await expect(menuLocator).toBeVisible();
                } else {
                    await expect(menuLocator).not.toBeVisible();
                }
            }
        });

    });

});
