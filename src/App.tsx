import './App.css';
import AccordionExample from './examples/Accordion';
import AvatarExample from './examples/Avatar';
import ButtonExample from './examples/Button';
import CalendarExample from './examples/Calendar';
import CardExample from './examples/Card';
import IconExample from './examples/Icon';
// import BreadcrumbExample from './examples/Breadcrumb';
import CheckboxExample from './examples/Checkbox';
import CheckboxGroupExample from './examples/CheckboxGroup';
import HeadingExample from './examples/Heading';
import InputExample from './examples/Input';
import CounterExample from './examples/Counter';
import PopoverExample from './examples/Popover';
import DatepickerExample from './examples/Datepicker';
import DialogExample from './examples/Dialog';

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
            <CheckboxGroupExample />
            <HeadingExample />
            <InputExample />
            <CounterExample />
            <PopoverExample />
            <DatepickerExample />
            <DialogExample />
        </>
    );
}

export default App;
