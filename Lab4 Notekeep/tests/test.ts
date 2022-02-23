

import { AppStorage } from "../src/classes/appstorage";
import { Note } from "../src/classes/note";
import { Notes } from "../src/classes/notes";



beforeEach(() => {
    localStorage.clear();
    jest.clearAllMocks();


});
describe("testy jednostkowe", () => {
    test("Inicjacja pustego obiektu", () => {
        const testNotes = new Notes();

        expect(testNotes.notes).toHaveLength(0)

    })
    test("Stworzenie notatni powinno byc notatką ", () => {
        const note = new Note({ title: "Adrian", content: "Ścibisz", color: "gray", isPinned: true })

        const testNote = new Note(note)
        expect(testNote).toMatchObject(note)
    })
    test("Dodawania notatki do notatek", () => {
        const testNotes = new Notes();
        const note = new Note({ title: "Adrian", content: "Ścibisz", color: "gray", isPinned: true })
        const testNote1 = new Note(note)
        const testNote2 = new Note(note)
        const testNote3 = new Note(note)

        testNotes.addNote(testNote1)
        testNotes.addNote(testNote2)
        testNotes.addNote(testNote3)

        expect(testNotes.notes).toHaveLength(3)
        expect(testNotes.notes[0]).toMatchObject(note)
    })
    test("Zmiana notatki", () => {
        const notatkaPrzed = new Note({ title: "Adrian", content: "Ścibisz", color: "gray", isPinned: true, id: 1 })
        const notatkaPo = new Note({ title: "Adrian", content: "Ścibisz", color: "gray", isPinned: false, id: 1 })
        const storage = new AppStorage();
        storage.notes.notes.push(notatkaPrzed)
        storage.notes.notes[0].isPinned = !storage.notes.notes[0].isPinned

        expect(storage.notes.notes[0]).toMatchObject(notatkaPo)
    })
    test("Usuwanie notatki", ()=>{
        const notatkaPrzed = new Note({ title: "Adrian", content: "Ścibisz", color: "gray", isPinned: true, id: 1 })
        const notatkaPo = new Note({ title: "Adrian", content: "Ścibisz", color: "gray", isPinned: false, id: 2 })
        const storage = new AppStorage();
        storage.notes.notes.push(notatkaPrzed)
        storage.notes.notes.push(notatkaPo)




        storage.removeNote("1")
        expect(storage.notes.notes).toHaveLength(2)
    })
})


///  pupeteer


import 'expect-puppeteer'

describe('Puppeteer-tests', () => {

    beforeAll(async () => {
        await page.goto('file:///C:/Users/Ohgodwhy/Desktop/TEMPCODING/Adrian%20%C5%9Acibisz/Lab4%20Notekeep/dist/index.html')
    })

    // it('Go inside and check for a notekeep stuff', async () => {
    //     await expect(page).toMatch('Notekeep')
    // })
    it('Screen strony głównej ', async () => {
        await page.screenshot({ path: 'mainPage.png' });
    })
    it('Otwarcie panelu  ', async () => {
        await page.click('.input > button:nth-child(1)')

    })
    it('Screen panelu', async () => {
        await page.screenshot({ path: './with-popup.png' });
    })
    it('Wypełnienie', async () => {
        await page.evaluate(() => {
            const title = document.querySelector('.input > input:nth-child(3)') as HTMLInputElement;
            title.value = 'test@example.com';
            const content = document.querySelector('.input > input:nth-child(4)') as HTMLInputElement;
            content.value= "test content"
          
          });
          await expect(page).toClick('button', { text: 'Add!' })
          await page.click('#addNote')
    })
    it('Do a screenshot', async () => {
        await page.screenshot({ path: './filled-form.png' });
    })

    it("Sprawdzenie czy notatka istnieje", async ()=>{
        const myContent = await page.$eval('div#pinned', (e) =>e.innerHTML);
        console.log(myContent)
        expect(myContent).toEqual('<div id="1" class="note" style="background-color: rgb(0, 255, 0);"><h1>test@example.com</h1><p>test content</p><input type="checkbox" class="repin"><button class="remove">remove</button></div><div id="2" class="note" style="background-color: rgb(0, 255, 0);"><h1>test@example.com</h1><p>test content</p><input type="checkbox" class="repin"><button class="remove">remove</button></div>')
    })

})