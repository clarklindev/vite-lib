import { Button, Card, Input } from '../lib/main'; //after npm build -> This works because your package.json points to the transpiled main file dist/main.ts.
import './App.css';
import CardExample from './examples/Card';
import ButtonExample from './examples/Button';
import IconExample from './examples/Icon';
import AccordionExample from './examples/Accordion';

function App() {
    return (
        <>
            <h1 className="text-3xl bg-red-500 font-bold underline">Vite-lib</h1>
            <CardExample />
            <ButtonExample />
            <IconExample />
            <AccordionExample />
        </>
    );
}

export default App;
