import React from 'react';

type ToggleSwitchProps = {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    savedData: boolean;
};

const ToggleSwitch = React.memo(({ onChange, savedData }: ToggleSwitchProps) => {
    return (
        <label
            data-component={ToggleSwitch.displayName}
            className={[
        `relative 
        inline-block 
        w-[50px]
        h-[26px]`,
        savedData ? `bg-blue-500` : `bg-red-300`,
        `rounded-full
        group
        flex
        items-center
        cursor-pointer
      `].join(' ')}
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
          `translate-y-[3px]`,
                    savedData ? `translate-x-[27px]` : `translate-x-[3px]`
                ].join(' ')}
            ></div>
            <input className="hidden" type="checkbox" checked={savedData} onChange={onChange} />
        </label>
    );
});

ToggleSwitch.displayName = 'ToggleSwitch';
export { ToggleSwitch };
