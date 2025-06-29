import React from 'react';
import { Accordion } from 'lib/components';

const AccordionExample = () => {
    return (
        <div className="max-w-2xl mx-auto p-6 space-y-6">
            <div className="text-center">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Accordion</h1>
                <p className="text-gray-600 dark:text-gray-400">Collapsible content sections</p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4">
                <Accordion>
                    <Accordion.Section>
                        <Accordion.SectionHeader render={(indexes) => (
                            <Accordion.SectionHeaderTitle index={0}>
                                <span>What is React?</span>
                                <span className="text-xl">{indexes.includes(0) ? '−' : '+'}</span>
                            </Accordion.SectionHeaderTitle>
                        )} />
                        <Accordion.SectionPanel index={0}>
                            <Accordion.SectionPanelContent>
                                <p className="text-gray-600 dark:text-gray-300">
                                    React is a JavaScript library for building user interfaces.
                                </p>
                            </Accordion.SectionPanelContent>
                        </Accordion.SectionPanel>
                    </Accordion.Section>

                    <Accordion.Section>
                        <Accordion.SectionHeader render={(indexes) => (
                            <Accordion.SectionHeaderTitle index={1}>
                                <span>How does state work?</span>
                                <span className="text-xl">{indexes.includes(1) ? '−' : '+'}</span>
                            </Accordion.SectionHeaderTitle>
                        )} />
                        <Accordion.SectionPanel index={1}>
                            <Accordion.SectionPanelContent>
                                <p className="text-gray-600 dark:text-gray-300">
                                    State management involves managing data that changes over time.
                                </p>
                            </Accordion.SectionPanelContent>
                        </Accordion.SectionPanel>
                    </Accordion.Section>
                </Accordion>
            </div>
        </div>
    );
};

export default AccordionExample;