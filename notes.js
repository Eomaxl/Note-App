const getNotes = () =>{
	return 'You note is ....................';
}


const addNote = (title,body) => {
		const notes = loadNotes()
		const duplicateNotes = notes.filter((note)=> {
			return note.title === title
		})
		
		const duplicateNote = notes.find((note)=> {
			return note.title = title
		})
		
		
		if(duplicateNote)
		{
			
		}
		else
		{
			console.log("Note title is already taken")
		}
		
		if(duplicateNotes.length === 0)
		{
				notes.push(
				{
					title:title,
					body:body
				})
				saveNotes(notes)
				console.log("New note has been added")
		}
		else
		{
				console.log("Note title is already taken")
		}

}


const saveNotes = ( notes) => {
		
		const dataJSON = JSON.stringify(notes)
		fs.writeFileSync('notes-json',dataJSON)
}

const loadNote = ()=> {
	
	try {
			const defaulter = fs.readFileSync('notes.json')
			const dataJSON = defaulter.toString()
			return JSON.parse(dataJSON)
	
		
	}
	catch(e)
	{
			return []
		
	}
	
	
}

const readNote = ()=>{
	const notes = loadNotes()
	const note = notes.find((note) =>
	note.title === title)
	if(note)
	{
			console.log(note.title)
			console.log(note.body)
	}
	else
	{
			console.log("note not found")
	}
	
	
}

const listNote = ()=>{
	
	const notes = loadNotes()
	console.log(chalk.green.inverse("Listing the notes present"))
	notes.forEach((note)=>{
		console.log(note.title)
	})
	
	
}

const removeNote = (title) => {
	
	 const readNote = loadNote()
	 const noteToKeep = notes.filter((notes)=> {
		 
		 return note.title !== title
		 
	 }
	 
	 
	if(notes.length > noteToKeep.length)
	{
		console.log(chalk.green.inverse('Note removed'))
		saveNotes(noteToKeep)
	}
	else
	{
			console.log(chalk.red.inverse("No note removed"))
		
	}
}
module.exports = {
	getNote: getNote,
	addNote = addNote,
	removeNote = removeNote,
	readNote = readNote
}