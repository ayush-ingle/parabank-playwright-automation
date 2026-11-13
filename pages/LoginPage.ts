import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";


export class LoginPage extends BasePage{
    readonly username: Locator;
    readonly password: Locator;
    readonly logInButton: Locator;

    constructor (page: Page){
        super(page)
        this.username = page.locator('input[name="username"]');
        this.password = page.locator('input[name="password"]');
        this.logInButton = page.getByRole('button', {name:'Log In'});
    }

    async login(username: string, password: string){
        await this.username.fill(username);
        await this.password.fill(password);
        await expect(this.password).toHaveAttribute('type', 'password');
        await this.logInButton.click();
    }
}