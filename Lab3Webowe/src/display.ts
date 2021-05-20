import { IRender } from './interfaces';
import Util from './utils';
export class Display implements IRender {

    private loc: string;

    constructor(loc: string) {
        this.loc = loc;

    }
    // public render = (): void => {
    //     console.log('rendering')
    //     this.displayPlate(JSON.parse(sessionStorage.getItem('data')));
    // }

    public render = (): void => {
        let elemToRemoveFrom = document.getElementById(this.loc);
        let elemToRemove = document.querySelector(`#${this.loc} >div `);
        if (elemToRemove) {
            elemToRemoveFrom.removeChild(elemToRemove)
        }

        this.displayPlate();
    }
    public displayPlate = (): void => {

        let data = JSON.parse(sessionStorage?.getItem('data'));
        console.log(data)
        if (data.cod === 200) {

            /* 
            1. display date and time,
            2.  name and city 
            3.  temperature in both f and c     
           */
            let mainDiv = document.createElement('div');

            let arrr = [`Miejscowość: ${data.name}`, `Kraj: ${data.sys.country}`, `Data: ${Util.Date()}`, `Temperatura w ${String.fromCharCode(176)}F: ${Util.TemperatureInF(data.main.temp)} `, `Temperatura w ${String.fromCharCode(176)}C: ${Util.TemperatureInC(data.main.temp)}`]

            arrr.forEach(element => {
                let i = document.createElement('div');
                i.innerHTML = element;
                mainDiv.appendChild(i);
            });
            document.getElementById(this.loc).appendChild(mainDiv);
        } else {
            let elem = document.createElement('div');
            elem.innerHTML = "Proszę podać odpowiednią lokalizację"
            document.getElementById(this.loc).appendChild(elem);
        }

    }




}

