import React, { useState } from 'react';
import { Calendar } from 'lib/components';

const CalendarExample = () => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);

    const handleDateSelect = (date: Date) => {
        setSelectedDate(date);
    };

    return (
        <div className="max-w-2xl mx-auto p-6 space-y-6">
            <div className="text-center">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Calendar</h1>
                <p className="text-gray-600 dark:text-gray-400">Interactive date picker</p>
            </div>

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
                    </div>
                </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
                <h3 className="font-medium text-gray-900 dark:text-white mb-4">Monday Start</h3>
                <Calendar startDayOfWeek={1} onSelect={handleDateSelect} />
            </div>
        </div>
    );
};

export default CalendarExample;