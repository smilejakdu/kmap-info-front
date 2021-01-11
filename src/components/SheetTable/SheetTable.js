import React from 'react';
import './SheetTable.scss';

const SheetTable = ({ cols, rows }) => {
  console.log(rows);
  console.log(cols);
  return (
    <div className='sheet_body'>
      <table className='table'>
        <thead className='header_color fixed_top'>
        <tr>
          {cols.map((col) => (
            <th
              scope='col'
              className='cols_header header_color fixedHeader'
              key={col.key}
            >
              {col.name}
            </th>
          ))}
        </tr>
        </thead>
        <tbody>
        {rows.map((r, i) => (
          <tr key={i}>
            <td key={i} className='row_border'>
              {i}
            </td>
            {cols.map((c) => (
              <td key={c.key} className='row_border'>
                {r[c.key]}
              </td>
            ))}
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
};
export default SheetTable;
