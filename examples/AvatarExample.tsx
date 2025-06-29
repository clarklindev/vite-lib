import React from 'react';
import { Avatar } from 'lib/components';

const AvatarExample = () => {
    return (
        <div className="max-w-2xl mx-auto p-6 space-y-6">
            <div className="text-center">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Avatar</h1>
                <p className="text-gray-600 dark:text-gray-400">Profile pictures with fallback</p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
                <div className="flex items-center justify-center gap-6">
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

            <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
                <h3 className="font-medium text-gray-900 dark:text-white mb-4">With Border</h3>
                <div className="flex items-center justify-center gap-6">
                    <Avatar 
                        size="M" 
                        border={true}
                        imageUrl="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop" 
                    />
                    <Avatar 
                        size="M" 
                        border={true}
                        imageUrl="https://invalid-url.com/image.jpg" 
                    />
                </div>
            </div>
        </div>
    );
};

export default AvatarExample;