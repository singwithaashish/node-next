import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    blogIdtoUpdate: null,
    allBlogs: [],
    showCreate: false,
    apiUrl: 'https://stark-spire-21384.herokuapp.com'
}

export const stateSlice = createSlice({
    name: 'all',
    initialState,
    reducers: {
        setBlogIdtoUpdate: (state, action) => {
            state.blogIdtoUpdate = action.payload
            console.log(state.blogIdtoUpdate)
        },
        setAllBlogs: (state, action) => {
            state.allBlogs = action.payload
        },
        setShowCreate: (state, action) => {
            state.showCreate = action.payload
        }

    }
})

export const { setBlogIdtoUpdate, setAllBlogs, setShowCreate } = stateSlice.actions

export default stateSlice.reducer

