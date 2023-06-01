import {Link, Route, Routes, useParams} from "react-router-dom";
import {AppHome} from "./home/AppHome";
import {AppEvents} from "./events/AppEvents";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../../store/Store";
import {removeCurrentApp, setCurrentApp} from "../../../store/slices/AppSlice";
import {useEffect} from "react";
import {useApp} from "../../../store/providers/AppProvider";
import app from "../../../App";

export const AppDashboard = () => {
    const dispatch = useDispatch<AppDispatch>();
    const params = useParams<{id: string}>();
    const appState = useApp({prefetch: true});
    useEffect(()=> {
        if (params.id && !appState.currenApp) {
            dispatch(setCurrentApp(params.id))
        }
    }, [params.id])
    return <div className={`d-flex`}>
        <div className={`d-flex flex-column`}>
            <Link className={`btn btn-sm`} to={""}>Home</Link>
            <Link className={`btn btn-sm`} to={"events"}>Events</Link>
            <button className={`btn btn-sm`} onClick={()=> {
                dispatch(removeCurrentApp())
            }}>Switch App</button>
        </div>
        <div className={`flex-fill`}>
            <Routes>
                <Route path={"/"} element={<AppHome />} />
                <Route path={"events"} element={<AppEvents />} />
            </Routes>
        </div>
    </div>
}