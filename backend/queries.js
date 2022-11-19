// import { json } from 'body-parser';
import pg from 'pg'
import * as dotenv from 'dotenv'
dotenv.config()
const pool = new pg.Pool({
 connectionString: process.env.DATABASE_CONNECTION
});

const allowTables = ['users', 'journals']

export const addTable = (req, res) => {
    const { tableName } = req.params
    // only allow specific tables to be accessed 
    if (!allowTables.includes(tableName)) {
        return res.status(404).send('ERROR: Table not Found :(')
    }
    // keys of the name of all the columns for new data 
    const keys = Object.keys(req.body).join(', ')
    // values of all the data we are inserting 
    const values = Object.values(req.body)
    // ${1,2,....} dynamic data inserting into sql statement
    const psqlInsert = values.map((key, i) => `$${i + 1}`).join(', ')
    // console.log(`INSERT INTO ${tableName} (${keys}) VALUES (${psqlInsert}) RETURNING *`)
    pool.query(`INSERT INTO ${tableName} (${keys}) VALUES (${psqlInsert}) RETURNING *`, values, (error, results) => {
        if (error) {
            // console.log(error, '<--- error here')
            throw error;
        }
        // console.log(results, "<--- result!")
        res.status(200).json(results.rows)

    })
}
export const deleteTable = (req,res) => {
    const {tableName, id} = req.params
    if (!allowTables.includes(tableName)) {
        return res.status(404).send("Table not Found 🤔");
    }
    pool.query(`DELETE FROM ${tableName} WHERE id=${id} RETURNING *`, (error, results) => {
        if(error){
            throw error;
        }
        res.status(200).json(results.rows);
    })
}

export const getUserById = (req, res) =>{
    const{id} = req.params
    pool.query(`SELECT * from users WHERE id = $1`, [id], (error,results)=>{
        if(error){
            throw error; //shut down if there is an error in the program
        }
        res.status(200).json(results.rows);
    })
}
export const getJournalById = (req, res)=>{
    const{id} = req.params
    pool.query(`SELECT * from journals WHERE id =$1` [id], (error, results)=>{
        if (error){
            throw error;
        }
        res.results(200).json(results.rows);
    })
}

export const getTableById = (req, res)=> {
    const{id, tableName} = req.params 
    if(!allowTables.includes(tableName)){
        return res.status(404).send('ERROR: Table Not Found:(')
    }
    pool.query(`SELECT * FROM ${tableName} WHERE id = $1`, [id], (error, results)=>{
        if (error){
            throw error
        }
        res.status(200).json(results.rows);
    })
};

export const getTable = (req, res)=>{
    const {tableName} = req.params
    if (!allowTables.includes(tableName)){
        return res.status(404).send('ERROR: TABLE NOT FOUND: (')
    }
    pool.query(`SELECT * FROM ${tableName}`, (error,results)=>{
        if (error){
            throw error;
        }
        res.status(200).json(results.rows);
    })
};

export const updateTable = (req, res) =>{
    const {tableName, id} = req.params
    if(!allowTables.includes(tableName)){
        return res.status(404).send('ERROR: TABLE NOT FOUND:(')
    }
    const input = Object.keys(req.body).map((x,i)=> `${x}=$${i + 1}`).join(', ')
    const values = Object.values(req.body)
    pool.query(`UPDATE ${tableName} SET ${input} WHERE id = ${id} RETURNING *`, values, (error, results)=>{
        if (error){
            throw error 
        }
        res.results(200).json(results.rows)
    })
}


export const getAllJournals =(req, res)=>{
    const{id} = req.params
    pool.query(`SELECT * FROM journals WHERE user_id = ${id}`, (error, results)=>{
        if (error){
            throw error 
        }
        res.results(200).json(results.rows)
    })
}
