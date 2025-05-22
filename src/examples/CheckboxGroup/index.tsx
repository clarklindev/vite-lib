import { useState } from 'react';
import { Checkbox, Label, Layout, Heading } from 'lib/components';

// import Code from './code.mdx';

const CheckboxExample = () => {
    const options = [
        { label: 'A', value: 'a' },
        { label: 'B', value: 'b' },
        { label: 'C', value: 'c' }
    ];
    const [savedDataA, updateSavedDataA] = useState(Array(options.length).fill(false));
    const [savedDataB, updateSavedDataB] = useState(Array(options.length).fill(false));
    const [savedDataC, updateSavedDataC] = useState(Array(options.length).fill(false));

    const onChange = (savedData: Array<boolean>, updateSavedData: (newData: Array<boolean>) => void, index: number) => {
        const newValues = [...savedData];
        newValues[index] = !newValues[index];
        updateSavedData(newValues);
    };

    return (
        <>
            <Layout>
                <Heading as="h5" className="font-xl">
                    Checkbox Group (horizontal)
                </Heading>

                <div className="flex flex-row space-x-5">
                    {options.map((each, index) => {
                        return (
                            <Label key={'CheckboxGroup_CheckboxA' + index} label={each.label} labelDirection="bottom" gap="2">
                                <Checkbox checked={savedDataA[index]} name="Checkbox_A" onChange={() => onChange(savedDataA, updateSavedDataA, index)} />
                            </Label>
                        );
                    })}
                </div>
            </Layout>

            <Layout>
                <Heading as="h5" className="font-xl">
                    Checkbox Group (vertical)
                </Heading>
                <div className="flex flex-col space-y-5">
                    {options.map((each, index) => {
                        return (
                            <Label key={'CheckboxGroup_CheckboxB' + index} label={each.label} labelDirection="right" gap="2">
                                <Checkbox checked={savedDataB[index]} name="Checkbox_B" onChange={() => onChange(savedDataB, updateSavedDataB, index)} />
                            </Label>
                        );
                    })}
                </div>
            </Layout>

            <Layout>
                <Heading as="h5" className="font-xl">
                    Checkbox Group (indeterminate)
                </Heading>
                <div className="flex flex-col items-start space-y-10">
                    <Label label="hi" labelDirection="right" gap="2">
                        <Checkbox
                            checked={savedDataC.every((item) => item === true)}
                            indeterminate={!savedDataC.every((item) => item === true) && savedDataC.some((item) => item === true)}
                            name="checkbox"
                            onChange={(event) => {
                                //update group
                                updateSavedDataC(savedDataC.slice().fill(event.target.checked));
                            }}
                        />
                    </Label>

                    <div className="flex flex-col spacing-y-5">
                        {options.map((each, index) => {
                            return (
                                <Label key={'CheckboxGroup_CheckboxC' + index} label={each.label} labelDirection="right" gap="2">
                                    <Checkbox checked={savedDataC[index]} name="Checkbox_ABC" onChange={() => onChange(savedDataC, updateSavedDataC, index)} />
                                </Label>
                            );
                        })}
                    </div>
                </div>
            </Layout>
        </>
    );
};

export default CheckboxExample;
