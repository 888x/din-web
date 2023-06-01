import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {App} from "../../model/App";
import {AppRepo} from "../../repo/AppRepo";
import {ApiResponse} from "../../model/ApiResponse";

export interface AppState {
    allApps: ApiResponse<App[]>
    currenApp?: string
}

const initState: AppState = {allApps: {status: 'idle'}}
export const AppSlice = createSlice({
    name: "appSlice", initialState: initState, reducers: {
        setCurrentApp: (state, action: PayloadAction<string>) => {
            state.currenApp = action.payload
        },
        removeCurrentApp: (state) => {
            state.currenApp = undefined
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAllApps.fulfilled, (state, action) => {
            state.allApps = action.payload;
        })
            .addCase(fetchAllApps.pending, (state, action) => {
                state.allApps = {status: 'loading'};
            })
    }
});

export const fetchAllApps = createAsyncThunk('apps/fetchApps', async () => {
    return await AppRepo.fetchApps()
});

export const {setCurrentApp, removeCurrentApp} = AppSlice.actions;
export default AppSlice.reducer;