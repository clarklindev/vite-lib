import './App.css';
import AccordionExample from './examples/Accordion';
import AvatarExample from './examples/Avatar';
import ButtonExample from './examples/Button';
import CalendarExample from './examples/Calendar';
import CardExample from './examples/Card';
import IconExample from './examples/Icon';
// import BreadcrumbExample from './examples/Breadcrumb';
import CheckboxExample from './examples/Checkbox';

function App() {
    return (
        <>
            <h1 className="text-3xl bg-red-500 font-bold underline">Vite-lib</h1>
            <AccordionExample />
            <AvatarExample />
            {/* <BreadcrumbExample /> */}
            <ButtonExample />
            <CardExample />
            <IconExample />
            <CalendarExample />
            <CheckboxExample />
        </>
    );
}

export default App;
