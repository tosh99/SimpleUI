# ✨ SimpleUI - A Clean and Simple UI Library for React ✨

[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

`SimpleUI` provides a set of clean, simple, and customizable React components designed to be straightforward and easy to integrate. No fuss, just the essentials.

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/your-username/SimpleUI.git

# Install dependencies
pnpm install

# Run the development server
pnpm dev
```

## 🧩 Component Parameters

### SFlex
**Description:** A flexible container component based on CSS Flexbox that simplifies layout management with intuitive props for controlling direction, alignment, spacing, and more.
```typescript
interface SFlexProps {
  children?: ReactNode;               // Child elements to render
  className?: string;                // Additional CSS classes
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  justify?: 'start' | 'end' | 'center' | 'space-between';
  align?: 'start' | 'end' | 'center' | 'baseline' | 'stretch';
  style?: CSSProperties;             // Additional inline styles
  wrap?: boolean;                    // Whether to wrap content
  gap?: number;                      // Gap between child elements
  width?: number | string;           // Container width
  height?: number | string;          // Container height
  margin?: number | string;          // Container margin
  marginTop?: string | number;       // Top margin
  marginBottom?: string | number;    // Bottom margin
  padding?: number | string;         // Container padding
  paddingTop?: number | string;      // Top padding
  paddingBottom?: number | string;   // Bottom padding
  onClick?: () => void;              // Click handler
}
```

### SButton
**Description:** A versatile button component that supports multiple variants, loading states, icons, and custom styling while maintaining accessibility.
```typescript
interface SButtonProps {
  children: ReactNode;               // Button text/content
  onClick?: () => void;              // Click handler
  style?: CSSProperties;             // Additional inline styles
  is_full_width?: boolean;           // Whether button takes full width
  icon_left?: ReactNode;             // Icon to show on the left
  icon_right?: ReactNode;            // Icon to show on the right
  disabled?: boolean;                // Disable the button
  loading?: boolean;                 // Show loading state
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline'; // Button style variant
}
```

### SInput
**Description:** A customizable input field with built-in debounce support for search operations, styling options, and accessibility features.
```typescript
interface SInputProps {
  id?: string;                      // Input ID
  label?: string;                   // Input label
  label_style?: CSSProperties;      // Label styles
  width?: number | string;          // Input width
  placeholder?: string;             // Placeholder text
  disabled?: boolean;               // Disable the input
  required?: boolean;               // Mark as required
  style?: CSSProperties;            // Container styles
  input_style?: CSSProperties;      // Input element styles
  value?: string | number;          // Input value
  is_full_width?: boolean;          // Whether input takes full width
  debounce_ms?: number;             // Debounce time in milliseconds
  onChange?: (value: string) => void; // Value change handler
  onSearch?: (value: string) => void; // Debounced search handler
}
```

### STextarea
**Description:** A flexible textarea component with customizable dimensions, styling options, and value change handling.
```typescript
interface STextareaProps {
  id?: string;                      // Textarea ID
  width?: number | string;          // Width of the textarea
  min_height?: number | string;     // Minimum height of the textarea
  label?: string;                   // Label text
  placeholder?: string;             // Placeholder text
  disabled?: boolean;               // Disable the textarea
  style?: CSSProperties;            // Container styles
  label_style?: CSSProperties;      // Label styles
  value?: string | number;          // Textarea value
  onChange?: (value: string) => void; // Value change handler
}
```

### SToggle
**Description:** A toggle switch component that provides visual feedback for binary states with customizable on/off text labels.
```typescript
interface SToggleProps {
  on_text?: string;                 // Text to display when toggle is on
  off_text?: string;                // Text to display when toggle is off
  is_on?: boolean;                  // Toggle state
  onToggle?: () => void;            // Toggle change handler
}
```

### STabs
**Description:** A tabbed interface component that manages tab selection and content display with customizable styling for both container and individual tabs.
```typescript
interface STabsProps {
  tabs: STab[];                     // Array of tab items
  onTabClick: (index: number) => void; // Tab selection handler
  tab_key?: number | string;        // Currently active tab key
  tab_style?: CSSProperties;        // Styles for the tabs container
  tab_item_style?: CSSProperties;   // Styles for individual tab items
}

interface STab {
  label: ReactNode;                 // Tab label
  children?: ReactNode;             // Tab content
}
```

### SBadge
**Description:** A lightweight badge component for displaying status, counts, or labels with customizable styling including background color, text color, and borders.
```typescript
interface SBadgeProps {
  children?: ReactNode;             // Badge content
  background?: string;              // Background color
  color?: string;                   // Text color
  boxShadow?: string;               // Box shadow
  border?: string;                  // Border style
  style?: CSSProperties;            // Additional inline styles
}
```

### SCheckbox
**Description:** A checkbox component with customizable styling, disabled state handling, and callback support for state changes.
```typescript
interface SCheckboxProps {
  children: ReactNode;              // Checkbox label/content
  width?: number | string;          // Container width
  disabled?: boolean;               // Whether checkbox is disabled
  checked?: boolean;                // Checked state of the checkbox
  onChange?: (checked: boolean) => void; // Called when checkbox state changes
  style?: CSSProperties;            // Additional inline styles
}
```

### SLoader
**Description:** A simple, size-customizable loading indicator component for showing loading states in the application.
```typescript
interface SLoaderProps {
  size?: number;                    // Size of the loader in pixels
}
```

### SModal
**Description:** A modal dialog component with customizable dimensions, header buttons, and title that manages its own visibility state and close operations.
```typescript
interface SModalProps {
  children: ReactNode;              // Modal content
  minHeight?: number;               // Minimum height of modal content
  width?: number;                   // Width of the modal
  headerButtons?: ReactNode;        // Additional buttons for header
  title: string;                    // Modal title
  opened?: boolean;                 // Whether modal is visible
  onClose: () => void;              // Close handler
}
```

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
