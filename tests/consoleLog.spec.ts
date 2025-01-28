import test, { expect } from '../fixtures/basePages';


test.describe('Console log errors', () => {

    test('Page has no errors on logs', async({page}) =>{

            const logs = [] as any; //vytvorenie pola
            page.on ("console", (message) =>{
                return logs.push({message, type: message.type()});
            })
            
            const errors = [] as any;
            page.on("pageerror", (exception) =>{
                errors.push(exception);
            })

            await page.goto('https://demoqa.com/');
            console.log(logs);
            //z tejto asercie si spravime SOFT, aby nam test ak padne na tomto kroku, pokracoval dalaj
            expect.soft(logs.length).toBe(0);

            //na stranke nechcem ziadne chyby
            console.log(errors);
            expect(errors.length).toBe(0);
    });



})