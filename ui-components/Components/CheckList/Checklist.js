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
  const [leftNavigationFields, setLeftNavigationFields] =React.useState(homeData);
  const [loadedItems, setLoadedItems] = useState([]);
  const [loadingIndex, setLoadingIndex] = useState(0);
  const scrollContainerRef = useRef(null);


  // const debouncedNavigate = debounce((pageNumber) => {
  //   setActivePage(pageNumber);
  // }, 500);
  // React.useEffect(() => {
  //   const handleScroll = () => {
  //     const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
  //     if (scrollHeight - (scrollTop + clientHeight) < 100) {
  //       loadNextItem();
  //     }
  //   };
  
  //   const loadNextItem = () => {
  //     const nextIndex = loadedItems.length; // Calculate the next index based on the current length of loadedItems
  //     if (nextIndex < leftNavigationFields.length) {
  //       setLoadingIndex(nextIndex);
  //       setTimeout(() => {
  //         setLoadedItems((prevLoadedItems) => {
  //           const newLoadedItems = [...prevLoadedItems];
  //           newLoadedItems[nextIndex] = nextIndex; // Assign the nextIndex value to the corresponding index
  //           return newLoadedItems;
  //         });
  //         setLoadingIndex(-1);
  //       }, 1000); // Delay of 1 second
  //     }
  //   };
  
  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, [loadedItems, leftNavigationFields.length]);
  const handleScroll = () => {
    const container = scrollContainerRef.current;
    if (container) {
      const { scrollTop, clientHeight, scrollHeight } = container;
      if (scrollHeight - (scrollTop + clientHeight) < 100) {
        loadNextItem();
      }
    }
  };
     const loadNextItem = (item) => {
      const nextIndex = loadedItems.length;
       // Calculate the next index based on the current length of loadedItems
      if (nextIndex < leftNavigationFields.length) {
        setLoadingIndex(nextIndex);
        setTimeout(() => {
          setLoadedItems((prevLoadedItems) => {
            const newLoadedItems = [...prevLoadedItems];
            newLoadedItems[nextIndex] = nextIndex; // Assign the nextIndex value to the corresponding index
            return newLoadedItems;
          });
          setLoadingIndex(-1);
        }, 500); // Delay of 1 second
      }
 
    };

  const handleNavigateToPage = (item)=>{
    let name = item.fieldName
    document.getElementById(name).scrollIntoView({behavior:"smooth"})

  }
  return (
    <>
      <LeftNavigation
        position={"top"}
        invoicesData={invoiceData}
        homeData={homeData}
        isSetOpened={isSetOpened}
        data={data}
        setLeftNavigationFields={setLeftNavigationFields}
        handleMenuClick={handleNavigateToPage}
      />
      <div ref={scrollContainerRef} style={{ height: '94vh', overflow: 'auto' , scrollBehavior:"smooth" }} onScroll={handleScroll}>

           <AddFields
         name={"Job Details"}
         SectionFields={JobDetailsSectionFields}
         dataInfo={{}}
         data={data}
         isOpened={isOpened}
       />
     {leftNavigationFields.map((item, index) => {
       
       const isLoadedAndChecked = loadedItems.includes(index) && item.checked === true;
        if (isLoadedAndChecked ) {
          return (
            <div id={item.fieldName}>
            <Suspense fallback={<div style={{ marginLeft: '150px', marginTop: '40px', color: 'red' }} key={isLoadedAndChecked}>Loading</div>} >
              <TableVirtuoso
                itemName={item.fieldName}
                icon={item.icon}
                columns={item.columns}
                listData={item.data}
                checkbox={true}
                hover={true}
                isOpened={isOpened}
              />
            </Suspense>
            </div>
           
          );
        } else if (loadingIndex === index) {
          return (
            <div style={{ marginLeft: '120px', marginTop: '40px', color: 'red' }} key={item.fieldName}>Loading</div>
          );
        }
        return null;
        
      })}
    
      </div>

    </>
  );
}

export default Checklist;
