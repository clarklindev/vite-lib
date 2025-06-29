import React from 'react';
import { Card, Button, Avatar, Badge } from 'lib/components';

const CardExample = () => {
    return (
        <div className="max-w-6xl mx-auto p-6 space-y-8">
            <div className="text-center">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Card Component</h1>
                <p className="text-gray-600 dark:text-gray-400">Flexible container for content with title and content sections</p>
            </div>

            {/* Basic Card */}
            <section className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Basic Card</h2>
                <Card>
                    <Card.Title>Welcome to Our Platform</Card.Title>
                    <Card.Content>
                        <p className="text-gray-600 dark:text-gray-400">
                            This is a basic card component with a title and content section. 
                            Cards are perfect for organizing related information in a clean, structured way.
                        </p>
                    </Card.Content>
                </Card>
            </section>

            {/* Card Layouts */}
            <section className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Card Layouts</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Profile Card */}
                    <Card>
                        <Card.Title>User Profile</Card.Title>
                        <Card.Content>
                            <div className="flex items-center gap-4 mb-4">
                                <Avatar 
                                    size="L" 
                                    imageUrl="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop" 
                                />
                                <div>
                                    <h3 className="font-semibold text-gray-900 dark:text-white">John Doe</h3>
                                    <p className="text-gray-600 dark:text-gray-400">Software Engineer</p>
                                </div>
                            </div>
                            <div className="flex gap-2 mb-4">
                                <Badge intent="contained" className="bg-blue-100 text-blue-800">React</Badge>
                                <Badge intent="contained" className="bg-green-100 text-green-800">Node.js</Badge>
                            </div>
                            <Button intent="primary" fullWidth>View Profile</Button>
                        </Card.Content>
                    </Card>

                    {/* Stats Card */}
                    <Card>
                        <Card.Title>Monthly Stats</Card.Title>
                        <Card.Content>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-600 dark:text-gray-400">Total Users</span>
                                    <span className="text-2xl font-bold text-gray-900 dark:text-white">1,234</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-600 dark:text-gray-400">Revenue</span>
                                    <span className="text-2xl font-bold text-green-600">$12,345</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-600 dark:text-gray-400">Growth</span>
                                    <span className="text-2xl font-bold text-blue-600">+23%</span>
                                </div>
                            </div>
                        </Card.Content>
                    </Card>

                    {/* Action Card */}
                    <Card>
                        <Card.Title>Quick Actions</Card.Title>
                        <Card.Content>
                            <div className="space-y-3">
                                <Button intent="primary" fullWidth>Create New Project</Button>
                                <Button intent="outlined" fullWidth>Import Data</Button>
                                <Button intent="ghost" fullWidth>View Documentation</Button>
                            </div>
                        </Card.Content>
                    </Card>
                </div>
            </section>

            {/* Content Variations */}
            <section className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Content Variations</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Article Card */}
                    <Card>
                        <Card.Title>Getting Started with React Hooks</Card.Title>
                        <Card.Content>
                            <div className="space-y-4">
                                <img 
                                    src="https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop" 
                                    alt="React Hooks"
                                    className="w-full h-48 object-cover rounded-lg"
                                />
                                <p className="text-gray-600 dark:text-gray-400">
                                    Learn how to use React Hooks to manage state and side effects in your functional components. 
                                    This comprehensive guide covers useState, useEffect, and custom hooks.
                                </p>
                                <div className="flex items-center justify-between">
                                    <div className="flex gap-2">
                                        <Badge intent="outline" className="border-blue-300 text-blue-700">React</Badge>
                                        <Badge intent="outline" className="border-green-300 text-green-700">Hooks</Badge>
                                    </div>
                                    <Button intent="link">Read More</Button>
                                </div>
                            </div>
                        </Card.Content>
                    </Card>

                    {/* Feature Card */}
                    <Card>
                        <Card.Title>Premium Features</Card.Title>
                        <Card.Content>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                                    <div>
                                        <h4 className="font-medium text-gray-900 dark:text-white">Advanced Analytics</h4>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">Get detailed insights into your data</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                                    <div>
                                        <h4 className="font-medium text-gray-900 dark:text-white">Priority Support</h4>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">24/7 dedicated customer support</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                                    <div>
                                        <h4 className="font-medium text-gray-900 dark:text-white">Custom Integrations</h4>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">Connect with your favorite tools</p>
                                    </div>
                                </div>
                                <Button intent="success" fullWidth className="mt-4">Upgrade Now</Button>
                            </div>
                        </Card.Content>
                    </Card>
                </div>
            </section>

            {/* Custom Styling */}
            <section className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Custom Styling</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Gradient Card */}
                    <Card className="bg-gradient-to-br from-purple-500 to-pink-500 border-none text-white">
                        <Card.Title className="text-white">
                            Special Offer
                        </Card.Title>
                        <Card.Content>
                            <div className="space-y-4">
                                <p className="text-purple-100">
                                    Get 50% off your first month when you sign up today. 
                                    Limited time offer for new customers only.
                                </p>
                                <Button intent="secondary" fullWidth>
                                    Claim Offer
                                </Button>
                            </div>
                        </Card.Content>
                    </Card>

                    {/* Warning Card */}
                    <Card className="border-orange-200 bg-orange-50 dark:bg-orange-900/20 dark:border-orange-800">
                        <Card.Title className="text-orange-800 dark:text-orange-200">
                            System Maintenance
                        </Card.Title>
                        <Card.Content>
                            <div className="space-y-4">
                                <p className="text-orange-700 dark:text-orange-300">
                                    Scheduled maintenance will occur on Sunday, March 15th from 2:00 AM to 4:00 AM EST. 
                                    Some features may be temporarily unavailable.
                                </p>
                                <Button intent="warning" fullWidth>
                                    Learn More
                                </Button>
                            </div>
                        </Card.Content>
                    </Card>
                </div>
            </section>

            {/* Usage Examples */}
            <section className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Usage Examples</h2>
                <Card>
                    <Card.Title>Code Examples</Card.Title>
                    <Card.Content>
                        <div className="space-y-4">
                            <div>
                                <h4 className="font-medium text-gray-900 dark:text-white mb-2">Basic Card</h4>
                                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                                    <code className="text-sm text-gray-800 dark:text-gray-200">
                                        {`<Card>
  <Card.Title>Card Title</Card.Title>
  <Card.Content>
    <p>Your content goes here</p>
  </Card.Content>
</Card>`}
                                    </code>
                                </div>
                            </div>
                            
                            <div>
                                <h4 className="font-medium text-gray-900 dark:text-white mb-2">Custom Styling</h4>
                                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                                    <code className="text-sm text-gray-800 dark:text-gray-200">
                                        {`<Card className="bg-blue-50 border-blue-200">
  <Card.Title className="text-blue-800">
    Custom Title
  </Card.Title>
  <Card.Content>
    <p>Custom content</p>
  </Card.Content>
</Card>`}
                                    </code>
                                </div>
                            </div>
                        </div>
                    </Card.Content>
                </Card>
            </section>
        </div>
    );
};

export default CardExample;