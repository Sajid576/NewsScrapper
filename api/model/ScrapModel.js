
const request=require('request');
const cheerio=require('cheerio')
var newsModel=require('./NewsModel')
var EventEmitter = require('events')
var ee = new EventEmitter()



 

class ScrapModel
{
    static base='https://www.thedailystar.net';
    static websiteURL='https://www.thedailystar.net/newspaper';
   
    
    constructor()
    {
      ScrapModel.listenNewsUpdate();
      /*ee.on('message', function (text) {
       
      });

      //10 sec interval
      setInterval(()=>{
          ee.emit('message', 'hello world');
      },30000);*/
    }  
   
    
    static async listenNewsUpdate()
    {
        
      request(ScrapModel.websiteURL, function (error, response, body) {
        if(error){
            console.error('error:', error); // Print the error if one occurred
        }
        var $ = cheerio.load(body);
        var articles=[];
        $('.list-content').each(function(i,item) {
            //var post=$(this).text().trim().replace(/\s\s+/g, '');
            var heading= $(this).find("h5 a").text().trim().replace(/\s\s+/g, '');
            var summery= $(this).find("p").text().trim().replace(/\s\s+/g, '');
            var link= ScrapModel.base+$(this).find("h5 a").attr('href');
            

            articles.push({
              'heading':heading,
              'link':link,
              'summary':summery
            });
        });
        console.log(articles);
        ScrapModel.buildDetailNews();
        
        // var news=new newsModel.NewsModel();
        // news.setNewsData(postItems);
        //console.log(postItems.length);


      });
       
       
        
    }
    
    
    

}
module.exports={
    ScrapModel
}