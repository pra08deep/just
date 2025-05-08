export type items={
    id:number;
    name:string;
};

export type customers={
    id:number;
    name:string;
    address:string;
    email:string;
};

export type employees={
    id:number;
    name:string;
    address:string;
    email:string;
    date:string;
}

export interface CustomerTableProps {
    data: customers[];
    columns:string[];
  }

  export interface EmployeeTableProps{
    data: employees[];
  }
  
