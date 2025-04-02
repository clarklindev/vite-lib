import './App.css';
import CardExample from './examples/Card';
import ButtonExample from './examples/Button';
import IconExample from './examples/Icon';
import AccordionExample from './examples/Accordion';
import AvatarExample from './examples/Avatar';
import BadgeExample from './examples/Badge';

function App() {
    return (
        <>
            <h1 className="text-3xl bg-red-500 font-bold underline">Vite-lib</h1>
            <CardExample />
            <ButtonExample />
            <IconExample />
            <AccordionExample />
            <AvatarExample />
            <BadgeExample />
        </>
    );
}

export default App;
