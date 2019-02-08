const request = require('superagent')
const cheerio = require('cheerio')
const tagSpacerPatternn = /(\([0-9,]+\))([a-zA-Z])/g
const tagSplitPattern = /(?<=\))\s(?=[a-zA-Z])/

const urlToId = /(https?:\/\/nhentai\.net\/g\/)(\d+)\/?/
const gToId = /\/g\/(\d+)\//
const hrefToPage = /(&||\?)page=(\d+)/

class nHentai {
    static getDoujin(nhentai) {
        const id = nhentai.replace(urlToId, '$2')
        return new Promise((resolve, reject) => {
            request
                .get('https://nhentai.net/g/' + id + '/')
                .then(res => {
                    const $ = cheerio.load(res.text)
                    let details = {}
                    $('.tag-container.field-name').text().split('\n').map(string => string.trim()).filter(u => u).map((tag, i, tags) => {
                        if (tag.endsWith(':') && !tags[i + 1].endsWith(':')) { details[tag.substring(0, tag.length - 1).toLowerCase()] = tags[i + 1].replace(tagSpacerPatternn, '$1 $2').split(tagSplitPattern) }
                    })
                    const title = $('#info').find('h1').text()
                    const images = Object.entries($('.gallerythumb').find('img')).map(image => {
                        return image[1].attribs
                            ? image[1].attribs['data-src'].replace(/t(\.(jpg|png))/, '$1').replace('t.nhentai', 'i.nhentai')
                            : null
                    }).filter(link => link)
                    const link = `https://nhentai.net/g/${id}/`
                    resolve({ title, details, pages: images, link })
                })
                .catch(reject)
        })
    }

    static getHomepage(page = 1) {
        return new Promise((resolve, reject) => {
            if(page >= 1){
                request
                .get('https://nhentai.net/?page=' + page)
                .then(res => {
                    const $ = cheerio.load(res.text)
                    let details = {}
                    let selector = $('.gallery').children('a')
                    Object.keys(selector).forEach((key)=>{
                        if(!isNaN(key)){
                            let bookdetails = {}
                            let book = selector[key]
                            bookdetails.bookId = book.attribs.href.replace(gToId, '$1')
                            bookdetails.thumbnail = findObject(book.children, 'name', 'img').attribs['data-src']
                            bookdetails.title = findObject(book.children, 'name', 'div').children[0].data
                            details[key]=bookdetails
                        }
                    })
                    details.lastPage = $('.last')[0].attribs.href.match(hrefToPage)[2]
                    resolve(details);
                })
                .catch(reject)
            }else{
                reject()
            }
        })
    }

    static search(query, page = 1, sort = 'date') {
        return new Promise((resolve, reject) => {
            if(page >= 1){
                if(sort.toLowerCase() != "popular" && sort.toLowerCase() != "date"){
                    reject()
                }
                let url = 'https://nhentai.net/search/?q='+query+'&page='+page+'&sort='+sort.toLowerCase()
                request
                .get(encodeURI(url))
                .then(res => {
                    const $ = cheerio.load(res.text)
                    let details = {}
                    let selector = $('.gallery').children('a')
                    Object.keys(selector).forEach((key)=>{
                        if(!isNaN(key)){
                            let bookdetails = {}
                            let book = selector[key]
                            bookdetails.bookId = book.attribs.href.replace(gToId, '$1')
                            bookdetails.thumbnail = findObject(book.children, 'name', 'img').attribs['data-src']
                            bookdetails.title = findObject(book.children, 'name', 'div').children[0].data
                            details[key]=bookdetails
                        }
                    })
                    details.lastPage = $('.last')[0].attribs.href.match(hrefToPage)[2]
                    resolve(details);
                })
                .catch(reject)
            }else{
                reject()
            }
        })
    }

    static exists(nhentai) {
        const id = nhentai.replace(urlToId, '$2')
        return new Promise((resolve, reject) => {
            request
                .head('https://nhentai.net/g/' + id + '/')
                .then(res => resolve(true))
                .catch(err => {
                    resolve(false)
                })
        })
    }
}

function findObject(obj, key, value) {
    for (var i = 0, len = obj.length; i < len; i++) {
        if (obj[i][key] === value)
            return obj[i]; // Return as soon as the object is found
    }
    return null; // The object was not found
}

module.exports = nHentai
