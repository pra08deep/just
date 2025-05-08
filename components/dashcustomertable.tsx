'use client'; // This marks the file as a client-side component

import React, { useState, useEffect } from 'react';
import { customers } from '@/lib/definitions'; // Import customers type from definitions
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"

  import Avatar from '@/components/avatar'

const CustomerList = () => {
  const [customerData, setCustomerData] = useState<customers[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Correct endpoint for fetching customer data from API route
        const response = await fetch('/api/customer'); 
        if (!response.ok) throw new Error('Failed to fetch data');
        const data = await response.json();
        setCustomerData(data.slice(0,3));
      } catch (error) {
        console.error("Error fetching customer data:", error);
      }
    };

    fetchData();
  }, []); // Run only once on mount

  return (
    <div >


      <Table className='font-thin text-xs' >
                
                <TableHeader>
                  <TableRow>
                    <TableHead></TableHead>
                    <TableHead></TableHead>
                   
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {customerData.map((customer) => (
                    <TableRow key={customer.id}>
                      <TableCell> <Avatar/></TableCell>
                      <TableCell>{customer.name}</TableCell>
                     
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
    </div>
  );
};

export default CustomerList;
