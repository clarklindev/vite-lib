import React, { useRef } from 'react';

type DividerVariation = 'horizontal' | 'vertical';

type DividerProps = {
    variation?: DividerVariation;
    children?: React.ReactNode | undefined;
};

const Divider = ({ variation = 'horizontal', children, ...rest }: DividerProps) => {
    const dividerRef = useRef<HTMLDivElement | null>(null);

    switch (variation) {
        case 'horizontal':
            return (
                <div
                    data-component={`${Divider.displayName}-Horizontal`}
                    className={[children ? `border-none` : `border-b border-gray-400/50 border-solid`, children ? `m-0` : `my-0 mx-0`, `inline-flex flex-row`, `relative`, `w-full`].join(' ')}
                    {...rest}
                >
                    {children && (
                        <span
                            className={[
                                'flex',
                                'flex-row',
                                'items-center',
                                'w-full',
                                'relative',

                                'before:w-full',
                                "before:content-[' ']",
                                'before:border-b',
                                'before:border-solid',
                                'before:border-gray-400/50',
                                'before:mr-4',

                                'after:w-full',
                                "after:content-[' ']",
                                'after:border-b',
                                'after:border-solid',
                                'after:border-gray-400/50',
                                'after:ml-4'
                            ].join(' ')}
                        >
                            {children}
                        </span>
                    )}
                </div>
            );

        case 'vertical':
            return (
                <div
                    ref={dividerRef}
                    data-component={`${Divider.displayName}-Vertical`}
                    className={['h-full relative inline-flex items-stretch', children ? 'border-r-0' : `border-r border-solid border-gray-400/50 `, children ? 'm-0' : 'my-0 mx-2.5'].join(' ')}
                    {...rest}
                >
                    {children && (
                        <span
                            className={[
                                'flex',
                                'flex-col',
                                'items-center',
                                'h-full',
                                'relative',
                                'w-5',
                                'overflow-wrap-normal',

                                'before:flex',
                                'before:h-full',
                                'before:min-h-5',
                                "before:content-[' ']",
                                'before:border-r',
                                'before:border-solid',
                                'before:border-gray-400/50',
                                'before:mb-4',

                                'after:flex',
                                'after:h-full',
                                'after:min-h-5',
                                "after:content-[' ']",
                                'after:border-r',
                                'after:border-solid',
                                'after:border-gray-400/50',
                                'after:mt-4'
                            ].join(' ')}
                        >
                            {children}
                        </span>
                    )}
                </div>
            );

        default:
            return null;
    }
};

// ---------------------------------------------------------------------------------------------------------------------------------------

Divider.displayName = 'Divider';
export { Divider };
