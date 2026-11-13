# ParaBank Automation Suite

Browser-based end-to-end tests for the [ParaBank demo application](https://parabank.parasoft.com/parabank/index.htm), built with Playwright and TypeScript. The suite demonstrates the Page Object Model, reusable page interactions, generated registration data, and HTML test reporting.

## What this project covers

- Registration of a generated user, followed by logging out and logging in with that same user's credentials.
- Rejected login with invalid credentials.
- Login submission with blank fields.
- A reusable registration page object and generated user data.
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

### Install

```bash
npm ci
npx playwright install chromium
```

### Optional test data

The valid-login test registers a fresh user and uses that user's generated credentials, so no pre-created account is needed. The invalid-login test uses `invalid-user` and `invalid-password` by default. To override those values locally, copy `.env.example` to `.env` and edit them.

Never commit `.env` or real credentials. The `.env` file is ignored by Git.

### Run the tests

```bash
npx playwright test
```

Run just the login tests:

```bash
npx playwright test tests/login.spec.ts
```

The configured browser project is Chromium. Registration tests create fresh accounts on the public ParaBank demo site.

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
│   └── registerUser.spec.ts     # Registration scenario
├── utils/
│   ├── registerTestUser.ts      # Shared test-user registration flow
│   └── testDataGenerator.ts     # Generated registration data
├── .env.example                 # Safe local configuration template
├── package.json
└── playwright.config.ts         # Test runner and browser configuration
```

## CI

The GitHub Actions workflow installs dependencies and Chromium, runs the Playwright suite, and uploads the HTML report. No account or repository secrets are required: the valid-login test creates its own user, and the invalid-login test uses non-empty default values.

## Notes

ParaBank is a public demo application, so availability and behavior may change independently of this project. Tests that register users depend on the demo service accepting registrations.
