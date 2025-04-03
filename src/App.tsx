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
import DividerExample from './examples/Divider';
import DropdownExample from './examples/Dropdown';
import InputOtpExample from './examples/InputOtp';
import ListExample from './examples/List';
import PaginationExample from './examples/Pagination';
import ProgressLoaderExample from './examples/ProgressLoader';
import RadioButtonExample from './examples/RadioButton';
import RadioButtonGroupExample from './examples/RadioButtonGroup';
import SelectExample from './examples/Select';

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
            <DividerExample />
            <DropdownExample />
            <InputOtpExample />
            <ListExample />
            <PaginationExample />
            <ProgressLoaderExample />
            <RadioButtonExample />
            <RadioButtonGroupExample />
            <SelectExample />
        </>
    );
}

export default App;
