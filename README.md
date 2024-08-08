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
        --GInputPadding: 0 8px;
        --GInputHeight: 34px;
        --GInputBorder: 1px solid #eaeaea;
        --GInputBorderRadius: 6px;
        --GInputPlaceHolderColor: 6px;
        --GInputActiveColor: 6px;
        --GInputFocusColor: 6px;
        --GInputDisabledColor: 6px;
        --GInputFontFamily: 'Work Sans Variable';
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

