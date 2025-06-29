import React from 'react';
import { Button } from 'lib/components';
import { useTheme } from 'lib/context';
import { HiOutlineSun, HiOutlineMoon } from 'react-icons/hi2';

const ThemeToggle = () => {
    const { colorScheme, setColorScheme } = useTheme();

    const toggleTheme = () => {
        setColorScheme(colorScheme === 'dark' ? 'light' : 'dark');
    };

    return (
        <Button
            intent="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label={`Switch to ${colorScheme === 'dark' ? 'light' : 'dark'} mode`}
        >
            {colorScheme === 'dark' ? (
                <HiOutlineSun className="h-5 w-5" />
            ) : (
                <HiOutlineMoon className="h-5 w-5" />
            )}
        </Button>
    );
};

export default ThemeToggle;