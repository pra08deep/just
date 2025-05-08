'use client';
import React from "react";
import PieChart from "@/components/piechart";
import Barchat from "@/components/barchart";
import Calendar from "@/components/calender";
import { JapaneseYen, Rows3 } from "lucide-react"
import Linechart from '@/components/linechart'
import Dashboard from '@/components/dashcustomertable';

export default  function Page() {


  return (
    <div className="container mx-auto dark:bg-gray-900 shadow-md dark:shadow-lg dark:shadow-black/50  ">
      <div className="flex flex-col lg:flex-row gap-6 ">
        {/* LEFT SIDE */}
        <div className="lg:w-3/4 w-full space-y-6">
          {/* Header */}
          <div className="space-y-1 bg-white border-transparent focus:outline-none dark:bg-gray-900 shadow-md dark:shadow-lg dark:shadow-black/50 rounded-lg p-4">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Good Morning...</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">Mr. Pradeep Maharjan</p>
          </div>

          {/* Sales Summary */}
          <div className="flex flex-col md:flex-row gap-6 bg-white  dark:bg-gray-900 shadow-md dark:shadow-lg dark:shadow-black/30 rounded-lg p-4">
            <div className="float-left md:w-1/3 w-full bg-white dark:bg-gray-900 shadow-md dark:shadow-lg dark:shadow-black/30 rounded-lg p-4">
            <div>
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-1">Today's Revenue <JapaneseYen className="float-right"/> </h2>
                
                </div>
            <p className="text-3xl font-bold text-green-600">$98,200</p>
            <div>
                <p>+20.1% from last month</p>
              </div></div>

            <div className="float-left md:w-1/3 w-full bg-white dark:bg-gray-900 shadow-md dark:shadow-lg dark:shadow-black/30 rounded-lg p-4">  
            <div>
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-1">Total Sales <Rows3 className="float-right"/> </h2>
                
                </div>
            <p className="text-3xl font-bold text-green-600">+900</p></div>
              
            <div className="float-left md:w-1/3 w-full bg-white dark:bg-gray-900 shadow-md dark:shadow-lg dark:shadow-black/30 rounded-lg p-4">
           
            <div>
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-1">NEW ORDERS <Rows3 className="float-right"/> </h2>
                
                </div>
            <p className="text-3xl  font-bold text-green-600">0</p>
            <div>
                <p>+5 from last order today</p>
              </div>
        
            </div>
        
          </div>
          
       


          {/* Charts Section */}
          <div className="flex flex-col md:flex-row gap-6">
            {/* Pie Chart */}
            <div className="md:w-1/2 w-full bg-white dark:bg-gray-900 shadow-md dark:shadow-lg dark:shadow-black/30 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">Sales Breakdown</h3>
              <div className="">
                <PieChart />
              </div>
            </div>

            {/* Bar Chart */}
            <div className="md:w-1/2 w-full bg-white dark:bg-gray-900 shadow-md dark:shadow-lg dark:shadow-black/30 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">Sales Trend</h3>
              <div className="">
                <Barchat />
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - Calendar */}
        <div className="lg:w-1/4 w-full  bg-white dark:bg-gray-900 shadow-md dark:shadow-lg dark:shadow-black/30 gap-5  rounded-lg  p-4">

        <div  className=" bg-white dark:bg-gray-900 shadow-md dark:shadow-lg dark:shadow-black/30  rounded-lg">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2 text-center ">Calender</h2>
          <div className=" w-70 ml-10"><Calendar />
          </div>
        </div>

        <div className="bg-white dark:bg-gray-900 shadow-md p-4 rounded-lg">
  <h2 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-100">Recent Customers</h2>
  <Dashboard />
</div>
          
        </div>
      </div>
    </div>
  );
}

