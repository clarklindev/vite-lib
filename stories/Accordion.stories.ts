import type { Meta, StoryObj } from '@storybook/react';
import { Accordion } from '../lib/components/Accordion';

const meta = {
    title: 'Components/Accordion',
    component: Accordion,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    argTypes: {
        multiOpen: {
            control: 'boolean'
        }
    }
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        multiOpen: true
    },
    render: (args) => (
        <div className="w-96">
            <Accordion {...args}>
                <Accordion.Section>
                    <Accordion.SectionHeader
                        render={(indexes) => (
                            <Accordion.SectionHeaderTitle index={0}>
                                <span>Section 1</span>
                                <span>{indexes.includes(0) ? '−' : '+'}</span>
                            </Accordion.SectionHeaderTitle>
                        )}
                    />
                    <Accordion.SectionPanel index={0}>
                        <Accordion.SectionPanelContent>
                            <p>This is the content for section 1. It can contain any HTML or React components.</p>
                        </Accordion.SectionPanelContent>
                    </Accordion.SectionPanel>
                </Accordion.Section>

                <Accordion.Section>
                    <Accordion.SectionHeader
                        render={(indexes) => (
                            <Accordion.SectionHeaderTitle index={1}>
                                <span>Section 2</span>
                                <span>{indexes.includes(1) ? '−' : '+'}</span>
                            </Accordion.SectionHeaderTitle>
                        )}
                    />
                    <Accordion.SectionPanel index={1}>
                        <Accordion.SectionPanelContent>
                            <p>This is the content for section 2. Each section can have different content.</p>
                        </Accordion.SectionPanelContent>
                    </Accordion.SectionPanel>
                </Accordion.Section>

                <Accordion.Section>
                    <Accordion.SectionHeader
                        render={(indexes) => (
                            <Accordion.SectionHeaderTitle index={2}>
                                <span>Section 3</span>
                                <span>{indexes.includes(2) ? '−' : '+'}</span>
                            </Accordion.SectionHeaderTitle>
                        )}
                    />
                    <Accordion.SectionPanel index={2}>
                        <Accordion.SectionPanelContent>
                            <p>This is the content for section 3. You can add lists, images, or any other content here.</p>
                            <ul className="list-disc list-inside mt-2">
                                <li>Item 1</li>
                                <li>Item 2</li>
                                <li>Item 3</li>
                            </ul>
                        </Accordion.SectionPanelContent>
                    </Accordion.SectionPanel>
                </Accordion.Section>
            </Accordion>
        </div>
    )
};

export const SingleOpen: Story = {
    args: {
        multiOpen: false
    },
    render: (args) => (
        <div className="w-96">
            <Accordion {...args}>
                <Accordion.Section>
                    <Accordion.SectionHeader
                        render={(indexes) => (
                            <Accordion.SectionHeaderTitle index={0}>
                                <span>FAQ 1: What is this component?</span>
                                <span>{indexes.includes(0) ? '−' : '+'}</span>
                            </Accordion.SectionHeaderTitle>
                        )}
                    />
                    <Accordion.SectionPanel index={0}>
                        <Accordion.SectionPanelContent>
                            <p>This is an accordion component that allows only one section to be open at a time.</p>
                        </Accordion.SectionPanelContent>
                    </Accordion.SectionPanel>
                </Accordion.Section>

                <Accordion.Section>
                    <Accordion.SectionHeader
                        render={(indexes) => (
                            <Accordion.SectionHeaderTitle index={1}>
                                <span>FAQ 2: How does it work?</span>
                                <span>{indexes.includes(1) ? '−' : '+'}</span>
                            </Accordion.SectionHeaderTitle>
                        )}
                    />
                    <Accordion.SectionPanel index={1}>
                        <Accordion.SectionPanelContent>
                            <p>When multiOpen is set to false, opening one section will automatically close others.</p>
                        </Accordion.SectionPanelContent>
                    </Accordion.SectionPanel>
                </Accordion.Section>
            </Accordion>
        </div>
    )
};