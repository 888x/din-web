import {Route, Routes} from "react-router-dom"
import {Apps} from "./apps/Apps";
import {AppDashboard} from "./apps/dashboard/AppDashboard";

export const Index = () => {
    return <div className={`h-100`}>

        <Routes>
            <Route path={"/"} element={<div>Nothing</div>} />
            <Route path={"/app"} element={<Apps />} />
            <Route path={"/app/:id*"} element={<AppDashboard />} />
        </Routes>
    </div>
}