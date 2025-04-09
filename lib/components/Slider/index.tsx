import React, { useRef, useEffect, useState } from 'react';
import { Orientation } from 'lib/types/Orientation';

type SliderProps = {
    onChange: (value: number, index: number) => void;
    orientation?: Orientation[keyof Orientation];
    length?: string;
    offset?: string;
    thickness?: number;
    value: number;
    min?: number;
    max?: number;
    step?: number;
    index?: number;
    thumbSize?: number;
    trackClickable?: boolean;
    hideTrack?: boolean;
    className?: string;

    //atleast one of below must be provided: "valueGradient" (precedence) OR "activeColor" and "trackColor"
    valueGradient?: string | undefined;
    activeColor?: string;
    trackColor?: string;
    style?: React.CSSProperties;
};

// ------------------------------------------------------------------------------------------------------------------------------------------------

const Slider = ({
    onChange,
    orientation = Orientation.HORIZONTAL,
    length,
    offset = '0px',
    thickness = 15,
    value = 0,
    min = 0,
    max = 100,
    step = 1,
    index = 0,
    trackClickable = true,
    hideTrack = false,
    valueGradient = undefined,
    activeColor = 'red',
    trackColor = '#FF000055',
    className = '',
    style = {},
    thumbSize = 30
}: SliderProps) => {
    const myRef: React.Ref<HTMLDivElement> = useRef(null);

    const [calcHeight, setCalcHeight] = useState<number>();

    useEffect(() => {
        if (myRef?.current) {
            setCalcHeight(myRef.current?.offsetHeight);
        }
    }, [myRef.current, orientation]);

    const onChangeHandler = (value: string, index: number) => {
        onChange(parseInt(value), index); //reads string from target, but passes number
    };

    return (
        <div
            ref={myRef}
            className={[className].join(' ')}
            style={{
                ...(orientation === Orientation.HORIZONTAL && {
                    width: length ? length : '100%',
                    marginLeft: offset,
                    ...style
                }),
                ...(orientation === Orientation.VERTICAL && {
                    height: length ? length : '100%',
                    marginTop: offset, //check if it should maybe be marginBottom
                    ...style
                })
            }}
        >
            <input
                type="range"
                className={[className].join(' ')}
                onChange={(event) => onChangeHandler(event.target.value, index)}
                value={value}
                min={min}
                max={max}
                step={step}
                style={{
                    ...(orientation === Orientation.HORIZONTAL && {
                        width: '100%'
                    }),
                    ...(orientation === Orientation.VERTICAL && {
                        width: `${calcHeight}px`, //width should now be height of parent container when vertical - use js to get height of container or use prop's length value
                        transformOrigin: `top left` /* Set the rotation origin to the top-left corner */,
                        transform: ` rotate(-90deg) translateX(-100%)` /* Rotate the scrollbar counterclockwise by 90 degrees */
                    }),
                    height: `${thickness}px`,
                    borderRadius: '10px',
                    outline: 'none',
                    pointerEvents: trackClickable ? 'auto' : 'none',

                    //removes the default input range styling - DO NOT REMOVE
                    appearance: 'none',
                    WebkitAppearance: 'none', //-webkit-appearance: none;
                    MozAppearance: 'none', //   -moz-appearance: none;

                    background: hideTrack ? 'transparent' : valueGradient || `linear-gradient(90deg, ${activeColor} 0%, ${activeColor} ${value}%, ${trackColor} ${value}%, ${trackColor} 100% )` //   //slider track - value highlight color AND background color - DO NOT REMOVE
                }}
            />
            {/* Custom styles for the thumbs */}
            <style>{`
                /* Webkit (Chrome, Safari, Edge) */
                input[type="range"]::-webkit-slider-thumb {
                -webkit-appearance: none;
                width: ${thumbSize}px;
                height: ${thumbSize}px;
                background: red;
                border-radius: 50%;
                cursor: pointer;
                }

                /* Firefox */
                input[type="range"]::-moz-range-thumb {
                -moz-appearance: none;
                width: ${thumbSize}px;
                height: ${thumbSize}px;
                background: red;
                border-radius: 50%;
                cursor: pointer;
                }
            `}</style>
        </div>
    );
};

Slider.displayName = 'Slider';
export { Slider };
