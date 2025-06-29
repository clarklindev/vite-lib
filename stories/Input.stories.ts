import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '../lib/components/Input';

const meta = {
    title: 'Components/Input',
    component: Input,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    argTypes: {
        variants: {
            control: 'object'
        }
    }
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: (args) => (
        <Input {...args}>
            <Input.InputElement placeholder="Enter text..." />
        </Input>
    )
};

export const Unstyled: Story = {
    render: (args) => (
        <Input {...args} variants={{ variant: 'unstyled' }}>
            <Input.InputElement placeholder="Unstyled input..." />
        </Input>
    )
};

export const WithValue: Story = {
    render: (args) => (
        <Input {...args}>
            <Input.InputElement value="Sample text" placeholder="Enter text..." />
        </Input>
    )
};

export const ReadOnly: Story = {
    render: (args) => (
        <Input {...args}>
            <Input.InputElement value="Read only text" readOnly placeholder="Enter text..." />
        </Input>
    )
};