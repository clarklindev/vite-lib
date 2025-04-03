import { useState, useRef } from 'react';
import { Slider } from 'lib/components';
import { Orientation } from 'lib/types/Orientation';

//valueGradient
// const startPercentage = sliderValue; // Adjust this value to set the start point
// const endPercentage = '80%'; // Adjust this value to set the start point
//middle
// start would be previous' end
// end would be next's start
//const valueGradient =  `linear-gradient(90deg, transparent 0%, transparent ${startPercentage}%, ${activeColor} ${sliderValue}%,  ${activeColor} ${endPercentage}, transparent ${endPercentage} )`;
//last
//const valueGradient =  `linear-gradient(90deg, transparent 0%, transparent ${sliderValue}%, ${activeColor} ${sliderValue}%,  ${activeColor} ${endPercentage}, transparent ${endPercentage} )`;

enum SlideMode {
    RESTRICT = 'restrict',
    MAGNETIC = 'magnetic',
    SLIDETHROUGH = 'slidethrough'
}

type SliderMultiRangeProps = {
    sliderValues: Array<number>;
    colors: Array<string>;
    onChange: (updated: Array<number>) => void; //function to update the values
    min?: number;
    max?: number;
    thickness?: number;
    thumbSize?: number;
    length?: string;
    orientation?: Orientation[keyof Orientation];
    slideMode?: SlideMode | string;
    trackClickable?: boolean;
    hideTrack?: boolean;
};

export const SliderMultiRange = ({
    sliderValues = [0, 0, 0],
    // colors = ['red', 'yellow', 'blue'],
    onChange,
    min = 0,
    max = 100,
    thickness = 15,
    thumbSize = 30,
    slideMode = SlideMode.MAGNETIC,
    orientation = Orientation.HORIZONTAL,
    trackClickable = false,
    hideTrack = true
}: SliderMultiRangeProps) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null); // To track the active element

    const restrictBoundaries = (index: number, value: number) => {
        //check if single element in sliderValues || if last element in sliderValues
        let _min: number = sliderValues.length === 1 || index === 0 ? min : sliderValues[index - 1]; //can check index-1 because index (0) is covered
        let _max: number = sliderValues.length === 1 || index === sliderValues.length - 1 ? max : sliderValues[index + 1]; //can check index+1 because index (sliderValues.length - 1) is covered

        if (value <= _min) {
            value = _min;
        }
        if (value >= _max) {
            value = _max;
        }
        return value;
    };

    //function that gets called everytime one of the sliders value changes
    const onChangeHandler = (value: number, index = 0) => {
        let updatedValues;

        setActiveIndex(index);

        if (slideMode === SlideMode.RESTRICT) {
            //restrict method - values dont go below prev or over next's value
            const restricted = restrictBoundaries(index, value);
            updatedValues = [...sliderValues];
            updatedValues[index] = restricted;
        }

        if (slideMode === SlideMode.MAGNETIC) {
            //magnet effect
            // change other values too - slide other values
            updatedValues = [...sliderValues];
            // //if its opposite direction to linked movement
            // //note if you use a value of <=1 and >= 1 in the difference if() check, it will have a magnetic effect. we use 0.5
            if (value < updatedValues[index]) {
                updatedValues[index] = value;
                for (var i = index; i > 0; i--) {
                    //use comparison <=1 for magnetic effect
                    if (updatedValues[i] - updatedValues[i - 1] <= 0) {
                        updatedValues[i - 1] = updatedValues[i];
                    }
                }
            }
            if (value > updatedValues[index]) {
                updatedValues[index] = value;
                for (var i = index; i < sliderValues.length - 1; i++) {
                    //use comparison <=1 for magnetic effect
                    if (updatedValues[i + 1] - updatedValues[i] <= 0) {
                        updatedValues[i + 1] = updatedValues[i];
                    }
                }
            }
        }

        if (slideMode === SlideMode.SLIDETHROUGH) {
            //mode is slidethrough
            updatedValues = [...sliderValues];
            updatedValues[index] = value;
        }

        if (updatedValues) {
            onChange(updatedValues);
        }
    };

    const sliderMultiRangeRef = useRef<HTMLDivElement>(null);

    return (
        <div
            data-component="SliderMultiRange"
            ref={sliderMultiRangeRef}
            className={[orientation === Orientation.HORIZONTAL && 'w-full', orientation === Orientation.VERTICAL && 'h-full', 'relative'].join(' ')}
        >
            <div
                data-component="SliderTrack"
                className={[`absolute border rounded-full bg-orange-500`].join(' ')}
                style={{
                    ...(orientation === Orientation.HORIZONTAL && {
                        width: `100%`,
                        height: `${thickness}px`
                    }),
                    ...(orientation === Orientation.VERTICAL && {
                        width: `${thickness}px`,
                        height: '100%'
                    })
                }}
            />

            {(sliderValues || []).map((sliderValue, index) => {
                //this controls how the items are placed
                const calculatedOffset = orientation === Orientation.HORIZONTAL ? thumbSize * index + 'px' : `${(sliderValues.length - 1 - index) * thumbSize}px`;
                return (
                    <Slider
                        orientation={orientation}
                        key={index}
                        value={sliderValue}
                        index={index}
                        className={'absolute'} /* this stacks the scrollbars in horizontal mode*/
                        onChange={onChangeHandler}
                        length={slideMode === SlideMode.SLIDETHROUGH ? '100%' : `calc(100% - ${(sliderValues.length - 1) * thumbSize}px)`}
                        min={min}
                        max={max}
                        style={{ zIndex: index === activeIndex ? 1 : 0 }} //z-index
                        offset={slideMode === SlideMode.SLIDETHROUGH ? '0px' : calculatedOffset}
                        //x position to place the <Slider/> you cant see this of each individual slider if position="absolute". only when className = "" and hideTrack="false"
                        trackClickable={trackClickable} //you want to leave this FALSE for multirange input
                        hideTrack={hideTrack} //you want to leave this as TRUE for multirange input - <SliderTrack /> replaces this
                        thumbSize={thumbSize}
                        thickness={thickness}
                    />
                );
            })}
        </div>
    );
};
