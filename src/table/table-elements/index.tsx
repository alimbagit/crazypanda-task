import React from "react";
import {
  TableBody,
  TableCell,
  TableRow,
} from "@material-ui/core";
import { ElementTable } from "models";


interface ITableElements{
  elementsTable: ElementTable[];
}

/**Формирует для каждого объекта строку таблицы */
const TableElements = ({elementsTable}:ITableElements) => {

  return (
    <TableBody>
      {elementsTable.map((row, index) => (
        <TableRow key={index}>
          {Object.values(row).map((field, ind) => (
            <TableCell key={ind}>{field}</TableCell>
          ))}
        </TableRow>
      ))}
    </TableBody>
  );
};

export default TableElements;
