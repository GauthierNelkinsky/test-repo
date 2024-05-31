# @core/eslint

The `@core/eslint` package is a Nuxt 3 application that implements the ESLint module, providing linting and code style enforcement for your applications. This package is designed to be integrated into other Nuxt 3 applications as a layer.

## Features

- **Nuxt ESLint Integration**: Implements the ESLint module to ensure code quality and style consistency.
- **Global ESLint Configuration**: Includes a default ESLint configuration file.
- **Extendable Configuration**: Allows for custom ESLint configurations per application.
- **Stylistic Functionality**: Ensures that the code is formatted and styled consistently.

## Installation

To use the `@core/eslint` package in your Nuxt 3 application, you can add it as a layer using the custom command:

```bash
pnpm add-package
```

## ESLint Configuration

This package includes a global configuration file and a template for custom configurations:

1. **Default Configuration (`default-eslint-config.mjs`)**:
    - This file contains the global ESLint settings shared across all applications using this package.

2. **Extendable Configuration (`eslint.config.mjs`)**:
    - This file extends the default configuration and will be duplicated in the application that uses this package. This allows each application to have its own custom ESLint settings while still inheriting the global rules.

    - For guidance on how to edit this file, please refer to the official ESLint documentation: [ESLint Configuration Files](https://eslint.org/docs/latest/use/configure/configuration-files).

## Stylistic Functionality

This package also includes stylistic functionality to ensure that the code is not only correct but also pretty. For more details, see the documentation on [ESLint Style](https://eslint.style/).

## Usage

After adding the package as a layer, your application will have access to the ESLint configurations. To run ESLint on your application, use the following commands:

- **Check for Errors**:
    ```bash
    eslint .
    ```

- **Fix Errors**:
    ```bash
    eslint --fix .
    ```

## Documentation

For more details on the ESLint module used in this package, refer to the official documentation:
- [Nuxt ESLint Module](https://eslint.nuxt.com/packages/module)

## Getting Help

If you encounter any issues or have questions, please refer to the official ESLint module documentation or reach out to the dataMatters development team for support.

---

dataMatters Development Team