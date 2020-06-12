import React from "react";
import { OutTable } from "react-excel-renderer";
import { Card } from "reactstrap";

function SheetTable(props) {
  return (
    <div>
      <Card className="restrict-card">
        <OutTable
          data={props.rows}
          columns={props.cols}
          tableClassName="ExcelTable"
          tableHeaderRowClass="heading"
        />
      </Card>
    </div>
  );
}
export default SheetTable;
