import { IAppStorage } from "../interfaces";
import { initializeApp } from "@firebase/app";
import { addDoc, collection, getDocs, getFirestore, query, where, deleteDoc, doc, updateDoc } from "@firebase/firestore";
import { Note } from "./note";
import { Notes } from "./notes";


export class AppFireStorage {

    private firebaseConfig = {

        apiKey: "AIzaSyD5H8K7yJw94Ugs120HhmBc2ojNoMMHeMY",

        authDomain: "webowe-73486.firebaseapp.com",

        projectId: "webowe-73486",

        storageBucket: "webowe-73486.appspot.com",

        messagingSenderId: "1000055678603",

        appId: "1:1000055678603:web:e600865d5d8f5830bf968e",

        measurementId: "G-19ERDYHMP7"

    };
    private db: any;
    private app: any;
    private key: string;
    public notes: Notes = new Notes();
    constructor() {
        this.app = initializeApp(this.firebaseConfig);
        this.db = getFirestore()
        this.key = "collection"
    }


    async saveNote(note: Note) {
        try {
            const docRef = await addDoc(collection(this.db, this.key), {
                id: note.id,
                title: note.title,
                content: note.content,
                color: note.color,
                isPinned: note.isPinned,
                date: note.dateCreation
            })
            console.log("Document written with ID: ", docRef.id);

        } catch (e: unknown) {
            console.error(e)
        }
    }



    async readNotes() {

        await getDocs(collection(this.db, this.key)).then((e: any) => {

            e.forEach((doc: any) => {
                // const newNote = {
                //     id: doc.id,
                //     title: doc.data().title,
                //     content: doc.data().content,
                //     color: doc.data().color,
                //     pinned: doc.data().pinned,
                //     date: doc.data().data
                // } 
                let note = new Note({ title: doc.data().title, content: doc.data().content, color: doc.data().color, isPinned: doc.data().isPinned, dateCreation: doc.data().dateCreation, id: doc.id, })
                // AppFirestoreStorage.loadedNotes.push(new Note(newNote))
                this.notes.notes.push(note)

            })
        })
        return new Promise((resolve, reject) => {
            resolve(
                this.notes
            )
        })
    }
    async changeNote(element: string, note: Note) {
        const washingtonRef = doc(this.db, this.key, element);
        // res.isPinned = !res.isPinned;
        console.log(note)
        // Set the "capital" field of the city 'DC'
        await updateDoc(washingtonRef, {
            id: element,
            title: note.title!,
            content: note.content,
            color: note.color,
            isPinned: !note.isPinned,
            dateCreation: note.dateCreation

        }).then((e)=>console.log(e));

    }
    async removeNote(element: string) {
        console.log(element)
        // let index = this.notes.notes.find((el : Note) => el.id === +element).id
        await deleteDoc(doc(this.db, this.key, element)).then((e: any) => {
            console.log(e)
        });
    }

}