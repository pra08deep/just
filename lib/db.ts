

import mysql from 'mysql2';
import { items,customers,employees } from './definitions';


//database connection
export const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Asuto@123',
    database: 'example',
  }).promise();


//fetch data of items table
export async function fetchItemsFromDB(): Promise<items[]> {
    const [rows] = await pool.query('SELECT * FROM items');
    return rows as items[];
  }


  //fetching data of customer table

  export async function fetchCustomerDB():Promise<customers[]> {
    const [rows]= await pool.query('SELECT * FROM customers');
    return rows as customers[];
  }


  //fetching data of employees table
  export async function fetchEmployee():Promise<employees[]>{
    const [rows] = await pool.query('SELECT * FROM employees')
    return rows as employees[];
  }
    
  