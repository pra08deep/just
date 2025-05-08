import { fetchCustomerDB } from "@/lib/db"
import  {CustomerTable}  from '@/components/customer/customerTable';
export default async function Page(){
    const customers=await fetchCustomerDB();
    return(
        <div>
   
  <CustomerTable data={customers} />
        </div>
    )
}