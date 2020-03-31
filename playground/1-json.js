const fs = require('fs')
// const book = {
//     titles: 'ego is the enemy',
//     author:'bishesh nyoupane'
// }

// const bookJSON = JSON.stringify(book)
// console.log(bookJSON)

// const parseData = JSON.parse(bookJSON)
// console.log(parseData.author)
// fs.writeFileSync('1-json.json', bookJSON)

// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)
// console.log(dataBuffer.toString())
// console.log(data.titles)

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)
console.log(data.name)

data.name = "Bishesh"
data.age = 54

const userJSON =JSON.stringify(data)
fs.writeFileSync('1-json.json', userJSON)

