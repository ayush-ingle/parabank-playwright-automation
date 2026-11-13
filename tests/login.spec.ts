import {expect, test} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('Login with valid credentials', async ({page}) => {
    const loginPage = new LoginPage(page);
    const username = process.env.PARABANK_VALID_USERNAME;
    const password = process.env.PARABANK_VALID_PASSWORD;

    if (!username || !password) {
        throw new Error('Set PARABANK_USERNAME and PARABANK_PASSWORD in .env or the environment.');
    }

    await page.goto('https://parabank.parasoft.com/parabank/index.htm');
    await loginPage.login(username, password);
    await expect(page).toHaveURL('https://parabank.parasoft.com/parabank/overview.htm');
});

test('Login with invalid credentials', async({page}) => {
    const loginPage = new LoginPage(page);
    await page.goto('https://parabank.parasoft.com/parabank/index.htm');
    const username = process.env.PARABANK_INVALID_USERNAME;
    const password = process.env.PARABANK_INVALID_PASSWORD;
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