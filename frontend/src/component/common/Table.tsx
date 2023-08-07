import { get } from "lodash";

import styled from "styled-components";

import { FlexBox } from "../common";

interface schema {
  name: string;
  style?: object;
  displayName: string;
  renderer?: (data: any) => void;
}

interface TableProps<T> {
  tableData: T[];
  tableSchema: schema[];
}

const TableWrapper = styled.div`
  overflow-x: auto;

  table {
    width: 100%;
    height: 100%;
    border-spacing: 0;
  }

  .f-wrap {
    flex-wrap: wrap;
  }

  .header-cell {
    font-size: var(--font-md);
    padding: var(--spacing-4x);
    background: var(--color-grey-100);
    font-weight: var(--fontWeight-semibold);
    border-left: 1px solid var(--color-grey-300);
    border-bottom: 1px solid var(--color-grey-300);
  }

  .cell {
    padding: var(--spacing-2x) var(--spacing-4x);
    border-left: 1px solid var(--color-grey-300);
    border-bottom: 1px solid var(--color-grey-300);
  }
`;

export const Table = <T,>({ tableData, tableSchema }: TableProps<T>) => (
  <TableWrapper>
    <table id="table">
      <thead>
        <tr>
          {tableSchema?.map((schema, index: number) => (
            <th
              style={schema?.style}
              className="header-cell"
              key={`th_${index}`}
            >
              <FlexBox className="f-wrap">{schema?.displayName}</FlexBox>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableData?.map((data: any, tableRowIndex: number) => (
          <tr key={`row_${tableRowIndex}`}>
            {tableSchema?.map((schema, tableCellIndex) => (
              <td
                className="cell"
                style={schema.style}
                key={`row_${tableRowIndex}_cell_${tableCellIndex}`}
              >
                <FlexBox align="center" className="f-wrap">
                  {schema.renderer
                    ? schema.renderer(data)
                    : get(data, schema?.name || schema?.displayName)}
                </FlexBox>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </TableWrapper>
);
