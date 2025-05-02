import { createContext, useContext, useReducer, useEffect } from 'react';

const actionTypes = {
    COLORSCHEME: 'color-scheme' //context
};

const getInitialColorScheme = () => {
    const savedScheme = localStorage.getItem('colorScheme');
    return savedScheme || window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

const initialState = {
    colorScheme: getInitialColorScheme()
};

const exposedFunction = {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setColorScheme: (_: string) => {}
};

const ThemeContext = createContext({
    ...initialState,
    ...exposedFunction
});

// Helper function to update HTML element
const updateHTMLColorScheme = (colorScheme: string) => {
    const html = document.documentElement; // gets the <html> element
    // Update class for Tailwind dark mode
    if (colorScheme === 'dark') {
        html.classList.add('dark');
    } else {
        html.classList.remove('dark');
        html.removeAttribute('class');
    }
};

export function ThemeContextProvider({ children }) {
    const reducer = (state, action) => {
        switch (action.type) {
            case actionTypes.COLORSCHEME:
                return {
                    ...state,
                    colorScheme: action.payload.colorScheme
                };
            default:
                return state;
        }
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    // Update HTML color scheme whenever state.colorScheme changes
    useEffect(() => {
        updateHTMLColorScheme(state.colorScheme);
    }, [state.colorScheme]);

    const setColorScheme = (mode: string) => {
        if (state.colorScheme !== mode) {
            localStorage.setItem('colorScheme', mode);

            dispatch({
                type: actionTypes.COLORSCHEME,
                payload: {
                    colorScheme: mode
                }
            });
        }
    };

    const context = {
        ...state,
        setColorScheme
    };

    return (
        //pass the context with updated state
        <ThemeContext.Provider value={context}>{children}</ThemeContext.Provider>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => {
    const context = useContext(ThemeContext); //pass the shell context
    if (!context) {
        throw new Error('useTheme must be used within a ThemeContextProvider');
    }
    return context;
};
