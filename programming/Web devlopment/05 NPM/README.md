# NPM (Node Package Manager)

NPM (Node Package Manager) is a software package manager for the JavaScript programming language. It is primarily used with Node.js, a runtime environment for executing JavaScript code outside of a web browser. NPM allows developers to easily install, manage, and share reusable JavaScript code libraries, known as packages or modules. These packages can be small utility functions or large frameworks, and they can be publicly available for anyone to use or privately shared within a project or organization. NPM simplifies the process of integrating and maintaining dependencies in JavaScript projects, making it an essential tool for JavaScript developers.

## Table of contents

- [NPM (Node Package Manager)](#npm-node-package-manager)
  - [Table of contents](#table-of-contents)
  - [Get Version](#get-version)
  - [Get Help](#get-help)
  - [Create package.json](#create-packagejson)
  - [Set Defaults](#set-defaults)
  - [Get Defaults](#get-defaults)
  - [Remove Defaults](#remove-defaults)
  - [Install Packages](#install-packages)
    - [Globally (Install Packages)](#globally-install-packages)
    - [Production dependency (Install Packages)](#production-dependency-install-packages)
    - [Development dependency (Install Packages)](#development-dependency-install-packages)
  - [Install Certain Version](#install-certain-version)
    - [Globally (Install Certain Version)](#globally-install-certain-version)
    - [Production dependency (Install Certain Version)](#production-dependency-install-certain-version)
    - [Development dependency (Install Certain Version)](#development-dependency-install-certain-version)
  - [Update Packages](#update-packages)
    - [Globally (Update Packages)](#globally-update-packages)
    - [Production dependency (Update Packages)](#production-dependency-update-packages)
    - [Development dependency (Update Packages)](#development-dependency-update-packages)
  - [Remove Packages](#remove-packages)
    - [Globally (Remove Packages)](#globally-remove-packages)
    - [Production dependency (Remove Packages)](#production-dependency-remove-packages)
    - [Development dependency (Remove Packages)](#development-dependency-remove-packages)
  - [Move to Another Folder](#move-to-another-folder)
    - [Install production and development dependencies](#install-production-and-development-dependencies)
    - [Install production dependencies only](#install-production-dependencies-only)
  - [Find Root Folder](#find-root-folder)
    - [Globally (Find Root Folder)](#globally-find-root-folder)
    - [Locally (Find Root Folder)](#locally-find-root-folder)
  - [List Packages](#list-packages)
    - [Globally (List Packages)](#globally-list-packages)
    - [Locally (List Packages)](#locally-list-packages)
  - [NPM Scripts](#npm-scripts)
    - [Run scripts](#run-scripts)

## Get Version

```bash
npm -v
npm --version
```

## Get Help

```bash
npm
npm help
```

## Create package.json

```bash
npm init
# Below commands will create package.json file with default values
npm init -y
npm init --yes
```

## Set Defaults

```bash
npm config set init-author-name 'YOUR NAME'
npm config set init-license 'MIT'
```

## Get Defaults

```bash
npm config get init-author-name
npm config get init-license
```

## Remove Defaults

```bash
npm config delete init-author-name
npm config delete init-license
```

## Install Packages

### Globally (Install Packages)

```bash
npm install -g package-name
```

### Production dependency (Install Packages)

```bash
npm install --save package-name
```

### Development dependency (Install Packages)

```bash
npm install --save-dev package-name
```

## Install Certain Version

### Globally (Install Certain Version)

```bash
npm install -g package-name@package-version
```

### Production dependency (Install Certain Version)

```bash
npm install --save package-name@package-version
```

### Development dependency (Install Certain Version)

```bash
npm install --save-dev package-name@package-version
```

## Update Packages

### Globally (Update Packages)

```bash
npm update -g package-name
```

### Production dependency (Update Packages)

```bash
npm update --save package-name
```

### Development dependency (Update Packages)

```bash
npm update --save-dev package-name
```

## Remove Packages

### Globally (Remove Packages)

```bash
npm uninstall -g package-name
```

### Production dependency (Remove Packages)

```bash
npm uninstall --save package-name
```

### Development dependency (Remove Packages)

```bash
npm uninstall --save-dev package-name
```

## Move to Another Folder

NPM stores installed packages inside `node_modules` folder.
Most people usually doesn't share `node_modules` folder along with their code, because you can easily install all the NPM packages they have used using below commands.

### Install production and development dependencies

```bash
npm install
```

### Install production dependencies only

```bash
npm install --production
```

## Find Root Folder

### Globally (Find Root Folder)

```bash
npm root -g
```

### Locally (Find Root Folder)

```bash
npm root
```

## List Packages

### Globally (List Packages)

```bash
npm list -g
npm list -g --depth 0
npm list -g --depth 1
```

### Locally (List Packages)

```bash
npm list
npm list --depth 0
npm list --depth 1
```

## NPM Scripts

Define scripts in `package.json` file.

```json
"scripts": {
  "start": "node index.js",
  "script-name":"command-to-run"
}
```

### Run scripts

```bash
# Only "start" script will execute without run command
npm start
npm run script-name
```
