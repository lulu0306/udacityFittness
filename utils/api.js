import {AsyncStorage} from 'react-native'
import {CALENDAR_STORAGE_KEY,formatCalendarResults} from './_calendar'

export function fetchCalendarResults(){
    return AsyncStorage.getItem(CALENDAR_STORAGE_KEY)
    .then(formatCalendarResults)
}

export function submitEntry({extry,key}){
    return AsyncStorage.mergeItem(CALENDAR_STORAGE_KEY,JSON.stringify({
        [key]:submitEntry,
    }))
}

export function removeEntry(key){
    return AsyncStorage.getItem(CALENDAR_STORAGE_KEY)
    .then((results) =>{
        const data = JSON.parse(results)
        data[key] = undefined
        AsyncStorage.setItem(CALENDAR_STORAGE_KEY,JSON.stringify(data))
    })
}