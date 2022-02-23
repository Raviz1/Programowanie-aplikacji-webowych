import { apiCall } from './apiCalls';
import { Display } from './display';
export class Input {
    // private where: string;
    // private dis: Display;
    // constructor(where: string) {
    //     this.where = where;
    //     this.dis = new Display("display");

    // }


    // public render = (): void => {
    //     let elem = document.createElement('input');
    //     elem.addEventListener('input', (e: any) => {

    //         apiCall(e.target.value)


    //     })
    //     document.getElementById(this.where).appendChild(elem);
    // }

    constructor() {

    }
    returnInput(): HTMLDivElement {
        let inputDiv = document.createElement("div");
        let divTitle = document.createElement("h1");
        let inputTitle = document.createElement("input");
        let inputContent = document.createElement("input");
        let inputColor = document.createElement("input")
        let toggle = document.createElement("button")
        let accept = document.createElement("button")
        inputDiv.className = "input"
        toggle.addEventListener("click", (el: MouseEvent) => {
            this.toggleInput(el.target as HTMLButtonElement)
        })
        accept.textContent = "Add!"
        divTitle.textContent = "Create A Note"
        toggle.textContent = "<"
        accept.id = "addNote"
        inputTitle.placeholder = "TITLE OF A NOTE"
        inputContent.placeholder = "Content OF A NOTE"
        inputColor.setAttribute("type", "color")
        inputColor.value = "#00FF00"
        inputDiv.appendChild(toggle)
        inputDiv.appendChild(divTitle)
        inputDiv.appendChild(inputTitle)
        inputDiv.appendChild(inputContent)
        inputDiv.appendChild(inputColor)
        
     
        inputDiv.appendChild(accept)
        return inputDiv
    }
    toggleInput(button: HTMLButtonElement) {
        if (button.textContent === "<") {
            button.parentElement.style.right = "0";
            button.textContent = ">"
        } else {
            button.parentElement.style.right = "-300px";
            button.textContent = "<"
        }
    }
 

}