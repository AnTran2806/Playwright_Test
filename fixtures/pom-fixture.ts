import {test as baseTest} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { DashboardPage } from '../pages/DashboardPage';
import { UserPage } from '../pages/UserPage';
import { LeftNavigationPage } from '../pages/leftNavigationPage';
import { PimPage } from '../pages/PimPage';

type PomFixturesType = {
    loginPage: LoginPage;
    dashBoardPage : DashboardPage
    userPage : UserPage;
    leftNavigationPage : LeftNavigationPage;
    pimPage: PimPage;
}

export const test = baseTest.extend<PomFixturesType>({
    loginPage: async({page},use) =>{
        await use(new LoginPage(page));
    },
    dashBoardPage : async({page}, use)=>{
        await use(new DashboardPage(page))
    },
    userPage: async({page} ,use) =>{
        await use(new UserPage(page)) 
    },
    leftNavigationPage : async({page}, use)=>{
        await use(new LeftNavigationPage(page))
    },
    pimPage : async({page}, use)=>{
        await use(new PimPage(page))
    }
})