import React from "react";
import Image from "next/image";
import TableSearch from "@/components/TableSearch";
import Pagination from "@/components/Pagination";
import Table from "@/components/table";
import { announcementsData, role } from "@/lib/data";
import FormModal from "@/components/FormModal";

const columns = [
  {
    header: "Title",
    accessor: "title",
  },
  {
    header: "Class",
    accessor: "class",
    
  },
  {
    header: "Date",
    accessor: "date",
    className: "hidden md:table-cell",
  },
 
  

  {
    header: "Actions",
    accessor: "action",
  },
];

const AnnouncementsListPage = () => {
  const renderRow = (item) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 text-sm hover:bg-lamaPurpleLight even:bg-slate-50 "
    >
      <td className="flex items-center gap-4 p-4">{item.title}</td>
      <td className="hidden md:table-cell ">{item.class}</td>
      <td className="hidden md:table-cell ">{item.date}</td>
    
      
      <td>
        <div className="flex items-center gap-2">
         {role==="admin" && (
            //<button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaPurple">
            //  <Image src="/delete.png" alt="" width={16} height={16} />
            //</button>
            <>
              <FormModal table="annoumcement" type="update" id={item.id}/>
             <FormModal table="annoumcement" type="delete" id={item.id}/>
            </>
          )}
        </div>
      </td>
    </tr>
  );

  return (
    <div className=" bg-white p-4 rounde-md  m-4 mt-0 flex-1">
      {/* Top */}
      <div className=" flex items-center justify-between">
        <h1 className="text-lg font-semibold hidden md:block">All Announcements</h1>
        <div className="flex flex-col md:flex-row gap-4 items-center w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              <Image src="/filter.png" alt="" width={14} height={14}></Image>
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              <Image src="/sort.png" alt="" width={14} height={14}></Image>
            </button>
            {role==="admin" && (
              //<button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              //  <Image src="/plus.png" alt="" width={14} height={14}></Image>
              //</button>
              
             <FormModal table="announcement" type="create" />
            )}  
          </div>
        </div>
      </div>

      {/* Lists */}
      <div>
        <Table column={columns} renderRow={renderRow} data={announcementsData} />
      </div>

      {/* Pagination */}
      <Pagination />
    </div>
  );
};

export default AnnouncementsListPage;
