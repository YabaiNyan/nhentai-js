const request = require('superagent')
const cheerio = require('cheerio')
const tagSpacerPatternn = /(\([0-9,]+\))([a-zA-Z])/g
const tagSplitPattern = /(?<=\))\s(?=[a-zA-Z])/

class nHentai {
    static getDoujin(id) {
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
                    resolve({ title, details, pages: images })
                })
                .catch(reject)
        })
    }

    static exists(id) {
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

module.exports = nHentai
