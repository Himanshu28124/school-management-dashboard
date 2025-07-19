import React from "react";
import Image from "next/image";
import TableSearch from "@/components/TableSearch";
import Pagination from "@/components/Pagination";
import Table from "@/components/table";
import  {teachersData, role } from "@/lib/data";
import Link from "next/link";
import FormModal from "@/components/FormModal"


const columns = [
  {
    header: "Info",
    accessor: "info",
  },
  {
    header: "Teacher ID",
    accessor: "teacherId",
    className: "hidden md:table-cell",
  },
  {
    header: "Subjects",
    accessor: "subjects",
    className: "hidden md:table-cell",
  },
  {
    header: "Classes",
    accessor: "classes",
    className: "hidden md:table-cell",
  },
  {
    header: "Phone",
    accessor: "phone",
    className: "hidden lg:table-cell",
  },
  {
    header: "Address",
    accessor: "address",
    className: "hidden lg:table-cell",
  },
  {
    header: "Actions",
    accessor: "action",
  },
];

const TeacherListPage = () => {
  const renderRow = (item) => (
    <tr key={item.id} className="border-b border-gray-200 text-sm hover:bg-lamaPurpleLight even:bg-slate-50 ">
      <td className="flex items-center gap-4 p-4">
        <Image
          src={item.photo}
          width={40}
          height={40}
          className="md:hidden xl:block w-10 h-10 rounded-full object-cover"
        />

        <div className="flex flex-col ">
          <h3 className="font-semibold ">{item.name}</h3>
          <p className="text-xs text-gray-500">{item?.email}</p>
        </div>
      </td>

      <td className="hidden md:table-cell">{item.teacherId}</td>
      <td className="hidden md:table-cell">{item.subjects.join(",")}</td>
      <td className="hidden md:table-cell">{item.classes.join(",")}</td>
      <td className="hidden md:table-cell">{item.phone}</td>
      <td className="hidden md:table-cell">{item.address}</td>

      <td>
        <div className="flex items-center gap-2">
          <Link href={`/list/teachers/${item.id}`}>
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaSky">
              <Image src="/view.png" height={16} width={16}/>
            </button>
          </Link>
          {role==="admin" && (
            //<button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaPurple">
            //  <Image src="/delete.png" alt="" width={16} height={16} />
            //</button>
            <FormModal table="teacher" type="delete" id={item.id}/>
          )}
        </div>
      </td>
    </tr>
  );

  return (
    <div className=" bg-white p-4 rounde-md  m-4 mt-0 flex-1">
      {/* Top */}
      <div className=" flex items-center justify-between">
        <h1 className="text-lg font-semibold hidden md:block">All Teachers</h1>
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
                <FormModal table="teacher" type="create"/>
            )}
            
          </div>
        </div>
      </div>

      {/* Lists */}
      <div>
        <Table column={columns} renderRow= {renderRow} data={teachersData}/>
      </div>

      {/* Pagination */}
      <Pagination />
    </div>
  );
};

export default TeacherListPage;
