import React, { useEffect } from 'react';

import { useState, createContext, useContext } from 'react';

//NOTE: TO FIX... should just be one theme type
import { lightTheme } from 'lib/themes/LightTheme';
import { darkTheme } from 'lib/themes/DarkTheme';

//colorScheme - dark, light
//start off with whats the saved colorScheme in localstorage
//if there is none, use "system" (since technically thats the users preference)

//setting colorScheme

//1.
//setColorScheme() function gets called with prop colorScheme: dark/light

//2.
// - which calls setInternalColorScheme() const [colorScheme, setInternalColorScheme] = useState
// - stores color scheme to local storage: window.localStorage.setItem('colorScheme', colorScheme); //stores  'dark', 'light'

//3.
//since colorScheme updates, useEffect() listening for colorScheme changes gets called
//which calls checkIsDark(colorScheme) narrows the options down to 'true' or 'false'
//- if true, toggleColorScheme(COLORSCHEME.dark)
//- if false, toggleColorScheme(COLORSCHEME.light)

//4. create a data-color-scheme attribute on <html> element
//- html.dataset.colorScheme = colorScheme; //sets an attribute data-color-scheme on the html element (sets your preferred color scheme)
//- document.documentElement always refers to the root element of an HTML document, which is the <html> element. The document object represents the entire HTML document, and document.documentElement provides direct access to the root of this document, which is the <html> element.

//5.
//then it sets the theme as darkTheme or lightTheme
//- setInternalTheme(checkIsDark(colorScheme) ? darkTheme : lightTheme);

//6.
//gives access to const {theme} = useTheme() hook

enum COLORSCHEME {
    dark = 'dark',
    light = 'light',
}

const ThemeContext = createContext<{
    colorScheme: keyof typeof COLORSCHEME | null; //dark/light
    setColorScheme: (mode: keyof typeof COLORSCHEME) => void;
    checkIsDark: (colorScheme: keyof typeof COLORSCHEME) => boolean;
    theme: typeof darkTheme | typeof lightTheme | undefined;
}>({
    colorScheme: null,
    setColorScheme: (_) => {},
    checkIsDark: (_) => false,
    theme: undefined
});

export const useTheme = () => {
    return useContext(ThemeContext);
};

const checkIsDark = (colorScheme: keyof typeof COLORSCHEME): boolean => {
    let isDark;
    //stores a boolean - true is darkmode - false is lightmode
    switch (colorScheme) {
        case COLORSCHEME.dark:
            isDark = true;
            break;
        case COLORSCHEME.light:
            isDark = false;
            break;
        default:
            const error = new Error("Error: you need to set a valid option: 'dark', 'light'");
            throw error;
    }
    return isDark;
};

//stores in localstorage
const toggleColorScheme = (colorScheme: keyof typeof COLORSCHEME) => {
    const html = document.querySelector('html');
    if (html) {
        html.dataset.colorScheme = colorScheme; //sets an attribute data-color-scheme on the html element
        html.style.colorScheme = colorScheme;
    }
};

//NOTE: Todo: if no theme is in localstorage, default should be system. the icon on colorScheme should default to system.
export const ThemeContextProvider = ({ children }: { children: React.ReactNode }) => {
    const defaultColorScheme = window.matchMedia(`(prefers-color-scheme: dark`).matches; //prefers-color-scheme relies on color-scheme being set parent

    const [colorScheme, setInternalColorScheme] = useState((window.localStorage.getItem('colorScheme') as keyof typeof COLORSCHEME) || defaultColorScheme); //dark, light

    const [theme, setInternalTheme] = useState<typeof lightTheme | typeof darkTheme>();

    //called via dropdown-menu colorScheme
    const setColorScheme = (colorScheme: keyof typeof COLORSCHEME) => {
        setInternalColorScheme(colorScheme);
        //also store in localstorage
        window.localStorage.setItem('colorScheme', colorScheme); //stores 'dark', 'light'
    };

    useEffect(() => {
        //sets <html color-scheme=""></html> as 'dark' or 'light'
        checkIsDark(colorScheme) ? toggleColorScheme(COLORSCHEME.dark) : toggleColorScheme(COLORSCHEME.light);

        //theme - sets theme as darkTheme or lightTheme
        setInternalTheme(checkIsDark(colorScheme) ? darkTheme : lightTheme);
    }, [colorScheme]);

    return <ThemeContext.Provider value={{ theme, checkIsDark, colorScheme, setColorScheme }}>{children}</ThemeContext.Provider>;
};
