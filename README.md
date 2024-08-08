# SimpleUI – The No Fuss React Component Library

## Installation
> pnpm i react-simple-ui-lib

## Customizing Styles
Add this block to the top of the main css file and edit it to your requirements
```scss
    :root {
        //Page
        --PageHPadding: 100px;
        --PageVPadding: 100px;
    
        //Page Section
        --PageSectionMinInnerWidth: 1280px;
        --PageSectionBottomBorder: 1px solid #eaeaea;

        //Badge
        --BadgeBorder: 1px solid #eaeaea;
        --BadgeBorderRadius: 10px;
    
        //Button
        --BtnPadding: 0 16px;
        --BtnBorderRadius: 20px;
        --BtnFontSize: 12px;
        --BtnActiveBgColor: black;
        --BtnActiveHoverBgColor: gray;
        --BtnActiveFontColor: white;
        --BtnActiveBorder: 1px solid transparent;
        --BtnOutlineBgColor: white;
        --BtnOutlineHoverBgColor: #aaaaaa;
        --BtnOutlineFontColor: black;
        --BtnOutlineBorder: 1px solid gray;
        --BtnSimpleBgColor: white;
        --BtnSimpleHoverBgColor: #aaaaaa;
        --BtnSimpleFontColor: black;
        --BtnSimpleBorder: 1px solid transparent;
        --BtnFontFamily: 'Work Sans Variable';
    
        //Input
        --InputPadding: 0 8px;
        --InputHeight: 34px;
        --InputBorder: 1px solid #eaeaea;
        --InputBorderRadius: 6px;
        --InputPlaceHolderColor: 6px;
        --InputActiveColor: 6px;
        --InputFocusColor: 6px;
        --InputDisabledColor: 6px;
        --InputFontFamily: 'Work Sans Variable';
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

