

export class Input {
    public input: HTMLInputElement;
    private location: HTMLElement;

    constructor(location: string) {
        this.location = document.getElementById(location);
        this.createAndDisplayInput();
    }

    createAndDisplayInput = () => {
        let elem = document.createElement('input');
        this.input = elem;
        this.location.appendChild(this.input)



    }
}