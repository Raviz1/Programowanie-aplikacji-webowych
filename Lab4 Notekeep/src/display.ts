import { NoEmitOnErrorsPlugin } from 'webpack';
import { Note } from './classes/note';
import { Notes } from './classes/notes';
import { DEFAULTS } from './defaults';
import { Input } from './input';
import Util from './utils';
// ! removing implements IRender
export class Display {

    private loc: HTMLDivElement;
    private pinned: HTMLDivElement = document.createElement("div");
    private unPinned: HTMLDivElement = document.createElement("div");
    private input: Input = new Input();
    constructor(loc: string) {
        this.loc = document.getElementById(loc) as HTMLDivElement;
        this.loc.style.position = "relative"
        // create 2 sections 
        this.createSections();
        this.loc.appendChild(this.input.returnInput());

    }
    // public render = (): void => {
    //     console.log('rendering')
    //     this.displayPlate(JSON.parse(sessionStorage.getItem('data')));
    // }


    private createSections() {

        this.pinned.style.backgroundColor = DEFAULTS.display.pinned.backgroungColor;
        this.pinned.id = DEFAULTS.display.pinned.class
        this.unPinned.style.backgroundColor = DEFAULTS.display.unPinned.backgroungColor
        this.unPinned.id = DEFAULTS.display.unPinned.class
        this.loc.appendChild(this.pinned)
        this.loc.appendChild(this.unPinned)
    }

    renderNotes(notes: Notes) {
        document.getElementById("pinned").innerHTML = "";
        document.getElementById("unpinned").innerHTML = "";
        notes.notes.forEach((el: Note) => {
            if (el.isPinned) {
                this.pinned.appendChild(el.returnNoteDiv())
            } else {
                this.unPinned.appendChild(el.returnNoteDiv())
            }
        })
    }

    changeNote(element: string) {
        console.log(element)
        let move = document.getElementById(element)


        if (move.className == "unpin") {
            // ? idz do pinned klasy
            let moveTo = document.getElementById("pinned")
            move.className = "pin"
            moveTo.insertBefore(move, null)
            // document.getElementById('pinned').appendChild(move);
        } else {
            //? idz do unpinned klasy
            let moveTo = document.getElementById("unpinned")
            move.className = "unpin"
            moveTo.insertBefore(move, null)

            // document.getElementById('unpinned').appendChild(move);
        }
        console.log(move, moveTo)
    }

    removeNote(element: string) {
        document.getElementById(element).remove()
    }
    // public render = (): void => {
    //     let elemToRemoveFrom = document.getElementById(this.loc);
    //     let elemToRemove = document.querySelector(`#${this.loc} >div `);
    //     if (elemToRemove) {
    //         elemToRemoveFrom.removeChild(elemToRemove)
    //     }

    //     this.displayPlate();
    // }
    // public displayPlate = (): void => {

    //     let data = JSON.parse(sessionStorage?.getItem('data'));
    //     console.log(data)
    //     if (data.cod === 200) {

    //         /* 
    //         1. display date and time,
    //         2.  name and city 
    //         3.  temperature in both f and c     
    //        */
    //         let mainDiv = document.createElement('div');

    //         let arrr = [`Miejscowość: ${data.name}`, `Kraj: ${data.sys.country}`, `Data: ${Util.Date()}`, `Temperatura w ${String.fromCharCode(176)}F: ${Util.TemperatureInF(data.main.temp)} `, `Temperatura w ${String.fromCharCode(176)}C: ${Util.TemperatureInC(data.main.temp)}`]

    //         arrr.forEach(element => {
    //             let i = document.createElement('div');
    //             i.innerHTML = element;
    //             mainDiv.appendChild(i);
    //         });
    //         document.getElementById(this.loc).appendChild(mainDiv);
    //     } else {
    //         let elem = document.createElement('div');
    //         elem.innerHTML = "Proszę podać odpowiednią lokalizację"
    //         document.getElementById(this.loc).appendChild(elem);
    //     }

    // }




}

