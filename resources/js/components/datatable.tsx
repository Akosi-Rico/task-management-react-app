import React,  { useState, useEffect } from "react";
import Axios from "axios";
import DataTable,{ defaultThemes }  from "react-data-table-component";

interface LoadProps {
    datatableurl: string,
    currentSequence: number
}

export default function Datatable({ datatableurl, currentSequence }: LoadProps) {
    const [rows, setRows] = useState([]);
    const [pending, setPending] = useState(true);
    
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
            selector: row => row.status_id,
            sortable: true,
        },
        {
            name: "ACTION",
            cell: (row) => [
                <button key={`edit-button-${row.id}`}  className="warning-button">Edit</button>,
                <button key={`delete-button-${row.id}`}  className="danger-button">Delete</button>
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
        }, 700);
        return () => clearTimeout(timeout);
    }, [currentSequence]);

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
              //  dense
                pagination/>
        </div>
    </>);
}