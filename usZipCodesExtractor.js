const axios = require('axios');  
const cheerio = require('cheerio');  
const fs = require('fs');  

const states = [
    { "AL": "Alabama" },
    { "AK": "Alaska" },
    { "AZ": "Arizona" },
    { "AR": "Arkansas" },
    { "CA": "California" },
    { "CO": "Colorado" },
    { "CT": "Connecticut" },
    { "DE": "Delaware" },
    { "DC": "District Of Columbia" },
    { "FL": "Florida" },
    { "GA": "Georgia" },
    { "HI": "Hawaii" },
    { "ID": "Idaho" },
    { "IL": "Illinois" },
    { "IN": "Indiana" },
    { "IA": "Iowa" },
    { "KS": "Kansas" },
    { "KY": "Kentucky" },
    { "LA": "Louisiana" },
    { "ME": "Maine" },
    { "MD": "Maryland" },
    { "MA": "Massachusetts" },
    { "MI": "Michigan" },
    { "MN": "Minnesota" },
    { "MS": "Mississippi" },
    { "MO": "Missouri" },
    { "MT": "Montana" },
    { "NE": "Nebraska" },
    { "NV": "Nevada" },
    { "NH": "New Hampshire" },
    { "NJ": "New Jersey" },
    { "NM": "New Mexico" },
    { "NY": "New York" },
    { "NC": "North Carolina" },
    { "ND": "North Dakota" },
    { "OH": "Ohio" },
    { "OK": "Oklahoma" },
    { "OR": "Oregon" },
    { "PA": "Pennsylvania" },
    { "RI": "Rhode Island" },
    { "SC": "South Carolina" },
    { "SD": "South Dakota" },
    { "TN": "Tennessee" },
    { "TX": "Texas" },
    { "UT": "Utah" },
    { "VT": "Vermont" },
    { "VA": "Virginia" },
    { "WA": "Washington" },
    { "WV": "West Virginia" },
    { "WI": "Wisconsin" },
    { "WY": "Wyoming" }
];  

const zipCodeList = [];  

const fetchZipCodes = async (state) => {  
  const stateName = Object.keys(state)[0];  
  const url = `https://simplemaps.com/us-zips/${stateName}`;  
  
  try {  
    const response = await axios.get(url);  
    if (response.status === 200) {  
      const htmlContent = response.data;  
      const $ = cheerio.load(htmlContent);  
      const zipCodes = [];  

      $('a[title="Click to learn more"]').each((_, element) => {  
        zipCodes.push($(element).text());  
      });  

      zipCodeList.push({ [stateName]: zipCodes });  
    }  
  } catch (error) {  
    console.error(`Error fetching data for ${stateName}:`, error.message);  
  }  
};  

const main = async () => {  
  for (const state of states) {  
    await fetchZipCodes(state);  
  }  

  // Write the result to a file  
  fs.writeFileSync("zip_codes.txt", JSON.stringify(zipCodeList, null, 2));  
  console.log('Zip codes have been successfully saved to zip_codes.txt');  
};  

main();