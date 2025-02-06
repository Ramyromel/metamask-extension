# MetaMask Browser Extension

You can find the latest version of MetaMask on [our official website](https://metamask.io/). For help using MetaMask, visit our [User Support Site](https://support.metamask.io/).

For [general questions](https://community.metamask.io/c/learn/26), [feature requests](https://community.metamask.io/c/feature-requests-ideas/13), or [developer questions](https://community.metamask.io/c/developer-questions/11), visit our [Community Forum](https://community.metamask.io/).

MetaMask supports Firefox, Google Chrome, and Chromium-based browsers. We recommend using the latest available browser version.

For up to the minute news, follow us on [X](https://x.com/MetaMask).

To learn how to develop MetaMask-compatible applications, visit our [Developer Docs](https://metamask.github.io/metamask-docs/).

To learn how to contribute to the MetaMask codebase, visit our [Contributor Docs](https://github.com/MetaMask/contributor-docs).

To learn how to contribute to the MetaMask Extension project itself, visit our [Extension Docs](https://github.com/MetaMask/metamask-extension/tree/develop/docs).

## Table of Contents

1. [Introduction](#introduction)
2. [Installation](#installation)
3. [Configuration and Usage](#configuration-and-usage)
4. [Troubleshooting](#troubleshooting)
5. [Running Tests](#running-tests)
6. [Available Scripts](#available-scripts)
7. [Contributing](#contributing)
8. [Architecture](#architecture)
9. [Updating Dependencies](#updating-dependencies)
10. [Dapp Developer Resources](#dapp-developer-resources)
11. [Other Docs](#other-docs)

## Introduction

MetaMask is a browser extension that allows users to interact with the Ethereum blockchain. It provides a secure and user-friendly interface for managing Ethereum accounts, sending and receiving transactions, and interacting with decentralized applications (dApps). Key features of MetaMask include:

- Securely store and manage Ethereum accounts and private keys
- Send and receive Ethereum and ERC-20 tokens
- Interact with dApps directly from the browser
- Support for multiple networks, including Mainnet, Ropsten, Rinkeby, and more
- Built-in support for hardware wallets like Ledger and Trezor

## Installation

### Prerequisites

- Install [Node.js](https://nodejs.org) version 20
  - If you are using [nvm](https://github.com/nvm-sh/nvm#installing-and-updating) (recommended) running `nvm use` will automatically choose the right node version for you.
- Enable Corepack by executing the command `corepack enable` within the metamask-extension project. Corepack is a utility included with Node.js by default. It manages Yarn on a per-project basis, using the version specified by the `packageManager` property in the project's package.json file. Please note that modern releases of [Yarn](https://yarnpkg.com/getting-started/install) are not intended to be installed globally or via npm.
- Duplicate `.metamaskrc.dist` within the root and rename it to `.metamaskrc` by running `cp .metamaskrc{.dist,}`.
  - Replace the `INFURA_PROJECT_ID` value with your own personal [Infura API Key](https://docs.infura.io/networks/ethereum/how-to/secure-a-project/project-id).
    - If you don't have an Infura account, you can create one for free on the [Infura website](https://app.infura.io/register).
  - If debugging MetaMetrics, you'll need to add a value for `SEGMENT_WRITE_KEY` [Segment write key](https://segment.com/docs/connections/find-writekey/), see [Developing on MetaMask - Segment](./development/README.md#segment).
  - If debugging unhandled exceptions, you'll need to add a value for `SENTRY_DSN` [Sentry Dsn](https://docs.sentry.io/product/sentry-basics/dsn-explainer/), see [Developing on MetaMask - Sentry](./development/README.md#sentry).
  - Optionally, replace the `PASSWORD` value with your development wallet password to avoid entering it each time you open the app.
- Run `yarn install` to install the dependencies.

### Building the Project

- Build the project to the `./dist/` folder with `yarn dist` (for Chromium-based browsers) or `yarn dist:mv2` (for Firefox)
  - Optionally, to create a development build you can instead run `yarn start` (for Chromium-based browsers) or `yarn start:mv2` (for Firefox)
  - Uncompressed builds can be found in `/dist`, compressed builds can be found in `/builds` once they're built.
  - See the [build system readme](./development/build/README.md) for build system usage information.

### Running the Extension

- Follow these instructions to verify that your local build runs correctly:
  - [How to add custom build to Chrome](./docs/add-to-chrome.md)
  - [How to add custom build to Firefox](./docs/add-to-firefox.md)

## Configuration and Usage

### Configuring MetaMask

To configure MetaMask, you can modify the `.metamaskrc` file in the root directory. This file contains various environment variables that can be used to customize the behavior of the extension. Some common configuration options include:

- `INFURA_PROJECT_ID`: Your Infura API key for connecting to the Ethereum network.
- `SEGMENT_WRITE_KEY`: Your Segment write key for debugging MetaMetrics.
- `SENTRY_DSN`: Your Sentry DSN for debugging unhandled exceptions.
- `PASSWORD`: Your development wallet password to avoid entering it each time you open the app.

### Using MetaMask

Once you have configured MetaMask, you can start using it to manage your Ethereum accounts and interact with dApps. Here are some common use cases:

- **Creating a new account**: Click on the MetaMask extension icon in your browser, then click on "Create a Wallet" and follow the prompts to create a new Ethereum account.
- **Importing an existing account**: Click on the MetaMask extension icon in your browser, then click on "Import Wallet" and enter your seed phrase or private key to import an existing Ethereum account.
- **Sending and receiving Ethereum**: Click on the MetaMask extension icon in your browser, then click on the "Send" or "Receive" button to send or receive Ethereum or ERC-20 tokens.
- **Interacting with dApps**: When you visit a dApp that supports MetaMask, you will be prompted to connect your MetaMask account. Once connected, you can interact with the dApp using your MetaMask account.

## Troubleshooting

If you encounter any issues while using MetaMask, here are some common troubleshooting steps:

- **Check your internet connection**: Ensure that you have a stable internet connection, as MetaMask requires an internet connection to interact with the Ethereum network.
- **Clear your browser cache**: Sometimes, clearing your browser cache can resolve issues with MetaMask. To do this, go to your browser settings and clear your cache and cookies.
- **Update MetaMask**: Make sure you are using the latest version of MetaMask. You can check for updates in your browser's extension settings.
- **Reinstall MetaMask**: If you are still experiencing issues, try uninstalling and reinstalling the MetaMask extension.

## Running Tests

### Unit Tests

To run unit tests, use the following command:

```sh
yarn test:unit
```

### Integration Tests

To run integration tests, use the following command:

```sh
yarn test:integration
```

### End-to-End Tests

To run end-to-end tests, use the following command:

```sh
yarn test:e2e
```

You can also run specific end-to-end tests by specifying the test file:

```sh
yarn test:e2e:single test/e2e/tests/TEST_NAME.spec.js
```

## Available Scripts

Here is a list of available scripts and their purposes:

- `yarn start`: Start a development build for Chromium-based browsers.
- `yarn start:mv2`: Start a development build for Firefox.
- `yarn dist`: Build the project for Chromium-based browsers.
- `yarn dist:mv2`: Build the project for Firefox.
- `yarn test`: Run unit tests and the linter.
- `yarn test:unit`: Run unit tests.
- `yarn test:integration`: Run integration tests.
- `yarn test:e2e`: Run end-to-end tests.
- `yarn lint`: Run the linter.
- `yarn lint:fix`: Automatically fix some lint problems.
- `yarn lint:changed`: Run the linter on local changes.
- `yarn lint:changed:fix`: Automatically fix some lint problems on local changes.

## Contributing

We welcome contributions to MetaMask! If you would like to contribute, please follow these guidelines:

### Submitting Issues

If you encounter a bug or have a feature request, please submit an issue on our [GitHub repository](https://github.com/MetaMask/metamask-extension/issues). When submitting an issue, please provide as much detail as possible, including steps to reproduce the issue and any relevant screenshots.

### Pull Requests

If you would like to contribute code to MetaMask, please follow these steps:

1. Fork the repository and create a new branch for your changes.
2. Make your changes and ensure that the code passes all tests and linter checks.
3. Submit a pull request to the `develop` branch of the main repository. In your pull request, please provide a clear description of the changes you have made and the reasons for those changes.

### Code Reviews

All pull requests will be reviewed by a member of the MetaMask team. Please be patient, as it may take some time for us to review your changes. We will provide feedback and request any necessary changes before merging your pull request.

## Architecture

MetaMask is composed of several main components, including the UI, background scripts, and content scripts. Here is an overview of the main components and their relationships:

- **UI**: The user interface of MetaMask, which is built using React and Redux. The UI is responsible for displaying account information, transaction details, and other user-facing features.
- **Background Scripts**: The background scripts handle the core functionality of MetaMask, including managing accounts, processing transactions, and interacting with the Ethereum network. The background scripts run in a separate context from the UI and content scripts.
- **Content Scripts**: The content scripts are injected into web pages and allow MetaMask to interact with dApps. The content scripts act as a bridge between the web page and the background scripts, enabling dApps to access the user's MetaMask account and perform transactions.

For a visual representation of the controller hierarchy and dependencies, see the [architecture diagram](./docs/architecture.png).

## Updating Dependencies

Whenever you change dependencies (adding, removing, or updating, either in `package.json` or `yarn.lock`), there are various files that must be kept up-to-date.

- `yarn.lock`:
  - Run `yarn` again after your changes to ensure `yarn.lock` has been properly updated.
  - Run `yarn lint:lockfile:dedupe:fix` to remove duplicate dependencies from the lockfile.
- The `allow-scripts` configuration in `package.json`
  - Run `yarn allow-scripts auto` to update the `allow-scripts` configuration automatically. This config determines whether the package's install/postinstall scripts are allowed to run. Review each new package to determine whether the install script needs to run or not, testing if necessary.
  - Unfortunately, `yarn allow-scripts auto` will behave inconsistently on different platforms. macOS and Windows users may see extraneous changes relating to optional dependencies.
- The LavaMoat policy files
  - If you are a MetaMask team member and your PR is on a repository branch, you can use the bot command `@metamaskbot update-policies` to ask the MetaMask bot to automatically update the policies for you.
  - If your PR is from a fork, you can ask a MetaMask team member to help with updating the policy files.
  - Manual update instructions: The _tl;dr_ is to run `yarn lavamoat:auto` to update these files, but there can be devils in the details:
    - There are two sets of LavaMoat policy files:
      - The production LavaMoat policy files (`lavamoat/browserify/*/policy.json`), which are re-generated using `yarn lavamoat:webapp:auto`. Add `--help` for usage.
        - These should be regenerated whenever the production dependencies for the webapp change.
      - The build system LavaMoat policy file (`lavamoat/build-system/policy.json`), which is re-generated using `yarn lavamoat:build:auto`.
        - This should be regenerated whenever the dependencies used by the build system itself change.
    - Whenever you regenerate a policy file, review the changes to determine whether the access granted to each package seems appropriate.
    - Unfortunately, `yarn lavamoat:auto` will behave inconsistently on different platforms.
      macOS and Windows users may see extraneous changes relating to optional dependencies.
    - If you keep getting policy failures even after regenerating the policy files, try regenerating the policies after a clean install by doing:
      - `rm -rf node_modules/ && yarn && yarn lavamoat:auto`
    - Keep in mind that any kind of dynamic import or dynamic use of globals may elude LavaMoat's static analysis.
      Refer to the LavaMoat documentation or ask for help if you run into any issues.
- The Attributions file
  - If you are a MetaMask team member and your PR is on a repository branch, you can use the bot command `@metamaskbot update-attributions` to ask the MetaMask bot to automatically update the attributions file for you.
  - Manual update: run `yarn attributions:generate`.

## GitHub Codespaces Quickstart

As an alternative to building on your local machine, there is a new option to get a development environment up and running in less than 5 minutes by using GitHub Codespaces. Please note that there is a [Limited Free Monthly Quota](https://docs.github.com/en/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces), and after that GitHub will start charging you.

_Note: You are billed for both time spent running, and for storage used_

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/MetaMask/metamask-extension?quickstart=1)

1. Start by clicking the button above
2. A new browser tab will open with a remote version of Visual Studio Code (this will take a few minutes to load)
3. A "Simple Browser" will open inside the browser with noVNC -- click Connect
   - Optional steps:
     - Click the button at the upper-right of the Simple Browser tab to open the noVNC window in its own tab
     - Open the noVNC sidebar on the left, click the gear icon, change the Scaling Mode to Remote Resizing
4. Wait about 20 extra seconds on the first launch, for the scripts to finish
5. Right-click on the noVNC desktop to launch Chrome or Firefox with MetaMask pre-installed
6. Change some code, then run `yarn start` to build in dev mode
7. After a minute or two, it will finish building, and you can see your changes in the noVNC desktop

### Tips to keep your Codespaces usage lower

- You are billed for both time spent running, and for storage used
- Codespaces pause after 30 minutes of inactivity, and auto-delete after 30 days of inactivity
- You can manage your Codespaces here: https://github.com/codespaces
  - You may want to manually pause them before the 30 minute timeout
  - If you have several idle Codespaces hanging around for several days, you can quickly run out of storage quota. You should delete the ones you do not plan to use anymore, and probably keep only 1 or 2 in the long-term. It's also possible to re-use old Codespaces and switch the branch, instead of creating new ones and deleting the old ones.

### Codespaces on a fork

If you are not a MetaMask Internal Developer, or are otherwise developing on a fork, the default Infura key will be on the Free Plan and have very limited requests per second. If you want to use your own Infura key, follow the `.metamaskrc` and `INFURA_PROJECT_ID` instructions in the section [Building on your local machine](#building-on-your-local-machine).

## Dapp Developer Resources

- [Extend MetaMask's features w/ MetaMask Snaps.](https://docs.metamask.io/snaps/)
- [Prompt your users to add and switch to a new network.](https://docs.metamask.io/wallet/how-to/add-network/)
- [Change the logo that appears when your dapp connects to MetaMask.](https://docs.metamask.io/wallet/how-to/display/icon/)

## Other Docs

- [How to add a new translation to MetaMask](./docs/translating-guide.md)
- [Publishing Guide](./docs/publishing.md)
- [How to use the TREZOR emulator](./docs/trezor-emulator.md)
- [Developing on MetaMask](./development/README.md)
- [How to generate a visualization of this repository's development](./development/gource-viz.sh)
- [How to add new confirmations](./docs/confirmations.md)
- [Browser support guidelines](./docs/browser-support.md)
