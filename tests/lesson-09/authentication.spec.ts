import { test, expect } from '@playwright/test';
 
test.describe("AUTH - Authentication", async () => {
    test.beforeEach(async ({ page }) => {
        await test.step("Đi tới trang login", async () => {
            await page.goto("https://pw-practice-dev.playwrightvn.com/wp-admin");
        });
    });
 
    test("@AUTH_001 - Login fail", async ({ page }) => {
        // Arrange
        const testData = {
            username: "han",
            password: "phong123"
        };
 
        const locator = {
            username: page.locator("//input[@id='user_login']"),
            password: page.locator("//input[@id='user_pass']"),
            loginBtn: page.locator("//input[@id='wp-submit']"),
            loginErrorNotice: page.locator("//div[@id='login_error']")
        }
 
        await test.step("Nhập vào thông tin username, password bị sai", async () => {
            //  Giá trị của username, password được điền vào  ô input
            // AAA pattern
 
            // Act
            await locator.username.fill(testData.username);
            await locator.password.fill(testData.password);
 
            // Assert
            await expect(locator.username).toHaveValue(testData.username);
            await expect(locator.password).toHaveValue(testData.password);
        });
 
        await test.step("Click button login", async () => {
            // Hiển thị lỗi:
            // "Error: The username <username> is not registered on this site. If you are unsure of your username, try your email address instead.";
            // Error: The username phong is not registered on this site. If you are unsure of your username, try your email address instead.
            // Arrange
            const expectedErrorMsg = `Error: The username ${testData.username} is not registered on this site. If you are unsure of your username, try your email address instead.`
 
            // Act
            await locator.loginBtn.click();
            await expect(locator.loginErrorNotice).toContainText(expectedErrorMsg);
 
        });
    });
 
    test("@AUTH_002 - Login success", async ({ page }) => {
        const testData = {
            username: "betterbytes.academy.admin",
            password: "StrongPass@BetterBytesAcademy"
        };
 
        const locator = {
            loginPage: {
                username: page.locator("//input[@id='user_login']"),
                password: page.locator("//input[@id='user_pass']"),
                loginBtn: page.locator("//input[@id='wp-submit']"),
            },
 
            dashboardPage: {
                dashboardTitle: page.locator("(//h1)[1]"),
                atGalence: page.locator("//h2[text()='At a Glance']"),
                activity: page.locator("//h2[text()='Activity']"),
            },
        }
        const loginPage = locator.loginPage;
 
        await test.step("Nhập vào thông tin username, password bị sai", async () => {
            // Act
 
            await loginPage.username.fill(testData.username);
            await loginPage.password.fill(testData.password);
 
            // TODO: Assert
            await expect(loginPage.username).toHaveValue(testData.username);
            await expect(loginPage.password).toHaveValue(testData.password);
        });
 
        await test.step("Click button login", async () => {
            // Arrange
            const dashboardPage = locator.dashboardPage;
 
            // Act
            await loginPage.loginBtn.click();
 
            // Assert
            // Chuyển tới trang có url là /wp-admin
            await expect(page).toHaveURL(/wp-admin/)
 
            // Có heading h1 ""Dashboard"" hiển thị
            await expect(dashboardPage.dashboardTitle).toBeVisible();
 
            // Có 2 heading h2 là ""At a Glance"" và ""Activity"" hiển thị"
            await expect(dashboardPage.activity).toBeVisible();
            await expect(dashboardPage.atGalence).toBeVisible();
        });
    });
})