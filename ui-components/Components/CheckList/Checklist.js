import React from "react";
import LeftNavigation from "../LeftNavigation/LeftNavigation";
import AddFields from "../AddItemDetails/AddFields";
import JobDetailsSectionFields from '../SectionFields/JobDetailsSectionFields'
import homeData from '../SectionFields/LeftNavigationHomeData'
import TableVirtuoso from "../Inputs/EditTable/TableVirtuoso";



const invoiceData = [
  { invNo: "A41984209" },
  { invNo: "A41984209" },
  { invNo: "A41984209" },
  { invNo: "A41984209" },
  { invNo: "A41984209" },
  { invNo: "A41984209" },
  { invNo: "A41984209" },
  { invNo: "A41984209" },
  { invNo: "A41984209" },
  { invNo: "A41984209" },
  { invNo: "A41984209" },
  { invNo: "A41984209" },
  { invNo: "A41984209" },
  { invNo: "A41984209" },
  { invNo: "A41984209" },
  { invNo: "A41984209" },
  { invNo: "A41984209" },
  { invNo: "A41984209" },
  { invNo: "A41984209" },
  { invNo: "A41984209" },
  { invNo: "A41984209" },
  { invNo: "A41984209" },
  { invNo: "A41984209" },
  { invNo: "A41984209" },
  { invNo: "A41984209" },
  { invNo: "A41984209" },
  { invNo: "A41984209" },
  { invNo: "A41984209" },
];
const data = {
  value: "importerDetails",
  label: "Importer",
  subFilter: true,
  level: "Job",
  width: "318px",
  subFilterValues: [
    {
      parentfield: "Importer",
      label: "Add Fields",
      width: 318,
      value: "customerName",
      level: "job",
    },
  ],
};


function Checklist() {
  const [isOpened, isSetOpened] = React.useState(true);
  const [leftNavigationFields, setLeftNavigationFields] = React.useState([]);
  return (
    <>
      <LeftNavigation
        position={"top"}
        invoicesData={invoiceData}
        homeData={homeData}
        isSetOpened={isSetOpened}
        data={data}
        setLeftNavigationFields={setLeftNavigationFields}
      />
      <AddFields
        name={"Job Details"}
        SectionFields={JobDetailsSectionFields}
        dataInfo={{}}
        data={data}
        isOpened={isOpened}
      />
      {leftNavigationFields.map((item) =>
        item.fieldName !== "Job Details" && item.checked === true ? (
          <TableVirtuoso
            itemName={item.fieldName}
            icon={item.icon}
            columns={item.columns}
            listData={item.data}
            checkbox={true}
            hover={item.hover}
            isOpened={isOpened}
          />
        ) : null
      )}
    </>
  );
}

export default Checklist;
