import type { Meta, StoryObj } from '@storybook/react';
import { Card } from '../lib/components/Card';

const meta = {
    title: 'Components/Card',
    component: Card,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs']
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: (args) => (
        <Card {...args}>
            <Card.Title>Card Title</Card.Title>
            <Card.Content>
                <p>This is the card content. You can put any content here including text, images, or other components.</p>
            </Card.Content>
        </Card>
    )
};

export const SimpleCard: Story = {
    render: (args) => (
        <Card {...args}>
            <Card.Content>
                <h3 className="text-lg font-semibold mb-2">Simple Card</h3>
                <p>A simple card without a title section.</p>
            </Card.Content>
        </Card>
    )
};

export const CustomContent: Story = {
    render: (args) => (
        <Card {...args}>
            <Card.Title>Product Card</Card.Title>
            <Card.Content>
                <div className="space-y-2">
                    <h4 className="font-medium">Product Name</h4>
                    <p className="text-gray-600">Product description goes here.</p>
                    <div className="flex justify-between items-center">
                        <span className="text-lg font-bold">$29.99</span>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded">Add to Cart</button>
                    </div>
                </div>
            </Card.Content>
        </Card>
    )
};