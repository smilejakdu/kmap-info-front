import React from 'react';
import './SheetTable.scss';


const SheetTable = ({ cols, rows }) => {
// sheet 데이터를 전달 받는다 
// sheet 데이터를 전달 받고 cols 는 헤더 rows 는 바디에 데이터 전달을한다 
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
