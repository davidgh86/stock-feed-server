const axios = require('axios');
const alfavantageApiKey = 'demo';

const uri = 'https://www.alphavantage.co/query';

getCommonResponse = async function(type, symbol, fullOutputSize = false){
    
    let outputsize = fullOutputSize ? 'full':'compact'
    let params = {
        function: type,
        symbol: symbol,
        outputsize: outputsize,
        apikey: alfavantageApiKey
      }
    let response = await axios.get(uri, {
            params: params
           });
    return response.data;
};

exports.getIntraday = async function(symbol, interval, fullOutputSize = false){
    if (interval !== 1 && interval !== 5 && interval !== 15 && interval !== 30 && interval !== 60) {
        throw "Parameter interval must be 1, 5, 15, 30 or 60";
    }
    let outputsize = fullOutputSize ? 'full':'compact'
    let params = {
        function: 'TIME_SERIES_INTRADAY',
        symbol: symbol,
        interval: interval+'min',
        outputsize: outputsize,
        apikey: alfavantageApiKey
      }
    let response = await axios.get(uri, {
            params: params
           });
    return response.data;
};

exports.getDaily = async function(symbol, fullOutputSize = true){

    return await getCommonResponse('TIME_SERIES_DAILY', symbol, fullOutputSize);
};

exports.getDailyAdjusted = async function(symbol, fullOutputSize = true){

    return await getCommonResponse('TIME_SERIES_DAILY_ADJUSTED', symbol, fullOutputSize);
};

exports.getWeekly = async function(symbol, fullOutputSize = true){

    return await getCommonResponse('TIME_SERIES_WEEKLY', symbol, fullOutputSize);
};

exports.getWeeklyAdjusted = async function(symbol, fullOutputSize = true){

    return await getCommonResponse('TIME_SERIES_WEEKLY_ADJUSTED', symbol, fullOutputSize);
};

exports.getMonthly = async function(symbol, fullOutputSize = true){

    return await getCommonResponse('TIME_SERIES_MONTHLY', symbol, fullOutputSize);
};

exports.getMonthlyAdjusted = async function(symbol, fullOutputSize = true){

    return await getCommonResponse('TIME_SERIES_MONTHLY_ADJUSTED', symbol, fullOutputSize);
};

exports.getMonthly = async function(symbol, fullOutputSize = true){

    return await getCommonResponse('TIME_SERIES_MONTHLY_ADJUSTED', symbol, fullOutputSize);
};

exports.getGlobalQuote = async function(symbol){

    let params = {
        function: 'GLOBAL_QUOTE',
        symbol: symbol,
        apikey: alfavantageApiKey
      }
    let response = await axios.get(uri, {
            params: params
           });
    return response.data;
};
