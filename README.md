# ParaBank Automation Suite

Browser-based end-to-end tests for the [ParaBank demo application](https://parabank.parasoft.com/parabank/index.htm), built with Playwright and TypeScript. The suite demonstrates the Page Object Model, reusable page interactions, configurable test credentials, generated registration data, and HTML test reporting.

## What this project covers

- Valid login and navigation to the account overview page.
- Rejected login with invalid credentials.
- Login submission with blank fields.
- A reusable registration page object and generated user data. The registration test is currently marked as skipped, so it does not run as part of the suite.
- Chromium-based browser execution and a GitHub Actions workflow for pushes and pull requests to `main` and `master`.

## Technology

- TypeScript
- [Playwright Test](https://playwright.dev/docs/intro)
- Node.js and npm
- dotenv for local environment configuration
- GitHub Actions for CI

## Getting started

### Prerequisites

- Node.js 20 or newer
- npm
- A ParaBank demo account for the successful login test

### Install

```bash
npm ci
npx playwright install chromium
```

### Configure credentials

Copy `.env.example` to `.env`, then set `PARABANK_VALID_USERNAME` and `PARABANK_VALID_PASSWORD` to a working ParaBank demo account. The invalid-login test uses the two invalid credential values in the template; you can change them if needed.

Never commit `.env` or real credentials. The `.env` file is ignored by Git.

### Run the tests

```bash
npx playwright test
```

Run just the login tests:

```bash
npx playwright test tests/login.spec.ts
```

The configured browser project is Chromium. The registration test is skipped until it is ready to run against the demo application.

## Reports

The suite uses Playwright's HTML reporter. After a run, open the report with:

```bash
npx playwright show-report
```

Test results and generated reports are local output and are excluded from Git.

## Project structure

```text
.
├── .github/
│   └── workflows/
│       └── playwright.yml       # CI workflow
├── pages/
│   ├── BasePage.ts              # Shared page actions
│   ├── LoginPage.ts             # Login page object
│   └── UserRegistrationPage.ts  # Registration page object
├── tests/
│   ├── login.spec.ts            # Login scenarios
│   └── registerUser.spec.ts     # Skipped registration scenario
├── utils/
│   └── testDataGenerator.ts     # Generated registration data
├── .env.example                 # Safe local configuration template
├── package.json
└── playwright.config.ts         # Test runner and browser configuration
```

## CI

The GitHub Actions workflow installs dependencies and Chromium, runs the Playwright suite, and uploads the HTML report. It reads these GitHub Actions repository secrets:

- `PARABANK_VALID_USERNAME` and `PARABANK_VALID_PASSWORD`: a working ParaBank demo account.
- `PARABANK_INVALID_USERNAME` and `PARABANK_INVALID_PASSWORD`: values for the rejected-login test.

Add them under **Settings → Secrets and variables → Actions** for the repository. Don’t commit real credentials. Secrets are not available to workflows triggered by pull requests from forks, so the credential-dependent tests need to be handled separately for those runs.

## Notes

ParaBank is a public demo application, so availability and behavior may change independently of this project. The successful-login scenario depends on a working demo account, and the registration scenario remains intentionally skipped for now.
