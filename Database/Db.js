import{open} from 'sqlite';
import sqlite3 from 'sqlite3';


 async function Call(){
    const db = await open({
        filename : ':memory:',
        driver : sqlite3.Database,

    })
    const createTable = "CREATE TABLE vishal( id INT ,name TEXT)"
    await db.exec(createTable);

    db.run ("INSERT INTO vishal VALUES(1,'yash')")
    console.log("insert..");

    const lookDB = "SELECT * FROM vishal";
    const result = await db.get(lookDB);
    console.log(result);


    // console.log("exect");
    
    

    db.close()
    


}
Call()
.catch(err => console.log(err)
)

