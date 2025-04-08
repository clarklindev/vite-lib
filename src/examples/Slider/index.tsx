import { useState } from 'react';

import { Slider } from 'lib/components';

const SliderExample = () => {
    const [savedData, setSavedData] = useState(0);

    return (
        <>
            <>
                <div
                    style={{
                        width: '100%',
                        height: '50px'
                    }}
                >
                    <Slider value={savedData} orientation="horizontal" onChange={setSavedData} />
                </div>
                <br />
                <div
                    style={{
                        width: '100%',
                        height: '350px'
                    }}
                >
                    <Slider value={savedData} orientation="vertical" onChange={setSavedData} />
                </div>
            </>
        </>
    );
};

export default SliderExample;
