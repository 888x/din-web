import {Tag} from "./Tag";
import {App} from "./App";

export interface Event {
    id: string;
    message: string;
    key: string;
    stackTrace: string;
    tags: Tag[];
    app?: App;
    createdDate: string;
    updatedDateL: string;
    active: boolean;
    type: EventType
}

export enum EventType {
    Info= "Info", Error="Error", Warning= "Warning", Other= "Other"
}