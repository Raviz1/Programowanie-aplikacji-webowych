

export type NoteType = {
    id?: number | string,
    title: string,
    content: string,
    color: string,
    isPinned: boolean
    dateCreation?: Date
}

export class Note {
    public id: number | string;
    public title: string;
    public content: string;
    public color: string;
    public isPinned: boolean;
    public dateCreation: Date;

    constructor({ title, content, color, isPinned, dateCreation, id }: NoteType) {
        this.title = title;
        this.content = content;
        this.color = color;
        this.isPinned = isPinned;
        this.dateCreation = new Date();
        this.id = id
    }

    returnNoteDiv(): HTMLDivElement {
        let note = document.createElement("div");
        let title = document.createElement("h1")
        let content = document.createElement("p")
        let pin = document.createElement("input");
        pin.setAttribute("type", "checkbox");
        pin.className="repin"
        let remove = document.createElement("button");
        note.id = this.id.toString();
        note.style.backgroundColor = this.color;
        note.className="note"

        title.textContent = this.title;
        content.textContent = this.content;
        pin.checked = this.isPinned;
        remove.textContent = "remove";
        remove.className = "remove"
        note.appendChild(title)
        note.appendChild(content)
        note.appendChild(pin)
        note.appendChild(remove)
        return note
    }
}