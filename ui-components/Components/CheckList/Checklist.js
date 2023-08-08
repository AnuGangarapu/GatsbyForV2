import React, { useState, useRef,Suspense, useMemo } from "react";

import ReactPageScroller from "react-page-scroller";
import LeftNavigation from "../LeftNavigation/LeftNavigation";
import { List } from "react-virtualized";
import AddFields from "../AddItemDetails/AddFields";
import JobDetailsSectionFields from "../SectionFields/JobDetailsSectionFields";
import homeData from "../SectionFields/LeftNavigationHomeData";
import TableVirtuoso from "../Inputs/EditTable/TableVirtuoso";
import TextFields from "../Inputs/Textfield";
import AutoComplete from "../Inputs/AutoComplete";
import { debounce } from "lodash";
const CommercialTaxDetails = [
  {
    row: [
      {
        id: "srNo",
        numeric: true,
        minWidth: 80,
        isSortable: true,
        default: true,
        label: "S.No",
      }, //flexGrow:1
      {
        id: "statusCode",
        numeric: false,
        minWidth: 160,
        isSortable: false,
        default: true,
        display: false,
        label: "Status Code",
        sticky: true,
        flexGrow: 1,
      },
      {
        id: "commercialTaxType",
        numeric: false,
        minWidth: 480,
        isSortable: true,
        default: true,
        display: false,
        label: "Commercial Tax Type",
        flexGrow: 1,
      },
      {
        id: "commercialTaxReg",
        numeric: false,
        minWidth: 320,
        isSortable: false,
        default: true,
        display: true,
        label: "Commercial Tax Reg. No.",
        flexGrow: 1,
      },
    ],
  },
];
const CommercialTaxDetailsData = [
  { statusCode: "100", commercialTaxType: "ABC", commercialTaxReg: "FVFV" },
  { statusCode: "200", commercialTaxType: "DEF", commercialTaxReg: "VRFVCFVF" },
  { statusCode: "300", commercialTaxType: "HGBVF", commercialTaxReg: "FVFGVG" },
  {
    statusCode: "400",
    commercialTaxType: "GVFCDX",
    commercialTaxReg: "GVFGFVGF",
  },
  {
    statusCode: "500",
    commercialTaxType: "AVGFCFVFG",
    commercialTaxReg: "GVFVGV",
  },
];

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
  const [leftNavigationFields, setLeftNavigationFields] =React.useState(homeData);


  // const debouncedNavigate = debounce((pageNumber) => {
  //   setActivePage(pageNumber);
  // }, 500);

  const handlePageChange = (pageNumber) => {
    console.log(pageNumber, "handle pagec change in pageNumber");
    console.log(pageScrollerRef  , "pagescrollref")
    // debouncedNavigate(pageNumber);
    setActivePage(pageNumber);
  };
  const handleMenuClick = (pageNumber) => {
    console.log("pageNumber in Menu click", pageNumber);
    console.log('pageScrollerRef',pageScrollerRef.current)
   // pageScrollerRef.current.handlePageChange(pageNumber)
    //let index=pageNumber.index
    setActivePage(pageNumber);
   
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
        handleMenuClick={handlePageChange}
      />

      <ReactPageScroller
         ref={pageScrollerRef}
        pageOnChange={handlePageChange}
        customPageNumber={activePage}
        renderAllPagesOnFirstRender={true}
     //   animationTimer={2000}
        //animationTimerBuffer={2000}
      >
        {leftNavigationFields.map((item) => {
          return item.checked === true ? (
            <Suspense fallback={<div style={{marginLeft:'120px',marginTop:'40px',color:'red'}} key={item.fieldName}>Loading</div>}>
            <TableVirtuoso
              key={item.fieldName}
              itemName={item.fieldName}
              icon={item.icon}
              columns={item.columns}
              listData={item.data}
              checkbox={true}
              hover={true}
              isOpened={isOpened}
            />
                  </Suspense>
          ) : null;
        })}
      
      </ReactPageScroller>
        {/* <ReactPageScroller
        ref={pageScrollerRef}
        pageOnChange={handlePageChange}
        customPageNumber={activePage}
        renderAllPagesOnFirstRender={true}
      >
        <List
          width={2000} // Adjust the width as needed
          height={1000} // Adjust the height as needed
          rowCount={leftNavigationFields.length}
          rowHeight={1000}
          rowRenderer={({ index, key, style }) => {
            const item = leftNavigationFields[index];
            return (
              <div key={key} style={style}>
                {item.checked === true ? (
                  <TableVirtuoso
                    key={item.fieldName}
                    itemName={item.fieldName}
                    icon={item.icon}
                    columns={item.columns}
                    listData={item.data}
                    checkbox={true}
                    hover={item.hover}
                    isOpened={isOpened}
                  />
                ) : (
                  <h1>JOb Details Page</h1>
                )}
              </div>
            );
          }}
        />
      </ReactPageScroller> */}
      {/* <TableVirtuoso
              // key={item.fieldName}
              itemName={'Job Details'}
              icon={''}
              columns={CommercialTaxDetails}
              listData={CommercialTaxDetailsData}
              checkbox={true}
              hover={true}
              isOpened={isOpened}
            />
            <TableVirtuoso
              // key={item.fieldName}
              itemName={'Job Details'}
              icon={''}
              columns={CommercialTaxDetails}
              listData={CommercialTaxDetailsData}
              checkbox={true}
              hover={true}
              isOpened={isOpened}
            />
            <TableVirtuoso
              // key={item.fieldName}
              itemName={'Job Details'}
              icon={''}
              columns={CommercialTaxDetails}
              listData={CommercialTaxDetailsData}
              checkbox={true}
              hover={true}
              isOpened={isOpened}
            />
            <TableVirtuoso
              // key={item.fieldName}
              itemName={'Job Details'}
              icon={''}
              columns={CommercialTaxDetails}
              listData={CommercialTaxDetailsData}
              checkbox={true}
              hover={true}
              isOpened={isOpened}
            />
            <TableVirtuoso
              // key={item.fieldName}
              itemName={'Job Details'}
              icon={''}
              columns={CommercialTaxDetails}
              listData={CommercialTaxDetailsData}
              checkbox={true}
              hover={true}
              isOpened={isOpened}
            />
            <TableVirtuoso
              // key={item.fieldName}
              itemName={'Job Details'}
              icon={''}
              columns={CommercialTaxDetails}
              listData={CommercialTaxDetailsData}
              checkbox={true}
              hover={true}
              isOpened={isOpened}
            />
            <TableVirtuoso
              // key={item.fieldName}
              itemName={'Job Details'}
              icon={''}
              columns={CommercialTaxDetails}
              listData={CommercialTaxDetailsData}
              checkbox={true}
              hover={true}
              isOpened={isOpened}
            />
            <TableVirtuoso
              // key={item.fieldName}
              itemName={'Job Details'}
              icon={''}
              columns={CommercialTaxDetails}
              listData={CommercialTaxDetailsData}
              checkbox={true}
              hover={true}
              isOpened={isOpened}
            />
            <TableVirtuoso
              // key={item.fieldName}
              itemName={'Job Details'}
              icon={''}
              columns={CommercialTaxDetails}
              listData={CommercialTaxDetailsData}
              checkbox={true}
              hover={true}
              isOpened={isOpened}
            />
            <TableVirtuoso
              // key={item.fieldName}
              itemName={'Job Details'}
              icon={''}
              columns={CommercialTaxDetails}
              listData={CommercialTaxDetailsData}
              checkbox={true}
              hover={true}
              isOpened={isOpened}
            />
            <TableVirtuoso
              // key={item.fieldName}
              itemName={'Job Details'}
              icon={''}
              columns={CommercialTaxDetails}
              listData={CommercialTaxDetailsData}
              checkbox={true}
              hover={true}
              isOpened={isOpened}
            />
            <TableVirtuoso
              // key={item.fieldName}
              itemName={'Job Details'}
              icon={''}
              columns={CommercialTaxDetails}
              listData={CommercialTaxDetailsData}
              checkbox={true}
              hover={true}
              isOpened={isOpened}
            />
            <TableVirtuoso
              // key={item.fieldName}
              itemName={'Job Details'}
              icon={''}
              columns={CommercialTaxDetails}
              listData={CommercialTaxDetailsData}
              checkbox={true}
              hover={true}
              isOpened={isOpened}
            />
            <TableVirtuoso
              // key={item.fieldName}
              itemName={'Job Details'}
              icon={''}
              columns={CommercialTaxDetails}
              listData={CommercialTaxDetailsData}
              checkbox={true}
              hover={true}
              isOpened={isOpened}
            /><TableVirtuoso
            // key={item.fieldName}
            itemName={'Job Details'}
            icon={''}
            columns={CommercialTaxDetails}
            listData={CommercialTaxDetailsData}
            checkbox={true}
            hover={true}
            isOpened={isOpened}
          />
          <TableVirtuoso
              // key={item.fieldName}
              itemName={'Job Details'}
              icon={''}
              columns={CommercialTaxDetails}
              listData={CommercialTaxDetailsData}
              checkbox={true}
              hover={true}
              isOpened={isOpened}
            />
            <TableVirtuoso
              // key={item.fieldName}
              itemName={'Job Details'}
              icon={''}
              columns={CommercialTaxDetails}
              listData={CommercialTaxDetailsData}
              checkbox={true}
              hover={true}
              isOpened={isOpened}
            />
            <TableVirtuoso
              // key={item.fieldName}
              itemName={'Job Details'}
              icon={''}
              columns={CommercialTaxDetails}
              listData={CommercialTaxDetailsData}
              checkbox={true}
              hover={true}
              isOpened={isOpened}
            />
            <TableVirtuoso
              // key={item.fieldName}
              itemName={'Job Details'}
              icon={''}
              columns={CommercialTaxDetails}
              listData={CommercialTaxDetailsData}
              checkbox={true}
              hover={true}
              isOpened={isOpened}
            />
            <TableVirtuoso
              // key={item.fieldName}
              itemName={'Job Details'}
              icon={''}
              columns={CommercialTaxDetails}
              listData={CommercialTaxDetailsData}
              checkbox={true}
              hover={true}
              isOpened={isOpened}
            />
              <TableVirtuoso
              // key={item.fieldName}
              itemName={'Job Details'}
              icon={''}
              columns={CommercialTaxDetails}
              listData={CommercialTaxDetailsData}
              checkbox={true}
              hover={true}
              isOpened={isOpened}
            />
            <TableVirtuoso
              // key={item.fieldName}
              itemName={'Job Details'}
              icon={''}
              columns={CommercialTaxDetails}
              listData={CommercialTaxDetailsData}
              checkbox={true}
              hover={true}
              isOpened={isOpened}
            />
            <TableVirtuoso
              // key={item.fieldName}
              itemName={'Job Details'}
              icon={''}
              columns={CommercialTaxDetails}
              listData={CommercialTaxDetailsData}
              checkbox={true}
              hover={true}
              isOpened={isOpened}
            />
            <TableVirtuoso
              // key={item.fieldName}
              itemName={'Job Details'}
              icon={''}
              columns={CommercialTaxDetails}
              listData={CommercialTaxDetailsData}
              checkbox={true}
              hover={true}
              isOpened={isOpened}
            />
            <TableVirtuoso
              // key={item.fieldName}
              itemName={'Job Details'}
              icon={''}
              columns={CommercialTaxDetails}
              listData={CommercialTaxDetailsData}
              checkbox={true}
              hover={true}
              isOpened={isOpened}
            />
            <TableVirtuoso
              // key={item.fieldName}
              itemName={'Job Details'}
              icon={''}
              columns={CommercialTaxDetails}
              listData={CommercialTaxDetailsData}
              checkbox={true}
              hover={true}
              isOpened={isOpened}
            />
            <TableVirtuoso
              // key={item.fieldName}
              itemName={'Job Details'}
              icon={''}
              columns={CommercialTaxDetails}
              listData={CommercialTaxDetailsData}
              checkbox={true}
              hover={true}
              isOpened={isOpened}
            />
            <TableVirtuoso
              // key={item.fieldName}
              itemName={'Job Details'}
              icon={''}
              columns={CommercialTaxDetails}
              listData={CommercialTaxDetailsData}
              checkbox={true}
              hover={true}
              isOpened={isOpened}
            />
            <TableVirtuoso
              // key={item.fieldName}
              itemName={'Job Details'}
              icon={''}
              columns={CommercialTaxDetails}
              listData={CommercialTaxDetailsData}
              checkbox={true}
              hover={true}
              isOpened={isOpened}
            />
            <TableVirtuoso
              // key={item.fieldName}
              itemName={'Job Details'}
              icon={''}
              columns={CommercialTaxDetails}
              listData={CommercialTaxDetailsData}
              checkbox={true}
              hover={true}
              isOpened={isOpened}
            />
            <TableVirtuoso
              // key={item.fieldName}
              itemName={'Job Details'}
              icon={''}
              columns={CommercialTaxDetails}
              listData={CommercialTaxDetailsData}
              checkbox={true}
              hover={true}
              isOpened={isOpened}
            />
            <TableVirtuoso
              // key={item.fieldName}
              itemName={'Job Details'}
              icon={''}
              columns={CommercialTaxDetails}
              listData={CommercialTaxDetailsData}
              checkbox={true}
              hover={true}
              isOpened={isOpened}
            />
            <TableVirtuoso
              // key={item.fieldName}
              itemName={'Job Details'}
              icon={''}
              columns={CommercialTaxDetails}
              listData={CommercialTaxDetailsData}
              checkbox={true}
              hover={true}
              isOpened={isOpened}
            />
            <TableVirtuoso
              // key={item.fieldName}
              itemName={'Job Details'}
              icon={''}
              columns={CommercialTaxDetails}
              listData={CommercialTaxDetailsData}
              checkbox={true}
              hover={true}
              isOpened={isOpened}
            /><TableVirtuoso
            // key={item.fieldName}
            itemName={'Job Details'}
            icon={''}
            columns={CommercialTaxDetails}
            listData={CommercialTaxDetailsData}
            checkbox={true}
            hover={true}
            isOpened={isOpened}
          />
          <TableVirtuoso
              // key={item.fieldName}
              itemName={'Job Details'}
              icon={''}
              columns={CommercialTaxDetails}
              listData={CommercialTaxDetailsData}
              checkbox={true}
              hover={true}
              isOpened={isOpened}
            />
            <TableVirtuoso
              // key={item.fieldName}
              itemName={'Job Details'}
              icon={''}
              columns={CommercialTaxDetails}
              listData={CommercialTaxDetailsData}
              checkbox={true}
              hover={true}
              isOpened={isOpened}
            />
            <TableVirtuoso
              // key={item.fieldName}
              itemName={'Job Details'}
              icon={''}
              columns={CommercialTaxDetails}
              listData={CommercialTaxDetailsData}
              checkbox={true}
              hover={true}
              isOpened={isOpened}
            />
            <TableVirtuoso
              // key={item.fieldName}
              itemName={'Job Details'}
              icon={''}
              columns={CommercialTaxDetails}
              listData={CommercialTaxDetailsData}
              checkbox={true}
              hover={true}
              isOpened={isOpened}
            />
            <TableVirtuoso
              // key={item.fieldName}
              itemName={'Job Details'}
              icon={''}
              columns={CommercialTaxDetails}
              listData={CommercialTaxDetailsData}
              checkbox={true}
              hover={true}
              isOpened={isOpened}
            /> */}

    </>
  );
}

export default Checklist;
