import React, { useEffect } from 'react'
import Checkbox from './Inputs/Checkbox';
import FilterListIcon from '@mui/icons-material/FilterList';
import Popover from './Inputs/ArrowDialogBox'
import SearchTextBox from './SearchTextBox';
import { List, ListItem, ListItemText } from '@mui/material';
import { Box, listClasses } from '@mui/material';
import { makeStyles } from '@mui/styles';
import CloseIcon from '@mui/icons-material/Close';
import CircularProgress from '@mui/material/CircularProgress';
import { useState } from 'react';
import {Snackbar} from '@mui/material';
import { Alert } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
//import DatePicker from './DatePicker/DatePIcker'
import TextFields from './Inputs/Textfield';
import {Grid} from '@mui/material';
import Button from './Button'
const useStyles = makeStyles({
 container: {
   display: 'flex',
   flexDirection: 'column'

 },
 heading:{
   // height: "18px",
   fontFamily: 'Inter',
   fontWeight: 600,
   fontSize: "14px",
   lineHeight: '18px',
   color: "#FFFFFF",
   textAlign: 'start',
   margin:0
   },
 searchListContainer: {
   listStyleType: 'none',
   paddingLeft: 0,
   display: 'flex',
   flexWrap: 'wrap',
   gap: 6   ,
   '& .css-h4y409-MuiList-root':{
      display:'flex',
   }
 },
 results: {
   fontFamily: 'Inter',
   color: '#ffffff',
   textAlign: 'left',
   top: '0px',
   fontStyle: 'normal',
   fontWeight: 400,
   fontSize: '12px',
   lineHeight: '16px',
   marginBottom: '0',
 },

 failureCard: {
   height: '232px',
   display: 'flex',
   flexDirection:'column',
   justifyContent: 'center',
   alignItems: 'center',
   width: '302px',
   height: '247px',
   flex: 'none',
   order: 1,
   alignSelf: 'stretch',
   flexGrow: 0,
 },
   noResult: {
   fontFamily: 'Inter',
   fontStyle: 'normal',
   fontWeight: 600,
   fontSize: '12px',
   lineHeight: '16px',
   color: 'white',
 },
 failureMsg: {
   fontFamily: 'Inter',
   fontStyle: 'normal',
   fontWeight: 400,
   fontSize: '12px',
   lineHeight: '20px',
   textAlign: 'center',
   color: '#CDCFD3',
 },
 errorImg: {
   height: '66.602054595947266px',
   width: '78.16188430786133px',
 },
 alertMsg: {
   textAlign: 'center',
   fontFamily: 'Inter',
   fontStyle: 'normal',
   fontWeight: 600,
   fontSize: '14px',
   lineHeight: '18px',
   color: '#FFFFFF',
 },
 snackBar:{
   borderRadius: "4px",

 },
 checkIcon:{
   color:'#ffffff',
   height: '14px',
   width: '14px'
 },
 alertBox:{
   display: 'flex',
   alignItems: 'center',
   width: "414px",
   height: "50px",
   gap:'10px',
   left: "calc(50% - 414px/2)",
   backgroundColor: "#00B196",
   '& .css-ptiqhd-MuiSvgIcon-root':{
   color : '#FFFFFF',
   }

 },
 buttonContainer:{
   display: 'flex', 
   justifyContent: 'space-between',
   alignItems: 'center',
   padding: '16px 0px 0px 0px'
 },

 checkedFalse:{
   color: "#1565c0 !important"
 }
 ,checkedTrue:{
      color: '#D9D9D9 !important'
   },
checkbox: {
   position: "relative",
   "&::after": {
   content: '""',
   position: "absolute",
   // left: "50%",
   // top: "42%",
   transform: "translate(-50%, -50%) rotate(45deg)",
   width: "5px",
   height: "10px",
   border: "solid white",
   borderWidth: "0 3px 3px 0",
   opacity: 0
   },
   "&.Mui-checked::after": {
   opacity: 1
   }
 },

 countContainer: {
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
   marginTop: '0',
 },
 selectedCard: {
   display: 'flex',
   justifyContent: 'space-between',
   //  paddingRight: '16px',
   //  paddingLeft: '5px',
 },
 itemsSelected: {
   fontFamily: 'Inter',
   fontStyle: 'normal',
   fontWeight: '400',
   fontSize: '12px',
   lineHeight: '16px',
   color: '#9497A1',
   marginLeft: '8px',
 },
 listDataContainer:{
   paddingTop: 0,
   maxHeight: "192px",
   overflowY: 'scroll',
   '&::-webkit-scrollbar': {
   width: '6px',
   height: "5px",
   backgroundColor: '',
   borderRadius: '22px',
  
   },
   '&::-webkit-scrollbar-thumb': {
   backgroundColor: "#505767",
   height: "105px",
   borderRadius: '4px',
   },
 },
 listItem: {
      

 },
 listContent: {
   fontFamily: 'Inter',
   fontStyle: 'normal',
   fontWeight: '400',
   fontSize: '12px',
   lineHeight: '16px'  ,
   marginLeft: '8px',
   color: '#FFFFFF',
 },
 // date Field Styles 
 dateFieldContainer: {
   display: 'flex',
   justifyContent:'space-between',
   alignItems: 'center',
   width: '413px',
   margin: '0px 0px 0px 0px'

 },
 selectDate: {
   fontFamily: 'Inter',
   fontStyle: 'normal',
   fontWeight: '400',
   fontSize: '12px',
   lineHeight: '16px',
   color: '#9497A1',
 },
 
})



