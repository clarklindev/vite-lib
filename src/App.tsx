import React from 'react';
import { Button } from 'lib/components';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Button Component Showcase</h1>
        
        {/* Current Button Variants */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Current Button Variants</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-4 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              <h3 className="font-medium text-gray-700 dark:text-gray-300">Primary</h3>
              <Button intent="primary">Primary Button</Button>
            </div>
            
            <div className="space-y-4 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              <h3 className="font-medium text-gray-700 dark:text-gray-300">Secondary</h3>
              <Button intent="secondary">Secondary Button</Button>
            </div>
            
            <div className="space-y-4 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              <h3 className="font-medium text-gray-700 dark:text-gray-300">Outlined</h3>
              <Button intent="outlined">Outlined Button</Button>
            </div>
            
            <div className="space-y-4 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              <h3 className="font-medium text-gray-700 dark:text-gray-300">Contained</h3>
              <Button intent="contained">Contained Button</Button>
            </div>
            
            <div className="space-y-4 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              <h3 className="font-medium text-gray-700 dark:text-gray-300">Plain</h3>
              <Button intent="plain">Plain Button</Button>
            </div>
            
            <div className="space-y-4 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              <h3 className="font-medium text-gray-700 dark:text-gray-300">Text</h3>
              <Button intent="text">Text Button</Button>
            </div>
          </div>
        </section>

        {/* Size Variations */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Size Variations</h2>
          
          <div className="flex flex-wrap items-center gap-4 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
            <Button intent="primary" padding="S">Small</Button>
            <Button intent="primary" padding="M">Medium</Button>
            <Button intent="primary" padding="L">Large</Button>
            <Button intent="primary" padding="XL">Extra Large</Button>
          </div>
        </section>

        {/* Border Radius Variations */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Border Radius Variations</h2>
          
          <div className="flex flex-wrap items-center gap-4 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
            <Button intent="primary" borderRadius="none">No Radius</Button>
            <Button intent="primary" borderRadius="sm">Small Radius</Button>
            <Button intent="primary" borderRadius="md">Medium Radius</Button>
            <Button intent="primary" borderRadius="lg">Large Radius</Button>
            <Button intent="primary" borderRadius="xl">Extra Large Radius</Button>
          </div>
        </section>

        {/* Interactive States Demo */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Interactive States</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              <h3 className="font-medium text-gray-700 dark:text-gray-300">Hover Effects</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Hover over these buttons to see effects</p>
              <div className="space-y-2">
                <Button intent="primary" className="hover:scale-105 transition-transform">Hover Scale</Button>
                <Button intent="outlined" className="hover:shadow-lg transition-shadow">Hover Shadow</Button>
              </div>
            </div>
            
            <div className="space-y-4 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              <h3 className="font-medium text-gray-700 dark:text-gray-300">Focus States</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Tab to focus these buttons</p>
              <div className="space-y-2">
                <Button intent="primary" focus="border">Focus Border</Button>
                <Button intent="secondary" className="focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Focus Ring</Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;