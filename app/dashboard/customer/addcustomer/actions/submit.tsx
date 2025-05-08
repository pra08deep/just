'use server';

import { pool } from '@/lib/db';

export async function handleSubmit(formData: FormData) {
  const name = formData.get('name') as string;
  const address = formData.get('address') as string;
  const email = formData.get('email') as string;

  if (!name || !email || !address) return;

  try {
    const query = 'INSERT INTO customers (name, address, email) VALUES (?, ?, ?)';
    await pool.query(query, [name, address, email]);
    console.log('Customer inserted:', name);
  } catch (err) {
    console.error('Error inserting customer:', err);
  }
}
