import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import { Card, TabbedCard } from 'lib/components';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <>
            <Card>
                <Card.Title>hi</Card.Title>
                <Card.Content>hello</Card.Content>
            </Card>
            <TabbedCard componentName="hi">
                <TabbedCard.Code>'hi'</TabbedCard.Code>
                <TabbedCard.Preview>
                    <>hi</>
                </TabbedCard.Preview>
            </TabbedCard>
        </>
    </StrictMode>
);
