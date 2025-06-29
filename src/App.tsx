import React from 'react';
import ExampleIndex from '../examples';
import { ThemeContextProvider } from 'lib/context';

function App() {
  return (
    <ThemeContextProvider>
      <ExampleIndex />
    </ThemeContextProvider>
  );
}

export default App;