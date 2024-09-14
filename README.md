<h1 align="center">Redfin-Scraping</h1>
<a href="https://www.redfin.com">
  <div align="center">
    <br><img align-"center" src="https://raw.githubusercontent.com/BeautifulMoon211/Redfin-Scraping/auxiliary/Redfin%20Logo.png" width='200'/>
  </div><br>
</a>

>This project is mainly used to collect business and customer data from [Redfin.com](https://www.redfin.com/city/12839/DC/Washington-DC/apartments-for-rent) for getting information of real estate property.

### Why Redfin?
Redfin is a well-known real estate company founded in Seattle, Washington, in 2004 by David Eraker, Michael Dougherty, and David Selinger. Since its inception, Redfin has expanded its operations to over 90 markets across the United States and now boasts more than 1000 agents, all headquartered in the same city. 

The company has consistently put the needs of its clients first, which has earned it multiple accolades and acknowledgements. Redfin has been named one of the most innovative companies in the world by Fast Company, and it has received numerous awards for its commitment to customer service.

<a href="https://www.redfin.com">
  <div align="center">
    <img align-"center" src="https://www.legendproperties.net/wp-content/uploads/2024/03/2-7-2-1024x576.webp" width='75%'/>
  </div>
</a>

The company has consistently put the needs of its clients first, which has earned it multiple accolades and acknowledgements. Redfin has been named one of the most innovative companies in the world by Fast Company, and it has received numerous awards for its commitment to customer service. 

Overall, Redfin is a prominent player in the real estate industry, and its unwavering focus on its customers has helped it become one of the most successful and respected companies in the business. 

Using the [Best Scraper](https://github.com/BeautifulMoon211/Redfin-Scraping) for [Best Real Estate Company](https://realestate.usnews.com/real-estate/agents/top-real-estate-companies/usa).



## Redfin Scraper
> You can scrape all real estate information of Redfin classfied by zipcodes including price, number of bedrooms, bathrooms, space, address, phone number, etc.
<a href="https://www.redfin.com">
  <div align="center">
    <img align-"center" src="https://raw.githubusercontent.com/BeautifulMoon211/Redfin-Scraping/auxiliary/back.jpg" width='70%'/>
  </div>
</a>

### ZipCode Extractor
[Simplemaps](https://simplemaps.com) provides zipcodes in the specific state. This popular map includes zoomable states, state labels and latitude and longitude markers.

<a href="https://simplemaps.com/us-zips/RI/">
  <div align="center">
    <img align-"center" src="https://raw.githubusercontent.com/BeautifulMoon211/Redfin-Scraping/auxiliary/simplemaps.png" width='70%'/>
  </div>
</a>

**Example :**
```
"RI": [02802, 02804, 02806, 02807, 02808, 02809, 02812, 02813, 02814, 02815, 02816, 02817, 02818, 02822, 02823, 02824, 02825, 02826, 02827, 02828, 02829, 02830, 02831, 02832, 02833, 02835, 02836, 02837, 02838, 02839, 02840, 02841, 02842, 02852, 02857, 02858, 02859, 02860, 02861, 02863, 02864, 02865, 02871, 02872, 02873, 02874, 02875, 02876, 02878, 02879, 02881, 02882, 02885, 02886, 02888, 02889, 02891, 02892, 02893, 02894, 02895, 02896, 02898, 02903, 02904, 02905, 02906, 02907, 02908, 02909, 02910, 02911, 02912, 02914, 02915, 02916, 02917, 02918, 02919, 02920, 02921]
```
**Live Demo for ZipCode Extractor is [here](https://raw.githubusercontent.com/BeautifulMoon211/Redfin-Scraping/main/zip_codes.txt)** 

### Redfin Property Scraper
You can gather all real estate information from Redfin, including price, number of bedrooms and bathrooms, square footage, address, and phone number, organized by the zip codes you previously extracted.

<a href="https://simplemaps.com/us-zips/RI/">
  <div align="center">
    <img align-"center" src="https://raw.githubusercontent.com/BeautifulMoon211/Redfin-Scraping/auxiliary/state%20search.png" width='70%'/>
  </div>
</a>

- *Price:* 1.950/mo
- *number of beds:* 3 beds
- *number of baths:* 1 bath
- *space:* 1,125 Sq Ft
- *Located address:* 221 Knight St Unit 1,Providence, RI 02909
- *Website link:* https://www.redfin.com/RI/Providence/221-Knight-St-02909/unit-1/home/191943122
- *Phone number:* +1 (401) 365-4205


| Price        | Number of Beds | Number of Baths | Space        | Located Address                          | Website Link                                                                                       | Phone Number        |
|--------------|----------------|------------------|--------------|------------------------------------------|----------------------------------------------------------------------------------------------------|----------------------|
| $1,950/mo    | 3 beds         | 1 bath           | 1,125 Sq Ft  | 221 Knight St Unit 1, Providence, RI 02909 | https://www.redfin.com/RI/Providence/221-Knight-St-02909/unit-1/home/191943122  | +1 (401) 365-4205    |
| $1,892+ /mo  | 1-2 beds       | 1 bath           | 661-1,141 Sq Ft | 299 Carpenter St, Providence, RI 02909 | https://www.redfin.com/RI/Providence/Grant-Mill-Lofts/apartment/177410453     | +1 (401) 228-8015    |
| $1,800/mo    | 1 bed          | 1 bath           | 800 Sq Ft    | 51 Chapin Ave, Providence, RI 02909    | https://www.redfin.com/RI/Providence/51-Chapin-Ave-02909/apartment/51697187    | +1 (401) 862-9078    |
|...|...|...|...|...|...|...|

**Live Demo for Redfin Property Scraper is [here](https://www.loom.com/share/1e85458edbbd4649bbacdb0f5243fc2b?sid=e28864d4-3170-4da2-ac3c-187cc9d38df2)** 

## Project Info
### Author 
Sweem

### Developers
 - [Sweem](https://github.com/BeautifulMoon211)
 - [Johnson Takashi](https://github.com/HighAmbition211)

### Version
1.0.0

### License
This project is licensed under the MIT License - see the [LICENSE](https://github.com/BeautifulMoon211/Redfin-Scraping/blob/main/LICENSE) file for details.

<h3>
    If you found this project useful or interesting, please consider giving it a 
    <a href="https://github.com/BeautifulMoon211/Yelp-Scraping">
        <img src="https://raw.githubusercontent.com/HighAmbition211/HighAmbition211/refs/heads/auxiliary/others/star.gif" style="width:25px"> 
        Star
    </a>, or 
    <a href="https://github.com/BeautifulMoon211/">
        Following
    </a> 
    me.
    If you'd like to use this template, feel free to 
    <a href="https://github.com/BeautifulMoon211/Redfin-Scraping/fork">
        Fork
    </a> 
    it and customize it to your needs!
</h3>