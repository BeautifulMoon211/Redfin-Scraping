const redfinPropertyScraper = require('./redfinPropertyScraper')

const API_KEY = process.env.API_KEY // <--- Enter your API key here
const REDFIN_PAGE_URL = 'https://www.redfin.com/city/12839/DC/Washington-DC';

redfinPropertyScraper(API_KEY, REDFIN_PAGE_URL)