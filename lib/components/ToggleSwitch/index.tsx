import React from 'react';

type ToggleSwitchProps = {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    savedData: boolean;
};

const ToggleSwitch = React.memo(({ onChange, savedData }: ToggleSwitchProps) => {
    return (
        <label
            data-component={ToggleSwitch.displayName}
            className={`
        relative 
        inline-block 
        w-[50px]
        h-[25px]
        bg-red-300
        rounded-full
        group
        flex
        items-center
        cursor-pointer
      `}
        >
            <div
                className={[
                    `
          absolute 
          block 
          w-[20px]
          h-[20px]
          bg-white 
          rounded-full 
          transition-transform 
          duration-200 
          transform 
          `,
                    savedData ? `translate-x-[28px]` : `translate-x-[2px]`
                ].join(' ')}
            ></div>
            <input className="hidden" type="checkbox" checked={savedData} onChange={onChange} />
        </label>
    );
});

ToggleSwitch.displayName = 'ToggleSwitch';
export { ToggleSwitch };
