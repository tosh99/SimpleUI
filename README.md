# ✨ SimpleUI - A Clean and Simple UI Library for React ✨

[![npm version](https://badge.fury.io/js/react-simple-ui-lib.svg)](https://badge.fury.io/js/react-simple-ui-lib)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

`react-simple-ui-lib` provides a set of clean, simple, and customizable React components designed to be straightforward and easy to integrate. No fuss, just the essentials.

---

## 🚀 Features

*   **Simple & Clean:** Focused components without unnecessary complexity.
*   **Lightweight:** Minimal dependencies for faster load times. ([Check Bundle Size](https://bundlephobia.com/package/react-simple-ui-lib))
*   **Customizable:** Easily theme components using CSS variables.
*   **Modern React:** Built with React 19.
*   **TypeScript:** Fully typed for a better development experience.

---

## 📦 Installation

You can install `react-simple-ui-lib` using your preferred package manager:

```bash
# pnpm
pnpm add react-simple-ui-lib

# npm
npm install react-simple-ui-lib

# yarn
yarn add react-simple-ui-lib
```

---

## 🛠️ Basic Usage

Import the components you need and use them in your React application.

```tsx
import React from 'react';
import { SButton, SBadge } from 'react-simple-ui-lib';
// Make sure to import the base styles if needed, or customize them!
// import 'react-simple-ui-lib/dist/index.css'; // Assuming base styles are provided

function MyApp() {
  return (
    <div>
      <SButton variant="primary" onClick={() => alert('Button Clicked!')}>
        Click Me
      </SButton>
      <SBadge>New Feature</SBadge>
    </div>
  );
}

export default MyApp;
```

---

## 🧩 Components

Here is a list of available components (Expand as needed):

*   `SBadge`: Simple badge component.
*   `SButton`: Versatile button component.
*   `SCheckbox`: Checkbox input.
*   `SFlex`: Flexbox layout helper.
*   `SLoader`: Loading indicator.
*   `SInput`: Text input component.
*   `SSelect`: Select dropdown component.
*   `STextArea`: Text area component.

*(Optional: Link to Storybook or detailed component documentation if available)*

---

## 🎨 Customizing Styles

SimpleUI components can be easily customized by overriding the default CSS variables. Add the following `:root` block to your main CSS file (e.g., `index.css` or `App.css`) and modify the values to match your design system.

```css
/* Example: Place in your global CSS file */
:root {
    // Common Internal Variables
    --BorderRadius: 8px;
    --PlaceHolderColor: hsl(240 5% 64.9%);
    --DisabledBgColor: hsl(240 4.8% 95.9%);
    --DisabledFontColor: hsl(240 3.8% 46.1%);
    --InputHeight: 34px;
    --InputFontSize: 14px;
    --InputLabelFontSize: 13px;
    --InputLabelColor: hsl(240 5.9% 10%);

    // Page
    --PageHPadding: 100px;
    --PageVPadding: 100px;
    --PageBottomBorder: 1px solid hsl(240 4.8% 95.9%);
    --PageSectionMinInnerWidth: 1280px;

    // Badge
    --BadgeBorder: 1px solid hsl(240 4.8% 95.9%);
    --BadgeBorderRadius: var(--BorderRadius);
    --BadgeBgColor: hsl(240 5.9% 90%);
    --BadgePadding: 8px 10px;
    --BadgeFontSize: 13px;
    --BadgeFontWeight: 500;

    // Button Common
    --BtnHeight: var(--InputHeight);
    --BtnPadding: 0 16px;
    --BtnBorderRadius: var(--BorderRadius);
    --BtnFontSize: 12px;

    // Button Active
    --BtnActiveBgColor: hsl(240 5.9% 10%);
    --BtnActiveHoverBgColor: hsl(240 4.8% 20%);
    --BtnActiveFontColor: hsl(240 5% 97.8%);
    --BtnActiveBorder: 1px solid transparent;

    // Button Outline
    --BtnOutlineBgColor: hsl(240 5% 97.8%);
    --BtnOutlineFontColor: hsl(240 5.9% 10%);
    --BtnOutlineBorder: 1px solid hsl(240 5% 64.9%);
    --BtnOutlineHoverBgColor: hsl(240 4.8% 95.9%);
    --BtnOutlineHoverFontColor: hsl(240 5.9% 10%);
    --BtnOutlineHoverBorder: 1px solid hsl(240 3.8% 46.1%);

    // Button Simple / No Outline
    --BtnSimpleBgColor: hsl(240 5% 97.8%);
    --BtnSimpleFontColor: hsl(240 5.9% 10%);
    --BtnSimpleBorder: 1px solid hsl(240 5% 97.8%);
    --BtnSimpleHoverBgColor: hsl(240 4.9% 83.9%);
    --BtnSimpleHoverFontColor: hsl(240 5.9% 10%);
    --BtnSimpleHoverBorder: 1px solid hsl(240 4.8% 95.9%);

    // Button Font
    --BtnFontFamily: 'Work Sans Variable';
    --BtnDisabledBgColor: var(--DisabledBgColor);
    --BtnDisabledColor: var(--DisabledFontColor);

    // Input
    --InputBorderRadius: var(--BorderRadius);
    --InputPlaceHolderColor: var(--PlaceHolderColor);
    --InputDisabledColor: var(--DisabledFontColor);
    --InputDisabledBgColor: var(--DisabledBgColor);
    --InputPadding: 0 12px;
    --InputBorder: 1px solid hsl(240 5.9% 90%);
    --InputFocusBorder: 1px solid hsl(240 5% 64.9%);
    --InputActiveColor: hsl(240 5.9% 10%);
    --InputFocusColor: hsl(240 5.9% 10%);
    --InputFontFamily: 'Work Sans Variable';

    // Select
    --SelectHeight: var(--InputHeight);
    --SelectBgColor: hsl(240 5% 97.8%);
    --SelectFontSize: var(--InputFontSize);
    --SelectOptionBgColor: hsl(240 5.9% 90%);
    --SelectOptionFontSize: 14px;
    --SelectOptionSelectedBgColor: hsl(240 5.9% 90%);
    --SelectLabelColor: var(--InputLabelColor);
    --SelectLabelFontSize: var(--InputLabelFontSize);

    // Textarea
    --TextAreaPadding: 12px;
    --TextAreaMinHeight: 120px;
    --TextAreaLabelColor: var(--InputLabelColor);
    --TextAreaLabelFontSize: var(--InputLabelFontSize);
}
```

**Note:** Ensure any custom fonts (like `'Work Sans Variable'`) are properly imported and available in your project.

---

## 🔗 Peer Dependencies

This library requires the following peer dependencies to be installed in your project:

*   `react`: ^19.1.0
*   `react-dom`: ^19.1.0
*   `ahooks`: ^3.8.4
*   `framer-motion`: ^11.3.19
*   `luxon`: ^3.1.0
*   `react-fast-marquee`: ^1.6.5
*   `react-icons`: ^5.2.1
*   `react-loading-skeleton`: ^3.4.0
*   `sass`: ^1.86.2
*   `swiper`: ^11.1.8
*   `react-spinners`: ^0.15.0
*   `typescript`: ^5.5.3 (Required if using TypeScript)
*   `typescript-plugin-css-modules`: ^5.1.0 (For CSS module typing)

Install them if you haven't already:

```bash
# pnpm
pnpm add react react-dom ahooks framer-motion luxon react-fast-marquee react-icons react-loading-skeleton sass swiper react-spinners typescript typescript-plugin-css-modules

# npm
npm install react react-dom ahooks framer-motion luxon react-fast-marquee react-icons react-loading-skeleton sass swiper react-spinners typescript typescript-plugin-css-modules

# yarn
yarn add react react-dom ahooks framer-motion luxon react-fast-marquee react-icons react-loading-skeleton sass swiper react-spinners typescript typescript-plugin-css-modules
```

---

## 🤝 Contributing

Contributions are welcome! If you'd like to contribute, please follow these steps:

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/your-feature-name`).
3.  Make your changes.
4.  Commit your changes (`git commit -m 'Add some feature'`).
5.  Push to the branch (`git push origin feature/your-feature-name`).
6.  Open a pull request.

*(Optional: Add details about running tests, linting, or build processes)*

---

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details (or link to opensource.org if no file exists).
