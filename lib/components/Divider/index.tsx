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
                    className={[children ? `border-none` : `border-b border-solid border-red-400`, children ? `m-0` : `my-2.5 mx-0`, `inline-flex flex-row`, `relative`, `w-full`].join(' ')}
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
                                'before:border-red-400',
                                'before:mr-4',

                                'after:w-full',
                                "after:content-[' ']",
                                'after:border-b',
                                'after:border-solid',
                                'after:border-red-400',
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
                    className={['h-full relative inline-flex items-stretch', children ? 'border-r-0' : `border-r border-solid border-white `, children ? 'm-0' : 'my-0 mx-2.5'].join(' ')}
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
                                'before:border-red-400',
                                'before:mb-4',

                                'after:flex',
                                'after:h-full',
                                'after:min-h-5',
                                "after:content-[' ']",
                                'after:border-r',
                                'after:border-solid',
                                'after:border-red-400',
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
