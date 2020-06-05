import React, { Component } from 'react';
import MUIDataTable from "mui-datatables";
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';



function createData(SYSID, MANDT, BNAME, ZRISK_TYPE, ZRISK_LEVEL, APPLCLASS, APPLDESC, RISKEXE, ZAUDIT_ID, ZAUDIT_NAME, ZVELMIT_ID, ZNAME, ZCOUNT3, ZCOUNT1, ZCOUNT2, ZCOUNT) {
    return { SYSID, MANDT, BNAME, ZRISK_TYPE, ZRISK_LEVEL, APPLCLASS, APPLDESC, RISKEXE, ZAUDIT_ID, ZAUDIT_NAME, ZVELMIT_ID, ZNAME, ZCOUNT3, ZCOUNT1, ZCOUNT2, ZCOUNT };
}

function createColumn(header, keys) {

    let headers = header.map((value, index) => {
        return {
            name: keys[index],
            label: value,
            options: {
                filter: true,
                sort: true
            }
        }
    })

    return headers;
}


const options = {
    selectableRows: 'none',
    filterType: 'textField',
    fixedHeaderOptions: { xAxis: true, yAxis: true },
    responsive: "scrollMaxHeight",
    search:false,
    searchOpen:false,
    print:false,
    sortFilterList:false,
    rowsPerPage:100,
    rowsPerPageOptions:[100,250,500]
};



const MUGRCReportTable = (props) => {

    const getMuiTheme = () => createMuiTheme({
        overrides: {
            MUIDataTableBodyCell: {
                root: {
                    fontFamily: 'Helvetica',
                    fontSize: 12,
                    wordWrap: "normal",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    padding: "2px",
                    textAlign: "left",
                    backgroundColor: color,
                    border: "2px solid rgba(224, 224, 224, 1)",
                    borderCollapse: 'collapse'
                }
            },
            MUIDataTableHeadCell: {
                root: {
                    fontFamily: 'Helvetica',
                    fontSize: 12,
                    fontWeight: "bold",
                    wordWrap: "normal",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    border: "1px solid rgba(224, 224, 224, 1)",
                    padding: "2px",
                    backgroundColor: `${color} !important`,
                    lineHeight: "inherit"
                }
            },
            MUIDataTable: {
                responsiveScrollMaxHeight: {
                    maxHeight: '70vh !important'
                },
                paper: {
                    marginTop: 5
                }
            },
            MUIDataTableToolbar: {
                root: {
                    minHeight: 25
                },
                filterPaper: {
                    maxWidth: '20%',
                    maxHeight: '70%'
                }
    
            },
            MuiInputLabel:
            {
                formControl:{
                fontSize:12,
                fontFamily:'Helvetica'
            }},
            MuiGridListTile:{
                root:{
                    padding:'4px !important'
                }
            },
            MUIDataTableViewCol:{label:{fontSize:12}},
            MuiFormControlLabel:{root:{
                marginRight:0,
                marginBottom:0,
                paddingRight:2
            }},
            MuiIconButton:{root:{
                padding:2
            }},
            MuiTablePagination:{toolbar:{
                minHeight: 25
            }},
            MUIDataTableFilterList: {
                chip: {
                  display: 'none'
                }
              }
       
        }
        })

    const [data, setData] = React.useState(props.data)
    const [header, setHeader] = React.useState(props.header)
    const [color,setColor]=React.useState(props.colors[11])
    React.useEffect(() => {
        setData(props.data);
        setHeader(props.header)
        setColor(props.colors[11])
    }, [props])

    const rows = data.map(p => createData(p.SYSID, p.MANDT, p.BNAME, p.ZRISK_TYPE, p.ZRISK_LEVEL,
        p.APPLCLASS, p.APPLDESC, p.RISKEXE, p.ZAUDIT_ID, p.ZAUDIT_NAME, p.ZVELMIT_ID, p.ZNAME,
        p.ZCOUNT3, p.ZCOUNT2, p.ZCOUNT1, p.ZCOUNT));

    const columns = createColumn(header, Object.keys(data[0]));


    return (
        <MuiThemeProvider theme={getMuiTheme()}>
            <MUIDataTable
                data={data}
                columns={columns}
                options={options}
            />
        </MuiThemeProvider>
    )

}

export default MUGRCReportTable;