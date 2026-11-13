
import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class UserRegistrationPage extends BasePage {

    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly address: Locator;
    readonly city: Locator;
    readonly state: Locator;
    readonly zipCode: Locator;
    readonly phoneNumber: Locator;
    readonly ssn: Locator;
    readonly username: Locator;
    readonly password: Locator;
    readonly confirmPassword: Locator;
    readonly registerButton: Locator;

    constructor(page: Page) {
        super(page);

        this.firstName = page.locator('#customer\\.firstName');
        this.lastName = page.locator('#customer\\.lastName');
        this.address = page.locator('#customer\\.address\\.street');
        this.city = page.locator('[name="customer.address.city"]');
        this.state = page.locator('#customer\\.address\\.state');
        this.zipCode = page.locator('#customer\\.address\\.zipCode');
        this.phoneNumber = page.locator('#customer\\.phoneNumber');
        this.ssn = page.locator('#customer\\.ssn');
        this.username = page.locator('#customer\\.username');
        this.password = page.locator('#customer\\.password');
        this.confirmPassword = page.locator('#repeatedPassword');
        this.registerButton = page.getByRole('button', {name: 'Register'});
    }

    async registerUser(userData: {
        firstName: string;
        lastName: string;
        address: string;
        city: string;
        state: string;
        zipCode: string;
        phoneNumber: string;
        ssn: string;
        username: string;
        password: string;
        confirmPassword: string;
    }) {
        await this.firstName.fill(userData.firstName);
        await this.lastName.fill(userData.lastName);
        await this.address.fill(userData.address);
        await this.city.fill(userData.city);
        await this.state.fill(userData.state);
        await this.zipCode.fill(userData.zipCode);
        await this.phoneNumber.fill(userData.phoneNumber);
        await this.ssn.fill(userData.ssn);
        await this.username.fill(userData.username);
        await this.password.fill(userData.password);
        await this.confirmPassword.fill(userData.confirmPassword);
        await this.registerButton.click();
    }
}