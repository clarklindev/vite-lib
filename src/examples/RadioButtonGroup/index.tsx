// //RadioButtonGroup
import { useState } from 'react';

import { Layout, Heading, RadioButtonGroup, RadioButton, Label } from 'lib/components';

const RadioButtonGroupExample = () => {
    const options = [
        { label: 'A', value: 'a' },
        { label: 'B', value: 'b' },
        { label: 'C', value: 'c' },
        { label: 'D', value: 'd' }
    ];

    const [savedData, updateSavedData] = useState(Array(options.length).fill(false));

    const onChange = (index: number, newValue: boolean) => {
        let newValues = [...savedData].fill(false);
        newValues[index] = newValue;
        updateSavedData(newValues);
    };

    return (
        <>
            <Layout>
                <Heading variation="h5" size="level2">
                    RadioButton Group (horizontal)
                </Heading>
                <RadioButtonGroup direction="row" spacing="20px">
                    {options.map((each, index) => {
                        return (
                            <Label key={'RadioButtonGroup' + index} label={each.label} labelDirection="bottom">
                                <RadioButton checked={savedData[index]} name="Radio" size="XL" onChange={() => onChange(index, !savedData[index])} />
                            </Label>
                        );
                    })}
                </RadioButtonGroup>
            </Layout>
            <br />
            <Layout>
                <Heading variation="h5" size="level2">
                    RadioButton Group (vertical)
                </Heading>
                <RadioButtonGroup direction="column" spacing="20px">
                    {options.map((each, index) => {
                        return (
                            <Label key={'RadioButtonGroup' + index} label={each.label} labelDirection="right">
                                <RadioButton checked={savedData[index]} name="Radio" size="XL" onChange={() => onChange(index, !savedData[index])} />
                            </Label>
                        );
                    })}
                </RadioButtonGroup>
            </Layout>
        </>
    );
};

export default RadioButtonGroupExample;
