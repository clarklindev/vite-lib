import { useState } from 'react';

import { Snackbar, Button, Icon } from 'lib/components';
import { HiOutlineClipboardDocument as ClipboardIcon } from 'react-icons/hi2';

const SnackbarExample = () => {
    const [showSnackbar, setShowSnackbar] = useState(false);

    const onClickHandler = () => {
        console.log('onClickHandler');
        setShowSnackbar(true);
    };

    return (
        <>
            {showSnackbar && <Snackbar setShowSnackbar={setShowSnackbar}>copied to clipboard</Snackbar>}
            <Button onClick={onClickHandler} intent="icon" padding={'none'}>
                <Icon size="L">
                    <ClipboardIcon />
                </Icon>
            </Button>
        </>
    );
};

export default SnackbarExample;
