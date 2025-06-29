import React, { useState } from 'react';
import { Button } from 'lib/components';

// Import all example components
import AccordionExample from './AccordionExample';
import AvatarExample from './AvatarExample';
import BadgeExample from './BadgeExample';
import ButtonExample from './ButtonExample';
import CalendarExample from './CalendarExample';
import CardExample from './CardExample';
import CheckboxExample from './CheckboxExample';

const examples = [
    { name: 'Accordion', component: AccordionExample },
    { name: 'Avatar', component: AvatarExample },
    { name: 'Badge', component: BadgeExample },
    { name: 'Button', component: ButtonExample },
    { name: 'Calendar', component: CalendarExample },
    { name: 'Card', component: CardExample },
    { name: 'Checkbox', component: CheckboxExample },
];

const ExampleIndex = () => {
    const [selectedExample, setSelectedExample] = useState<string | null>(null);

    const SelectedComponent = selectedExample 
        ? examples.find(ex => ex.name === selectedExample)?.component 
        : null;

    if (SelectedComponent) {
        return (
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
                <div className="sticky top-0 z-10 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-4">
                    <div className="max-w-6xl mx-auto flex items-center justify-between">
                        <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
                            {selectedExample} Component Example
                        </h1>
                        <Button 
                            intent="outlined" 
                            onClick={() => setSelectedExample(null)}
                        >
                            ← Back to Examples
                        </Button>
                    </div>
                </div>
                <SelectedComponent />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Component Examples
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400">
                        Explore interactive examples of all components in the library
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {examples.map((example) => (
                        <div
                            key={example.name}
                            className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-shadow cursor-pointer"
                            onClick={() => setSelectedExample(example.name)}
                        >
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                {example.name}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-4">
                                Interactive examples and usage patterns for the {example.name} component.
                            </p>
                            <Button intent="primary" fullWidth>
                                View Examples
                            </Button>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-8">
                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                            Getting Started
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-6">
                            Click on any component above to see detailed examples, usage patterns, and interactive demos.
                            Each example includes code snippets and best practices.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Button intent="primary" size="lg">
                                View Documentation
                            </Button>
                            <Button intent="outlined" size="lg">
                                GitHub Repository
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExampleIndex;