import {EventRepo} from "../../../../repo/EventRepo";
import {useEffect, useState} from "react";
import {useApp} from "../../../../store/providers/AppProvider";
import {Event} from "../../../../model/Event";

export const AppEvents = () => {
    const [events, setEvents] = useState<Event[]>([])
    const appState = useApp();

    useEffect(()=> {
        if (appState.currenApp) {
            loadEvents(appState.currenApp)
        }
    }, [appState.currenApp])
    const loadEvents = (appId: string) => {
        EventRepo.fetchEvents(appId).then(res=> {
            setEvents(res.data||[])
        })
    }
    return <div>
        <table className={`table`}>
            <thead>
            <tr>
                <th>Type</th>
                <th>Key</th>
                <th>Message</th>
                <th>Tags</th>
            </tr>
            </thead>

            <tbody>
            {events.map((event: Event)=> <tr><td>{event.type}</td><td>{event.key}</td><td>{event.message}</td>
                <td>{event.tags.map(tag=> <span className={`me-1 badge bg-info text-dark`}>{tag.name}</span>)}</td></tr>)}
            </tbody>
        </table>
    </div>
}