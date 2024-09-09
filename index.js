const axios = require('axios');
const cheerio = require('cheerio');

const REDFIN_PAGE_URL = 'https://www.redfin.com/city/5155/CO/Denver/apartments-for-rent';
const API_URL = 'https://api.scraperapi.com';
const API_KEY = '5895fb6ca5cef34e820cca3250e1ef0b' // <--- Enter your API key here

const webScraper = async () => {
    console.log('Fetching data with ScraperAPI...');

    const queryParams = new URLSearchParams({
        api_key: API_KEY,
        url: REDFIN_PAGE_URL,
        country_code: 'us'
    });

    try {
        const response = await axios.get(`${API_URL}?${queryParams.toString()}`);
        const html = response.data;
        const $ = cheerio.load(html);
        const propertyList = [];
        console.log('Extracting information from the HTML...');

        $(".HomeCardContainer").each((_, el) => {
            const price = $(el).find('.bp-Homecard__Price--value span').text();
            const beds = $(el).find('.bp-Homecard__Stats--beds.text-nowrap').text();
            const bath = $(el).find('.bp-Homecard__Stats--baths.text-nowrap').text();
            const space = $(el).find('.bp-Homecard__LockedStat--value').text();
            const address = $(el).find('bp-Homecard__Address--address') > 0 ? 
                $(el).find('.bp-Homecard__Address--address').text() : 
                $(el).find('.bp-Homecard__Address').text();
            const link = $(el).find('.link-and-anchor.visuallyHidden').attr('href');
            const linkText = $(el).find('.link-and-anchor.visuallyHidden').text();
            const contact = $(el).find('.RentalCTAContact__button--phone .ButtonLabel').text();
            // const title = $(el).find('.chakra-heading css-xmh85b')

            if (!price) {
                return
            }

            propertyList.push({
                price,
                address: address ?? linkText,
                beds,
                bath,
                space,
                link: link ? `https://www.redfin.com${link}` : null,
                contact
            });
        });
        console.log('JSON result:', propertyList);
    } catch (error) {
        console.log(error)
    }
};

void webScraper();