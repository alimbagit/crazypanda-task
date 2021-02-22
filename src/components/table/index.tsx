import React, { useEffect } from 'react';
import { Table as TableMaterial, TableBody, TableCell, TableContainer, TableHead, TableRow, TableSortLabel } from "@material-ui/core";
import { useAppSelector, useAppDispatch } from 'store/hooks';
import { fetchLoadElements, sort } from 'store/reducer';


const Table = () => {
  const fieldsTable = useAppSelector(state => state.reducerTable.fieldsTable);
  const sortField = useAppSelector(state => state.reducerTable.sortField);
  const sortDirection = useAppSelector(state => state.reducerTable.sortDirection);

  const dispatch = useAppDispatch();
  const createSortHandler = (field: string) => {
    dispatch(sort(field))
  }

  useEffect(() => {
    dispatch(fetchLoadElements());
  },[]);

  return (
    <TableHead >
      <TableRow>
        {fieldsTable.map((field, index) => (
          <TableCell
            key={index}
            align={'left'}
            sortDirection={sortDirection}
          >
            <TableSortLabel
              active={sortField === field}
              direction={sortDirection || undefined}
              onClick={() => createSortHandler(field)}
            >
              {field}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  )
};

export default Table;