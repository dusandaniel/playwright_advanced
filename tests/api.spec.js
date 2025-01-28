//const {test, expect} = require('@playwright/test');
import {test, expect, API_GET} from "@playwright/test";
//import {API_GET} from "@playwright/test";
import {faker} from "@faker-js/faker";



test.describe('API Tests', () => {

    const randomFirstName = faker.person.firstName();
    const randomLastname = faker.person.lastName();
    const randomNumber = faker.number.int(50);

    var token;

    test("GET request @api", async ({request}) => {
        //await API_GET(request);
        
 
        const response = await request.get("https://restful-booker.herokuapp.com/booking/2");
        expect(response.status()).toBe(200);
        
        //extrahuje telo odpovede zo servera vo formate json
        const body = await response.json();

        //prevedenie javascriptu do retazcu
        console.log(JSON.stringify(body));
        
        
    });


    test("GET request with params @api", async ({request}) => {

        //v api.config.ts mam zadefinovanu url v baseURL
        const response = await request.get("/booking", {
        params: {
            firstname: "Jane",
            lastname: "Doe"
        },

        });  
        expect(response.ok()).toBeTruthy();
        expect(response.status()).toBe(200);
        console.log(await response.json());

    });


    test("POST - create booking @api", async ({request})=>{
        const response = await request.post("/booking", {
            data:{
            "firstname" : "Dusan",
            "lastname" : "Daniel",
            "totalprice" : 111,
            "depositpaid" : true,
            "bookingdates" : {
                "checkin" : "2025-09-01",
                "checkout" : "2019-09-11"
            },
            "additionalneeds" : "Breakfast"
        }
        });
        console.log(await response.json());
        expect(response.ok()).toBeTruthy();
        expect(response.status()).toBe(200);

        const responseBody = await response.json();
        expect(responseBody.booking).toHaveProperty("firstname", "Dusan");
        expect(responseBody.booking).toHaveProperty("lastname", "Daniel");
        expect(responseBody.booking).toHaveProperty("totalprice", 111);

    });


    test("Dynamic update data @api", async ({request})=>{
        const response = await request.post("/booking", {
            data:{
            "firstname" : randomFirstName,
            "lastname" : randomLastname,
            "totalprice" : randomNumber,
            "depositpaid" : true,
            "bookingdates" : {
                "checkin" : "2025-09-01",
                "checkout" : "2019-09-11"
            },
            "additionalneeds" : "Breakfast"
        }
        });
        console.log(await response.json());
        expect(response.ok()).toBeTruthy();
        expect(response.status()).toBe(200);

        const responseBody = await response.json();
        expect(responseBody.booking).toHaveProperty("firstname", randomFirstName);
        expect(responseBody.booking).toHaveProperty("lastname", randomLastname);
        expect(responseBody.booking).toHaveProperty("totalprice", randomNumber);

    });

    test("PUT - update the booking details @api", async({request})=>{
        
        //najskor autorizacia
        const  response = await request.post("/auth", {
            data: {
                    "username" : "admin",
                     "password" : "password123"
            }
        })
        console.log(await response.json());
        expect(response.ok()).toBeTruthy();
        expect(response.status()).toBe(200);
        const responseBody = await response.json();
        token = responseBody.token;
        console.log("New token is: "+ token);

        //ideme robit update
        const updateRequest = await request.put("/booking/2", {
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "Cookie": `token=${token}`,  //zapis ako priradit hodnotu, pouizvaju sa spatne uvodznovky
                },

                data: {
                    "firstname" : "DusanD",
                    "lastname" : "DanielD",
                    "totalprice" : 1112,
                    "depositpaid" : true,
                    "bookingdates" : {
                        "checkin" : "2025-09-01",
                        "checkout" : "2019-09-11"
                    },
                    "additionalneeds" : "Breakfast"
                }

        })
        console.log(await updateRequest.json());
        expect(updateRequest.ok()).toBeTruthy();
        expect(updateRequest.status()).toBe(200);

        const updateResponseBody = await updateRequest.json();
        console.log(updateResponseBody);

        expect(updateResponseBody).toHaveProperty("firstname", "DusanD");
        expect(updateResponseBody).toHaveProperty("lastname", "DanielD");
        expect(updateResponseBody).toHaveProperty("totalprice", 1112);
        expect(updateResponseBody).toHaveProperty("depositpaid", true);

    });

    test("DELETE - delete the booking detail @api", async({request})=>{

                //najskor autorizacia
                const  response = await request.post("/auth", {
                    data: {
                            "username" : "admin",
                             "password" : "password123"
                    }
                })
                console.log(await response.json());
                expect(response.ok()).toBeTruthy();
                expect(response.status()).toBe(200);
                const responseBody = await response.json();
                token = responseBody.token;
                console.log("New token is: "+ token);


                const deleteRequest = await request.delete("/booking/4", {
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json",
                        "Cookie": `token=${token}`,  //zapis ako priradit hodnotu, pouizvaju sa spatne uvodznovky
                    },

                });

                expect(deleteRequest.status()).toBe(201);
                expect(deleteRequest.statusText()).toBe("Created");

    });

    test("Block requests @api", async({page, context})=>{
        // definuje pravidlo pre blokovanie poziadaviek pre subory jpg a png
        await context.route(/\.(jpg|png)$/, route => route.abort());
        await page.goto("/");
        await page.waitForURL("/");

    });

})