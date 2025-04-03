import { useState } from 'react';

import { Counter } from 'lib/components';

const CounterExample = () => {
    const [savedData, setSavedData] = useState(0);

    return <Counter savedData={savedData} onChange={(newValue) => setSavedData(newValue)} />;
};

export default CounterExample;
