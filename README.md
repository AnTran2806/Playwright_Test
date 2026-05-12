# 🎭 Playwright Test Automation Framework

A modern End-to-End (E2E) test automation framework built with **Playwright** and **TypeScript**.  
This project is designed to provide scalable, maintainable, and reliable automated testing for web applications.

---

## 📌 Features

- ✅ Cross-browser testing (Chromium, Firefox, WebKit)
- ✅ TypeScript support
- ✅ Page Object Model (POM)
- ✅ Parallel test execution
- ✅ Automatic waiting
- ✅ Screenshot capture on failure
- ✅ Video recording
- ✅ Trace Viewer support
- ✅ HTML test reports
- ✅ CI/CD integration ready

---

## 🛠 Tech Stack

- [Playwright](https://playwright.dev/)
- TypeScript
- Node.js
- GitHub Actions

---

## 📂 Project Structure

```bash
Playwright_Test/
│
├── tests/                 # Test cases
├── pages/                 # Page Object Model classes
├── fixtures/              # Shared test data
├── utils/                 # Utility/helper functions
├── playwright.config.ts   # Playwright configuration
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/AnTran2806/Playwright_Test.git
```

### 2. Navigate to the Project Folder

```bash
cd Playwright_Test
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Install Playwright Browsers

```bash
npx playwright install
```

---

## ▶️ Running Tests

### Run All Tests

```bash
npx playwright test
```

### Run Tests in UI Mode

```bash
npx playwright test --ui
```

### Run Tests in Headed Mode

```bash
npx playwright test --headed
```

### Run a Specific Test File

```bash
npx playwright test tests/example.spec.ts
```

---

## 📊 Test Reports

After running tests, open the HTML report:

```bash
npx playwright show-report
```

The report includes:

- Test execution results
- Screenshots
- Videos
- Trace logs
- Error details

---

## ⚙️ Playwright Configuration

Main configuration file:

```bash
playwright.config.ts
```

Common configurations include:

- Base URL
- Browser settings
- Timeouts
- Retries
- Parallel execution
- Reporters

---

## 🧪 Example Test

```typescript
import { test, expect } from '@playwright/test';

test('Login successfully', async ({ page }) => {
  await page.goto('https://example.com');

  await page.fill('#username', 'admin');
  await page.fill('#password', '123456');

  await page.click('button[type="submit"]');

  await expect(page).toHaveURL(/dashboard/);
});
```

---

## 🔄 CI/CD Integration

This framework can be integrated with **GitHub Actions** to automatically run tests on:

- Push
- Pull Request

### Example Workflow

```yaml
name: Playwright Tests

on:
  push:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: 20

      - run: npm install

      - run: npx playwright install --with-deps

      - run: npx playwright test
```

---

## 📚 Documentation

- [Playwright Official Documentation](https://playwright.dev/docs/intro)
- [Playwright GitHub Repository](https://github.com/microsoft/playwright)

---

## 👨‍💻 Author

**AnTran2806**

GitHub:  
https://github.com/AnTran2806
