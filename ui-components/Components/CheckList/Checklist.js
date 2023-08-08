import React, { useState, useRef } from "react";
import ReactPageScroller from "react-page-scroller";
import LeftNavigation from "../LeftNavigation/LeftNavigation";
import AddFields from "../AddItemDetails/AddFields";
import JobDetailsSectionFields from "../SectionFields/JobDetailsSectionFields";
import homeData from "../SectionFields/LeftNavigationHomeData";
import TableVirtuoso from "../Inputs/EditTable/TableVirtuoso";
import TextFields from "../Inputs/Textfield";
import AutoComplete from "../Inputs/AutoComplete";
import { debounce } from "lodash";

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
      width: 286,
      value: "customerName",
      level: "job",
    },
  ],
};

function Checklist() {
  const [isOpened, isSetOpened] = React.useState(true);
  const [activePage, setActivePage] = useState(0);
  const pageScrollerRef = useRef();
  const [leftNavigationFields, setLeftNavigationFields] =React.useState([]);


  // const debouncedNavigate = debounce((pageNumber) => {
  //   setActivePage(pageNumber);
  // }, 500);

  const handlePageChange = (pageNumber) => {
    console.log(pageNumber, "handle pagec change in pageNumber");
    // debouncedNavigate(pageNumber);
    setActivePage(pageNumber);
  };
  const handleMenuClick = (pageNumber) => {
    console.log("pageNumber in Menu click", pageNumber);
    //let index=pageNumber.index
    setActivePage(pageNumber);

    // pageScrollerRef.current.goToPage(pageNumber);
    //console.log("index coming is",pageNumber)
  };
  return (
    <>
      <LeftNavigation
        position={"top"}
        invoicesData={invoiceData}
        homeData={homeData}
        isSetOpened={isSetOpened}
        data={data}
        setLeftNavigationFields={setLeftNavigationFields}
        handleMenuClick={handleMenuClick}
      />

      <ReactPageScroller
        ref={pageScrollerRef}
        pageOnChange={handlePageChange}
        customPageNumber={activePage}
        renderAllPagesOnFirstRender={true}
        //animationTimer={2000}
        //animationTimerBuffer={2000}
      >
        {leftNavigationFields.map((item) => {
          return item.checked === true||false ? (
            <TableVirtuoso
              // key={item.fieldName}
              itemName={item.fieldName}
              icon={item.icon}
              columns={item.columns}
              listData={[]}
              checkbox={true}
              hover={item.hover}
              isOpened={isOpened}
            />
          ) : <h1>JOb Details Page</h1>;
        })}
      </ReactPageScroller>
    </>
  );
}

export default Checklist;
