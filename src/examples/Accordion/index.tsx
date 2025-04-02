import { Accordion } from '../../../lib/components/Accordion';
import { Icon } from '../../../lib/components/Icon';
import { ChevronDownIcon, ChevronUpIcon, MinusIcon, PlusIcon } from '../../../lib/icons';

const data = [
    {
        title: 'helloworld',
        body: (
            <>
                {`this is my first answer`}
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                {`hi`}
            </>
        )
    },
    {
        title: 'rainbow',
        body: 'rainbows are amazing'
    },
    {
        title: 'sun',
        body: 'the sun is amazing'
    }
];

type AccordionDataType = {
    title: string;
    body: React.ReactElement | string;
};

export const AccordionExample = () => {
    const iconMap = {
        chevron: { open: <ChevronUpIcon />, closed: <ChevronDownIcon /> },
        plusminus: { open: <MinusIcon />, closed: <PlusIcon /> },
        hidden: {}
    };

    return (
        <Accordion multiOpen={false}>
            {data.map(({ title, body }: AccordionDataType, index) => {
                return (
                    <>
                        <Accordion.Section key={index}>
                            <Accordion.SectionHeader
                                render={(indexes) => (
                                    <Accordion.SectionHeaderTitle index={index}>
                                        {title}
                                        <Icon>{indexes.includes(index) ? iconMap['chevron'].open : iconMap['chevron'].closed}</Icon>
                                    </Accordion.SectionHeaderTitle>
                                )}
                            />
                            <Accordion.SectionPanel index={index}>
                                <Accordion.SectionPanelContent>{body}</Accordion.SectionPanelContent>
                            </Accordion.SectionPanel>
                        </Accordion.Section>
                        {/* <Divider /> add divider if needed */}
                    </>
                );
            })}
        </Accordion>
    );
};
