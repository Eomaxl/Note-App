//const validator = require('validtor')
const notes = require('./notes')
const msg = getNotes()
const inputMsg = process.argv[2]
const yargs = require('./yargs')

//add, remove, read, list

//Create add command
yargs.commnad({
	command: 'add',
	describe: 'Add a new note',
	builder : {
		title : {
				describe : 'Title Note',
				demandOption: true,
				type: 'string'
				},
		body : {
				describe: 'Writing ouing some text that needs to be done',
				type:'string',
				demandOption: true
				}
		},
	handler: function(argv) {
		// console.log("adding a note",argv.title)
		// console.log("Body content :",argv.body)
		
		notes.addNote(argv.title,argv.body)
	}

})

//Create remove command
yards.command({
	command: 'remove',
	describe: 'Removing the note from the list',
	builder: {
			title: {
					describe:'Note title',
					type:'string',
					demandOption:true
					}
	}
	handler: function() {
		notes.removeNote(argv.title)
	}
})

//creating the read command
yargs.command({
	command: 'list',
	describe: 'Listing all the notes present',
	builder: { 
			title: {
					describe:'Note title',
					type:'string',
					demandOption:true
			} 
	}
	handler: function() {
		notes.readNotes()
	}
})


//creating the delete command 
yargs.command({
	command: 'list',
	describe: 'list all the notes',
	handler: function() {
		notes.listNotes()
	}
})

yargs.parse()
console.log(process.argv)

