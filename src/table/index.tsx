import React, { useState } from "react";
import {
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
  TablePagination,
  Paper,
} from "@material-ui/core";
import { sortObjects, filterObjects } from "services/utils";
import TableElements from "./table-elements";
import { ElementTable } from "models";
import SearchLine from "./search-line";

export interface ITable {
  elements: ElementTable[];
}

/**На экран в табличном виде одноуровненвый список объектов */
const MyTable = ({ elements }: ITable) => {
  const [rowsTable, setRowsTable] = useState(elements);//Строки таблицы
  const [filterRowsTable, setFilterRowsTable] = useState(rowsTable);//Строки таблицы
  const [searchText, setSearchText] = useState(''); //Текст фльтра
  const [fieldsTable, setFieldsTable] = useState(Object.keys(elements[0])); //Поля таблицы
  const [sortField, setSortField] = useState(fieldsTable[0]); //Поле сортировки
  const [sortDirection, setSortDirection] = useState<false | "asc" | "desc">(
    false
  ); //Вектор сортировки
  const [page, setPage] = useState(0); //Текущая страница
  const [rowsPerPage, setRowsPerPage] = useState(50);
  
  const sortHandler = (field: string) => {
    if (field === sortField) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
      setFilterRowsTable(sortObjects(field, filterRowsTable, sortDirection));
    } else {
      setFilterRowsTable(
        sortObjects(
          field,
          filterRowsTable,
          sortDirection === "asc" ? "desc" : "asc"
        )
      );
      setSortField(field);
    }
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleFilter=(text:string)=>{
    setSearchText(text);
    setFilterRowsTable(filterObjects(text,rowsTable));
  }  

  return (
    <Paper>
      <SearchLine callbackSearchText={handleFilter} searchText={searchText} />
      <TableContainer>
        <Table>
          {/* Формируем заголовок таблицы */}
          <TableHead>
            <TableRow>
              {fieldsTable.map((field, index) => (
                <TableCell key={index} sortDirection={sortDirection}>
                  <TableSortLabel
                    active={sortField === field}
                    direction={sortDirection || undefined}
                    onClick={() => sortHandler(field)}
                  >
                    {field.toLocaleUpperCase()}
                  </TableSortLabel>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableElements elementsTable={filterRowsTable.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)} />
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[50, 25, 10]}
        component="div"
        count={filterRowsTable.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default MyTable;
