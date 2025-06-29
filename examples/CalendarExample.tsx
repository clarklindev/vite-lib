import React, { useState } from 'react';
import { Calendar } from 'lib/components';

const CalendarExample = () => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [selectedDateMonday, setSelectedDateMonday] = useState<Date | null>(null);

    const handleDateSelect = (date: Date) => {
        setSelectedDate(date);
        console.log('Selected date:', date);
    };

    const handleDateSelectMonday = (date: Date) => {
        setSelectedDateMonday(date);
        console.log('Selected date (Monday start):', date);
    };

    return (
        <div className="max-w-4xl mx-auto p-6 space-y-8">
            <div className="text-center">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Calendar Component</h1>
                <p className="text-gray-600 dark:text-gray-400">Interactive date picker with customizable week start</p>
            </div>

            {/* Basic Calendar */}
            <section className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Sunday Start (Default)</h2>
                <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                        <Calendar onSelect={handleDateSelect} />
                        <div className="flex-1 space-y-2">
                            <h3 className="font-medium text-gray-900 dark:text-white">Selected Date:</h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                {selectedDate ? selectedDate.toLocaleDateString('en-US', {
                                    weekday: 'long',
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                }) : 'No date selected'}
                            </p>
                            <div className="mt-4 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Click on any date to select it. The calendar starts the week on Sunday by default.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Monday Start Calendar */}
            <section className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Monday Start</h2>
                <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                        <Calendar startDayOfWeek={1} onSelect={handleDateSelectMonday} />
                        <div className="flex-1 space-y-2">
                            <h3 className="font-medium text-gray-900 dark:text-white">Selected Date:</h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                {selectedDateMonday ? selectedDateMonday.toLocaleDateString('en-US', {
                                    weekday: 'long',
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                }) : 'No date selected'}
                            </p>
                            <div className="mt-4 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    This calendar starts the week on Monday. Notice how the days are arranged differently.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Features</h2>
                <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-3">
                            <h3 className="font-medium text-gray-900 dark:text-white">Navigation</h3>
                            <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                                <li>• Click arrow buttons to navigate months</li>
                                <li>• Previous/next month days are shown in gray</li>
                                <li>• Current month and year displayed in header</li>
                            </ul>
                        </div>
                        
                        <div className="space-y-3">
                            <h3 className="font-medium text-gray-900 dark:text-white">Customization</h3>
                            <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                                <li>• Choose Sunday or Monday as week start</li>
                                <li>• Responsive design for mobile and desktop</li>
                                <li>• Dark mode support</li>
                                <li>• Hover effects on selectable dates</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Usage Examples */}
            <section className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Usage Examples</h2>
                <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <h3 className="font-medium text-gray-900 dark:text-white">Basic Usage</h3>
                            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                                <code className="text-sm text-gray-800 dark:text-gray-200">
                                    {`<Calendar onSelect={handleDateSelect} />`}
                                </code>
                            </div>
                        </div>
                        
                        <div className="space-y-2">
                            <h3 className="font-medium text-gray-900 dark:text-white">Monday Start</h3>
                            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                                <code className="text-sm text-gray-800 dark:text-gray-200">
                                    {`<Calendar startDayOfWeek={1} onSelect={handleDateSelect} />`}
                                </code>
                            </div>
                        </div>
                        
                        <div className="space-y-2">
                            <h3 className="font-medium text-gray-900 dark:text-white">Handle Selection</h3>
                            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                                <code className="text-sm text-gray-800 dark:text-gray-200">
                                    {`const handleDateSelect = (date: Date) => {
  console.log('Selected:', date);
  setSelectedDate(date);
};`}
                                </code>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CalendarExample;