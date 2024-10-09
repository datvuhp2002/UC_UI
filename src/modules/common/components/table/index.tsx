"use client"

import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react'
import 'datatables.net-select/js/dataTables.select'
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/dataTables.dataTables.min.css"
import $ from 'jquery'; 

interface Props {
    id: any,
    columnDefs: any,
    dataItems: any,
    onRowClick?: any
    OnRowDoubleClick?: any;
    totalItems?: any
}
const Table = forwardRef((props: Props, ref) => {      
    useEffect(() => {       
        let doc:any = document.getElementById(props.id); 
        let classNameDataTable = document.getElementById(props.id) ? doc.className:"";               
        if(classNameDataTable == "dataTableCustom")
        {
            initDataTable();
        }           
        else
        {
            reInitDataTable();
        }        
    }, [props.dataItems])    
    useImperativeHandle(ref, () => ({
        getRowId: () => { return getRowId() },
        getRowSelected: () => { return getRowSelected() }
    }));
    const option_orders = () => {
        let columnDefs:any[] = props.columnDefs;
        let orders = [];
        for(let i = 0;i < columnDefs.length;i++)
        {
            if(columnDefs[i].hasOwnProperty("OrderBy"))
            {
                let order = [i, columnDefs[i].OrderBy];
                orders.push(order);
            }
        }
        return orders;
    }
    const options_columnDefs = () => {
        let columnDefs:any[] = props.columnDefs;
        let optionsColumnDefs:any = [];
        for(let i = 0;i < columnDefs.length;i++)
        {
            let obj:any = { target: i };
            let flag = false;
            if(columnDefs[i].hasOwnProperty("Hidden"))
            {
                obj.visible = !columnDefs[i].Hidden;
                flag = true;
            }
            if(columnDefs[i].hasOwnProperty("Width"))
            {                
                obj.width = columnDefs[i].Width;
                flag = true;
            }
            if(flag)
            {                
                optionsColumnDefs.push(obj);
            }
        }
        return optionsColumnDefs;
    }
    const options_group_index = () => {
        let columnDefs:any[] = props.columnDefs;
        for(let i = 0;i < columnDefs.length;i++)
        {
            if(columnDefs[i].hasOwnProperty("Group"))
            {
                if(columnDefs[i].Group)
                {
                    return [i, columnDefs[i].Title];
                }
            }
        }
        return [-1, ""];
    }
    const options = () => {
        let group_index:any = options_group_index();
        let options:any = {        
            select: {
                style: 'single',
            },           
            order: option_orders(),     
            responsive: false,
            lengthMenu: [10, 25, 50, 100, 200, 500],
            pagingType: 'full_numbers',
            language: {
                decimal:        "",
                emptyTable:     "Không có dữ liệu trong bảng",
                info:           "Hiển thị từ _START_ đến _END_ của _TOTAL_ bản ghi",
                infoEmpty:      "Hiển thị từ 0 đến 0 của 0 bản ghi",
                infoFiltered:   "(Đã lọc từ tổng _MAX_ bản ghi)",
                infoPostFix:    "",
                thousands:      ",",
                lengthMenu:     "Hiển thị _MENU_ bản ghi",                
                processing:     "",
                search:         "Tìm kiếm:",
                zeroRecords:    "Không tìm thấy kết quả",
                paginate: {
                    first:      "<span class=\"bi bi-chevron-double-left\"></span>",
                    last:       "<span class=\"bi bi-chevron-double-right\"></span>",
                    next:       "<span class=\"bi bi-chevron-right\"></span>",
                    previous:   "<span class=\"bi bi-chevron-left\"></span>"
                },
                select: {
                    rows: " Đã chọn %d bản ghi"
                },
                aria: {
                    sortAscending:  ": Kích hoạt để sắp xếp cột tăng dần",
                    sortDescending: ": Kích hoạt để sắp xếp cột giảm dần"
                }
            },
            columnDefs: options_columnDefs(),
            drawCallback: function (settings:any) {
                if(group_index[0] !== -1)
                {
                    var api = this.api();      
                    var rows = api.rows({ page: 'current' }).nodes();  
                    var group_last:any = null;          
                    api.rows( {page:'current'} ).data().each(function (row:any, rowindex:any) {  
                        let group = row[group_index[0]];
                        if (group_last !== group) {                            
                            $(rows).eq(rowindex).before('<tr class="group"><td colspan="'+ row.length +'"><b>' + group_index[1] + ': ' + group + '</b></td></tr>');
                            group_last = group;
                        }                        
                    });
                }
            }
        }
        return options;
    }
    const initDataTable = () => {               
        let $dt: JQuery &  {DataTable?: any} = $('#' + props.id); 
        let bodyStr:any = TBodyContentRender();        
        $('#' + props.id + ' tbody').html(bodyStr)      
        $dt.DataTable(options());
    }
    const reInitDataTable = () => {        
        let $dt: JQuery &  {DataTable?: any} = $('#' + props.id);              
        $dt.DataTable().clear().destroy();
        let bodyStr:any = TBodyContentRender();        
        $('#' + props.id + ' tbody').html(bodyStr) 
        $dt.DataTable(options());
    }
    const getRowId = () => {        
        let rowId = null;   
        let item:any = null;
        let $dt: JQuery &  {DataTable?: any} = $("#" + props.id + " .selected");               
        for(let i = 0;i < $("#" + props.id + " .selected").length;i++)
        {       
            item = $dt.get(i);
            rowId = item.getAttribute("row-id");                        
        }        
        return rowId;
    }
    const getRowSelected = () => {        
        let $dt: JQuery &  {DataTable?: any} = $('#' + props.id);              
        return $dt.DataTable().rows('.selected').data();
    }
    const THeadContentRender = () => {
        let tHs = [], columnDefs:any[] = props.columnDefs;
        for(let i = 0;i < columnDefs.length;i++)
        {            
            tHs.push(<th style={{ width: "300px" }} className={'text-center'} key={i}>{columnDefs[i].Title}</th>);
        }                
        return <tr>{tHs}</tr>;
    }
    const MappingValueToOptions = (value:any, options:any) => {
        let refValue = "";
        for(let i = 0;i < options.length;i++)
        {
            if(options[i].value == value)
            {
                refValue = options[i].label;
            }
        }
        return refValue;
    }
    const OnRowDoubleClick = () => {    
        let id = getRowId();
        if(props.onRowClick)
        {
            props.OnRowDoubleClick(id);
        }        
    }
    const OnRowClick = () => {    
        let id = getRowId();
        if(props.onRowClick)
        {
            props.onRowClick(id);
        }        
    }
    const TBodyContentRender = () => {        
        let columnDefs:any[] = props.columnDefs, dataItems = props.dataItems;        
        let tRsStr = '', tDsStr = '';      
        if(dataItems == null) return null;        
        for(let i = 0;i < dataItems.length;i++)
        {            
            tDsStr = '';
            for(let j = 0;j < columnDefs.length;j++)
            {           
                let value = dataItems[i][columnDefs[j].Key];  
                if(columnDefs[j].Options)
                {
                    value = MappingValueToOptions(value, columnDefs[j].Options);
                }
                if(columnDefs[j].Format)
                {
                    if(columnDefs[j].Format == "dd/MM/yyyy")
                    {
                        let valueDate = "";
                        try
                        {
                            let date = new Date(value);
                            valueDate = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear(); 
                        }
                        catch {}
                        value = valueDate;
                    }
                }
                if(columnDefs[j].Key == "#")
                {
                    tDsStr += '<td class=' + (columnDefs[j].Align ? ('text-' + columnDefs[j].Align) : 'text-center') + '>' + 
                        (i + 1)
                    + '</td>';
                }
                else
                {
                    value = typeof value !== 'undefined' ? value:'';
                    if(columnDefs[j].hasOwnProperty('Link'))
                    {
                        tDsStr += '<td class=' + (columnDefs[j].Align ? ('text-' + columnDefs[j].Align) : 'text-center') + '>' + 
                        "<a class='alink' href='" + columnDefs[j].Link + dataItems[i].id + "'>" + value + '</a>'
                        + '</td>';
                    }
                    else if(columnDefs[j].hasOwnProperty('Status'))
                    {
                        for(let x = 0;x < columnDefs[j].Status.length;x++)
                        {
                            if(columnDefs[j].Status[x].Value == value)
                            {
                                tDsStr += '<td class=' + (columnDefs[j].Align ? ('text-' + columnDefs[j].Align) : 'text-center') + '>' + 
                                "<span class='badge rounded-pill text-bg-"+ columnDefs[j].Status[x].Type +"'>" + value + '</span>'
                                + '</td>';
                                break;
                            }
                        }
                    }
                    else
                    {
                        tDsStr += '<td class=' + (columnDefs[j].Align ? ('text-' + columnDefs[j].Align) : 'text-center') + '>' + 
                        value
                        + '</td>';
                    }
                }
            }            
            tRsStr += '<tr row-id=' + (dataItems[i].id + '') +'>'+ tDsStr +'</tr>';
        }        
        return tRsStr;
    }
    return (
        <div className='table-responsive' onClick={() => {OnRowClick()}} onDoubleClick={() => {OnRowDoubleClick()}}>
            <table id={props.id} className="table table-hover table-bordered dataTableCustom">
                <thead>
                    {THeadContentRender()}
                </thead>          
                <tbody>                                
                </tbody>
                {
                    props.totalItems ?
                    <span style={{position: "absolute", marginTop: 12, marginLeft: 600}}>Tổng số bản ghi: {props.totalItems}</span>:
                    <></>
                }              
            </table>
        </div>
    )
})


export default Table;
