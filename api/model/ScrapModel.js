

const got = require('got');
const cheerio=require('cheerio')
var newsModel=require('./NewsModel')
var EventEmitter = require('events')
var ee = new EventEmitter()



 

class ScrapModel
{
    static base='http://www.thedailystar.net';
    static websiteURL='http://www.thedailystar.net/newspaper';
   
    
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
      try {
        const response = await got(ScrapModel.websiteURL);
        //console.log(response.body);
        var $ = cheerio.load(response.body);
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
        //console.log(articles);
        //ScrapModel.buildDetailNews();
        
        var news=new newsModel.NewsModel();
        news.setNewsData(articles);
        news.generateParaphrasedNewsData(articles);
        console.log(articles.length);

    } catch (error) {
        console.log(error.response.body);
        //=> 'Internal server error ...'
    }
     
       
       
        
    }
    
    
    

}
module.exports={
    ScrapModel
}