import { test, expect } from '@playwright/test';
import { UserRegistrationPage } from '../pages/UserRegistrationPage';
import { TestDataGenerator } from '../utils/testDataGenerator';

test('User registration', async ({ page }) => {

    const registrationPage = new UserRegistrationPage(page);
    const userData = TestDataGenerator.generateUserData();

    await page.goto('https://parabank.parasoft.com/parabank/register.htm');
    await registrationPage.registerUser(userData);
    console.log(userData);
    await expect(page.getByText('Your account was created successfully')).toBeVisible();
});