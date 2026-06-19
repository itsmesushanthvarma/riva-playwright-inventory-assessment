# Riva - Intermediate SDET Take-Home Assessment

## Overview

This repository contains my submission for the Riva Intermediate Software Developer in Test (SDET) take-home assessment.

The solution includes:

* Playwright + TypeScript automation framework
* Login navigation test
* Inventory search functionality test
* Exploratory testing findings and defect documentation

---

## Technology Stack

* Playwright
* TypeScript
* Node.js

---

## Framework Design

The framework follows the Page Object Model (POM) pattern to improve maintainability, readability, and reusability.

### Project Structure

riva-playwright-project/
│
├── pages/
│   ├── LoginPage.ts
│   └── InventoryPage.ts
│
├── test-data/
│   └── credentials.ts
│
├── tests/
│   ├── login.spec.ts
│   └── inventory-search.spec.ts
│
├── docs/
│   └── BUG_REPORT.md
│
├── playwright.config.ts
├── package.json
└── README.md


### Design Decisions

* Stable selectors were prioritized using `data-testid` attributes wherever available.
* Page Object Model was implemented to separate test logic from page interactions.
* Test data was centralized to improve maintainability.
* Reporting, screenshots, traces, and videos are configured through Playwright.

---

## Test Coverage

### Login Navigation Test

Objective:

* Verify user can successfully authenticate using valid credentials.
* Verify successful navigation to the Inventory Dashboard.
* Verify key dashboard components are displayed after login.

Coverage:

* Login page accessibility
* Credential submission
* Dashboard load validation
* Search field visibility
* Category filter visibility
* Add Product button visibility
* Logout button visibility

---

### Inventory Search Test

Objective:

* Verify products can be filtered using the search functionality.

Coverage:

* Product search using valid search text
* Verification of matching results
* Verification that search results update correctly
* Verification that clearing the search restores product visibility

---

## Exploratory Testing Summary

During exploratory testing, several functional defects were identified.

The most significant findings include:

1. Authentication bypass using incomplete credentials
2. Product creation without required field validation
3. Product edit functionality not persisting updates
4. Deleted products remaining visible until page refresh

Detailed defect information is available in:

```text
docs/BUG_REPORT.md
```

---

## Assumptions

* Credentials provided in the assessment documentation are valid and stable.
* The test environment contains the default inventory dataset.
* Search functionality is expected to dynamically filter displayed inventory items.

---

## Areas for Future Enhancement

If this framework were expanded further, I would consider:

* Cross-browser execution
* CI/CD integration
* Test data generation utilities
* API validation for inventory operations
* Visual regression testing
* Negative authentication scenarios
* Add/Edit/Delete product automation after application defects are resolved

---

## Installation

Install dependencies:

```bash
npm install
```

---

## Execute All Tests

```bash
npx playwright test
```

---

## Execute Individual Tests

Login Test

```bash
npx playwright test tests/login.spec.ts
```

Search Test

```bash
npx playwright test tests/inventory-search.spec.ts
```

---

## View Test Report

```bash
npx playwright show-report
```

---

## Submission Notes

The Search functionality was selected for automation because exploratory testing identified significant functional issues within the Add Product, Edit Product, and Delete Product workflows. Automating a stable feature allowed focus on creating reliable, maintainable tests while documenting the identified defects separately.

The primary goal of this submission was to demonstrate:

* Test automation design
* Playwright framework implementation
* Exploratory testing capability
* Defect identification and reporting
* Maintainable test architecture
