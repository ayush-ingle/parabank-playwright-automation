import { test } from '@playwright/test';
import { registerTestUser } from '../utils/registerTestUser';

test('User registration', async ({ page }) => {
    await registerTestUser(page);
});