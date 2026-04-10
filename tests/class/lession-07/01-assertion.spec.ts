import { test, expect } from '@playwright/test';

test("Test 1: Register page", async ({ page }) => {
    await test.step("Step 1: Đi đến trang material. Verify title hiển thị", async () => {
        await page.goto("https://material.playwrightvn.com/");

        const titleLoc = page.locator("//h1");
        await expect(titleLoc).toBeVisible();
    });

    await test.step("Step 2: Click vào 'Bài học 1'. Verify title bài học 1 hiển thị", async () => {
        await page.locator("//a[@href='01-xpath-register-page.html']").click();

        const titleLoc = page.locator("//h1[@id='self']");
        await expect(titleLoc).toBeVisible();
    });

    await test.step("Step 3: Điền thông tin: username, email; click vào button register, Verify: Thông tin của user được đăng kí thành công ở bảng phía dưới", async () => {
        // Nhap vao thong tin 2 user


        // cach 2
        // const testData2 = ["hieuvo", 0, "Dep trai co gi sai", "hieuvo@gmail.com"];
        // await page.locator("").fill(testData2[0]);
        // await page.locator("").fill(testData2[2]);

        // Cach 3 
        // const username = "hieuvo";
        // const email = "hieuvo@gmail.com";
        // await page.locator("").fill(username);
        // await page.locator("").fill(email);

        // Cach 1 - data driven ()
        const testData = [
            {
                username: "hieuvo",
                email: "hieuvo@gmail.com"
            },
            {
                username: "quandeptrai",
                email: "quandeptrai@gmail.com"
            },
            {
                username: "tram",
                email: "tram@gmail.com"
            },
            {
                username: "tram",
                email: "tram@gmail.com"
            },
            {
                username: "tram",
                email: "tram@gmail.com"
            },
            {
                username: "tram",
                email: "tram@gmail.com"
            },
            {
                username: "tram",
                email: "tram@gmail.com"
            },
            {
                username: "tram",
                email: "tram@gmail.com"
            },
            {
                username: "tram",
                email: "tram@gmail.com"
            }
        ];
        for (let i = 0; i < testData.length; i++) {
            const item = testData[i];

            await page.locator("//input[@id='username']").fill(item.username);
            await page.locator("//input[@id='email']").fill(item.email);
            await page.locator("//button[@type='submit']").click();
        }

        const tableRows = await page.locator("//tbody//tr").count();
        expect(tableRows).toBe(testData.length);

        // Cach xin
        await expect(page.locator("//tbody//tr")).toHaveCount(testData.length);

        for (let i = 0; i < testData.length; i++) {
            // const xpathIndex = i + 1;

            const usernameCell = page.locator("//tbody//tr[" + (i + 1) + "]//td[2]");
            const emailCell = page.locator(`//tbody//tr[${i + 1}]//td[3]`);

            await expect(usernameCell).toHaveText(testData[i].username, { timeout: 10_000});
            await expect(emailCell).toHaveText(testData[i].email);
        }

        // arr = [100, 200, 300]
        // -> 100: arr[0]

        // const usernameCell = page.locator("(//tbody//tr//td)[2]");
        // const emailCell = page.locator("(//tbody//tr//td)[3]");

        // await expect(usernameCell).toHaveText(testData.username);
        // await expect(emailCell).toHaveText(testData.email);
    });
})