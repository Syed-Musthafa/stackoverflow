import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { requestAllJSData } from "../../services/api/factories/questions"



const initialState = {
    list: [],
    loading : false,
    error_message : ""
}

export const fetchAllJSData = createAsyncThunk('js-data', async(title) => {
    try {
        const response = await requestAllJSData(title)


        return response
    } catch (error) {
        console.log("error redux side", error);
    }
})

const JSQuestionSlice = createSlice({
    name : "questions",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchAllJSData.pending, (state) => {
            state.loading = true
        });

        builder.addCase(fetchAllJSData.fulfilled, (state, payload) => {

          const { payload : data} = payload;
                state.list = data
                state.loading = false;
            
        });

        builder.addCase(fetchAllJSData.rejected, (state, { error }) => {
            state.loading = false;
            // state.error_message = error.message?.toString()!;
        })
    }
})

export default JSQuestionSlice.reducer