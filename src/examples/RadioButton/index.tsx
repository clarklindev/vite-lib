import { useState } from 'react';

import { RadioButton } from 'lib/components';

const RadioButtonExample = () => {
    const [savedData, setSavedData] = useState(false);

    return (
        <>
            <RadioButton
                checked={savedData}
                name="radio"
                label="label"
                onChange={(event) => {
                    setSavedData(event.target.checked);
                }}
            />
        </>
    );
};

export default RadioButtonExample;
