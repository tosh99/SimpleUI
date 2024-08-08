# SimpleUI – The No Fuss React Component Library

## Salient Features
> https://bundlephobia.com/package/react-simple-ui-lib@0.3.4

## Installation
> pnpm i react-simple-ui-lib

## Customizing Styles
Add this block to the top of the main css file and edit it to your requirements
```scss
    :root {
        // Common Internal Variables
        --BorderRadius: 8px;
        --PlaceHolderColor: gray;
        --DisabledBgColor: lightgray;
        --DisabledFontColor: gray;
        --InputHeight: 34px;
        --InputFontSize: 14px;
    
        //Page
        --PageHPadding: 100px;
        --PageVPadding: 100px;
        --PageBottomBorder: 1px solid #eaeaea;
        --PageSectionMinInnerWidth: 1280px;
    
        //Badge
        --BadgeBorder: 1px solid #eaeaea;
        --BadgeBorderRadius: var(--BorderRadius);
        --BadgeBgColor: #F7F7F7;
        --BadgePadding: 8px 10px;
        --BadgeFontSize: 13px;
        --BadgeFontWeight: 500;
    
        //Button
        --BtnHeight: var(--InputHeight);
        --BtnPadding: 0 16px;
        --BtnBorderRadius: var(--BorderRadius);
        --BtnFontSize: 12px;
        --BtnActiveBgColor: black;
        --BtnActiveHoverBgColor: #5c5c5c;
        --BtnActiveFontColor: white;
        --BtnActiveBorder: 1px solid transparent;
        --BtnOutlineBgColor: white;
        --BtnOutlineHoverBgColor: #cacaca;
        --BtnOutlineFontColor: black;
        --BtnOutlineBorder: 1px solid gray;
        --BtnSimpleBgColor: white;
        --BtnSimpleHoverBgColor: #cacaca;
        --BtnSimpleFontColor: black;
        --BtnSimpleBorder: 1px solid transparent;
        --BtnFontFamily: 'Work Sans Variable';
        --BtnDisabledBgColor: var(--DisabledBgColor);
        --BtnDisabledColor: var(--DisabledFontColor);
    
        //Input
        --InputBorderRadius: var(--BorderRadius);
        --InputPlaceHolderColor: var(--PlaceHolderColor);
        --InputDisabledColor: var(--DisabledFontColor);
        --InputDisabledBgColor: var(--DisabledBgColor);
        --InputPadding: 0 24px;
        --InputBorder: 1px solid #bcbcbc;
        --InputFocusBorder: 1px solid #676767;
        --InputActiveColor: black;
        --InputFocusColor: black;
        --InputFontFamily: 'Work Sans Variable';
    
        //Select
        --SelectHeight: var(--InputHeight);
        --SelectBgColor: white;
        --SelectFontSize: var(--InputFontSize);
        --SelectOptionBgColor: #eaeaea;
        --SelectOptionFontSize: 14px;
        --SelectOptionSelectedBgColor: #676767;
    
        //TextArea
        --TextAreaPadding: 8px;
    }
```

## Component List
### Flex
```tsx
<SFlex />
```

### Button

```tsx
<SButton />
```

