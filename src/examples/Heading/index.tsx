import { Heading } from 'lib/components/Heading';

const HeadingExample = () => {
    return (
        <>
            <Heading as="h1" className="text-6xl">
                H1 heading
            </Heading>
            <Heading as="h2" className="text-4xl">
                H2 heading
            </Heading>
            <Heading as="h3" className="text-3xl">
                H3 heading
            </Heading>
            <Heading as="h4" className="text-2xl">
                H4 heading
            </Heading>
            <Heading as="h5" className="text-xl">
                H5 heading
            </Heading>
            <Heading as="h6" className="text-m">
                H6 heading
            </Heading>
        </>
    );
};

export default HeadingExample;
