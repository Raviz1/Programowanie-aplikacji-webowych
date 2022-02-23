import { displayPartsToString } from 'typescript';
import { Display } from './display';
const API_KEY = '50d53005c0fd5f556bb4ef15224c4209';

export const apiCall = (location: string) => {
    const openWeatherUrl = `http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${API_KEY}`;
    postData(openWeatherUrl).then(data => {
        // console.log('BEFORE API CALL BEFORE WRITING TO SESSION STORAGE', sessionStorage)
        saveSessionStorage(data)
        // console.log('AFTER API CALL BEFORE WRITING TO SESSION STORAGE', sessionStorage)

    }).catch(e => alert(e))
}

async function postData(url = '', data = {}) {
    // Default options are marked with *
    try {
        const response = await fetch(url);
        if (response.status !== 200) {
            new Error("There is no city like that! Check your syntax.")
        }
        return response.json();

    }
    catch (e) {
        // TODO : ERROR HANDLING
        console.error("ERROR:", e)
    }

}

const saveSessionStorage = (data: object) => {
    if (sessionStorage.getItem('data') !== null) {
        sessionStorage.clear();
    }
    sessionStorage.setItem('data', JSON.stringify(data))

    /// you need to rerender after session storage was already changed 
    // new Display('display').render();


}


