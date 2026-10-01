# DevLab Playwright

> A professional end-to-end browser automation suite for the DevLab SvelteKit application — built with Playwright, TypeScript, Chromium, and a dedicated test project.

![Playwright](https://img.shields.io/badge/Playwright-1.63-2ead33?logo=playwright&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-6-3178c6?logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-20%2B-339933?logo=node.js&logoColor=white)
![Chromium](https://img.shields.io/badge/Browser-Chromium-4285F4?logo=googlechrome&logoColor=white)

DevLab Playwright is a separate browser automation project for testing the DevLab application. It provides structured positive-result end-to-end coverage for the application's navigation, sidebar workspaces, interactive tools, learning features, and workspace controls.

The test project is intentionally separated from the DevLab SvelteKit application so the application and browser automation suite can be developed, executed, and maintained independently.

## Contents

- [Test coverage](#test-coverage)
- [Features](#features)
- [Quick start](#quick-start)
- [Using the test suite](#using-the-test-suite)
- [Project structure](#project-structure)
- [Technology](#technology)
- [Development commands](#development-commands)
- [Test execution](#test-execution)
- [Test reporting](#test-reporting)
- [Formatting](#formatting)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)

## Test coverage

The suite contains **15 Playwright test files** with **28 individual test cases**.

### Sidebar — 9 test files

| Test file            | Coverage                                                      |
| -------------------- | ------------------------------------------------------------- |
| `overview.spec.ts`   | Opens the Overview workspace                                  |
| `learn.spec.ts`      | Opens Learn and verifies the lesson catalog                   |
| `playground.spec.ts` | Opens Playground and runs JavaScript                          |
| `visualizer.spec.ts` | Opens Visualizer and advances an algorithm step               |
| `api.spec.ts`        | Opens API Lab and verifies the request editor                 |
| `tools.spec.ts`      | Opens Toolbox and runs the default toolbox input              |
| `snippets.spec.ts`   | Opens Snippets and verifies reusable snippets                 |
| `patterns.spec.ts`   | Opens Patterns and verifies reusable problem-solving patterns |
| `settings.spec.ts`   | Opens Settings and changes the theme                          |

### Navigation — 6 test files

| Test file                     | Coverage                                     |
| ----------------------------- | -------------------------------------------- |
| `navigation.spec.ts`          | Primary navigation between DevLab workspaces |
| `learn-search.spec.ts`        | Positive Learn search behavior               |
| `playground-modes.spec.ts`    | Playground language mode switching           |
| `visualizer-controls.spec.ts` | Visualizer playback controls                 |
| `toolbox-tools.spec.ts`       | Toolbox utility behavior                     |
| `command-palette.spec.ts`     | Command palette workspace commands           |

## Features

| Area             | Capabilities                                         |
| ---------------- | ---------------------------------------------------- |
| Sidebar coverage | Tests all 9 primary DevLab sidebar workspaces        |
| Navigation       | Verifies workspace-to-workspace navigation           |
| Learn            | Verifies lesson search and lesson catalog            |
| Playground       | Verifies JavaScript execution and language modes     |
| Visualizer       | Verifies algorithm stepping and playback controls    |
| API Lab          | Verifies request editor availability                 |
| Toolbox          | Verifies developer utility execution                 |
| Snippets         | Verifies reusable snippet content                    |
| Patterns         | Verifies reusable problem-solving pattern content    |
| Settings         | Verifies theme selection                             |
| Command Palette  | Verifies workspace command availability              |
| Chromium         | Uses Chromium as the configured browser              |
| Trace            | Retains traces on failures                           |
| Screenshots      | Captures screenshots on failures                     |
| Video            | Retains video recordings on failures                 |
| HTML Report      | Provides Playwright's interactive test report        |
| TypeScript       | Provides strongly typed test configuration and tests |
| Prettier         | Provides consistent source formatting                |

## Quick start

### Requirements

- Node.js 20 or newer
- npm
- Chromium
- Visual Studio Code is recommended
- DevLab SvelteKit application

The Playwright project is maintained separately from the DevLab application.

Recommended workspace:

```text
dev-lab/
├── dev-lab/
└── dev-lab-playwright/
```

### Create the project

```bash
npm init playwright@latest
cd dev-lab-playwright
```

### Clone the repository

```bash
git clone https://github.com/saravanansaranraj27/dev-lab-playwright.git
cd dev-lab-playwright
```

### Install dependencies

```bash
npm install
```

### Install Node.js type definitions

```bash
npm install -D @types/node
```

### Install Chromium

```bash
npx playwright install chromium
```

### Verify Playwright

```bash
npx playwright --version
```

### Verify Node.js types

```bash
npm ls @types/node
```

## Using the test suite

The DevLab application must be running before the Playwright tests are executed.

### Start DevLab

Open a separate PowerShell terminal:

```powershell
cd "path\to\dev-lab\dev-lab"
npm run dev
```

The DevLab application runs at:

```text
http://localhost:5173/dev-lab/
```

Keep the DevLab terminal running.

### Open the Playwright project

Open another PowerShell terminal:

```powershell
cd "path\to\dev-lab\dev-lab-playwright"
```

Install the Playwright project dependencies:

```powershell
npm install
```

Run the complete test suite:

```powershell
npx playwright test
```

A successful run currently produces:

```text
28 passed
```

## Project structure

```text
dev-lab-playwright/
├── tests/                                  # Playwright end-to-end test suite
│   ├── sidebar/                            # Sidebar workspace coverage
│   │   ├── overview.spec.ts                # Overview workspace test
│   │   ├── learn.spec.ts                   # Learn workspace and lesson catalog tests
│   │   ├── playground.spec.ts              # Playground workspace and JavaScript tests
│   │   ├── visualizer.spec.ts              # Visualizer workspace and step tests
│   │   ├── api.spec.ts                     # API Lab workspace and request editor tests
│   │   ├── tools.spec.ts                   # Toolbox workspace and utility tests
│   │   ├── snippets.spec.ts                # Snippets workspace and content tests
│   │   ├── patterns.spec.ts                # Patterns workspace and content tests
│   │   └── settings.spec.ts                # Settings workspace and theme tests
│   │
│   └── navigation/                         # Navigation and interaction coverage
│       ├── navigation.spec.ts              # Primary workspace navigation tests
│       ├── learn-search.spec.ts            # Learn search tests
│       ├── playground-modes.spec.ts        # Playground language mode tests
│       ├── visualizer-controls.spec.ts     # Visualizer playback tests
│       ├── toolbox-tools.spec.ts           # Toolbox utility tests
│       └── command-palette.spec.ts         # Command palette tests
│
├── .vscode/
│   └── settings.json                       # VS Code format-on-save configuration
├── .gitignore                              # Git exclusions for generated files
├── .prettierrc                             # Prettier formatting configuration
├── playwright.config.ts                    # Playwright test runner configuration
├── tsconfig.json                           # TypeScript compiler configuration
├── package.json                            # Project dependencies and npm scripts
├── package-lock.json                       # Locked npm dependency versions
└── README.md                               # Project documentation
```

## Technology

- [Playwright](https://playwright.dev/) — browser automation and end-to-end testing
- [TypeScript](https://www.typescriptlang.org/) — typed test development
- [Node.js](https://nodejs.org/) — JavaScript runtime
- [Chromium](https://www.chromium.org/) — configured browser project
- [Prettier](https://prettier.io/) — source formatting
- Playwright Test — test runner, assertions, fixtures, reporting, tracing, screenshots, and video

## Development commands

### Playwright setup

```powershell
npm init playwright@latest
npx playwright --version
npx playwright install chromium
```

### Install dependencies

```powershell
npm install
npm install -D @types/node
npm ls @types/node
```

### Run tests

```powershell
npx playwright test
npx playwright test --reporter=list
npx playwright test --headed
npx playwright test --ui
npx playwright test --debug
```

### Inspect tests

```powershell
npx playwright test --list
```

### Run a specific test file

```powershell
npx playwright test tests/navigation/navigation.spec.ts
```

Run the specific test file with the browser visible:

```powershell
npx playwright test tests/navigation/navigation.spec.ts --headed
```

### TypeScript

```powershell
npx tsc --version
npm ls typescript @types/node
```

### Formatting

```powershell
npx prettier --write "tests/**/*.ts" "playwright.config.ts"
```

### HTML report

```powershell
npx playwright show-report
```

## Test execution

### Run the complete suite

```powershell
npx playwright test
```

### Run with the browser visible

```powershell
npx playwright test --headed
```

### Run in Playwright UI mode

```powershell
npx playwright test --ui
```

### Run in debug mode

```powershell
npx playwright test --debug
```

### Run with the list reporter

```powershell
npx playwright test --reporter=list
```

### List discovered tests

```powershell
npx playwright test --list
```

### Run a specific test file

```powershell
npx playwright test tests/navigation/navigation.spec.ts
```

### Run a specific test file in headed mode

```powershell
npx playwright test tests/navigation/navigation.spec.ts --headed
```

## Test reporting

Playwright generates an HTML report after test execution.

Open the report with:

```powershell
npx playwright show-report
```

The configured Playwright project uses:

```text
test-results/
playwright-report/
```

for generated test artifacts and reports.

The test configuration also retains useful debugging artifacts for failures:

- Screenshots
- Videos
- Traces

Generated test-result directories should not be committed to source control.

## Formatting

The project uses Prettier to keep Playwright test files and configuration consistently formatted.

Format all test files and the Playwright configuration:

```powershell
npx prettier --write "tests/**/*.ts" "playwright.config.ts"
```

The project is maintained with clean TypeScript formatting and no commented-out test code.

## Troubleshooting

### `ERR_CONNECTION_REFUSED`

If Playwright reports:

```text
net::ERR_CONNECTION_REFUSED
```

make sure the DevLab application is running.

Start DevLab in a separate terminal:

```powershell
cd "path\to\dev-lab\dev-lab"
npm run dev
```

Then verify:

```text
http://localhost:5173/dev-lab/
```

### Chromium is not installed

Run:

```powershell
npx playwright install chromium
```

### `@types/node` is missing

Install it with:

```powershell
npm install -D @types/node
```

Verify:

```powershell
npm ls @types/node
```

### Check TypeScript

```powershell
npx tsc --version
```

Verify the installed TypeScript packages:

```powershell
npm ls typescript @types/node
```

### Check which tests Playwright discovers

```powershell
npx playwright test --list
```

### Debug a failing test

Run:

```powershell
npx playwright test --headed
```

or:

```powershell
npx playwright test --ui
```

or:

```powershell
npx playwright test --debug
```

### Open the latest report

```powershell
npx playwright show-report
```

## Complete command reference

```powershell
git clone https://github.com/saravanansaranraj27/dev-lab-playwright.git
npm init playwright@latest
npx playwright --version
npx playwright install chromium
npm install
npm install -D @types/node
npm ls @types/node
npx playwright test
npx tsc --version
npm ls typescript @types/node
npx prettier --write "tests/**/*.ts" "playwright.config.ts"
npx playwright test --list
npx playwright test --reporter=list
npx playwright test --headed
npx playwright test --ui
npx playwright test --debug
npx playwright test tests/navigation/navigation.spec.ts
npx playwright test tests/navigation/navigation.spec.ts --headed
npx playwright show-report
```

## Contributing

Bug reports, test improvements, additional positive-result coverage, and pull requests are welcome.

Keep changes focused and verify the Playwright suite before opening a pull request:

```powershell
npx tsc --noEmit
npx playwright test
```

Please keep the Playwright project separate from the DevLab application and preserve the existing test organization under `tests/sidebar/` and `tests/navigation/`.

## License

This project is intended to accompany the DevLab application. Refer to the DevLab application's license for the applicable project licensing terms.
