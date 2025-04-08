import { useState } from 'react';

import { Label, Layout } from 'lib/components';
import { Checkbox } from 'lib/components/Checkbox';

const CheckboxExample = () => {
    const [savedData, setSavedData] = useState(false);

    return (
        <>
            <Layout>
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
            </Layout>
            <Layout>
                <Label label="label" labelDirection="right" gap="2">
                    <Checkbox
                        size="L"
                        checked={savedData}
                        name="checkbox"
                        onChange={(event) => {
                            setSavedData(event.target.checked);
                        }}
                    />
                </Label>
            </Layout>
            <Layout>
                <Label label="label" labelDirection="right" gap="2">
                    <Checkbox
                        size="M"
                        checked={savedData}
                        name="checkbox"
                        onChange={(event) => {
                            setSavedData(event.target.checked);
                        }}
                    />
                </Label>
            </Layout>

            <Layout>
                <Label label="label" labelDirection="right" gap="2">
                    <Checkbox
                        size="M"
                        border={false}
                        checked={savedData}
                        name="checkbox"
                        onChange={(event) => {
                            setSavedData(event.target.checked);
                        }}
                    />
                </Label>
            </Layout>

            <Layout>
                <Checkbox
                    size="M"
                    border={false}
                    checked={savedData}
                    name="checkbox"
                    onChange={(event) => {
                        setSavedData(event.target.checked);
                    }}
                />
            </Layout>
        </>
    );
};

export default CheckboxExample;
