import React from 'react'

const Table = ({column,data,renderRow}) => {
  return (
    <table className='w-full mt-4' >
        <thead>
            <tr className='text-left text-sm text-gray-500'>
                {column.map((col) => (
                    <th key={col.accessor} className='{col.className}'>{col.header}</th>
                ))}
            </tr>
        </thead>
        <tbody>
            {data.map((item) => renderRow(item))}
        </tbody>
    </table>
  )
}

export default Table