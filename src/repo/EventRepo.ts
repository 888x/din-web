import {ApiResponse} from "../model/ApiResponse";
import axiosClient from "../config/AxiosClient";
import {Event} from "../model/Event";

export class EventRepo {
    static fetchEvents = (appid: string): Promise<ApiResponse<Event[]>> => {
        return new Promise((resolve, reject)=> {
            axiosClient.get<Event[]>(`/apps/${appid}/events`).then(res=> {
                resolve({data: res.data, status: "success"})
            }).catch((err)=> resolve({status: 'failed', error: err}))
        })
    }
}