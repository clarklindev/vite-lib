import type { StorybookConfig } from '@storybook/react-vite';
import path from 'path';

const config: StorybookConfig = {
    stories: ['../lib/**/*.stories.@(js|jsx|mjs|ts|tsx)', '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    addons: [
        '@storybook/addon-onboarding',
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions'
    ],
    framework: {
        name: '@storybook/react-vite',
        options: {}
    },
    viteFinal: async (config) => {
        // Add alias for lib directory
        config.resolve = config.resolve || {};
        config.resolve.alias = {
            ...config.resolve.alias,
            lib: path.resolve(__dirname, '../lib')
        };

        return config;
    },
    typescript: {
        check: false,
        reactDocgen: 'react-docgen-typescript',
        reactDocgenTypescriptOptions: {
            shouldExtractLiteralValuesFromEnum: true,
            propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true)
        }
    }
};

export default config;