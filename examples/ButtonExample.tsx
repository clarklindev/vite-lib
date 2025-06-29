import React from 'react';
import { Button } from 'lib/components';
import { HiHeart, HiShoppingCart, HiDownload, HiPlus } from 'react-icons/hi2';

const ButtonExample = () => {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8">
            <div className="max-w-6xl mx-auto space-y-12">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Button Component</h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400">Modern, slick button designs with smooth animations</p>
                </div>
                
                {/* Primary Button Variants */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Intent Variants</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="space-y-4 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                            <h3 className="font-medium text-gray-700 dark:text-gray-300">Primary</h3>
                            <Button intent="primary">Get Started</Button>
                        </div>
                        
                        <div className="space-y-4 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                            <h3 className="font-medium text-gray-700 dark:text-gray-300">Secondary</h3>
                            <Button intent="secondary">Learn More</Button>
                        </div>
                        
                        <div className="space-y-4 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                            <h3 className="font-medium text-gray-700 dark:text-gray-300">Success</h3>
                            <Button intent="success">Complete</Button>
                        </div>
                        
                        <div className="space-y-4 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                            <h3 className="font-medium text-gray-700 dark:text-gray-300">Danger</h3>
                            <Button intent="danger">Delete</Button>
                        </div>
                        
                        <div className="space-y-4 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                            <h3 className="font-medium text-gray-700 dark:text-gray-300">Warning</h3>
                            <Button intent="warning">Warning</Button>
                        </div>
                        
                        <div className="space-y-4 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                            <h3 className="font-medium text-gray-700 dark:text-gray-300">Outlined</h3>
                            <Button intent="outlined">Outlined</Button>
                        </div>
                        
                        <div className="space-y-4 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                            <h3 className="font-medium text-gray-700 dark:text-gray-300">Ghost</h3>
                            <Button intent="ghost">Ghost</Button>
                        </div>
                        
                        <div className="space-y-4 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                            <h3 className="font-medium text-gray-700 dark:text-gray-300">Link</h3>
                            <Button intent="link">Link Button</Button>
                        </div>
                    </div>
                </section>

                {/* Size Variations */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Size Variations</h2>
                    
                    <div className="flex flex-wrap items-center gap-4 p-8 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                        <Button intent="primary" size="xs">Extra Small</Button>
                        <Button intent="primary" size="sm">Small</Button>
                        <Button intent="primary" size="md">Medium</Button>
                        <Button intent="primary" size="lg">Large</Button>
                        <Button intent="primary" size="xl">Extra Large</Button>
                    </div>
                </section>

                {/* Border Radius Variations */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Border Radius Variations</h2>
                    
                    <div className="flex flex-wrap items-center gap-4 p-8 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                        <Button intent="primary" borderRadius="none">Sharp</Button>
                        <Button intent="primary" borderRadius="sm">Small</Button>
                        <Button intent="primary" borderRadius="md">Medium</Button>
                        <Button intent="primary" borderRadius="lg">Large</Button>
                        <Button intent="primary" borderRadius="xl">Extra Large</Button>
                        <Button intent="primary" borderRadius="full">Pill</Button>
                    </div>
                </section>

                {/* Icon Buttons */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Icon Buttons</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-4 p-8 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                            <h3 className="font-medium text-gray-700 dark:text-gray-300">Icon Only</h3>
                            <div className="flex items-center gap-3">
                                <Button intent="primary" size="icon">
                                    <HiPlus className="h-4 w-4" />
                                </Button>
                                <Button intent="secondary" size="icon">
                                    <HiHeart className="h-4 w-4" />
                                </Button>
                                <Button intent="outlined" size="icon">
                                    <HiShoppingCart className="h-4 w-4" />
                                </Button>
                                <Button intent="ghost" size="icon">
                                    <HiDownload className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                        
                        <div className="space-y-4 p-8 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                            <h3 className="font-medium text-gray-700 dark:text-gray-300">With Text</h3>
                            <div className="space-y-3">
                                <Button intent="primary" className="gap-2">
                                    <HiPlus className="h-4 w-4" />
                                    Add Item
                                </Button>
                                <Button intent="secondary" className="gap-2">
                                    <HiDownload className="h-4 w-4" />
                                    Download
                                </Button>
                                <Button intent="outlined" className="gap-2">
                                    <HiShoppingCart className="h-4 w-4" />
                                    Add to Cart
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Full Width and States */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Full Width & States</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-4 p-8 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                            <h3 className="font-medium text-gray-700 dark:text-gray-300">Full Width</h3>
                            <div className="space-y-3">
                                <Button intent="primary" fullWidth>Full Width Primary</Button>
                                <Button intent="outlined" fullWidth>Full Width Outlined</Button>
                            </div>
                        </div>
                        
                        <div className="space-y-4 p-8 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                            <h3 className="font-medium text-gray-700 dark:text-gray-300">Disabled State</h3>
                            <div className="space-y-3">
                                <Button intent="primary" disabled>Disabled Primary</Button>
                                <Button intent="outlined" disabled>Disabled Outlined</Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Interactive Demo */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Interactive Demo</h2>
                    
                    <div className="p-8 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900 rounded-xl border border-blue-200 dark:border-gray-700">
                        <div className="text-center space-y-6">
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Try the interactions!</h3>
                            <p className="text-gray-600 dark:text-gray-400">Hover, focus, and click to see the smooth animations</p>
                            
                            <div className="flex flex-wrap justify-center gap-4">
                                <Button intent="primary" size="lg" className="gap-2">
                                    <HiPlus className="h-5 w-5" />
                                    Create New
                                </Button>
                                <Button intent="success" size="lg">
                                    Save Changes
                                </Button>
                                <Button intent="outlined" size="lg">
                                    Cancel
                                </Button>
                                <Button intent="danger" size="lg">
                                    Delete All
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ButtonExample;