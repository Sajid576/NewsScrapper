const paraModel = require('./ParaphraseModel')

class NewsModel
{
    static scrappedNewsData=[];
    static modifiedNewsData=[];

    logger1=()=>
    {
        console.log(NewsModel.scrappedNewsData)
    }
    logger2=()=>
    {
        console.log(NewsModel.modifiedNewsData)
    }
    
    getNews()
    {
        
        return NewsModel.scrappedNewsData;
    }
    setNewsData(data)
    {
        NewsModel.scrappedNewsData=data;
        this.logger1();
    }
    async generateParaphrasedNewsData(articles)
    {   
        const generatedData=await paraModel.generateParaphraseList(articles);
        NewsModel.modifiedNewsData=generatedData;
        this.logger2();
    }


}
module.exports={
    NewsModel
}