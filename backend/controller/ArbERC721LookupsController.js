require("dotenv").config({ path: '../.env' });
const axios = require('axios');
const MORALIS_URL = require("../utils/constants").constantsList.moralisApiURL;

exports.erc721TokenLookup = (req, res) => {
    const { walletAddress, id } = JSON.parse(req.body.body);

    const options = {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'accept' : 'application/json',
            'X-API-KEY' : process.env.MORALIS_API_KEY
        } 
    }

    // Make request for token lookup data
    axios.get(MORALIS_URL + 'nft/' + walletAddress + "/" + id + "?chain=arbitrum&format=decimal", options)
    .then(response => {
        res.status(200).json({ 
            lookupInformation: response.data 
        });
    })
    .catch(err => {
        res.status(400).json({ 
            error: err 
        });
    });
}

exports.erc721TokenTransferLookup = (req, res) => {
    const { walletAddress, id } = JSON.parse(req.body.body);

    const LOOKUP_ENDPOINT = '/transfers';

    const options = {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'accept' : 'application/json',
            'X-API-KEY' : process.env.MORALIS_API_KEY
        }
    }

    // Make request for token lookp transfers
    axios.get(MORALIS_URL + 'nft/' + walletAddress + "/" + id + LOOKUP_ENDPOINT + "?chain=arbitrum&format=decimal", options)
    .then(response => {
        res.status(200).json({ 
            lookupTransfers: response.data 
        });
    })
    .catch(err => {
        res.status(400).json({ 
            error: err 
        });
    });
}