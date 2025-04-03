//new
import { Tree } from 'lib/components';

// only endnodes can be links
const TreeExample = () => {
    const data = [
        {
            label: 'A',
            children: [{ label: 'childroute', path: '/404' }]
        },
        {
            label: 'B',
            children: [{ label: 'childroute', path: '/404' }]
        },
        {
            label: 'C',
            children: [{ label: 'childroute', path: '/404' }]
        }
    ];

    // requires data to be structured with "label" and "children" properties
    return (
        <>
            <Tree data={data}></Tree>
        </>
    );
};

export default TreeExample;
