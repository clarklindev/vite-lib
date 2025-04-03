import { Tabs } from 'lib/components';

const TabsExample = () => {
    return (
        <>
            <Tabs>
                <Tabs.TriggerGroup>
                    <Tabs.Trigger data-tab="0">Tab1</Tabs.Trigger>
                    <Tabs.Trigger data-tab="1">Tab2</Tabs.Trigger>
                </Tabs.TriggerGroup>

                <Tabs.ContentGroup>
                    <Tabs.Content data-tab="0"></Tabs.Content>
                    <Tabs.Content data-tab="1"></Tabs.Content>
                </Tabs.ContentGroup>
            </Tabs>
        </>
    );
};

export default TabsExample;
