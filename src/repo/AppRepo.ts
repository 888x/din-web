import {ApiResponse} from "../model/ApiResponse";
import {App} from "../model/App";
import axiosClient from "../config/AxiosClient";

export class AppRepo {
    static fetchApps = (): Promise<ApiResponse<App[]>> => {
        return new Promise((resolve, reject)=> {
            axiosClient.get<App[]>("/apps").then(res=> {
                resolve({data: res.data, status: "success"})
            }).catch((err)=> resolve({status: 'failed', error: err}))
        })
    }
}