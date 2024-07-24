import React,  { useState, useEffect } from "react";
import Axios from "axios";
import DataTable,{ defaultThemes }  from "react-data-table-component";

interface LoadProps {
    datatableurl: string;
    currentSequence: number;
    currentInfo: (data) => void;
    currentremoveTaskId:(data) =>void;
}

export default function Datatable({ datatableurl, currentSequence, currentInfo, currentremoveTaskId }: LoadProps) {
    const [rows, setRows] = useState([]);
    const [pending, setPending] = useState(true);

    const statusInfo = {
        0: "Inactive",
        1: "Publish",
        2: "Archived",
    }
    const columns = [
        {
            name: "TITLE",
            selector: row => row.title,
            sortable:true,
        },
        {
            name: "CONTENT",
            selector: row => row.content,
            sortable: true,
        },
        {
            name: "STATUS",
            selector: row => statusInfo[row.status_id],
            sortable: true,
        },
        {
            name: "ACTION",
            cell: (row) => [
                <div  key={`cc-button-${row.id}`} className="flex md:flex-row xs:flex-col w-full px-2 py-2">
                    <button key={`edit-button-${row.id}`}  className="warning-button" onClick={() => handleCurrentInfo(row) }>Edit</button>
                    <button key={`delete-button-${row.id}`}  className="danger-button" onClick={() => handleRemoveTask(row.id) }>Delete</button>
                </div>
            ],
          }
    ];

    useEffect(() => {
        const timeout = setTimeout(() => {
            Axios.get(`${datatableurl}`)
            .then(function (response) {
                if (response) {
                    setRows(response.data.resultset);
                    setPending(false);
                }
            });
        }, 200);
        return () => clearTimeout(timeout);
    }, [currentSequence]);

    const handleCurrentInfo = (data) => {
        currentInfo(data);
    }

    const handleRemoveTask = (id) => {
        currentremoveTaskId(id);
    }

    return (<>
         <div className="flex flex-col border border-solid my-1">
            <DataTable
                columns={columns}
                persistTableHead={true}
                data={rows}
                noDataComponent="No records to display"
                progressPending={pending}
                selectableRows
                fixedHeader
                customStyles={
                    {
                        header: {
                            style: {
                                minHeight: '56px',
                            },
                        },
                        headRow: {
                            style: {
                                borderTopStyle: 'solid',
                                borderTopWidth: '1px',
                                fontWeight: "bold",
                                color: "#708090",
                                fontSize: "14px",
                                borderTopColor: defaultThemes.default.divider.default,
                            },
                        },
                        headCells: {
                            style: {
                                '&:not(:last-of-type)': {
                                    borderRightStyle: 'solid',
                                    borderRightWidth: '1px',
                                    borderRightColor: defaultThemes.default.divider.default,
                                },
                            },
                        },
                        cells: {
                            style: {
                                '&:not(:last-of-type)': {
                                    borderRightStyle: 'solid',
                                    borderRightWidth: '1px',
                                    borderRightColor: defaultThemes.default.divider.default,
                                },
                            },
                        },
                    }
                }
                highlightOnHover
		        pointerOnHover
                dense
                pagination/>
        </div>
    </>);
}