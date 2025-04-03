import { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from 'lib/icons';
import { Button, Icon } from 'lib/components';

// Type for Calendar Props
interface CalendarProps {
    startDayOfWeek?: 0 | 1; // 0 for Sunday start, 1 for Monday start
    onSelect?: (date: Date) => void; // Add this prop
}

// Get total days in a given month
const getDaysInMonth = (year: number, month: number): number => new Date(year, month + 1, 0).getDate();

// Get the index of the first day of the month (adjusted for week start)
const getFirstDayOfMonth = (year: number, month: number, startDayOfWeek: 0 | 1): number => {
    const firstDay = new Date(year, month, 1).getDay();
    return (firstDay - startDayOfWeek + 7) % 7; // Adjusts for Monday-start if needed
};

const Calendar = ({ startDayOfWeek = 0, onSelect }: CalendarProps) => {
    const [currentDate, setCurrentDate] = useState(new Date());

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    // Get total days in current month
    const daysInMonth = getDaysInMonth(year, month);

    // Get adjusted first day index
    const firstDayIndex = getFirstDayOfMonth(year, month, startDayOfWeek);

    // Previous month's days to fill empty slots at the start
    const prevMonthDays = getDaysInMonth(year, month - 1);
    const prevMonth = Array.from({ length: firstDayIndex }, (_, i) => prevMonthDays - firstDayIndex + i + 1);

    // Current month days
    const currentMonth = Array.from({ length: daysInMonth }, (_, i) => i + 1);

    // Next month's days (fill remaining slots to complete 6-row grid)
    const totalDays = 42; // Ensures a full 6-row grid (7x6 = 42)
    const nextMonth = Array.from({ length: totalDays - (prevMonth.length + currentMonth.length) }, (_, i) => i + 1);

    // Combine all days into a full calendar grid
    const allDays = [...prevMonth, ...currentMonth, ...nextMonth];

    // Handle month navigation
    const changeMonth = (step: number) => {
        setCurrentDate(new Date(year, month + step, 1));
    };

    // Dynamically adjust days of the week order
    const daysOfWeek = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
    if (startDayOfWeek === 1) {
        daysOfWeek.push(daysOfWeek.shift()!); // Move Sunday to the end for Monday start
    }

    return (
        <div className="p-2 bg-white dark:bg-black dark:bg-opacity-5 shadow-md rounded-lg max-w-[200px] sm:max-w-[240px]">
            {/* Month & Year Header with Navigation */}
            <div className="flex justify-between items-center mb-1">
                <Button intent="icon" onClick={() => changeMonth(-1)}>
                    <Icon size="S" className="text-black dark:text-white">
                        <ChevronLeftIcon />
                    </Icon>
                </Button>

                <h2 className="text-xs sm:text-sm font-semibold light:text-black dark:text-white">
                    {currentDate.toLocaleString('default', { month: 'short' })} {year}
                </h2>

                <Button intent="icon" onClick={() => changeMonth(1)}>
                    <Icon size="S" className="text-black dark:text-white">
                        <ChevronRightIcon />
                    </Icon>
                </Button>
            </div>

            {/* Days of the Week */}
            <div className="grid grid-cols-7 text-center text-[10px] sm:text-xs font-semibold text-gray-600 ">
                {daysOfWeek.map((day) => (
                    <div key={day} className="py-0.5">
                        {day}
                    </div>
                ))}
            </div>

            {/* Days Grid */}
            <div className="grid grid-cols-7 gap-0.5 mt-1">
                {allDays.map((day, index) => {
                    const isPrevMonth = index < firstDayIndex;
                    const isNextMonth = index >= firstDayIndex + daysInMonth;
                    const currentDay = new Date(year, month, day);

                    return (
                        <div
                            key={index}
                            className={`flex justify-center items-center h-6 w-6 sm:h-8 sm:w-8 rounded-md cursor-pointer transition text-[10px] sm:text-xs  hover:bg-blue-200 
                ${isPrevMonth || isNextMonth ? 'text-gray-400' : 'text-black dark:text-white'} `}
                            onClick={() => !isPrevMonth && !isNextMonth && onSelect?.(currentDay)} // Trigger onSelect on click
                        >
                            {day}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export { Calendar };
