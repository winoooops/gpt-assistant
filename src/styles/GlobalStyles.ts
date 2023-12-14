import {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    /* Green */
    --color-green-0: #f0fff4;
    --color-green-50: #dcfce7; 
    --color-green-100: #bbf7d0;
    --color-green-200: #86efac;
    --color-green-300: #4ade80;
    --color-green-400: #22c55e;
    --color-green-500: #16a34a;
    --color-green-600: #15803d;
    --color-green-700: #166534;
    --color-green-800: #14532d;
    --color-green-900: #14462b;
    --color-green-600-translucent: #15803d66;
    
    /* Grey */
    --color-grey-0: #fff;
    --color-grey-50: #f9fafb;
    --color-grey-100: #f3f4f6;
    --color-grey-200: #e5e7eb;
    --color-grey-300: #d1d5db;
    --color-grey-400: #9ca3af;
    --color-grey-500: #6b7280;
    --color-grey-600: #4b5563;
    --color-grey-700: #374151;
    --color-grey-800: #1f2937;
    --color-grey-900: #111827;
    --color-grey-500-translucent: #6b7c804d;

    /* Button Styles */
    --button-background-color: var(--primary-color); /* Background color for buttons */
    --button-text-color: #FFFFFF; /* Text color for buttons */
    --button-hover-color: #14533D; /* Background color for buttons on hover */ 
    --button-size-xs: 1.2rem; /* Font size for extra small buttons */
    --button-size-sm: 1.8rem; /* Font size for small buttons */
    --button-size-md: 2rem; /* Font size for medium buttons */
    --button-size-lg: 3rem; /* Font size for large buttons */
    
    /* svg */
    --svg-size-xs: 0.8rem; /* Font size for extra small buttons */
    --svg-size-sm: 1.2rem; /* Font size for small buttons */
    --svg-size-md: 1.4rem; /* Font size for medium buttons */
    --svg-size-lg: 2rem; /* Font size for large buttons */
    
    / * Border Radius */
    --border-radius-xs: 3px;
    --border-radius-sm: 5px;
    --border-radius-md: 7px;
    --border-radius-lg: 9px;
    --border-radius-rd: 50%;
  }
`;