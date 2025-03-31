import { Button, Input } from '../lib/main'; //after npm build -> This works because your package.json points to the transpiled main file dist/main.ts.
import './App.css';

function App() {
    return (
        <>
            <h1 className="text-3xl bg-red-500 font-bold underline">Hello world!</h1>
            <Button>Hello</Button>
            <Input />
        </>
    );
}

export default App;
