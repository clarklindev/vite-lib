import React from 'react';
import { Accordion } from 'lib/components';

const AccordionExample = () => {
    return (
        <div className="max-w-2xl mx-auto p-6 space-y-8">
            <div className="text-center">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Accordion Component</h1>
                <p className="text-gray-600 dark:text-gray-400">Collapsible content sections with smooth animations</p>
            </div>

            {/* Basic Accordion */}
            <section className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Basic Accordion</h2>
                <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
                    <Accordion>
                        <Accordion.Section>
                            <Accordion.SectionHeader render={(indexes) => (
                                <Accordion.SectionHeaderTitle index={0}>
                                    <span>What is React?</span>
                                    <span className="text-2xl">{indexes.includes(0) ? '−' : '+'}</span>
                                </Accordion.SectionHeaderTitle>
                            )} />
                            <Accordion.SectionPanel index={0}>
                                <Accordion.SectionPanelContent>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        React is a JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called "components".
                                    </p>
                                </Accordion.SectionPanelContent>
                            </Accordion.SectionPanel>
                        </Accordion.Section>

                        <Accordion.Section>
                            <Accordion.SectionHeader render={(indexes) => (
                                <Accordion.SectionHeaderTitle index={1}>
                                    <span>How does state management work?</span>
                                    <span className="text-2xl">{indexes.includes(1) ? '−' : '+'}</span>
                                </Accordion.SectionHeaderTitle>
                            )} />
                            <Accordion.SectionPanel index={1}>
                                <Accordion.SectionPanelContent>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        State management in React involves managing data that changes over time. You can use useState for local state, useContext for shared state, or external libraries like Redux for complex applications.
                                    </p>
                                </Accordion.SectionPanelContent>
                            </Accordion.SectionPanel>
                        </Accordion.Section>

                        <Accordion.Section>
                            <Accordion.SectionHeader render={(indexes) => (
                                <Accordion.SectionHeaderTitle index={2}>
                                    <span>What are React Hooks?</span>
                                    <span className="text-2xl">{indexes.includes(2) ? '−' : '+'}</span>
                                </Accordion.SectionHeaderTitle>
                            )} />
                            <Accordion.SectionPanel index={2}>
                                <Accordion.SectionPanelContent>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        Hooks are functions that let you "hook into" React state and lifecycle features from function components. Common hooks include useState, useEffect, useContext, and many others.
                                    </p>
                                </Accordion.SectionPanelContent>
                            </Accordion.SectionPanel>
                        </Accordion.Section>
                    </Accordion>
                </div>
            </section>

            {/* Single Open Accordion */}
            <section className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Single Open Mode</h2>
                <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
                    <Accordion multiOpen={false}>
                        <Accordion.Section>
                            <Accordion.SectionHeader render={(indexes) => (
                                <Accordion.SectionHeaderTitle index={0}>
                                    <span>Frontend Development</span>
                                    <span className="text-2xl">{indexes.includes(0) ? '−' : '+'}</span>
                                </Accordion.SectionHeaderTitle>
                            )} />
                            <Accordion.SectionPanel index={0}>
                                <Accordion.SectionPanelContent>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        Frontend development involves creating the user interface and user experience of web applications using HTML, CSS, and JavaScript.
                                    </p>
                                </Accordion.SectionPanelContent>
                            </Accordion.SectionPanel>
                        </Accordion.Section>

                        <Accordion.Section>
                            <Accordion.SectionHeader render={(indexes) => (
                                <Accordion.SectionHeaderTitle index={1}>
                                    <span>Backend Development</span>
                                    <span className="text-2xl">{indexes.includes(1) ? '−' : '+'}</span>
                                </Accordion.SectionHeaderTitle>
                            )} />
                            <Accordion.SectionPanel index={1}>
                                <Accordion.SectionPanelContent>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        Backend development focuses on server-side logic, databases, APIs, and the infrastructure that powers web applications.
                                    </p>
                                </Accordion.SectionPanelContent>
                            </Accordion.SectionPanel>
                        </Accordion.Section>

                        <Accordion.Section>
                            <Accordion.SectionHeader render={(indexes) => (
                                <Accordion.SectionHeaderTitle index={2}>
                                    <span>Full Stack Development</span>
                                    <span className="text-2xl">{indexes.includes(2) ? '−' : '+'}</span>
                                </Accordion.SectionHeaderTitle>
                            )} />
                            <Accordion.SectionPanel index={2}>
                                <Accordion.SectionPanelContent>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        Full stack development combines both frontend and backend development skills to create complete web applications.
                                    </p>
                                </Accordion.SectionPanelContent>
                            </Accordion.SectionPanel>
                        </Accordion.Section>
                    </Accordion>
                </div>
            </section>
        </div>
    );
};

export default AccordionExample;