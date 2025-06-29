import React, { useState } from 'react';
import { Checkbox, Label } from 'lib/components';

const CheckboxExample = () => {
    const [basicChecked, setBasicChecked] = useState(false);
    const [withLabelChecked, setWithLabelChecked] = useState(true);
    const [indeterminateChecked, setIndeterminateChecked] = useState(false);
    const [noBorderChecked, setNoBorderChecked] = useState(false);
    
    // Multi-select example
    const [selectedItems, setSelectedItems] = useState<string[]>(['item2']);
    const items = [
        { id: 'item1', label: 'React Development' },
        { id: 'item2', label: 'TypeScript' },
        { id: 'item3', label: 'Node.js' },
        { id: 'item4', label: 'GraphQL' }
    ];

    // Settings example
    const [settings, setSettings] = useState({
        notifications: true,
        darkMode: false,
        autoSave: true,
        analytics: false
    });

    const handleItemChange = (itemId: string) => {
        setSelectedItems(prev => 
            prev.includes(itemId) 
                ? prev.filter(id => id !== itemId)
                : [...prev, itemId]
        );
    };

    const handleSettingChange = (setting: keyof typeof settings) => {
        setSettings(prev => ({
            ...prev,
            [setting]: !prev[setting]
        }));
    };

    return (
        <div className="max-w-4xl mx-auto p-6 space-y-8">
            <div className="text-center">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Checkbox Component</h1>
                <p className="text-gray-600 dark:text-gray-400">Interactive checkboxes with various states and sizes</p>
            </div>

            {/* Basic Checkbox */}
            <section className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Basic Checkbox</h2>
                <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
                    <div className="space-y-4">
                        <Checkbox
                            checked={basicChecked}
                            onChange={(e) => setBasicChecked(e.target.checked)}
                            name="basic"
                        />
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            State: {basicChecked ? 'Checked' : 'Unchecked'}
                        </p>
                    </div>
                </div>
            </section>

            {/* With Label */}
            <section className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">With Label</h2>
                <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
                    <div className="space-y-4">
                        <Checkbox
                            checked={withLabelChecked}
                            onChange={(e) => setWithLabelChecked(e.target.checked)}
                            name="withLabel"
                            label="I agree to the terms and conditions"
                        />
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            Agreement status: {withLabelChecked ? 'Agreed' : 'Not agreed'}
                        </p>
                    </div>
                </div>
            </section>

            {/* Size Variations */}
            <section className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Size Variations</h2>
                <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
                    <div className="flex items-center gap-6">
                        <div className="text-center space-y-2">
                            <Checkbox
                                checked={true}
                                onChange={() => {}}
                                name="small"
                                size="S"
                            />
                            <p className="text-sm text-gray-600 dark:text-gray-400">Small</p>
                        </div>
                        <div className="text-center space-y-2">
                            <Checkbox
                                checked={true}
                                onChange={() => {}}
                                name="medium"
                                size="M"
                            />
                            <p className="text-sm text-gray-600 dark:text-gray-400">Medium</p>
                        </div>
                        <div className="text-center space-y-2">
                            <Checkbox
                                checked={true}
                                onChange={() => {}}
                                name="large"
                                size="L"
                            />
                            <p className="text-sm text-gray-600 dark:text-gray-400">Large</p>
                        </div>
                        <div className="text-center space-y-2">
                            <Checkbox
                                checked={true}
                                onChange={() => {}}
                                name="xlarge"
                                size="XL"
                            />
                            <p className="text-sm text-gray-600 dark:text-gray-400">Extra Large</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Indeterminate State */}
            <section className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Indeterminate State</h2>
                <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
                    <div className="space-y-4">
                        <Checkbox
                            checked={indeterminateChecked}
                            onChange={(e) => setIndeterminateChecked(e.target.checked)}
                            name="indeterminate"
                            label="Partially selected items"
                            indeterminate={true}
                        />
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            This checkbox shows an indeterminate state, useful for "select all" scenarios where only some items are selected.
                        </p>
                    </div>
                </div>
            </section>

            {/* Without Border */}
            <section className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Without Border</h2>
                <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
                    <div className="space-y-4">
                        <Checkbox
                            checked={noBorderChecked}
                            onChange={(e) => setNoBorderChecked(e.target.checked)}
                            name="noBorder"
                            label="Minimal checkbox style"
                            border={false}
                        />
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            This checkbox has no border for a cleaner look.
                        </p>
                    </div>
                </div>
            </section>

            {/* Multi-Select Example */}
            <section className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Multi-Select Example</h2>
                <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
                    <div className="space-y-4">
                        <h3 className="font-medium text-gray-900 dark:text-white">Select your skills:</h3>
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
                        <div className="mt-4 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                Selected: {selectedItems.length > 0 ? selectedItems.map(id => 
                                    items.find(item => item.id === id)?.label
                                ).join(', ') : 'None'}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Settings Example */}
            <section className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Settings Example</h2>
                <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
                    <div className="space-y-4">
                        <h3 className="font-medium text-gray-900 dark:text-white">Application Settings</h3>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                                <div>
                                    <p className="font-medium text-gray-900 dark:text-white">Email Notifications</p>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">Receive email updates about your account</p>
                                </div>
                                <Checkbox
                                    checked={settings.notifications}
                                    onChange={() => handleSettingChange('notifications')}
                                    name="notifications"
                                />
                            </div>
                            
                            <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                                <div>
                                    <p className="font-medium text-gray-900 dark:text-white">Dark Mode</p>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">Use dark theme for the interface</p>
                                </div>
                                <Checkbox
                                    checked={settings.darkMode}
                                    onChange={() => handleSettingChange('darkMode')}
                                    name="darkMode"
                                />
                            </div>
                            
                            <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                                <div>
                                    <p className="font-medium text-gray-900 dark:text-white">Auto Save</p>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">Automatically save your work</p>
                                </div>
                                <Checkbox
                                    checked={settings.autoSave}
                                    onChange={() => handleSettingChange('autoSave')}
                                    name="autoSave"
                                />
                            </div>
                            
                            <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                                <div>
                                    <p className="font-medium text-gray-900 dark:text-white">Analytics</p>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">Help improve our service with usage data</p>
                                </div>
                                <Checkbox
                                    checked={settings.analytics}
                                    onChange={() => handleSettingChange('analytics')}
                                    name="analytics"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Usage Examples */}
            <section className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Usage Examples</h2>
                <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
                    <div className="space-y-4">
                        <div>
                            <h4 className="font-medium text-gray-900 dark:text-white mb-2">Basic Usage</h4>
                            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                                <code className="text-sm text-gray-800 dark:text-gray-200">
                                    {`<Checkbox
  checked={isChecked}
  onChange={(e) => setIsChecked(e.target.checked)}
  name="example"
  label="Check me"
/>`}
                                </code>
                            </div>
                        </div>
                        
                        <div>
                            <h4 className="font-medium text-gray-900 dark:text-white mb-2">With Custom Size</h4>
                            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                                <code className="text-sm text-gray-800 dark:text-gray-200">
                                    {`<Checkbox
  checked={isChecked}
  onChange={handleChange}
  name="large"
  size="XL"
  label="Large checkbox"
/>`}
                                </code>
                            </div>
                        </div>
                        
                        <div>
                            <h4 className="font-medium text-gray-900 dark:text-white mb-2">Indeterminate State</h4>
                            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                                <code className="text-sm text-gray-800 dark:text-gray-200">
                                    {`<Checkbox
  checked={false}
  onChange={handleChange}
  name="partial"
  indeterminate={true}
  label="Partially selected"
/>`}
                                </code>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CheckboxExample;