const loadingView = () =>( <Box sx={{ display: 'flex', justifyContent: 'center', alignItems:'center',width: '302px', height: '247px' }}>
<CircularProgress sx={{width: '20px', height: '20px'}}/>
</Box>)


const FailureView = () => {
   const classes = useStyles()
return(<Box className={classes.failureCard}>
 <img src = 'https://res.cloudinary.com/duoqwzxmo/image/upload/v1685289673/2634442_fjpepr.jpg' alt ='404' className={classes.errorImg}/>
 <h1 className={classes.noResult}>No Result Found</h1>
 <p className={classes.failureMsg}>We cannot find the item you are searching, may be enter the correct value</p>
</Box>)}

export default function FilterAndSort(props) {
  const {listData} = props
    const [dateSelected, setDateSelected] = useState(false)
    const [date, setDate] = useState('')
    const [isChecked, setCheckedStatus] = useState(false)
    const [searchValue, setSearchInput] = useState("")
    const [listOfResults, setSearchListItems] = useState(listData)
    const [open, setOpen] = useState(false)
    const [checkedList, setCheckedList] = useState([])
    const [openDialog ,setOpenDialog] = React.useState(false)
    const classes = useStyles()
    const {data}= props
    const handleSearchInputChange = (searchInput) => {
    
         setSearchInput(searchInput)
            let filteredResults = listData.filter(item => item.label.toLowerCase().includes(searchValue.toLocaleLowerCase()))
            let checkedListIds = checkedList.filter(each => each.checked === true).map(each => each.id)
            let finalList = filteredResults.map(each => {
            if (checkedListIds.includes(each.id)){
            return {...each, checked: true }
            }
            return each
            })
    
            setSearchListItems(finalList)
            
    }
 
   
    const handleOpen= ()=>{
    setOpenDialog(!openDialog)
    setSearchListItems(listData)
    }

    const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
    return;

    }
    setOpen(false);
    }
    const handleApplyClick = () => {
    setOpen(true)
    const checkedIds = [];
    for (const key in checkedList) {
      if (checkedList[key].checked) {
        checkedIds.push(checkedList[key].id);
      }
    }

    props.handleData(checkedIds);
    }
    
    const handleAnyCheckboxClick = (status, newList) => {
    setCheckedList(newList)
    setCheckedStatus(status)
    }
    const handleDateTimeSelected = (dateSelected) => {
    setDateSelected(dateSelected)
    
    }

    const handleCancel = () => {
      setOpenDialog(false)
      
    }

    
 return(
 <Grid container className={classes.container} > 
  <Grid item>
    <FilterListIcon onClick={handleOpen} sx={{ color: "#626776" }} />
  </Grid>
        <Grid style={{ position: "absolute", marginTop: "-2px", zIndex: "999" }}>
            <Popover
            className = {classes.popover}
            open={openDialog}
            setOpen={setOpenDialog}
            height='auto'
            ArrowPosition={data?.filterType === 'date' ? '194px': "16px"} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
        <h1 className={classes.heading}>Filter by</h1>
        {data?.subFilterValues !== undefined ? <> <List classes={{root:classes.searchListContainer}}>{data.subFilterValues.map(each => <SearchTextBox text={each.label} key = {each.label} width={each.width} searchValue = {searchValue}backgroundColor='#242C40' border="none" handleSearchInputChange ={handleSearchInputChange} />)} 
        </List > 
        <p className={classes.results}>{listOfResults?.length} Results</p>
        {listOfResults?.length === 0 ? <FailureView/> : <SuccessView listItems={listOfResults} handleAnyCheckboxClick={handleAnyCheckboxClick}/>}
        </> : 
       // <DateField dateSelected={dateSelected} filterType={data.filterType} handleDateTimeSelected = {handleDateTimeSelected}/>
       <h1>DateField</h1>
        }
        <FooterButtons isChecked = {isChecked} handleCancel={handleCancel} handleApplyClick={handleApplyClick} dateSelected={dateSelected}/>
        </Popover>
        </Grid>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} className={classes.snackBar} anchorOrigin={{ vertical: 'center', horizontal: 'center' }} >
        <Alert onClose={handleClose} icon={<CheckCircleIcon className={classes.checkIcon}/>} className={classes.alertBox} sx={{backgroundColor: '#00B196'}}>
        <p className={classes.alertMsg}>{`Job is Filtered based on ${data?.label} successfully`}</p>
        </Alert>
        </Snackbar>
