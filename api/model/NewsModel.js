
class NewsModel
{
    static AllNewsData=[];


    logger1=()=>
    {
        console.log(NewsModel.AllNewsData)
    }
    
    
    getNews()
    {
        
        return NewsModel.AllNewsData;
    }
    setNewsData(data)
    {
        NewsModel.AllNewsData=data;
        this.logger1();
    }



}
module.exports={
    NewsModel
}