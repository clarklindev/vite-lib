import { Icon, ToggleButton } from 'lib/components';
import { HeartIcon } from 'lib/icons';

const ToggleButtonExample = () => {
    //the context provider (can technically wrap inside the component itself)
    enum ToggleEnumWithMaybe {
        ON = 'true',
        OFF = 'false',
        MAYBE = 'maybe'
    }

    return (
        <>
            <ToggleButton
                enumObj={ToggleEnumWithMaybe}
                render={(current) => {
                    switch (current) {
                        case 'ON':
                            return (
                                <Icon size="L">
                                    <HeartIcon />
                                </Icon>
                            );

                        case 'OFF':
                            return <Icon size="L">OFF</Icon>;

                        default:
                        case 'MAYBE':
                            return <Icon size="L">'maybe'</Icon>;
                    }
                }}
            />
        </>
    );
};

export default ToggleButtonExample;
