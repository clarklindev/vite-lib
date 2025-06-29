import React from 'react';
import { Avatar } from 'lib/components';

const AvatarExample = () => {
    return (
        <div className="max-w-4xl mx-auto p-6 space-y-8">
            <div className="text-center">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Avatar Component</h1>
                <p className="text-gray-600 dark:text-gray-400">Profile pictures with fallback handling</p>
            </div>

            {/* Size Variations */}
            <section className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Size Variations</h2>
                <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
                    <div className="flex items-center gap-6">
                        <div className="text-center space-y-2">
                            <Avatar 
                                size="S" 
                                imageUrl="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop" 
                            />
                            <p className="text-sm text-gray-600 dark:text-gray-400">Small</p>
                        </div>
                        <div className="text-center space-y-2">
                            <Avatar 
                                size="M" 
                                imageUrl="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop" 
                            />
                            <p className="text-sm text-gray-600 dark:text-gray-400">Medium</p>
                        </div>
                        <div className="text-center space-y-2">
                            <Avatar 
                                size="L" 
                                imageUrl="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop" 
                            />
                            <p className="text-sm text-gray-600 dark:text-gray-400">Large</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Border Variations */}
            <section className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">With Borders</h2>
                <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
                    <div className="flex items-center gap-6">
                        <Avatar 
                            size="M" 
                            border={true}
                            imageUrl="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop" 
                        />
                        <Avatar 
                            size="M" 
                            border={true}
                            imageUrl="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop" 
                        />
                        <Avatar 
                            size="M" 
                            border={true}
                            imageUrl="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop" 
                        />
                    </div>
                </div>
            </section>

            {/* Error Handling */}
            <section className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Error Handling</h2>
                <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
                    <div className="space-y-4">
                        <p className="text-gray-600 dark:text-gray-400">
                            When an image fails to load, the avatar shows a placeholder circle:
                        </p>
                        <div className="flex items-center gap-6">
                            <Avatar 
                                size="S" 
                                imageUrl="https://invalid-url.com/image.jpg" 
                            />
                            <Avatar 
                                size="M" 
                                imageUrl="https://invalid-url.com/image.jpg" 
                            />
                            <Avatar 
                                size="L" 
                                imageUrl="https://invalid-url.com/image.jpg" 
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* User Profile Examples */}
            <section className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">User Profile Examples</h2>
                <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
                    <div className="space-y-6">
                        {/* Profile Card */}
                        <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                            <Avatar 
                                size="L" 
                                border={true}
                                imageUrl="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop" 
                            />
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">John Doe</h3>
                                <p className="text-gray-600 dark:text-gray-400">Software Engineer</p>
                                <p className="text-sm text-gray-500 dark:text-gray-500">john.doe@example.com</p>
                            </div>
                        </div>

                        {/* Comment Thread */}
                        <div className="space-y-3">
                            <h4 className="font-medium text-gray-900 dark:text-white">Comment Thread</h4>
                            <div className="flex gap-3">
                                <Avatar 
                                    size="S" 
                                    imageUrl="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop" 
                                />
                                <div className="flex-1 bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
                                    <p className="text-sm font-medium text-gray-900 dark:text-white">Sarah Wilson</p>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">Great work on this feature! The implementation looks solid.</p>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <Avatar 
                                    size="S" 
                                    imageUrl="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop" 
                                />
                                <div className="flex-1 bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
                                    <p className="text-sm font-medium text-gray-900 dark:text-white">Mike Johnson</p>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">Thanks! I'll make those changes you suggested.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AvatarExample;