import {Locator, Page} from '@playwright/test';  //import tried a modulov, kroe budeme pouzivat

//definovanie triedy Login page
export class HomePage{
    page: Page;
    menu: Locator;
    title: Locator;
    item: Locator;
    addToCard: Locator;
    cardBadge: Locator;
    deleteButton: Locator;

    //konstruktor triedy
    constructor(page, Page){
        this.page = page;

        //inicializacia premennych
        this.menu = page.locator('#react-burger-menu-btn-name');
        this.title = page.getByText('Swag Labs');
        this.item = page.locator('#item_4_title_link'); //podla ID, ak ho element ma, pouzije sa #
        this.addToCard = page.locator('#add-to-cart-sauce-labs-backpack');
        this.cardBadge = page.locator('//span[@class="shopping_cart_badge"]');
        this.deleteButton = page.locator('#remove-sauce-labs-backpack');
    }
  

    //definovanie metod na pracu s tymito elementami
    async clickOnMenu(){
        await this.menu.click();
    }

    //metoda na vpisanie username
    async clickOnItem(){
        await this.item.click();
    }

       //metoda na kliknutie buttonu
    async clickOnAddToCard(){
        await this.addToCard.click();
    }

    async deleteFromCard(){
        await this.deleteButton.click();
    }

}

