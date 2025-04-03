import { Heading, Layout, Divider } from 'lib/components';

const DividerExample = () => {
    return (
        <>
            <Heading variation="h5" size="level2">
                Divider (horizontal)
            </Heading>
            <Layout>
                hello
                <Divider variation="horizontal" />
                world
            </Layout>

            <Heading variation="h5" size="level2">
                Divider labelled (horizontal)
            </Heading>
            <Layout>
                hello
                <Divider variation="horizontal">OR</Divider>
                world
            </Layout>

            <Heading variation="h5" size="level2">
                Divider (vertical)
            </Heading>
            <Layout>
                <div style={{ height: '300px', background: `rgba(255, 0, 0, 0.5)` }} className="flex flex-start items-start">
                    hello
                    <Divider variation="vertical" />
                    world
                </div>
            </Layout>

            <Heading variation="h5" size="level2">
                Divider labelled (vertical)
            </Heading>
            <Layout>
                <div style={{ height: '300px', background: `rgba(255, 0, 0, 0.1)` }} className="flex flex-start items-start">
                    hello<Divider variation="vertical">OR</Divider>
                    world
                </div>
            </Layout>
        </>
    );
};
export default DividerExample;
