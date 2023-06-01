import {useApp} from "../../store/providers/AppProvider";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../store/Store";
import {setCurrentApp} from "../../store/slices/AppSlice";
import {useNavigate} from "react-router-dom";

export const Apps = () => {
    const appState = useApp({prefetch: true});
    const dispatch = useDispatch<AppDispatch>();
    const navigator = useNavigate();


    return <div className={`h-100`}>
        <h1 className={'p-0'}>Apps</h1>
        <div className={`row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xxl-5`}>
            {appState.allApps.data?.map(app=> <div className={`card`} onClick={()=> {dispatch(setCurrentApp(app.id)); navigator(app.id||'')}}>
                <div className={`card-body`}>
                    <b>{app.name}</b>
                </div>
            </div>)}
        </div>
    </div>
}