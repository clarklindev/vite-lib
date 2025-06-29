import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from '../lib/components/Badge';

const meta = {
    title: 'Components/Badge',
    component: Badge,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    argTypes: {
        intent: {
            control: 'select',
            options: ['contained', 'outline']
        }
    }
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Outline: Story = {
    args: {
        intent: 'outline',
        children: 'Badge'
    }
};

export const Contained: Story = {
    args: {
        intent: 'contained',
        children: 'Badge'
    }
};

export const StatusBadges: Story = {
    render: () => (
        <div className="flex gap-2">
            <Badge intent="outline">New</Badge>
            <Badge intent="contained">Featured</Badge>
            <Badge intent="outline">Sale</Badge>
            <Badge intent="contained">Popular</Badge>
        </div>
    )
};