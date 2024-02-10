import {createSlice} from "@reduxjs/toolkit"

const userSlice = createSlice({
    name:"user",
    initialState:{
        currentUser : null,
        isFectching: false,
        error: false
    },
    reducers:{
       loginStart:(state)=>{
          state.isFectching = true;
       },
       loginSuccess:(state, action)=>{
          state.isFectching = false;
          state.currentUser = action.payload;
       },
       loginFailure:(state)=>{
          state.isFectching = false;
          state.error = true;
       }
    },
});

export const { loginStart, loginSuccess, loginFailure } = userSlice.actions
export default userSlice.reducer;