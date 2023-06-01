import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../Store";
import {ProviderProps} from "./ProviderProps";
import {useEffect} from "react";
import {fetchAllApps} from "../slices/AppSlice";

export const useApp = (props?: ProviderProps) => {
    const appState = useSelector((state: RootState) => state.app);
    const dispatch = useDispatch<AppDispatch>();
    useEffect(()=> {
        if (props?.prefetch && dispatch && appState.allApps.status === 'idle') {
            dispatch(fetchAllApps());
        }
    }, [dispatch, props?.prefetch])
    return appState;
}