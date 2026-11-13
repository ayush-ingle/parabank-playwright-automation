import { expect, Page } from '@playwright/test';
import { UserRegistrationPage } from '../pages/UserRegistrationPage';
import { TestDataGenerator } from './testDataGenerator';

export async function registerTestUser(page: Page) {
    const userData = TestDataGenerator.generateUserData();
    const registrationPage = new UserRegistrationPage(page);

    await page.goto('https://parabank.parasoft.com/parabank/register.htm');
    await registrationPage.registerUser(userData);
    await expect(page.getByText('Your account was created successfully')).toBeVisible();

    return userData;
}
