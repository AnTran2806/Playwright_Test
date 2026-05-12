import {expect, test} from "../../fixtures/hooks-fixture"
import loginModuleData from '../../data/ui-data/login-module-data.json'

test.use({storageState:{
    cookies:[],
    origins:[]
}})

test('[Login] Verify that the user cannot log in with an invalid password.', {
    tag: ['@UI', '@UAT'],
    annotation:{
        type:'Test Case Link',
        description:'https://www.google.com/'
    }
},async({gotoUrl, loginPage, commonUtils, userPage})=>{
    const username = commonUtils.decryptData(process.env.USER_NAME!);
    await loginPage.loginOrangeHrm(username, loginModuleData.wrong_password);
    await expect(loginPage.invalidCredentialErrorPopup).toHaveText(loginModuleData.invalid_credentials_text);
    await expect(loginPage.userNameInput).toBeVisible();
})

test.describe("Invalid Login Test", {
    tag: '@InvalidLogin',
    annotation:{
        type: "Story Link",
        description: "Link of story https://www.google.com/"
    }
},()=>{
    test('[Login] Verify that the user cannot log in with an invalid username.', {
        tag: ['@UI','@UAT',],
        annotation:{
            type:'Test Case Link',
            description:'https://www.google.com/'
        },
    },async({gotoUrl, loginPage, commonUtils})=>{
        const password = commonUtils.decryptData(process.env.PASSWORD!);
        await loginPage.loginOrangeHrm(loginModuleData.wrong_username, password);
        await expect(loginPage.invalidCredentialErrorPopup).toHaveText(loginModuleData.invalid_credentials_text);
        await expect(loginPage.userNameInput).toBeVisible();
    })
    
    test('[Login] Verify that the user cannot log in both an invalid username and password.', {
        tag: ['@UI', '@DEV'],
        annotation:{
            type:'Test Case Link',
            description:'https://www.google.com/'
        },
    },async({gotoUrl, loginPage, commonUtils})=>{
        await loginPage.loginOrangeHrm(loginModuleData.wrong_username, loginModuleData.wrong_password);
        await expect(loginPage.invalidCredentialErrorPopup).toHaveText(loginModuleData.invalid_credentials_text);
        await expect(loginPage.userNameInput).toBeVisible();
    })

    test('[Login] Verify that the user can log in with valid username and password',{
        tag: ['@VISUAL', '@UAT'],
        annotation: {
            type: 'Test Case Link',
            description:'https://www.google.com/'
        }
    }, async({gotoUrl, loginPage, commonUtils, leftNavigationPage})=>{
        const username = commonUtils.decryptData(process.env.USER_NAME!);
        const passowrd = commonUtils.decryptData(process.env.PASSWORD!); 
        await loginPage.loginOrangeHrm(username, passowrd)
        // await expect(leftNavigationPage.orangeHrmLogo).toHaveScreenshot('OrangeHrmBrandLogo.png');
        // await expect(leftNavigationPage.leftNavigationPanel).toHaveScreenshot('LeftNavPanel.png')
    })
})