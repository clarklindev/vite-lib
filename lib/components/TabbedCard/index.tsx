import React from 'react';
import { Card, Tabs, CodeBlock } from 'lib/components';

const TabbedCard = ({ componentName, children }: { componentName: string; children: React.ReactNode }) => {
    return (
        <Tabs>
            <Card className="mt-2">
                <Card.Title>
                    <div className="flex justify-between">
                        {componentName}
                        <Tabs.TriggerGroup>
                            <Tabs.Trigger data-tab="0">PREVIEW</Tabs.Trigger>
                            <Tabs.Trigger data-tab="1">CODE</Tabs.Trigger>
                        </Tabs.TriggerGroup>
                    </div>
                </Card.Title>
                <Card.Content>
                    <Tabs.ContentGroup>{children}</Tabs.ContentGroup>
                </Card.Content>
            </Card>
        </Tabs>
    );
};

const Preview = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    return (
        <Tabs.Content data-tab="0">
            <div className={[`${className} prose w-full break-words`].join(' ')}>{children}</div>
        </Tabs.Content>
    );
};

const Code = ({ children, darkIcon = 'white', lightIcon = 'white' }: { children: React.ReactNode; darkIcon?: string; lightIcon?: string }) => {
    return (
        <Tabs.Content data-tab="1">
            <CodeBlock darkIcon={darkIcon} lightIcon={lightIcon}>
                <div className="px-2 py-2 prose w-full break-words">{children}</div>
            </CodeBlock>
        </Tabs.Content>
    );
};

Preview.displayName = 'TabbedCard.Preview';
TabbedCard.Preview = Preview;
Code.displayName = 'TabbedCard.Code';
TabbedCard.Code = Code;

export { TabbedCard };
