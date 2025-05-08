import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"

  import { EmployeeTableProps } from "@/lib/definitions"

export const EmployeeTable: React.FC<EmployeeTableProps>=({data})=>{
    return(
        <Table>
            <TableCaption>
                Employee list
            </TableCaption>
            <TableHeader>
                <TableRow> 
                    <TableHead>ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>address</TableHead>
                <TableHead>Email</TableHead>    
                <TableHead>Date</TableHead>
                </TableRow>
               
            </TableHeader>
            <TableBody>
                {
                    data.map((emplyees)=>(
                        <TableRow key={emplyees.id}> 
                            <TableCell>
                                {emplyees.id}
                            </TableCell>
                            <TableCell>
                                {emplyees.name}
                            </TableCell>
                            <TableCell>
                                {emplyees.address}
                            </TableCell>
                            <TableCell>
                                {emplyees.email}
                            </TableCell>
                            <TableCell>
                                {emplyees.date}
                            </TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
            
            </Table>
    );
};