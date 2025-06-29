import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from '../lib/components/Avatar';

const meta = {
    title: 'Components/Avatar',
    component: Avatar,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: 'select',
            options: ['S', 'M', 'L']
        },
        border: {
            control: 'boolean'
        }
    }
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        imageUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
        size: 'M'
    }
};

export const Small: Story = {
    args: {
        imageUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
        size: 'S'
    }
};

export const Large: Story = {
    args: {
        imageUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
        size: 'L'
    }
};

export const WithBorder: Story = {
    args: {
        imageUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
        size: 'M',
        border: true
    }
};

export const BrokenImage: Story = {
    args: {
        imageUrl: 'https://broken-image-url.jpg',
        size: 'M'
    }
};