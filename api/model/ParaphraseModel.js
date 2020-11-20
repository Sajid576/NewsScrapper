var unirest = require("unirest");

var req = unirest("POST", "https://paraphrasing-tool1.p.rapidapi.com/api/rewrite");

req.headers({
	"content-type": "application/json",
	"x-rapidapi-key": "2d154b882dmshc3e32451fa03a28p1500efjsnc77001e1684e",
	"x-rapidapi-host": "paraphrasing-tool1.p.rapidapi.com",
	"useQueryString": true
});

req.type("json");

async function generateParaphraseList(originalNewsData)
{
    //var lel=await generateParaphrase("He is a good man.He does his job nicely");
    //console.log(lel);
    
    modifiedNewsData=[];
    try {
        for(var i=0;i<originalNewsData.length;i++)  
        {
            var val = originalNewsData[i];
            var heading= val['heading'];
            var summary= val['summary'];
            var text= heading+"."+summary;
            var modifiedText=await generateParaphrase(text);
            //console.log(modifiedText);
            var modifiedHeading= modifiedText.split(".")[0];
            var modifiedSummery= modifiedText.split(".")[1];
            modifiedNewsData.push({
                'heading':modifiedHeading,
                'summary':modifiedSummery,
                'link':val['link']
            })
           
        }
        return modifiedNewsData;
       
    } catch (error) {
        console.log(error.message);
    }
    
    

}

async function generateParaphrase(input){
    
    req.send({
        "sourceText":input
    });
    
    return new Promise((resolve, reject)=>{
        req.end(function (res) {
            if (res.error){
                reject(res.error);
            }
            else
            {
                resolve(res.body['newText']);
            } 
            
        });

    })
    
    
}

module.exports={
    generateParaphraseList
}
