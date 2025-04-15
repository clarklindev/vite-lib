import React from 'react';

import { Input, Button, Icon } from 'lib/components';
import { HiOutlineMinus as MinusIcon, HiOutlinePlus as PlusIcon } from 'react-icons/hi2';

type CounterProps = {
    savedData: number;
    onChange: (prop: number) => void;
};

const Counter = ({ savedData, onChange }: CounterProps) => {
    const decrement = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        event.stopPropagation();
        console.log('decrement');
        onChange(savedData - 1);
    };

    const increment = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        event.stopPropagation();
        console.log('increment');
        onChange(savedData + 1);
    };

    return (
        <div data-component={Counter.displayName} className="flex items-center gap-2.5">
            <Button className={['Button', 'left'].join(' ')} padding={'none'} onClick={decrement} intent="icon">
                <Icon size="L">
                    <MinusIcon />
                </Icon>
            </Button>
            <Input>
                <Input.InputElement className="text-center w-10" placeholder="" onChange={(event) => event.target.value} value={savedData.toString()} />
            </Input>
            <Button className={['Button', 'right', 'flex', 'items-center'].join(' ')} padding={'none'} onClick={increment} intent="icon">
                <Icon size="L">
                    <PlusIcon />
                </Icon>
            </Button>
        </div>
    );
};

Counter.displayName = 'Counter';
export { Counter };
