import { Input } from './input';
import { Display } from './display';
import { Notes } from './classes/notes';
import { Note } from './classes/note';
import { AppStorage } from './classes/appstorage';
import { displayPartsToString, textChangeRangeIsUnchanged } from 'typescript';
import { AppFireStorage } from './classes/AppFirestoreStorage';
import { whereToSave } from './config';
class App {

    private notes: Notes;
    private display: Display;
    private storage
    constructor() {
        console.log("starting app")

        // this.notes = new Notes();
        // const note = new Note({ title: "Witek", content: "Lipowski", color: "gray", isPinned: true })
        // this.notes.addNote(note)


        this.storage = new AppFireStorage();
        this.display = new Display("display");
        this.notes = new Notes();
        //! tutaj dodać zmianę za pomocą zmiennej 

        if (whereToSave === "firebird") {
            this.storage.readNotes().then((d: any) => {
                this.display.renderNotes(d)
                this.notes = d
                this.changeNote();
                this.removeNote();
            })
        } else {
            this.storage = new AppStorage()
            this.notes.notes = this.storage.readNotes();
        }



        this.display.renderNotes(this.notes)
        document.getElementById("addNote").addEventListener("click", () => {
            this.addNote();
        })
        this.changeNote();
        this.removeNote();
    }

    changeNote() {
        document.querySelectorAll(".repin").forEach((element: HTMLElement) => {
            element.addEventListener("click", () => {
                // this.notes.changeNote(element.parentElement.id)
                let res = this.notes.notes.find((el: Note) => el.id == element.parentElement.id)

                this.display.changeNote(element.parentElement.id)
                this.storage.changeNote(element.parentElement.id, res)
            })
        })
    }

    addNote() {
        let inputs = document.querySelectorAll(".input>input") as NodeListOf<HTMLInputElement>

        const note = new Note({ title: inputs[0].value, content: inputs[1].value, color: inputs[2].value, isPinned: true, dateCreation: new Date(), id: this.notes.notes.length + 1 })
        this.notes.addNote(note)
        console.log(note)
        this.display.renderNotes(this.notes)
        this.storage.saveNote(note)
        // console.log(inputs)
    }
    removeNote() {
        document.querySelectorAll(".remove").forEach((element: HTMLElement) => {
            element.addEventListener("click", () => {
                this.display.removeNote(element.parentElement.id)
                this.storage.removeNote(element.parentElement.id)
                console.log()
            })
        })
    }
}

const test = new App();