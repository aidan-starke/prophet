import request from 'superagent'
import dotenv from 'dotenv'
dotenv.config()

export function getPrice(crypto) {
    return request
        .get(`https://min-api.cryptocompare.com/data/price?fsym=${crypto}&tsyms=NZD`)
        .set({ 'Authorization': `Apikey ${process.env.CRYPTOCOMPARE_API_KEY}` })
        .then(res => res.body)
}

export function getCrypto(name) {
    return request
        .get(`/api/v1/db?name=${name}`)
        .then(res => {
            console.log(res)
            return res.body
        })
        .catch(err => console.log(err.message))
}