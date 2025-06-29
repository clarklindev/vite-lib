import React from 'react';
import { Badge } from 'lib/components';

const BadgeExample = () => {
    return (
        <div className="max-w-4xl mx-auto p-6 space-y-8">
            <div className="text-center">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Badge Component</h1>
                <p className="text-gray-600 dark:text-gray-400">Small status indicators and labels</p>
            </div>

            {/* Intent Variations */}
            <section className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Intent Variations</h2>
                <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
                    <div className="flex flex-wrap items-center gap-4">
                        <Badge intent="contained">Contained</Badge>
                        <Badge intent="outline">Outline</Badge>
                    </div>
                </div>
            </section>

            {/* Status Examples */}
            <section className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Status Examples</h2>
                <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
                    <div className="space-y-6">
                        {/* User Status */}
                        <div className="space-y-3">
                            <h4 className="font-medium text-gray-900 dark:text-white">User Status</h4>
                            <div className="flex flex-wrap gap-3">
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                    </div>
                                    <span className="text-gray-700 dark:text-gray-300">John Doe</span>
                                    <Badge intent="contained" className="bg-green-100 text-green-800">Online</Badge>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                    </div>
                                    <span className="text-gray-700 dark:text-gray-300">Jane Smith</span>
                                    <Badge intent="contained" className="bg-yellow-100 text-yellow-800">Away</Badge>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                                        <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                                    </div>
                                    <span className="text-gray-700 dark:text-gray-300">Bob Wilson</span>
                                    <Badge intent="contained" className="bg-gray-100 text-gray-800">Offline</Badge>
                                </div>
                            </div>
                        </div>

                        {/* Order Status */}
                        <div className="space-y-3">
                            <h4 className="font-medium text-gray-900 dark:text-white">Order Status</h4>
                            <div className="space-y-2">
                                <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                                    <span className="text-gray-700 dark:text-gray-300">Order #12345</span>
                                    <Badge intent="contained" className="bg-blue-100 text-blue-800">Processing</Badge>
                                </div>
                                <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                                    <span className="text-gray-700 dark:text-gray-300">Order #12346</span>
                                    <Badge intent="contained" className="bg-yellow-100 text-yellow-800">Shipped</Badge>
                                </div>
                                <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                                    <span className="text-gray-700 dark:text-gray-300">Order #12347</span>
                                    <Badge intent="contained" className="bg-green-100 text-green-800">Delivered</Badge>
                                </div>
                                <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                                    <span className="text-gray-700 dark:text-gray-300">Order #12348</span>
                                    <Badge intent="contained" className="bg-red-100 text-red-800">Cancelled</Badge>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Notification Examples */}
            <section className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Notification Examples</h2>
                <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
                    <div className="space-y-4">
                        <div className="flex items-center gap-4">
                            <div className="relative">
                                <button className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                                    </svg>
                                </button>
                                <Badge intent="contained" className="absolute -top-1 -right-1 bg-red-500 text-white min-w-[20px] h-5 flex items-center justify-center text-xs">
                                    3
                                </Badge>
                            </div>
                            <span className="text-gray-700 dark:text-gray-300">Messages</span>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="relative">
                                <button className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                                    </svg>
                                </button>
                                <Badge intent="contained" className="absolute -top-1 -right-1 bg-red-500 text-white min-w-[20px] h-5 flex items-center justify-center text-xs">
                                    99+
                                </Badge>
                            </div>
                            <span className="text-gray-700 dark:text-gray-300">Notifications</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Category Tags */}
            <section className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Category Tags</h2>
                <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <h4 className="font-medium text-gray-900 dark:text-white">Blog Post Categories</h4>
                            <div className="flex flex-wrap gap-2">
                                <Badge intent="outline" className="border-blue-300 text-blue-700">React</Badge>
                                <Badge intent="outline" className="border-green-300 text-green-700">JavaScript</Badge>
                                <Badge intent="outline" className="border-purple-300 text-purple-700">TypeScript</Badge>
                                <Badge intent="outline" className="border-orange-300 text-orange-700">Web Development</Badge>
                                <Badge intent="outline" className="border-pink-300 text-pink-700">UI/UX</Badge>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <h4 className="font-medium text-gray-900 dark:text-white">Skill Tags</h4>
                            <div className="flex flex-wrap gap-2">
                                <Badge intent="contained" className="bg-blue-500 text-white">Frontend</Badge>
                                <Badge intent="contained" className="bg-green-500 text-white">Backend</Badge>
                                <Badge intent="contained" className="bg-purple-500 text-white">Full Stack</Badge>
                                <Badge intent="contained" className="bg-orange-500 text-white">DevOps</Badge>
                                <Badge intent="contained" className="bg-pink-500 text-white">Design</Badge>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BadgeExample;