# @core/i18n

The `@core/i18n` package is a Nuxt 3 application that implements the i18n module, providing internationalization support for your applications. This package is designed to be integrated into other Nuxt 3 applications as a layer.

## Features

- **Nuxt i18n Integration**: Implements the i18n module to provide robust internationalization support.
- **Global Configuration**: Includes a global `i18n.config.ts` file that defines the i18n settings.
- **Language Files**: Contains global language files in the `/lang` directory.
- **Exportable Language Files**: The `/lang-export` directory will duplicate language files to the application that uses this package, allowing for overwriting of global language settings.

## Installation

To use the `@core/i18n` package in your Nuxt 3 application, you can add it as a layer using the custom command:

```bash
pnpm add-package
```

## i18n Configuration

This package includes a global configuration file and language directories:

1. **Global Configuration (`i18n.config.ts`)**:
    - This file contains the global i18n settings for the application.

2. **Global Language Files (`/lang`)**:
    - This directory contains the default language files shared across all applications using this package.

3. **Exportable Language Files (`/lang-export`)**:
    - This directory will duplicate language files to the application that uses this package, allowing these files to overwrite the global language files.

## Understanding the i18n Module

For a comprehensive guide on how the i18n module works, refer to this tutorial:
- [Nuxt.js i18n Tutorial](https://phrase.com/blog/posts/nuxt-js-tutorial-i18n/)

## Usage

After adding the package as a layer, your application will have access to the global i18n configurations and language files. Ensure that your application is configured to use the duplicated language files from `/lang-export` if you need to overwrite any global settings.

## Getting Help

If you encounter any issues or have questions, please refer to the official i18n module documentation or reach out to the dataMatters development team for support.

---

dataMatters Development Team