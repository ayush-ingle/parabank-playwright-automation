
export class TestDataGenerator {

    static generateRandomNumber(length: number): string {
        let result = '';

        for (let i = 0; i < length; i++) {
            result += Math.floor(Math.random() * 10);
        }

        return result;
    }

    static generateRandomString(length: number): string {
        const characters = 'abcdefghijklmnopqrstuvwxyz';
        let result = '';

        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(
                Math.random() * characters.length
            );

            result += characters[randomIndex];
        }

        return result;
    }

    static generateFirstName(): string {
        const names = ['Virat', 'Rohit', 'Rahul', 'Hardik', 'Shubman'];

        return names[Math.floor(Math.random() * names.length)];
    }

    static generateLastName(): string {
        const names = ['Kohli', 'Sharma', 'Dravid', 'Pandya', 'Gill'];

        return names[Math.floor(Math.random() * names.length)];
    }

    static generateUsername(): string {
        return `7MS_${Date.now()}_${this.generateRandomNumber(2)}`;
    }

    static generatePhoneNumber(): string {
        return `9${this.generateRandomNumber(9)}`;
    }

    static generateEmail(): string {
        return `test_${Date.now()}@example.com`;
    }

    static generatePassword(): string {
        return `Test@${this.generateRandomNumber(6)}`;
    }

    static generateUserData() {

        const password = this.generatePassword();

        return {
            firstName: this.generateFirstName(),
            lastName: this.generateLastName(),
            address: `${this.generateRandomNumber(3)} MG Road`,
            city: 'Pune',
            state: 'Maharashtra',
            zipCode: '411001',
            phoneNumber: this.generatePhoneNumber(),
            ssn: '000000000',
            username: this.generateUsername(),
            password: password,
            confirmPassword: password
        };
    }
}
