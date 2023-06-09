import React from 'react'
import MaterialTable from 'material-table'

export default function Table() {

    const data = [
        {filename: "Sarah Umeh", hmo:"FMC Jabi", current:"30/05/23", last:"May 23rd,2023"},
        {filename: "Ifeanyi Okafor", hmo:"UITH, Ibadan", current:"30/05/23", last:"May 23rd,2023"},
        {filename: "Uchenna Mayowa", hmo:"ROA Hospital", current:"30/05/23", last:"May 23rd,2023"},
        {filename: "Valentina Chidumeh", hmo:"UNTH", current:"30/05/23", last:"May 23rd,2023"},
        {filename: "Emmanuella Simon", hmo:"FMC Jabi", current:"30/05/23", last:"May 23rd,2023"},
        {filename: "Jennifer Muo", hmo:"FMC Jabi", current:"30/05/23", last:"May 23rd,2023"}
    ]
    const columns = [
        {
            title:'File name',field:'filename',cellStyle:{fontSize:"14px", fontWeight:"400", padding:"25px"}
        },
        {
            title:'HMO',field:'hmo',cellStyle:{fontSize:"14px", fontWeight:"300"}
        },
        {
            title:'Current Appointment',field:'current',cellStyle:{fontSize:"14px", fontWeight:"300"}
        },
        {
            title:'Last Appointment',field:'last',cellStyle:{fontSize:"14px", fontWeight:"300"}
        }
    ]


  return (
    <div>
      <MaterialTable
        title="Clinic appointment schedule"
        data={data}
        columns={columns}
        options={{
          search:true,
          paging:false,
          exportButton:true,
          selection:true,
          showSelectAllCheckbox:false,
          showTextRowsSelected:false,
          selectionProps:rowData => ({
            color:"primary",
          })
        }}
      />
    </div>
  )
}
