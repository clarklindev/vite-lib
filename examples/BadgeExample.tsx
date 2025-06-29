import React from 'react';
import { Badge } from 'lib/components';

const BadgeExample = () => {
    return (
        <div className="max-w-2xl mx-auto p-6 space-y-6">
            <div className="text-center">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Badge</h1>
                <p className="text-gray-600 dark:text-gray-400">Status indicators and labels</p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
                <h3 className="font-medium text-gray-900 dark:text-white mb-4">Basic Badges</h3>
                <div className="flex flex-wrap items-center gap-4">
                    <Badge intent="contained">Contained</Badge>
                    <Badge intent="outline">Outline</Badge>
                </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
                <h3 className="font-medium text-gray-900 dark:text-white mb-4">Status Examples</h3>
                <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <span className="text-gray-700 dark:text-gray-300">Order #12345</span>
                        <Badge intent="contained" className="bg-blue-100 text-blue-800">Processing</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <span className="text-gray-700 dark:text-gray-300">Order #12346</span>
                        <Badge intent="contained" className="bg-green-100 text-green-800">Delivered</Badge>
                    </div>
                </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
                <h3 className="font-medium text-gray-900 dark:text-white mb-4">Category Tags</h3>
                <div className="flex flex-wrap gap-2">
                    <Badge intent="outline" className="border-blue-300 text-blue-700">React</Badge>
                    <Badge intent="outline" className="border-green-300 text-green-700">JavaScript</Badge>
                    <Badge intent="outline" className="border-purple-300 text-purple-700">TypeScript</Badge>
                </div>
            </div>
        </div>
    );
};

export default BadgeExample;