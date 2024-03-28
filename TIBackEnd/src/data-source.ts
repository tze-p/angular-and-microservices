import "reflect-metadata"
import { DataSource } from "typeorm"
import dotenv from 'dotenv';

dotenv.config();

export const AppDataSource = new DataSource({
    type: "oracle",
    host: process.env.DBHOST, //"l33q22701614002",
    port: Number(process.env.DBPORT), // 1521,
    username: process.env.DBUSERNAME, //"L33Q22702662014Z1",
    password: process.env.DBPASSWORD, //"L33Q22702662014Z1",
    sid: process.env.DBSID, //"TIPLUS2",
    entities: [
        __dirname + "/entity/static/*.js"
    ],
    synchronize: false,
    logging: false    
});

export const GlobalDataSource = new DataSource({
    type: "oracle",
    host: process.env.DBHOST,
    port: Number(process.env.DBPORT),
    username: process.env.GBLUSERNAME,
    password: process.env.GBLPASSWORD,
    sid: process.env.DBSID,
    entities:[
        __dirname + "/entity/global/*.js"
    ],
    synchronize: false,
    logging: false
})

// establish database connection
GlobalDataSource.initialize().then(()=> 
    {
      console.log("Global Data source initialised")
    })
    .catch((err) => 
    {
      console.error("Error during Global Data Source initialization:", err)
    })



// establish database connection
AppDataSource.initialize().then(()=> 
    {
      console.log("App Data source initialised")
    })
    .catch((err) => 
    {
      console.error("Error during App Data Source initialization:", err)
    })
