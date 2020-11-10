# NewsScrapper

(For scrapping data)
```
$ npm i --save cheerio
```
(For sending request from my API to third-party website)
```
$ npm i --save request
```

## API Documentation:
```
1) GET  /NewsScrapApi/news
```
```
   Response JSON object:

      - message(string): successful
      - data(list): It contains the list of objects that contains articles information.
                 - title(string): title of article
                 - link(string): URL of the detail page of the article.
                 - summery(string): summery paragraph of the article.
 ```                
                 


## References:
- https://fidget.dev/posts/read-the-new-york-times-for-free-using-nodejs-scraper/
- https://www.youtube.com/watch?v=M2edy0vDovo (tutorial for building a Web Scraper with Node.js and Cheerio)
- https://zenscrape.com/how-to-build-a-simple-proxy-rotator-in-node-js/
- https://www.sslproxies.org (This website is used for collecting fake IP addresses and port numbers)
- https://www.youtube.com/watch?v=M2edy0vDovo (tutorial for working with Cheerio module)
