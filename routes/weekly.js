var express = require('express');
var router = express.Router();

const alphavantageClient = require('../public/javascripts/alfavantage-client')

router.get('/:symbol', async function(req, res, next) {

    var symbol = req.params.symbol;
    let response = await alphavantageClient.getWeekly(symbol);
    res.send(response)
});


module.exports = router;