import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios'


export const fetchStud = createAsyncThunk('posts/fetchStud', async ()=>{
    const {data} = await axios.get('/StudentAssociations');
    return data;
});

export const fetchRemoveStud = createAsyncThunk('posts/fetchRemoveStud', async (id)=>
    axios.delete(`/StudentAssociations/${id}`),
);


const initialState ={
    items:[],
    status: 'loading',
};

const studSlice = createSlice({
    name: 'stud',
    initialState,
    reducers: {},
    extraReducers: {
        // Получение статей
        [fetchStud.pending]: (state)=>{
            state.status = 'loading';
        },
        [fetchStud.fulfilled]: (state, action)=>{
            state.items = action.payload;
            state.status = 'loaded';
        },
        [fetchStud.rejected]: (state)=>{
            state.items = [];
            state.status = 'error';
        },
        // Удаление статьи
        [fetchRemoveStud.pending]: (state, action)=>{
            state.items = state.items.filter((obj) => obj._id !== action.meta.arg);
        },
    },
});

export const studReducer = studSlice.reducer;
