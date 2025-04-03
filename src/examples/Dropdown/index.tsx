import { Dropdown } from 'lib/components';

const DropdownExample = () => {
    return (
        <>
            <Dropdown>
                <Dropdown.Wrapper>
                    <Dropdown.Trigger>Button</Dropdown.Trigger>
                    <Dropdown.Menu className="w-40">
                        <Dropdown.MenuItem>A</Dropdown.MenuItem>
                        <Dropdown.MenuItem>B</Dropdown.MenuItem>
                        <Dropdown.MenuItem>C</Dropdown.MenuItem>
                        <Dropdown.MenuItem>D</Dropdown.MenuItem>
                    </Dropdown.Menu>
                </Dropdown.Wrapper>
            </Dropdown>
        </>
    );
};

export default DropdownExample;
