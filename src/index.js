let table;
// https://datatables.net/reference/option/
// https://datatables.net/examples/index

window.loadTable = (json) => {
  const obj = JSON.parse(json);
  const data = obj.data;
  const columnType = obj.columnType;

  const customerColumns = [
    { title: "Company:", data: "fieldData.CompanyName" },
    { title: "City", data: "fieldData.City" },
    { title: "State", data: "fieldData.State" },
    { title: "Zip", data: "fieldData..Zip" },
  ];
  const admissionsColumns = [
    { title: "Category", data: "fieldData.Category" },
    { title: "City", data: "fieldData.Program" },
    { title: "State", data: "fieldData.Grade" },
  ];

  const columns =
    columnType === "Customers" ? customerColumns : admissionsColumns;
  table = $("#dtable").DataTable({
    columns,
    data,
    pageLength: 60,
    scrollY: "800px",
  });
};

//add a row click to the table rows
