import { extendTheme, theme as chakraTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

// Spreads default fonts then reassigns 'body' and 'heading' elements with custom fonts
const fonts = {
    ...chakraTheme.fonts,
    body: `Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,san-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
    heading: `Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,san-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`
};

// Creates custom breakpoints
const breakpoints = createBreakpoints({
    sm: "40em", 
    md: "52em",
    lg: "64em",
    xl: "62em"
});

// Theme overrides to be passed into the extendTheme() hook with default theme included using a spread operator
const overrides = {
    ...chakraTheme,
    fonts,
    breakpoints,
    fontWeights: {
        normal: 300,
        medium: 600,
        bold: 700
    },
    fontSizes: {
        xs: '12px',
        sm: '14px',
        md: '16px',
        lg: '18px',
        xl: '20px',
        '2xl': '24px',
        '3xl': '28px',
        '4xl': '36px',
        '5xl': '48px',
        '6xl': '64px'
    }
}

// Creates a custom based on the overrides you pass into the extendTheme function
const customTheme = extendTheme(overrides);

export default customTheme;
