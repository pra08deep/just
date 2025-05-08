import { fetchEmployee } from "@/lib/db";
import { EmployeeTable } from "@/components/employee/employeeTable";
import Addemployee from '@/app/dashboard/employee/addemployee/page'

export default async function Page(){
    const EMPLOYEs=await fetchEmployee();
    return(
 
    <div className="md:container  md:mx-auto  inline  ">
          <div className="font-thin w-26">
        <Addemployee/>
        </div>
    
   
   <EmployeeTable data={EMPLOYEs} />

    </div>
  

    )
}