import express from 'express';
import * as db from './queries.js';
import cors from 'cors'
const app = express()
const PORT = 3030

app.use(express.json())
app.use(cors())

app.get('/', function(req,res){
    res.send('Hi, i am hungry')
});

app.get('/:tableName', db.getTable)
app.get('/:tableName/:id', db.getTableById)
// users at this id get all journal entries
app.get('/users/:id/journals', db.getAllJournals)
// find or create a user
app.post('/user/login', db.findOrCreateUser)
app.post ('/:tableName', db.addTable)
app.put('/:tableName/:id', db.updateTable)

app.delete('/:tableName/:id', db.deleteTable)
app.listen(PORT,() => console.log('Backend successfully started on port', PORT))