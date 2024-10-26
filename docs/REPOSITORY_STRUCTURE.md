# MetaMask Browser Extension Repository Structure

The MetaMask Browser Extension repository is organized into several directories, each serving a specific purpose. Below is a detailed description of each directory and its purpose, along with examples of important files and their roles.

## Directories

### `.circleci`
Contains scripts and configuration files for continuous integration and deployment using CircleCI.

**Examples of important files:**
- `config.yml`: Main configuration file for CircleCI.

### `.devcontainer`
Contains configuration files for development containers, including `devcontainer.json` and various setup scripts.

**Examples of important files:**
- `devcontainer.json`: Configuration file for the development container.

### `.github`
Contains GitHub-specific files, such as issue templates, pull request templates, and GitHub Actions workflows.

**Examples of important files:**
- `CODEOWNERS`: Defines the code owners for the repository.
- `CONTRIBUTING.md`: Guidelines for contributing to the project.
- `pull-request-template.md`: Template for pull requests.

### `app`
Holds the main source code for the MetaMask extension, including localization files, images, scripts, and HTML files.

**Examples of important files:**
- `background.html`: Background page for the extension.
- `home.html`: Home page for the extension.
- `scripts/background.js`: Background script for the extension.

### `docs`
Contains documentation related to the project, such as publishing guides, QA guides, and design system information.

**Examples of important files:**
- `README.md`: Overview of the documentation.
- `publishing.md`: Guide for publishing the extension.
- `QA_Guide.md`: Quality assurance guide.

### `shared`
Includes shared constants, modules, and utilities used across the project.

**Examples of important files:**
- `constants/accounts.ts`: Shared constants related to accounts.
- `constants/gas.ts`: Shared constants related to gas.

### `test`
Has test data, helpers, and end-to-end tests for the project.

**Examples of important files:**
- `e2e/tests`: End-to-end tests for the extension.
- `unit`: Unit tests for the extension.

### `ui`
Contains React components, hooks, contexts, and styles used in the MetaMask extension's user interface.

**Examples of important files:**
- `components`: React components used in the extension.
- `hooks`: Custom hooks used in the extension.
- `styles`: Styles used in the extension.

## Configuration Files

### `.browserslistrc`
Specifies the list of browsers that the project supports.

### `.circleci/config.yml`
Main configuration file for CircleCI.

### `.eslintrc.js`
Configuration file for ESLint, specifying linting rules for the project.

### `.prettierrc.yml`
Configuration file for Prettier, specifying code formatting rules for the project.
