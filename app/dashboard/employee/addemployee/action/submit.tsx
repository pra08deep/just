'use server';

import {pool} from '@/lib/db'


export async function handleSubmit(formData:FormData) {
    const name=formData.get('name')as string;
    const address=formData.get('address') as string;
    const email= formData.get('email') as string;
    const date=formData.get('date') as string;
    if(!name||!address||!email||!date) return;
    try{
        const query='INSERT INTO employees (name,address,email,date) VALUES (?,?,?,?)';
        await pool.query(query,[name,address,email,date]);
        console.log('employee added', name); 
    }
    catch(err){
        console.log('errr',err)
    }
    
}
