import React from "react";
import { Schema } from "../../types";

const Table = ({
  data,
  schema,
  onRowClick,
}: {
  data: any[];
  schema: Schema<any>[];
  onRowClick: (value: any) => void;
}) => {
  return (
    <table>
      <thead>
        <tr>
          {schema.map((item, index) => (
            <th key={`heading-${index}`}>{item.text}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        {data.map((rowData: any, rowIndex: any) => (
          <tr key={`table-row-${rowIndex}`} onClick={() => onRowClick(rowData)}>
            {schema.map((item, index) => (
              <td key={`table-row-${rowIndex}-data-${index}`}>
                {item?.accessor ? rowData[item?.accessor] : null}{" "}
                {item.render ? item.render(rowData, item.functions) : null}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
