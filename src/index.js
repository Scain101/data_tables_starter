let table;
// https://datatables.net/reference/option/
// https://datatables.net/examples/index

window.loadTable = (json) => {
  const obj = JSON.parse(json);
  const data = obj.data;
  const columnType = obj.columnType;
  /*
  const customerColumns = [
    { title: "Site:", data: "fieldData.CompanyName" },
    { title: "City", data: "fieldData.City" },
    { title: "State", data: "fieldData.State" },
    { title: "Zip", data: "fieldData..Zip" },
  ];
  const admissionsColumns = [
    { title: "Category", data: "fieldData.Category" },
    { title: "City", data: "fieldData.Program" },
    { title: "State", data: "fieldData.Grade" },
  ];
  */
  const customerColumns = [
    { title: "Site:", data: "fieldData.Site Address1" },
    { title: "Foreman", data: "fieldData.Foreman Name" },
    { title: "Category", data: "fieldData.Project Category" },
    { title: "System", data: "fieldData.System Category" },
    { title: "Type", data: "fieldData.System Type" },
    {
      title: "Attachment",
      data: "fieldData.Membrane Attachment",

      //title: "Gross Profit %",
      //data: "fieldData.Gross Profit% Formatted",
    },
  ];
  const admissionsColumns = [
    { title: "Category", data: "fieldData.Category" },
    { title: "City", data: "fieldData.Program" },
    { title: "State", data: "fieldData.Grade" },
  ];

  const columns =
    columnType === "Projects" ? customerColumns : admissionsColumns;
  // columnType === "Customers" ? customerColumns : admissionsColumns;

  table = $("#dtable").DataTable({
    columns,
    data,
    pageLength: 80,
    scrollY: "800px",
  });
};

const rowClick = function () {
  const row = table.row(this).data().fieldData;
  console.log(row);
  FileMaker.PerformScript("Get Row Click", JSON.stringify(row));
};

$("#dtable").on("click", "tbody tr", rowClick);

// add a row click to the table rows
