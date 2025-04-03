import { useState } from 'react';

import { Label } from 'lib/components';
import { Checkbox } from 'lib/components/Checkbox';

const CheckboxExample = () => {
    const [savedData, setSavedData] = useState(false);

    return (
        <Label label="label" labelDirection="right" gap="2">
            <Checkbox
                size="XL"
                checked={savedData}
                name="checkbox"
                onChange={(event) => {
                    setSavedData(event.target.checked);
                }}
            />
        </Label>
    );
};

export default CheckboxExample;
