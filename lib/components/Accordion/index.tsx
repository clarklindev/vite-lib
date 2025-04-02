import { AccordionContextProvider, useAccordion } from '../../context/AccordionContext';
import React, { useRef, useEffect } from 'react';

// whatever props are passed in, just pass through
const Accordion = ({ children, ...props }: AccordionProps) => {
    return (
        <AccordionContextProvider>
            {/* if you dont pass in multi-open, default will be applied */}
            <AccordionContainer {...props}>{children}</AccordionContainer>
        </AccordionContextProvider>
    );
};

type AccordionProps = {
    multiOpen?: boolean;
    children: React.ReactNode;
};

const AccordionContainer = ({ multiOpen = true, children }: AccordionProps) => {
    const { setMultiOpen } = useAccordion();

    useEffect(() => {
        setMultiOpen(multiOpen);
    }, [multiOpen]);

    return (
        <div
            data-component={Accordion.name}
            role="tablist"
            className={`
  flex 
  flex-col 
  self-stretch 
  min-w-max-content
`}
        >
            {children}
        </div>
    );
};

const AccordionSection = ({ children }: { children: React.ReactNode }) => {
    return <div data-component={AccordionSection.name}>{children}</div>;
};

const AccordionSectionHeader = ({ render }: { render: (indexes: Array<number>) => React.ReactNode }) => {
    const { indexes } = useAccordion();

    return (
        <div
            data-component={AccordionSectionHeader.name}
            className={[
                `
      box-border 
      cursor-pointer 
      text-base 
      font-semibold 
      text-[var(--clr-foreground)] 
      my-0
      flex
      justify-between
      `
            ].join(' ')}
            role="heading"
        >
            {render(indexes)}
        </div>
    );
};

const AccordionSectionHeaderTitle = ({ children, index }: { index: number; children: React.ReactNode }) => {
    const { indexes, setIndexes, multiOpen } = useAccordion();
    //@index - filter-out/add or toggle
    const activeIndexUpdate = (index: number) => {
        const found = indexes.includes(index);
        if (multiOpen) {
            if (found) {
                // filter-out
                //if index is in the activeIndexes array... remove it
                setIndexes(indexes.filter((item) => item !== index));
            } else {
                //or add
                //add to activeIndexes = Set is unique values
                setIndexes([...new Set([...indexes, index])]);
            }
        } else {
            //toggle
            //only allowed one open at a time
            if (found) {
                //remove it
                setIndexes([]);
            } else {
                //add it
                setIndexes([index]);
            }
        }
    };

    const handleClick = (index: number) => {
        activeIndexUpdate(index);
    };

    return (
        <div
            data-component={AccordionSectionHeaderTitle.name}
            className={[
                `
      flex 
      flex-grow 
      justify-between 
      items-center 
      mb-2 
      mt-2
      `
            ].join(' ')}
            role="button"
            aria-expanded={indexes.includes(index) ? true : false}
            aria-controls={`AccordionSectionPanel_${index}`}
            aria-disabled={false}
            id={`AccordionSectionHeaderTitle_${index}`}
            tabIndex={0}
            onClick={() => handleClick(index)}
            onKeyDown={(e) => {
                console.log(e.key);
                switch (e.key) {
                    case 'Enter':
                    case ' ':
                        handleClick(index);
                        break;
                }
            }}
        >
            {children}
        </div>
    );
};

const AccordionSectionPanel = ({ children, index }: { index: number; children: React.ReactNode }) => {
    const { indexes } = useAccordion();
    const panelRef = useRef<HTMLDivElement>(null);
    return (
        <div
            data-component={AccordionSectionPanel.name}
            role="region"
            aria-labelledby={`AccordionSectionTitle_${index}`}
            id={`AccordionSectionPanel_${index}`}
            ref={panelRef}
            data-expanded={indexes.includes(index) ? 'true' : 'false'}
            style={{ maxHeight: indexes.includes(index) ? `${panelRef.current && panelRef.current.scrollHeight}px` : '0' }}
            className={`overflow-hidden 
        text-[var(--clr-foreground)]
        transition-all
        duration-300
        ease-out
        ${indexes.includes(index) ? 'opacity-100' : 'opacity-0'}
      `}
        >
            {children}
        </div>
    );
};

const AccordionSectionPanelContent = ({ children }: { children: React.ReactNode }) => {
    return (
        <div data-component={AccordionSectionPanelContent.name} className={['pb-5 px-0 '].join(' ')}>
            {children}
        </div>
    );
};

// ---------------------------------------------------------------------------------

Accordion.displayName = 'Accordion';

Accordion.Section = AccordionSection;
AccordionSection.displayName = 'Accordion.Section';

Accordion.SectionHeader = AccordionSectionHeader;
AccordionSectionHeader.displayName = 'Accordion.SectionHeader';

Accordion.SectionHeaderTitle = AccordionSectionHeaderTitle;
AccordionSectionHeaderTitle.displayName = 'Accordion.SectionHeaderTitle';

Accordion.SectionPanel = AccordionSectionPanel;
AccordionSectionPanel.displayName = 'Accordion.SectionPanel';

Accordion.SectionPanelContent = AccordionSectionPanelContent;
AccordionSectionPanelContent.displayName = 'Accordion.SectionPanelContent';

export { Accordion };