</Grid>
 )
}


export const SuccessView = ({listItems, handleAnyCheckboxClick}) => {     
    const classes = useStyles()
    const [selectAll, setSelectAll] = useState(false)
    const [checkedItems, setCheckedItems] = useState(listItems);
    const [selectedItems, setSelectedItems] = useState(0);
    
    useEffect(() => {
      setCheckedItems(listItems)
      let count = listItems.filter(item => item.checked).length;
      let isAllChecked = listItems.every(item => item.checked === true)
        setSelectAll(isAllChecked)
        setSelectedItems(count)
      }
      
    , [listItems])

    const totalItemsSelected = (updatedItems) => {
      let count = updatedItems.filter(item => item.checked).length;
      setSelectedItems(count)
      }
    const handleSelectAllItems = () => { 
      let filteredList;
      let isChecked;
      if (!selectAll){
         filteredList = checkedItems.map(item => ({...item, checked: true}))
        setSelectedItems(filteredList.length)
        isChecked = filteredList.some(each => each.checked === true)
        }
        else{
          filteredList = checkedItems.map(item => ({...item, checked: false}))
          isChecked = filteredList.some(each => each.checked === true)
          setSelectedItems(0)
        }
        handleAnyCheckboxClick(isChecked, filteredList)
        setCheckedItems(filteredList)
        
        setSelectAll(!selectAll)
    }

    const handleCheckboxChange = (id) => {
      const updatedItems = checkedItems.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          checked: !item.checked, // Toggle the checked property
          };
      }
        return item;
      });
    let isChecked = updatedItems.some(each => each.checked === true)
    setCheckedItems(updatedItems)
    totalItemsSelected(updatedItems)
    handleAnyCheckboxClick(isChecked, updatedItems)
    };
    
    
 return(
 <Grid> 
    <Grid className={classes.selectedCard}>
      <Grid className={classes.countContainer}>
         <Checkbox 
         sx={{width: '16px', height: '16px'}}
         className = {selectAll? classes.checkedTrue: classes.checkedFalse}
         onChange = {()=> handleSelectAllItems()}
         handleCheckboxChange = {handleSelectAllItems}
        neutral={true} 
         id = "selectAll" 
         />
         <label className={classes.itemsSelected} htmlFor="selectAll">Select All</label>
      </Grid>
         <p className={classes.itemsSelected}>{selectedItems} items selected</p>
      </Grid>
      <List className={classes.listDataContainer} sx={{padding: '0px 0px 0px 0px'}}>
         {checkedItems.map(each => <ListItem sx={{paddingLeft: '0px', borderBottom: '1px solid #32394C'}} key = {each.id} style = {each.checked ? {backgroundColor: '#242C40'}: null}><Checkbox id = {each.id} isChecked={each.checked}
         classes={{root: classes.checkbox}}
         handleCheckboxChange = {handleCheckboxChange}
         /><label className={classes.listContent} htmlFor={each.id}>{each.fieldName}</label></ListItem>)}
      </List>
    </Grid>
 )}

 export const DateField = (props)  =>{
    const classes = useStyles()
    const {handleDateTimeSelected, dateSelected} = props
    return (
        <Grid className={classes.dateFieldContainer}>
        <p className={classes.selectDate}>Select Date</p>
        <TextFields placeholder = 'From Date & Time - To Date & Time' data = {dateSelected}
            iconType={ <DatePicker handleSelectedDate = {handleDateTimeSelected} numberOfMonths = {2}/>}
            showEndAdornment = {true}
            variant = 'standard'
            />
        
        </Grid>
    )
 
}

export const FooterButtons = ({isChecked, dateSelected, handleApplyClick, handleCancel}) => {
   const classes = useStyles()
   return(<Box className={classes.buttonContainer}>
      <Button classProperties='tertiaryButtonCondensed' text='Cancel' onClick={handleCancel} style={{marginLeft: '-14px'}}>Cancel</Button>
      {(isChecked || dateSelected) ? <Button classProperties="primaryButtonCondensed" text='Apply' onClick={handleApplyClick}>Apply
      </Button> : <Button classProperties='primaryButtonCondensed' text = "Apply" disabled={true}>Apply
      </Button>}
      </Box>)
}