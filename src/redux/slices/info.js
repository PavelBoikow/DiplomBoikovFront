import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios'


export const fetchInfo = createAsyncThunk('posts/fetchInfo', async ()=>{
    const {data} = await axios.get('/info');
    return data;
});

export const fetchRemoveInfo = createAsyncThunk('posts/fetchRemoveInfo', async (id)=>
    axios.delete(`/info/${id}`),
);


const initialState ={
    items:[],
    status: 'loading',
};

const infoSlice = createSlice({
    name: 'info',
    initialState,
    reducers: {},
    extraReducers: {
        // Получение статей
        [fetchInfo.pending]: (state)=>{
            state.status = 'loading';
        },
        [fetchInfo.fulfilled]: (state, action)=>{
            state.items = action.payload;
            state.status = 'loaded';
        },
        [fetchInfo.rejected]: (state)=>{
            state.items = [];
            state.status = 'error';
        },
        // Удаление статьи
        [fetchRemoveInfo.pending]: (state, action)=>{
            state.items = state.items.filter((obj) => obj._id !== action.meta.arg);
        },
    },
});

export const infoReducer = fetchInfo.reducer;
