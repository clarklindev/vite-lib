import { useState } from 'react';
import { Dialog } from 'lib/components';

const DialogExample = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = () => setIsOpen((prev) => !prev);

    return (
        <div className="">
            <button className="bg-green-500 text-white px-6 py-3 rounded" onClick={toggleOpen}>
                Open
            </button>

            <Dialog isOpen={isOpen} onClose={toggleOpen} size="medium" className="border border-gray-200" />
        </div>
    );
};

export default DialogExample;
