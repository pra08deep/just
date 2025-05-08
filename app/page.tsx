import Image from "next/image";
import CalendarDemo from "@/components/calender";
export default function Home() {
  return (
 
<div className="md:container  md:mx-auto bg-green-500 ">
<div className="column-2 gap-2">
    <div className="bg-blue-50">1</div>
    <div>2</div>
</div>
<CalendarDemo/>
</div>
  );
}
