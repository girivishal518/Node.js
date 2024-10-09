import {open, } from 'sqlite';
import sqlite3 from 'sqlite3';


async function CallingDB (){
    
   const db =  await open({
    filename :'./my_data.db',
    driver: sqlite3.Database
    })
    
    const createTable = "CREATE TABLE vis(ID INT AUTO_INCREMENT PRIMARY KEY  NOT NULL,NAME TEXT NOT NULL,EMAIL TEXT NOT NULL)";

    const allData = "SELECT * FROM vis";
    console.log(allData);
    // db.run(createTable);
    // db.run ("INSERT INTO vis VALUES (2,'sahej','sehaj@gmail.com'),(3,'mayank','mayank@gmail.com'),(4,'mansun','mansun@gmail.com')");

    const result = await db.all(allData);

    console.log(result);
    




    db.close()
}
CallingDB()
.catch(err =>console.log(err)
)