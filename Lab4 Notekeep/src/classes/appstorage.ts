import { ScriptElementKind } from "typescript";
import { IAppStorage } from "../interfaces";
import { Note } from "./note";
import { Notes } from "./notes";

export class AppStorage implements IAppStorage {

    public notes: Notes = new Notes();
    constructor() { }
    saveNote(note: Note) {
        window.localStorage.setItem(`Note${note.id}`, JSON.stringify(note))
    }
    readNotes(): Note[] {
        let values = Object.keys(localStorage)
            .filter((key) => key.startsWith("Note"))
            .map((key) => JSON.parse(localStorage[key]));
        values.forEach((el: Note) => {
            let note = new Note({ title: el.title, content: el.content, color: el.color, isPinned: el.isPinned, dateCreation: el.dateCreation, id: el.id })
            this.notes.addNote(note)
        })

    
        return this.notes.notes
    }
    changeNote(element: string, note: Note) {
        let res = this.notes.notes.find((el: Note) => el.id === +element)
        res.isPinned = !res.isPinned;
        window.localStorage.setItem(`Note${res.id}`, JSON.stringify(res))
    }
    removeNote(element: string) {
        localStorage.removeItem(`Note${element}`)
    }
}