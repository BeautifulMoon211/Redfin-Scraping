const axios = require('axios');
const cheerio = require('cheerio');

const propertyList = []

const webScraper = async () => {
    try {
        const response = await axios.get("http://65.108.65.169:3000");

        const html = response.data;
        // console.log(html)

        const $ = cheerio.load(html);
        console.log('Extracting information from the HTML...');

        $(".chakra-text.css-1dkoegt").each((_, el) => {
            $(el).find('span') > 0 ? spans.each(
                (_, span) => { propertyList.push($(span).text().trim()); }
            ) : propertyList.push($(el).text().trim());
        });

    } catch (error) {
        console.log(error)
    }
    console.log(propertyList)
};

void webScraper();