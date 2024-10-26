# Contributing to MetaMask

Thank you for your interest in contributing to the MetaMask Browser Extension! This document provides guidelines and instructions to help you navigate the repository and contribute effectively.

## How to Navigate the Repository

The MetaMask Browser Extension repository is organized into several directories, each serving a specific purpose. Here is a brief description of each directory:

- `.circleci`: Contains scripts and configuration files for continuous integration and deployment using CircleCI.
- `.devcontainer`: Contains configuration files for development containers, including `devcontainer.json` and various setup scripts.
- `.github`: Contains GitHub-specific files, such as issue templates, pull request templates, and GitHub Actions workflows.
- `app`: Contains the main source code for the MetaMask extension, including localization files, images, scripts, and HTML files.
- `docs`: Contains documentation related to the project, such as publishing guides, QA guides, and design system information.
- `shared`: Contains shared constants, modules, and utilities used across the project.
- `test`: Contains test data, helpers, and end-to-end tests for the project.
- `ui`: Contains the React components, hooks, contexts, and styles used in the MetaMask extension's user interface.

## Relevant Documentation

Here are some links to relevant documentation files that will help you get started:

- [How to add custom build to Chrome](./add-to-chrome.md)
- [How to add custom build to Firefox](./add-to-firefox.md)
- [Publishing Guide](./publishing.md)
- [How to add a feature behind a secret feature flag](./secret-preferences.md)
- [Developing on MetaMask](../development/README.md)
