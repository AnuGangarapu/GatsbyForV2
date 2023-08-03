import React, { useEffect } from "react";
import FilterListIcon from "@mui/icons-material/FilterList";
import Popover from "../DialogBox/Popover";
import SearchField from "../SearchField/SearchField";
import { Box, listClasses } from "@mui/material";
import { makeStyles } from "@mui/styles";

import "./index.css";
import CircularProgress from "@mui/material/CircularProgress";
import SuccessView from "../SuccessView";

import { useState } from "react";
import { Snackbar } from "@mui/material";
import { Alert } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Grid, Typography, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";


//import Button from '../../Button'

const useStyles = makeStyles({
  heading: {
    width: "286px",
    height: "18px",
    paddingLeft: 16,
    paddingTop: 16,
    fontFamily: "Inter",
    fontWeight: 600,
    fontSize: "14px",
    lineHeight: "18px",
    color: "#FFFFFF",
    textAlign: "start",
  },
  listDataContainer: {
    paddingLeft: 0,
    maxHeight: "190px",
    overflow: "auto",

    "&::-webkit-scrollbar": {
      width: "6px",
      height: "10px",
      backgroundColor: "#505767",
    },
    "&::-webkit-scrollbar-thumb": {
      height: "154px",
      borderRadius: "22px",
    },
  },
  snackBar: {
    borderRadius: "4px",
  },
  checkIcon: {
    color: "#ffffff",
    height: "14px",
    width: "14px",
  },
  alertBox: {
    display: "flex",
    alignItems: "center",
    width: "414px",
    height: "50px",
    gap: "10px",
    left: "calc(50% - 414px/2)",
    backgroundColor: "#00B196",
    "& .css-ptiqhd-MuiSvgIcon-root": {
      color: "#FFFFFF",
    },
  },

  container1: {
    marginTop: "16px !important",
  },
  gridItem: {
    display: "flex",
    alignItems: "start",
  },
  paragraph1: {
    width: "50%",
    fontFamily: "Inter !important",
    fontStyle: "normal !important",
    fontWeight: "400 !important",
    fontSize: "12px !important",
    lineHeight: "16px !important",
    color: "#626776 !important",
    minHeight: "16px",
  },
  paragraph2: {
    width: "50%",
    fontFamily: "Inter !important",
    fontStyle: "normal !important",
    fontWeight: "600 !important",
    fontSize: "12px !important",
    lineHeight: "16px !important",
    color: "#050E25 !important",
  },
  paragraph3: {
    fontFamily: "Inter !important",
    fontStyle: "normal !important",
    fontWeight: "600 !important",
    fontSize: "12px !important",
    lineHeight: "16px !important",
  },
  textField: {
    width: "50%",
    fontFamily: "Inter !important",
    fontStyle: "normal !important",
    fontWeight: "400 !important",
    fontSize: "16px !important",
    lineHeight: "16px !important",
    color: "#050E25 !important",
  },
  Button: {
    display: "flex !important",
    alignItems: "center !important",

    position: "relative !important",
    left: "-11px !important",

    "&:hover": {
      backgroundColor: "#FFFFFF !important",
    },
  },
});
// const data1 = {
//   partCode: {
//     fieldValues: { partCode: "123" },
//   },
//   description: {
//     fieldValues: { description: "123456" },
//   },
//   hsn: {
//     fieldValues: { hsn: "123456" },
//   },
//   genericDescription: {
//     fieldValues: { genericDescription: "54678" },
//   },
//   shipper: {
//     fieldValues: {
//       shipperName: "123",
//       shipperCode: "12",
//       shipperCodeNumber: "5678",
//       shipperAddress1: "1234",
//       shipperAddress2: "23e4r5t6yu",
//       shipperCity: "khammam",
//       shipperPincode: "234567",
//       shipperCountrySubdivision: "yerrupalem",
//       shipperCountry: "India",
//     },
//   },
//   customer: {
//     fieldValues: {
//       customerName: "123",
//       customerCode: "123",
//       customerCodeNumber: "5678",
//       customerAddress1: "1234",
//       customerAddress2: "23e4r5t6yu",
//       customerCity: "khammam",
//       customerPincode: "234567",
//       customerCountrySubdivision: "yerrupalem",
//       imCountry: "India",
//     },
//   },
// };

const apiStatusConstants = {
  inital: "INTIAL",
  inProgress: "IN_PROGRESS",
  failure: "FAILURE",
  success: "SUCCESS",
};
const loadingView = () => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "302px",
      height: "247px",
    }}
  >
    <CircularProgress sx={{ width: "20px", height: "20px" }} />
  </Box>
);

