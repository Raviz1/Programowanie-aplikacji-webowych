import { IRender } from "./interfaces";
import { apiCall } from './apiCalls';
import { Display } from './display';
export class Input implements IRender {
    private where: string;
    private dis: Display;
    constructor(where: string) {
        this.where = where;
        this.dis = new Display("display");

    }


    public render = (): void => {
        let elem = document.createElement('input');
        elem.addEventListener('input', (e: any) => {

            apiCall(e.target.value)


        })
        document.getElementById(this.where).appendChild(elem);
    }
}