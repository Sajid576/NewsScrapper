const express = require('express');
const router  = express.Router();
const newsController=require('../controller/NewsController');

//GET: for fetching all news of a particular day
router.get('/news',newsController.getNewsData);

module.exports=router;