import { Note } from "./classes/note";
import { Notes } from "./classes/notes";


export interface IAppStorage {
    
    readNotes: () => any;
    saveNote: (note: Note) => void;
    removeNote: (element: string) => void;
    changeNote: (element: string , note:Note) => void;
}