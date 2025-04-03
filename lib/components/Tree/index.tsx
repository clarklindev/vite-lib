import { useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { Icon, Label } from 'lib/components';
import { ChevronRightIcon, ChevronDownIcon } from 'lib/icons';

interface TreeNodeCommonProps {
    label: string;
}

interface TreeNodeProps extends TreeNodeCommonProps {
    children: Array<TreeNodeProps | TreeEndNodeProps>;
}

interface TreeEndNodeProps extends TreeNodeCommonProps {
    path: string;
}

type TreeProps = {
    data: Array<TreeNodeProps | TreeEndNodeProps>;
    depth?: number;
};

const Tree = ({ data, depth = 0 }: TreeProps) => {
    const [childrenVisible, setNodeVisible] = useState<string[]>([]);

    const openNodeHandler = (depth: number, index: number) => {
        console.log(`depth: ${depth}, index:${index}`);
        const found = childrenVisible.includes(`${depth}-${index}`);
        if (found) {
            // filter-out
            //if index is in the activeIndexes array... remove it
            setNodeVisible(childrenVisible.filter((path) => path !== `${depth}-${index}`));
        } else {
            //or add
            //add to activeIndexes = Set is unique values
            setNodeVisible([...new Set([...childrenVisible, `${depth}-${index}`])]);
        }
    };

    return data.map((item, index: number = 0) => {
        if (item.hasOwnProperty('children')) {
            //TreeNode
            const { label, children } = item as TreeNodeProps;
            const childRef = useRef<HTMLDivElement | null>(null);
            const depthAndIndexStr = `${depth}-${index}` as string;

            return (
                <TreeContainer data-component={Tree.displayName} key={`depth_${depth}_index_${index}`}>
                    <button onClick={() => openNodeHandler(depth, index)}>
                        <Label label={label}>
                            <Icon size="M">{childrenVisible.includes(depthAndIndexStr) ? <ChevronDownIcon /> : <ChevronRightIcon />}</Icon>
                        </Label>
                    </button>
                    <Node
                        ref={childRef}
                        // scrollHeight={String(childRef?.current?.scrollHeight)}
                        style={{ display: 'flex', flexDirection: 'column' }}
                        data-expanded={childrenVisible.includes(`${depth}-${index}`) ? 'true' : 'false'}
                    >
                        <Tree data={children} depth={depth + 1} />
                    </Node>
                </TreeContainer>
            );
        }

        if (item.hasOwnProperty('path')) {
            //TreeEndNode
            const { label, path } = item as TreeEndNodeProps;
            return (
                <NavLink to={path} key={`depth_${depth}_index_${index}`}>
                    {label}
                </NavLink>
            );
        }
    });
};

Tree.displayName = 'Tree';
export { Tree };
// ------------------------------------------------------------------------------------------------------------------------------------------------

const TreeContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
    align-items: flex-start;
`;

const Node = styled.div`
    box-sizing: border-box;
    margin-left: 6px;
    padding-left: 15px;
    border-left: 1px solid currentColor;
    display: block;

    &[data-expanded='false'] {
        visibility: hidden;
        opacity: 0;
        transition: all 0.1s ease-out;
        max-height: 0px;
    }

    &[data-expanded='true'] {
        visibility: visible;
        opacity: 1;
        transition: all 0.1s ease-out;
        max-height: auto;
    }
`;
