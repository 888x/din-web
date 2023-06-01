import {App} from "./App";

export interface Tag {
    id: string,
    name: string,
    description: string
    app?: App
}