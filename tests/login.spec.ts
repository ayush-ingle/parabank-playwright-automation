import {expect, test} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { registerTestUser } from '../utils/registerTestUser';

test('Login with newly registered valid credentials', async ({page}) => {
    const userData = await registerTestUser(page);
    await page.getByRole('link', { name: 'Log Out' }).click();

    const loginPage = new LoginPage(page);
    await expect(loginPage.username).toBeVisible();
    await loginPage.login(userData.username, userData.password);
    await expect(page).toHaveURL('https://parabank.parasoft.com/parabank/overview.htm');
});

test('Login with invalid credentials', async({page}) => {
    const loginPage = new LoginPage(page);
    await page.goto('https://parabank.parasoft.com/parabank/index.htm');
    const username = process.env.PARABANK_INVALID_USERNAME || 'invalid-user';
    const password = process.env.PARABANK_INVALID_PASSWORD || 'invalid-password';
    await loginPage.login(username, password);
    await expect(page.getByText('The username and password could not be verified.')).toBeVisible();
})

test('Login with blank credentials fields', async({page}) => {
    const loginPage = new LoginPage(page);
    await page.goto('https://parabank.parasoft.com/parabank/index.htm');
    const username = '';
    const password = '';
    await loginPage.login(username, password);
    await expect(page.getByText('Please enter a username and password.')).toBeVisible();
})