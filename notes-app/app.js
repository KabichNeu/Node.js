const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')
// const fs = require('fs')
// const add = require('./utils.js')
// const validator = require('validator')


// fs.writeFileSync("note.txt", 'My name is bisheshwpr\n')

// fs.appendFileSync("note.txt","I am 20 years old")
// const sum = add(4,-2)
// console.log(sum)

// console.log(validator.isURL('HTTPS://EXAMPLE.com'))


const command = process.argv[2]
const greenMsg = chalk.bold.green('Success')
const errorMsg = chalk.bold.red('Red')


if (command === 'bishesh'){
    console.log(greenMsg)
    console.log("Thats your name")
} else if(command === 'remove'){
    console.log(errorMsg)
    console.log('Thats not your name')
}

//customize yargs version
yargs.version('1.1.0')

//add,remoce,read,list
yargs.command({
    command:'add',
    describe:'Add a new note',
    builder:{
        title:{
            describe:'Note title',
            demandOption: true,
            type:'string'

        },
        body:{
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title, argv.body)
    }
})

//create remove command
yargs.command({
    command:'remove',
    describe:'remove a new note',
    builder : {
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
    
})

yargs.command({
    command:'list',
    describe:'list new notes',
    handler(){
        notes.listNotes()
    }

})
yargs.command({
    command:'read',
    describe:'read a new note',
    builder: {
        title:{
            describe:"Note title",
            demand: true,
            type: "string"
        }
    },
    handler(argv){
        notes.readNote(argv.title)
    }
})

yargs.parse()
// console.log(process.argv)
// console.log(yargs.argv)