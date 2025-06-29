import React, { useState } from 'react';
import { Checkbox } from 'lib/components';

const CheckboxExample = () => {
    const [basicChecked, setBasicChecked] = useState(false);
    const [withLabelChecked, setWithLabelChecked] = useState(true);
    const [selectedItems, setSelectedItems] = useState<string[]>(['item2']);
    
    const items = [
        { id: 'item1', label: 'React Development' },
        { id: 'item2', label: 'TypeScript' },
        { id: 'item3', label: 'Node.js' }
    ];

    const handleItemChange = (itemId: string) => {
        setSelectedItems(prev => 
            prev.includes(itemId) 
                ? prev.filter(id => id !== itemId)
                : [...prev, itemId]
        );
    };

    return (
        <div className="max-w-2xl mx-auto p-6 space-y-6">
            <div className="text-center">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Checkbox</h1>
                <p className="text-gray-600 dark:text-gray-400">Interactive checkboxes with various states</p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
                <h3 className="font-medium text-gray-900 dark:text-white mb-4">Basic Usage</h3>
                <div className="space-y-4">
                    <Checkbox
                        checked={basicChecked}
                        onChange={(e) => setBasicChecked(e.target.checked)}
                        name="basic"
                    />
                    <Checkbox
                        checked={withLabelChecked}
                        onChange={(e) => setWithLabelChecked(e.target.checked)}
                        name="withLabel"
                        label="I agree to the terms"
                    />
                </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
                <h3 className="font-medium text-gray-900 dark:text-white mb-4">Sizes</h3>
                <div className="flex items-center gap-6">
                    <Checkbox checked={true} onChange={() => {}} name="small" size="S" />
                    <Checkbox checked={true} onChange={() => {}} name="medium" size="M" />
                    <Checkbox checked={true} onChange={() => {}} name="large" size="L" />
                    <Checkbox checked={true} onChange={() => {}} name="xlarge" size="XL" />
                </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
                <h3 className="font-medium text-gray-900 dark:text-white mb-4">Multi-Select</h3>
                <div className="space-y-3">
                    {items.map(item => (
                        <Checkbox
                            key={item.id}
                            checked={selectedItems.includes(item.id)}
                            onChange={() => handleItemChange(item.id)}
                            name={item.id}
                            label={item.label}
                        />
                    ))}
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">
                    Selected: {selectedItems.length} items
                </p>
            </div>
        </div>
    );
};

export default CheckboxExample;