const failureView = () => (
  <Box
    sx={{
      width: "302px",
      height: "247px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <img
      src="https://res.cloudinary.com/duoqwzxmo/image/upload/v1685289673/2634442_fjpepr.jpg"
      alt="404"
      className="error-img"
    />
    <h1 className="no-result">No Result Found</h1>
    <p className="failure-msg">
      We cannot find the item you are searching, may be enter the correct value
    </p>
  </Box>
);
export default function FilterAndSort(props) {
  const {filterFields , data} = props
  const [dateSlected, setDateSelected] = useState(false);
  const [isChecked, setCheckedStatus] = useState(false);
  const [searchValue, setSearchInput] = useState("");
  //const [listOfResults, setSearchListItems] = useState(props.myArray);
  const [listOfResults, setSearchListItems] = useState(props.filterFields);
  const [apiStatus, setApiStatus] = useState(apiStatusConstants.success);
  const [open, setOpen] = useState(false);
 const [checkedList, setCheckedList] = useState([]);
 

  useEffect(() => {
    setSearchListItems(props.filterFields);
  }, [props.filterFields]);



  
  const classes = useStyles();

  const handleSearchInputChange = (searchInput) => {
  setSearchInput(searchInput);
    let filteredResults = props.filterFields.filter((item) =>
      item.fieldName.toLowerCase().includes(searchInput.toLocaleLowerCase())
    );
   

     setSearchListItems(filteredResults);
  };

  const [openDialog, setOpenDialog] = React.useState(false);
  const handleOpen = () => {
    setOpenDialog(true);
   setSearchListItems(props.filterFields)
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  const handleApplyClick = () => {
    setOpen(true);

    const checkedIds = [];
    for (const key in checkedList) {
      if (checkedList[key].checked) {
        checkedIds.push(checkedList[key].id);
      }
    }

   let clickedItems = [...checkedIds];

    props.handleData(clickedItems);

  };

  const handleAnyCheckboxClick = (status, newList) => {
    setCheckedList(newList);
    setCheckedStatus(status);
  };
  const handleDateTimeSelected = (dateSelected) => {
    setDateSelected(dateSelected);
  };

  const renderAllViews = () => {
    
    switch (apiStatus) {
      case apiStatusConstants.success:
        return (
          <SuccessView
            listItems={listOfResults}
           
            handleAnyCheckboxClick={handleAnyCheckboxClick}
          />
        );
      case apiStatusConstants.failure:
        return failureView();
      case apiStatusConstants.inProgress:
        return loadingView();
      default:
        return null;
    }
  };

  return (
    <div style={{ position: "relative" }}>
      {props.addFieldsTrue ? (
        <Button className={classes.Button} onClick={handleOpen}>
          <AddIcon
            onClick={handleOpen}
            style={{ width: "16px", height: "16px", marginRight: "4px" }}
          />
          <Typography className={classes.paragraph3}>Add Details</Typography>
        </Button>
      ) : (
        //  <Button onClick={handleOpen} text="Add Details"  startIcon={<AddIcon/>}/>
        <div>
          <FilterListIcon onClick={handleOpen} sx={{ color: "#626776" }} />
        </div>
      )}

      <div style={{ position: "absolute", marginTop: "-2px", zIndex: "999" }}>
        <Popover
          open={openDialog}
          setOpen={setOpenDialog}
          width={data.width}
          height={data.height}
          ArrowPosition={"75px"}
          // ArrowPlaced={"425px"}
          //ArrowHeight={"10px"}

          anchorOrigin={{ vertical: "center", horizontal: "center" }}
        >
          <h1 className={classes.heading}>Filter by</h1>

          <>
            <ul className="search-list-container">
              {data.subFilterValues.map((each) => (
                <SearchField
                  text={each.label}
                  key={each.label}
                  width={each.width}
                  handleSearchInputChange={handleSearchInputChange}
                />
              ))}
            </ul>
            <p className="results">{listOfResults.length} Results</p>
            {renderAllViews()}
          </>

          <div className="button-container">
            <Button
              variant="text"
              sx={{
                fontFamily: "Inter",
                fontStyle: "normal",
                fontWeight: 600,
                fontSize: "12px",
                lineHeinght: "16px",
                textTransform: "none",
                color: "#3874FF",
              }}
            >
              Cancel
            </Button>
             
              <Button
                variant="contained"
                sx={{
                  fontFamily: "Inter",
                  fontStyle: "normal",
                  fontWeight: 600,
                  fontSize: "12px",
                  lineHeinght: "16px",
                  height: "24px",
                  textTransform: "none",
                }}
                onClick={handleApplyClick}
              >
                Apply
              </Button>
            
              
            
            
            {/* {isChecked || dateSlected ? (
              <Button
                variant="contained"
                sx={{
                  fontFamily: "Inter",
                  fontStyle: "normal",
                  fontWeight: 600,
                  fontSize: "12px",
                  lineHeinght: "16px",
                  height: "24px",
                  textTransform: "none",
                }}
                onClick={handleApplyClick}
              >
                Apply
              </Button>
            ) : (
              <Button
                variant="contained"
                onClick={handleApplyClick}
                sx={{
                  fontFamily: "Inter",
                  fontStyle: "normal",
                  fontWeight: 600,
                  fontSize: "12px",
                  lineHeinght: "16px",
                  height: "24px",
                  textTransform: "none",
                  color: "#505767",
                  background: "#242C40",
                }}
              >
                Apply
              </Button>
            )} */}
          </div>
        </Popover>
      </div>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        className={classes.snackBar}
        anchorOrigin={{ vertical: "center", horizontal: "center" }}
      >
        <Alert
          onClose={handleClose}
          icon={<CheckCircleIcon className={classes.checkIcon} />}
          className={classes.alertBox}
          sx={{ backgroundColor: "#00B196" }}
        >
          <p className="alert-msg">{`Fields Added Successfully`}</p>
        </Alert>
      </Snackbar>
    </div>
  );
}