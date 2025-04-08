import React, { useState, useRef } from 'react';

const InputOtp = ({ length = 6, dashPositions = [] }: { length: number; dashPositions?: number[] }) => {
    const [otp, setOtp] = useState(Array(length).fill(''));
    const inputsRef = Array.from({ length }, () => useRef<HTMLInputElement>(null));

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        let value = e.target.value.replace(/[^A-Za-z0-9]/g, ''); // Allow only alphanumeric characters
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        if (value && index < length - 1) {
            inputsRef[index + 1].current?.focus();
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
        if (e.key === 'Backspace') {
            e.preventDefault(); // Prevent default behavior to ensure one-step handling

            setOtp((prevOtp) => {
                const newOtp = [...prevOtp];

                if (newOtp[index]) {
                    // If current input has a value, clear it
                    newOtp[index] = '';
                } else if (index > 0) {
                    // If empty, move focus back and clear previous input
                    newOtp[index - 1] = '';
                    inputsRef[index - 1].current?.focus();
                }

                return newOtp;
            });
        }
    };

    return (
        <div className="flex items-center gap-2">
            {otp.map((value, index) => (
                <React.Fragment key={index}>
                    <input
                        ref={inputsRef[index]}
                        value={value}
                        onChange={(e) => handleChange(e, index)}
                        onKeyDown={(e) => handleKeyDown(e, index)}
                        maxLength={1}
                        type="text"
                        className="w-12 h-12 text-center border-1 rounded-md focus:outline-none focus:ring-1 focus:ring-black dark:focus:ring-white"
                    />
                    {dashPositions.includes(index + 1) && <span className="mx-1 text-xl">-</span>}
                </React.Fragment>
            ))}
        </div>
    );
};

export { InputOtp };
