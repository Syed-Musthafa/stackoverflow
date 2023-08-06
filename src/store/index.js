import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import JSQuestionSlice from '../store/reducers/applicationData'

const store = configureStore({
    reducer : {
        question : JSQuestionSlice
    },
    // middleware : (getDefaultMiddleware) => {
    //     getDefaultMiddleware ({
    //         serializableCheck : false
    //     })
    // }

})

export default store;
