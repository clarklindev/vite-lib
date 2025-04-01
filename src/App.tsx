import { Button, Card, Input } from '../lib/main'; //after npm build -> This works because your package.json points to the transpiled main file dist/main.ts.
import './App.css';

function App() {
    return (
        <>
            <h1 className="text-3xl bg-red-500 font-bold underline">Hello world!</h1>
            <Card>
                <Button>Hello</Button>
                <Input />
            </Card>
        </>
    );
}

export default App;
