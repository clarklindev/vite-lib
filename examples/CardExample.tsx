import React from 'react';
import { Card, Button, Avatar, Badge } from 'lib/components';

const CardExample = () => {
    return (
        <div className="max-w-4xl mx-auto p-6 space-y-6">
            <div className="text-center">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Card</h1>
                <p className="text-gray-600 dark:text-gray-400">Flexible content containers</p>
            </div>

            <Card>
                <Card.Title>Basic Card</Card.Title>
                <Card.Content>
                    <p className="text-gray-600 dark:text-gray-400">
                        This is a basic card with title and content sections.
                    </p>
                </Card.Content>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                    <Card.Title>User Profile</Card.Title>
                    <Card.Content>
                        <div className="flex items-center gap-3 mb-4">
                            <Avatar 
                                size="M" 
                                imageUrl="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop" 
                            />
                            <div>
                                <h3 className="font-semibold text-gray-900 dark:text-white">John Doe</h3>
                                <p className="text-gray-600 dark:text-gray-400">Developer</p>
                            </div>
                        </div>
                        <div className="flex gap-2 mb-4">
                            <Badge intent="contained" className="bg-blue-100 text-blue-800">React</Badge>
                            <Badge intent="contained" className="bg-green-100 text-green-800">Node.js</Badge>
                        </div>
                        <Button intent="primary" fullWidth>View Profile</Button>
                    </Card.Content>
                </Card>

                <Card>
                    <Card.Title>Quick Actions</Card.Title>
                    <Card.Content>
                        <div className="space-y-3">
                            <Button intent="primary" fullWidth>Create Project</Button>
                            <Button intent="outlined" fullWidth>Import Data</Button>
                            <Button intent="ghost" fullWidth>Documentation</Button>
                        </div>
                    </Card.Content>
                </Card>
            </div>
        </div>
    );
};

export default CardExample;