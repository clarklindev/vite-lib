import React, { useState } from 'react';
import { Button } from 'lib/components';
import ThemeToggle from './ThemeToggle';

// Import all example components
import AccordionExample from './AccordionExample';
import AvatarExample from './AvatarExample';
import BadgeExample from './BadgeExample';
import ButtonExample from './ButtonExample';
import CalendarExample from './CalendarExample';
import CardExample from './CardExample';
import CheckboxExample from './CheckboxExample';

const examples = [
    { 
        name: 'Accordion', 
        component: AccordionExample,
        description: 'Collapsible content sections with smooth animations'
    },
    { 
        name: 'Avatar', 
        component: AvatarExample,
        description: 'Profile pictures with fallback handling and size variations'
    },
    { 
        name: 'Badge', 
        component: BadgeExample,
        description: 'Status indicators, labels, and notification badges'
    },
    { 
        name: 'Button', 
        component: ButtonExample,
        description: 'Interactive buttons with various styles and states'
    },
    { 
        name: 'Calendar', 
        component: CalendarExample,
        description: 'Date picker with customizable week start options'
    },
    { 
        name: 'Card', 
        component: CardExample,
        description: 'Flexible content containers with title and content sections'
    },
    { 
        name: 'Checkbox', 
        component: CheckboxExample,
        description: 'Interactive checkboxes with various states and sizes'
    },
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
                        <div className="flex items-center gap-2">
                            <ThemeToggle />
                            <Button 
                                intent="outlined" 
                                onClick={() => setSelectedExample(null)}
                            >
                                ← Back to Examples
                            </Button>
                        </div>
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
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                            @mankindui/core
                        </h1>
                        <ThemeToggle />
                    </div>
                    <p className="text-lg text-gray-600 dark:text-gray-400 mb-2">
                        Component Library Examples
                    </p>
                    <p className="text-gray-500 dark:text-gray-500">
                        Explore interactive examples of all components in the library
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {examples.map((example) => (
                        <div
                            key={example.name}
                            className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-all duration-200 cursor-pointer group"
                            onClick={() => setSelectedExample(example.name)}
                        >
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                {example.name}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                                {example.description}
                            </p>
                            <Button intent="primary" fullWidth>
                                View Examples →
                            </Button>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-8">
                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                            Getting Started
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
                            Click on any component above to see detailed examples, usage patterns, and interactive demos.
                            Each example includes code snippets and best practices for implementing the components in your projects.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Button intent="primary" size="lg">
                                📚 Documentation
                            </Button>
                            <Button intent="outlined" size="lg">
                                🔗 GitHub Repository
                            </Button>
                            <Button intent="ghost" size="lg">
                                📦 NPM Package
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="mt-8 text-center">
                    <p className="text-sm text-gray-500 dark:text-gray-500">
                        Built with React, TypeScript, and Tailwind CSS
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ExampleIndex;