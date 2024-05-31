# @core/ui

The `@core/ui` package is a Nuxt 3 application that implements the Nuxt UI Pro module, providing a set of essential UI components and configurations. This package is designed to be integrated into other Nuxt 3 applications as a layer.

## Features

- **Nuxt UI Pro Integration**: Implements the Nuxt UI Pro module, offering a comprehensive suite of UI components.
- **Tailwind CSS Configuration**: Includes a global `tailwind.config.ts` and an extendable `tailwind-export.config.ts`.
- **App Configuration**: Provides a global `app.config.ts` and an extendable `app-export.config.ts`.
- **Custom Command for Easy Integration**: Use `pnpm add-package` to add this package as a layer to your Nuxt 3 application.

## Installation

To use the `@core/ui` package in your Nuxt 3 application, you can add it as a layer using the custom command:

```bash
pnpm add-package
```

## Tailwind CSS Configuration

This package includes two Tailwind CSS configuration files:

1. **Global Configuration (`tailwind.config.ts`)**:
    - This is the global Tailwind CSS configuration file shared across all applications using this package.

2. **Export Configuration (`tailwind-export.config.ts`)**:
    - This file will be duplicated in the application that uses this package and extends the global `tailwind.config.ts`.

## App Configuration

Similar to the Tailwind CSS configuration, this package includes two application configuration files:

1. **Global Configuration (`app.config.ts`)**:
    - This is the global application configuration file.

2. **Export Configuration (`app-export.config.ts`)**:
    - This file will be duplicated in the application that uses this package and extends the global `app.config.ts`.

## Nuxt UI and Nuxt UI Pro Components

This package provides the basic components from Nuxt UI and Nuxt UI Pro. For more details on the available components and how to use them, refer to the official documentation:

- [Nuxt UI Getting Started](https://ui.nuxt.com/getting-started/installation)
- [Nuxt UI Pro Getting Started](https://ui.nuxt.com/pro/getting-started)

## Usage

After adding the package as a layer, you can start using the provided components and configurations in your Nuxt 3 application. Ensure that your application is configured to use the duplicated `tailwind-export.config.ts` and `app-export.config.ts` files.

## Getting Help

If you encounter any issues or have questions, please refer to the official documentation or reach out to the dataMatters development team for support.

---

dataMatters Development Team