const {expect} = require('@playwright/test');
module.exports = {playwrightPerformance, playwrightPerformanceGETrequest, playwrightPerformancePUTrequest, API_GET}

var token;

async function playwrightPerformance(page) {
  await page.goto('https://playwright.dev/');
  await page.getByRole('link', { name: 'Get started' }).click();
  await expect(page).toHaveURL('https://playwright.dev/docs/intro');
}


async function playwrightPerformanceGETrequest({request}) {

  const response = await request.get("https://restful-booker.herokuapp.com/booking", {
    params: {
        firstname: "Jane",
        lastname: "Doe"
    },
  });  
  console.log(await response.json());

  }


  async function playwrightPerformancePUTrequest({request}) {

    const  response = await request.post("https://restful-booker.herokuapp.com/auth", {
      data: {
              "username" : "admin",
               "password" : "password123"
      }
  })
    //console.log(await response.json());
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    token = responseBody.token;


    //ideme robit update
    const updateRequest = await request.put("https://restful-booker.herokuapp.com/booking/3", {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Cookie": `token=${token}`,  //zapis ako priradit hodnotu, pouizvaju sa spatne uvodznovky
            },

            data: {
                "firstname" : "DusanDa",
                "lastname" : "DanielDa",
                "totalprice" : 3333,
                "depositpaid" : true,
                "bookingdates" : {
                    "checkin" : "2025-09-01",
                    "checkout" : "2019-09-16"
                },
                "additionalneeds" : "Breakfast"
            }

    })
    //console.log(await updateRequest.json());
    expect(updateRequest.ok()).toBeTruthy();
    expect(updateRequest.status()).toBe(200);

    const updateResponseBody = await updateRequest.json();
    //console.log(updateResponseBody);

    expect(updateResponseBody).toHaveProperty("firstname", "DusanDa");
    expect(updateResponseBody).toHaveProperty("lastname", "DanielDa");
    expect(updateResponseBody).toHaveProperty("totalprice", 3333);
    expect(updateResponseBody).toHaveProperty("depositpaid", true);
  
    }

    
  async function API_GET({request}){

    const response = await request.get("https://restful-booker.herokuapp.com/booking/2");
        expect(response.status()).toBe(200);
        
        //extrahuje telo odpovede zo servera vo formate json
        const body = await response.json();

        //prevedenie javascriptu do retazcu
        console.log(JSON.stringify(body));

        }

