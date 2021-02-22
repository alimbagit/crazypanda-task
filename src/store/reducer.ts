import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { IElementTable } from 'models';
import { loadObjects } from 'services';
import { sortObjects } from 'services/utils'

interface TableState {
    elements: IElementTable[],
    sortDirection: 'asc' | 'desc' | false,
    sortField: string;
    fieldsTable: string[];
}

const initialState: TableState = {
    elements: [],
    sortDirection:false,
    sortField: "",
    fieldsTable: ["2222","3333","4444"]
}

export const fetchLoadElements = createAsyncThunk(
    'actionOnTable/fetchLoadElements',
    async () => {
      const response = await loadObjects();
      console.log("lOAD")
      return response;
    }
  );

export const reducerTable = createSlice({
    name: 'actionOnTable',
    initialState,
    reducers: {
        sort: (state, action:PayloadAction<string>) => {
            state.elements=sortObjects(action.payload,state.elements,state.sortDirection);
        }
    },
    extraReducers:{
        [fetchLoadElements.name]: (state, action:PayloadAction<IElementTable[]>)=>{
            state.fieldsTable=Object.keys(action.payload[0])
            state.elements=action.payload;
            console.log("lOAD")
        }
    }
})

export const { sort } = reducerTable.actions
export default reducerTable.reducer