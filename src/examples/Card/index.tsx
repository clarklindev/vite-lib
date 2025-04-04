import { Card, Divider } from 'lib/components';

const CardExample = () => {
    return (<Card>
        <Card.Title>this is the title</Card.Title>
        <Divider />
        <Card.Content>this is content</Card.Content>
    </Card>);
};

export default CardExample;
