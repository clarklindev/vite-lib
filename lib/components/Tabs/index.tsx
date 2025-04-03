import React, { useRef, useEffect } from 'react';

import { Button } from 'lib/components/Button';
import { TabsContextProvider, useTabs } from 'lib/context/TabContext';

const Tabs = ({ children }: { children: React.ReactNode }) => {
    return (
        <TabsContextProvider>
            <div data-component="Tabs">{children}</div>
        </TabsContextProvider>
    );
};

const TriggerGroup = ({ children, className }: { className?: string; children?: React.ReactNode }) => {
    const { setSelectedTabId } = useTabs();

    useEffect(() => {
        setSelectedTabId('0');
    }, []);

    return (
        <div data-component={TriggerGroup.displayName} className={`flex flex-row gap-2 py-1 ${className}`}>
            {children}
        </div>
    );
};

type TriggerProps = {
    children?: string;
};

const Trigger = ({ children, ...rest }: TriggerProps) => {
    const { selectedTabId, setSelectedTabId } = useTabs();

    const triggerRef = useRef<HTMLButtonElement | null>(null);
    const dataTrigger = useRef<string>(null);

    useEffect(() => {
        // Accessing the data-trigger attribute using ref
        const id = triggerRef.current?.getAttribute('data-tab');
        if (id) {
            dataTrigger.current = id;
        }
    }, [triggerRef]);

    return (
        <div data-component={Trigger.displayName}>
            <Button
                intent="plain"
                padding="none"
                borderRadius="none"
                className={selectedTabId && selectedTabId === dataTrigger.current ? 'border-b-2 border-red-500 rounded-b-none' : 'border-b-2 border-transparent'}
                ref={triggerRef}
                onClick={(e) => {
                    const clickedDataTrigger = e.currentTarget.dataset.tab;
                    if (clickedDataTrigger) {
                        setSelectedTabId(clickedDataTrigger);
                    }
                }}
                {...rest}
            >
                {children}
            </Button>
        </div>
    );
};

const ContentGroup = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    return (
        <div data-component={ContentGroup.displayName} className={['my-5', `${className}`].join(' ')}>
            {children}
        </div>
    );
};

const Content = ({ children, ...rest }: { children?: React.ReactNode }) => {
    const { selectedTabId } = useTabs();

    const contentRef = useRef<HTMLDivElement | null>(null);
    const dataContent = useRef<string>(null);

    useEffect(() => {
        const id = contentRef.current?.getAttribute('data-tab');
        if (id) {
            dataContent.current = id;
        }
    }, [contentRef]);

    return (
        <div data-component={Content.displayName} className={[`${selectedTabId && selectedTabId === dataContent.current ? 'block' : 'hidden'}`].join(' ')} ref={contentRef} {...rest}>
            {children}
        </div>
    );
};

TriggerGroup.displayName = 'Tabs.TriggerGroup';
Tabs.TriggerGroup = TriggerGroup;

Trigger.displayName = 'Tabs.Trigger';
Tabs.Trigger = Trigger;

ContentGroup.displayName = 'Tabs.ContentGroup';
Tabs.ContentGroup = ContentGroup;

Content.displayName = 'Tabs.Content';
Tabs.Content = Content;

export { Tabs };
