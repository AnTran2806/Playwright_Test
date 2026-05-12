import { test } from "../../fixtures/common-fixture"
import {expect} from "@playwright/test"

test('Global Setup for Auto Login', async ({ page, loginPage, dashBoardPage, commonUtils }) => {
    const decryptedUserName = commonUtils.decryptData(process.env.USER_NAME!);
    const decryptedPassword = commonUtils.decryptData(process.env.PASSWORD!);
    await loginPage.gotoOrangeHrm();
    await loginPage.loginOrangeHrm(decryptedUserName, decryptedPassword);
    await page.waitForURL(process.env.BASE_URL + '/web/index.php/dashboard/index');
    await expect(dashBoardPage.dashboardTitleText).toHaveText('Dashboard')
    await page.context().storageState({
        path: './playwright/.auth/auth.json'
    })
})