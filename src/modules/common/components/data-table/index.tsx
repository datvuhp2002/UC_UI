"use client";
import { useState, MouseEvent } from "react";
import DataTable from "datatables.net-react";
import DT from "datatables.net-dt";
import "datatables.net-fixedcolumns-dt";
import "datatables.net-responsive-dt";
import { Popover, Stack } from "@mui/material";
import Button from "../Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrashCan } from "@fortawesome/free-solid-svg-icons";

DataTable.use(DT);

interface TableData {
  id: string;
  name: string;
  position: string;
}

function App() {
  const [tableData] = useState<TableData[]>([
    { id: "1", name: "Tiger Nixon", position: "System Architect" },
    { id: "2", name: "Garrett Winters", position: "Accountant" },
    { id: "3", name: "Ashton Cox", position: "Junior Technical Author" },
  ]);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedRow, setSelectedRow] = useState<string | null>(null);

  const handleOpenPopover = (event: MouseEvent<HTMLElement>, rowId: string) => {
    setAnchorEl(event.currentTarget);
    setSelectedRow(rowId);
  };

  const handleClosePopover = () => {
    setAnchorEl(null);
    setSelectedRow(null);
  };

  const handleEdit = () => {
    console.log(`Edit item with ID: ${selectedRow}`);
    // handleClosePopover();
  };

  const handleDelete = () => {
    console.log(`Delete item with ID: ${selectedRow}`);
    // handleClosePopover();
  };

  const tableOptions = {
    scrollX: true,
    responsive: true,
    fixedColumns: {
      leftColumns: 0,
      rightColumns: 1,
    },
    language: {
      lengthMenu: "Hiển thị _MENU_ mục mỗi trang",
      search: "Tìm kiếm",
      info: "Hiển thị _START_ đến _END_ của _TOTAL_ mục",
    },
    columns: [
      { title: "Name", data: "name" },
      { title: "Position", data: "position" },
      { title: "Position", data: "position" },
      { title: "Position", data: "position" },
      {
        title: "Actions",
        data: null,
        orderable: false,
        render: (data: any, type: any, row: TableData) => {
          return `
            <button class='action-menu bg-transparent btn ' data-id='${row.id}'>
                <svg fill="#333" width="3rem" height="2rem" viewBox="0 0 512.00 512.00" xmlns="http://www.w3.org/2000/svg" stroke="#637381" stroke-width="0.512" transform="rotate(0)matrix(1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title>ionicons-v5-f</title><circle cx="256" cy="256" r="48"></circle><circle cx="256" cy="416" r="48"></circle><circle cx="256" cy="96" r="48"></circle></g></svg>
            
            </button>
          `;
        },
      },
    ],
    drawCallback: function () {
      // Attach click handlers to dynamically created icons
      document.querySelectorAll(".action-menu").forEach((element) => {
        element.addEventListener("click", (event) => {
          const id = (event.currentTarget as HTMLElement).getAttribute(
            "data-id"
          );
          handleOpenPopover(event as any, id!);
        });
      });
    },
  };

  return (
    <div style={{ width: "100%", overflowX: "auto" }}>
      <DataTable
        data={tableData}
        options={tableOptions}
        className="display nowrap"
      />
      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClosePopover}
        anchorOrigin={{
          vertical: "center",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "center",
          horizontal: "right",
        }}
      >
        <Stack spacing={1} padding={0.4} className="bg-white">
          <div>
            <Button
              rounded
              className="w-100 px-3"
              transparent_btn
              edit_btn
              onClick={handleEdit}
              leftIcon={<FontAwesomeIcon icon={faPen} />}
            >
              Sửa
            </Button>
          </div>
          <div>
            <Button
              rounded
              transparent_btn
              className="w-100 px-3"
              color="error"
              trash_btn
              onClick={handleDelete}
              leftIcon={<FontAwesomeIcon icon={faTrashCan} />}
            >
              Xóa
            </Button>
          </div>
        </Stack>
      </Popover>
    </div>
  );
}

export default App;
