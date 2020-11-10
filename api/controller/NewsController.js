newsData=require('../model/NewsModel');

/**
 * will be called after getting requests from client side website to fetch daily 
 * server data.
 */
getNewsData=(req,res,next)=>{
   
    news = new newsData.NewsModel();
    var data=news.getNews();
    
    res.status(201).json({
            message:"All news of are fetched successfully",
            data
        })
    .catch((error)=>{
        console.log(error.message)
        res.status(404).json({
            message:"news failed to fetch ",
            
        })
    });

   

}
module.exports.getNewsData=getNewsData;