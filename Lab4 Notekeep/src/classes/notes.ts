import { Note, NoteType } from "./note";


export class Notes {
    public notes: Note[] = [];

    constructor() {
       
    }

    addNote(note: Note) {
        
        this.notes.push(note)
    }

    removeNote(id: number) {
        this.notes.filter((el: Note) => el.id != id)
    }



}