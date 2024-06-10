import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios'


export const fetchPosts = createAsyncThunk('posts/fetchPosts', async ()=>{
    const {data} = await axios.get('/posts');
    return data;
});
export const fetchTags = createAsyncThunk('posts/fetchTags', async ()=>{
    const {data} = await axios.get('/tags');
    return data;
});
export const fetchRemovePost = createAsyncThunk('posts/fetchRemovePost', async (id)=>
    axios.delete(`/posts/${id}`),
);
export const fetchPostsPop = createAsyncThunk('posts/fetchPostsPop', async ()=>{
    const {data} = await axios.get('/posts/popularity');
    return data;
});

const initialState ={
    post: {
        items:[],
        status: 'loading',
    },
    tags: {
        items:[],
        status: 'loading',
    },
};

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: {

        // Получение статей
        [fetchPosts.pending]: (state)=>{
            state.post.status = 'loading';
        },
        [fetchPosts.fulfilled]: (state, action)=>{
            state.post.items = action.payload;
            state.post.status = 'loaded';
        },
        [fetchPosts.rejected]: (state)=>{
            state.post.items = [];
            state.post.status = 'error';
        },
        // Получение популярных статей
        [fetchPostsPop.pending]: (state)=>{
            state.post.status = 'loading';
        },
        [fetchPostsPop.fulfilled]: (state, action)=>{
            state.post.items = action.payload;
            state.post.status = 'loaded';
        },
        [fetchPostsPop.rejected]: (state)=>{
            state.post.items = [];
            state.post.status = 'error';
        },
        // Получение тэгов
        [fetchTags.pending]: (state)=>{
            state.tags.items = [];
            state.tags.status = 'loading';
        },
        [fetchTags.fulfilled]: (state, action)=>{
            state.tags.items = action.payload;
            state.tags.status = 'loaded';
        },
        [fetchTags.rejected]: (state)=>{
            state.tags.items = [];
            state.tags.status = 'error';
        },
        // Удаление статьи
        [fetchRemovePost.pending]: (state, action)=>{
            state.post.items = state.post.items.filter((obj) => obj._id !== action.meta.arg);
        },
    },
});

export const postsReducer = postsSlice.reducer;
