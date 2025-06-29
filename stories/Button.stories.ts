import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button } from '../lib/components/Button';

const meta = {
    title: 'Components/Button',
    component: Button,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    argTypes: {
        intent: {
            control: 'select',
            options: ['default', 'primary', 'secondary', 'contained', 'outlined', 'plain', 'text', 'icon']
        },
        padding: {
            control: 'select',
            options: ['default', 'none', 'S', 'M', 'L', 'XL']
        },
        borderRadius: {
            control: 'select',
            options: ['default', 'none', 'sm', 'md', 'lg', 'xl']
        },
        fontsize: {
            control: 'select',
            options: ['default', 'small', 'medium']
        }
    },
    args: { onClick: fn() }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        intent: 'primary',
        children: 'Button'
    }
};

export const Secondary: Story = {
    args: {
        intent: 'secondary',
        children: 'Button'
    }
};

export const Contained: Story = {
    args: {
        intent: 'contained',
        children: 'Button'
    }
};

export const Outlined: Story = {
    args: {
        intent: 'outlined',
        children: 'Button'
    }
};

export const Large: Story = {
    args: {
        intent: 'primary',
        padding: 'XL',
        children: 'Button'
    }
};

export const Small: Story = {
    args: {
        intent: 'primary',
        padding: 'S',
        fontsize: 'small',
        children: 'Button'
    }
};