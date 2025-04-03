import { useState, useEffect, useRef } from 'react';
import { Popover, Calendar } from 'lib/components';
import { CalendarIcon } from 'lib/icons';

const Datepicker = () => {
    const [date, setDate] = useState<Date | null>(null);
    const [year, setYear] = useState('');
    const [month, setMonth] = useState('');
    const [day, setDay] = useState('');

    const monthRef = useRef<HTMLInputElement>(null);
    const dayRef = useRef<HTMLInputElement>(null);
    const yearRef = useRef<HTMLInputElement>(null);

    useEffect(() => {}, [date]);

    const handleYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/\D/g, '');
        if (value.length <= 4) {
            setYear(value);
            if (value.length === 4) monthRef.current?.focus();
        }
    };

    const handleMonthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/\D/g, '');
        if (value.length <= 2 && Number(value) <= 12) {
            setMonth(value);
            if (value.length === 2) dayRef.current?.focus();
        }
    };

    const handleDayChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/\D/g, '');
        if (value.length <= 2 && Number(value) <= 31) {
            setDay(value);
        }
    };

    const handleBackspace = (e: React.KeyboardEvent<HTMLInputElement>, field: string) => {
        if (e.key === 'Backspace' && e.currentTarget.value === '') {
            if (field === 'day') monthRef.current?.focus();
            if (field === 'month') yearRef.current?.focus();
        }
    };

    const handleDateSelect = (selectedDate: Date) => {
        console.log('selectedDate: ', selectedDate);
        setDate(selectedDate);
        setYear(String(selectedDate.getFullYear()));
        setMonth(String(selectedDate.getMonth() + 1).padStart(2, '0'));
        setDay(String(selectedDate.getDate()).padStart(2, '0'));
    };

    return (
        <Popover>
            <div className="flex items-center gap-2 w-fit">
                <div className="flex gap-1">
                    <input
                        ref={yearRef}
                        type="text"
                        value={year}
                        onChange={handleYearChange}
                        onKeyDown={(e) => handleBackspace(e, 'year')}
                        placeholder="YYYY"
                        maxLength={4}
                        className="w-14 text-center border p-1"
                    />
                    <span>/</span>
                    <input
                        ref={monthRef}
                        type="text"
                        value={month}
                        onChange={handleMonthChange}
                        onKeyDown={(e) => handleBackspace(e, 'month')}
                        placeholder="MM"
                        maxLength={2}
                        className="w-10 text-center border p-1"
                    />
                    <span>/</span>
                    <input
                        ref={dayRef}
                        type="text"
                        value={day}
                        onChange={handleDayChange}
                        onKeyDown={(e) => handleBackspace(e, 'day')}
                        placeholder="DD"
                        maxLength={2}
                        className="w-10 text-center border p-1"
                    />
                </div>
                <Popover.Trigger>
                    <button type="button" className="p-2 border rounded-md">
                        <CalendarIcon className="w-5 h-5" />
                    </button>
                </Popover.Trigger>
            </div>
            <Popover.Content>
                <Calendar onSelect={handleDateSelect} />
            </Popover.Content>
        </Popover>
    );
};

Datepicker.displayName = 'Datepicker';
export { Datepicker };
