import styled from 'styled-components';

type Align = 'left' | 'right' | 'center' | 'justify' | undefined;

type Header = {
    width: string;
    alignHeader?: Align;
    alignContent?: Align;
    title: string;
    mapToDataAttribute: string;
};

export type TableProps = {
    headers: Array<Header>;
    data: Array<any>;
    configure: {
        padding: string;
        align: string; //vertical align of text
    };
};

const TableContainer = styled.table<{ gridTemplateColumns: string }>`
    width: 100%;
    overflow-x: auto;
    display: grid;

    tr {
        display: grid;
        grid-template-columns: ${({ gridTemplateColumns }) => gridTemplateColumns.replace(/fr/gi, 'px')};
    }

    th,
    td {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap; /* Prevent text from wrapping by default */
    }

    @media (min-width: 1024px) {
        tr {
            grid-template-columns: ${({ gridTemplateColumns }) => gridTemplateColumns};
        }
    }
`;

const Table = ({ headers, data, configure }: TableProps) => {
    const columns = headers.map((each) => each.width).join(' ');
    console.log('columns: ', columns);
    return (
        <TableContainer className="border border-gray-400/50" gridTemplateColumns={columns}>
            <thead>
                <tr>
                    {headers.map((header, headerindex) => {
                        return (
                            <th className={configure.padding} key={headerindex} style={{ verticalAlign: 'top' }} align={header['alignHeader']} title={header['title']}>
                                {header['title']}
                            </th>
                        );
                    })}
                </tr>
            </thead>
            <tbody>
                {data.map((item, rowindex) => {
                    return (
                        <tr key={rowindex}>
                            {headers.map((header, index) => {
                                return (
                                    <td className={[configure.padding, configure.align].join(' ')} align={header['alignContent']} key={index} title={item[header['mapToDataAttribute']]}>
                                        {item[header['mapToDataAttribute']]}
                                    </td>
                                );
                            })}
                        </tr>
                    );
                })}
            </tbody>
        </TableContainer>
    );
};

Table.displayName = 'Table';
export { Table, type Header };
