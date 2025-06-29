import React from 'react';
import { Button } from 'lib/components';
import { HiHeart, HiPlus } from 'react-icons/hi2';

const ButtonExample = () => {
    return (
        <div className="max-w-4xl mx-auto p-6 space-y-6">
            <div className="text-center">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Button</h1>
                <p className="text-gray-600 dark:text-gray-400">Interactive buttons with smooth animations</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
                <h3 className="font-medium text-gray-900 dark:text-white mb-4">Intent Variants</h3>
                <div className="flex flex-wrap gap-3">
                    <Button intent="primary">Primary</Button>
                    <Button intent="secondary">Secondary</Button>
                    <Button intent="success">Success</Button>
                    <Button intent="danger">Danger</Button>
                    <Button intent="warning">Warning</Button>
                    <Button intent="outlined">Outlined</Button>
                    <Button intent="ghost">Ghost</Button>
                    <Button intent="link">Link</Button>
                </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
                <h3 className="font-medium text-gray-900 dark:text-white mb-4">Sizes</h3>
                <div className="flex flex-wrap items-center gap-3">
                    <Button intent="primary" size="xs">XS</Button>
                    <Button intent="primary" size="sm">SM</Button>
                    <Button intent="primary" size="md">MD</Button>
                    <Button intent="primary" size="lg">LG</Button>
                    <Button intent="primary" size="xl">XL</Button>
                </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
                <h3 className="font-medium text-gray-900 dark:text-white mb-4">With Icons</h3>
                <div className="flex flex-wrap gap-3">
                    <Button intent="primary" size="icon">
                        <HiPlus className="h-4 w-4" />
                    </Button>
                    <Button intent="primary" className="gap-2">
                        <HiPlus className="h-4 w-4" />
                        Add Item
                    </Button>
                    <Button intent="outlined" className="gap-2">
                        <HiHeart className="h-4 w-4" />
                        Like
                    </Button>
                </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
                <h3 className="font-medium text-gray-900 dark:text-white mb-4">States</h3>
                <div className="space-y-3">
                    <Button intent="primary" fullWidth>Full Width</Button>
                    <Button intent="primary" disabled>Disabled</Button>
                </div>
            </div>
        </div>
    );
};

export default ButtonExample;