import React, { useMemo } from 'react';
import ListTable from './Table';

import ListItemIcon from '@mui/material';
// import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
// import UnfoldLessIcon from "@mui/icons-material/UnfoldLess";
import { Grid, Typography } from '@mui/material';
import jobDetails from '../../Images/jobDetails.svg'
import invoiceDetails from "../../Images/invoiceDetails.svg"
import commercialTax from "../../Images/commercialTax.svg"
import exchangeRates from "../../Images/exchangeRates.svg"
import bondDetails from "../../Images/bondDetails.svg"
import certificateDetails from "../../Images/certificateDetails.svg"
import igmDetails from "../../Images/igmDetails.svg"
import containerDetails from "../../Images/containerDetails.svg"
import otherCharges from "../../Images/otherCharges.svg"
import hssDetails from "../../Images/hssDetails.svg"
import endUse from "../../Images/endUseDetails.svg"
import licenseDetails from "../../Images/licenseDetails.svg"
import reExport from "../../Images/reExport.svg"
import swInfo from "../../Images/swInfo.svg"
import swControl from "../../Images/swControl.svg"
import swProduction from "../../Images/swProduction.svg"
import swConstituent from "../../Images/swConstituent.svg"
import imDetails from "../../Images/imDetails.svg"
import igstPayment from "../../Images/igstPayment.svg"
import cess from "../../Images/cess.svg"
import thirdPartyDetails from "../../Images/thirdPartyDetails.svg"
import ar4Details from "../../Images/ar4Details.svg"
import drawbackDetails from "../../Images/drawbackDetails.svg"
import depb from "../../Images/depb.svg"
import rostcl from "../../Images/rosctl.svg"
import rodtep from "../../Images/rodtep.svg"
import dfia from "../../Images/dfia.svg"
import deec from "../../Images/deec.svg"
import packingDetails from "../../Images/packingDetails.svg"
import epcg from "../../Images/epcg.svg"
import supportingDocuments from "../../Images/supportingDocuments.svg"
import statements from "../../Images/statements.svg"




const TableVirtuoso = React.memo((props) => {
  
    const [fullAccordianOpen, setFullAccordianOpen ] = React.useState(false)
    const [eachAccordion, setEachAccordion] = React.useState(() => {
      const initialAccordionState = {};
      props.listData.forEach((item, index) => {
        initialAccordionState[index] = false;
      });
      return initialAccordionState;
    });
    const [opened,setOpened]=React.useState(props.isOpened)
 
React.useEffect(()=>{
  setOpened(props.isOpened)
 },[props.isOpened])


    const clickedIcon = (index) => {
      setEachAccordion((prevAccordionState) => ({
        ...prevAccordionState,
        [index]: !prevAccordionState[index],
      }));
    };
   
    const handleChange = () => {
    
      // If fullAccordianOpen is true, set eachAccordion state to true for all rows, otherwise set to false for all rows
      setEachAccordion((prevAccordionState) => {
        const updatedAccordionState = {};
        Object.keys(prevAccordionState).forEach((index) => {
          updatedAccordionState[index] = !fullAccordianOpen;
        });
        return updatedAccordionState;
      });
       setFullAccordianOpen((prevValue) => !prevValue);
    };
  

    const setListData = (index)=> {
      props.setListDataItem(index)
    
     
      }
      const deletingRow=((index)=>{
        props.deleteItem(index)
        let accordionStates={...eachAccordion}
        delete accordionStates[index]
        console.log('accordionStates',accordionStates)
        setEachAccordion(accordionStates)

       

      })

   
    return (
      <div style={{marginLeft:props.isOpened?'231px':'55px'}}>
    {/* {fullAccordianOpen===true?<UnfoldLessIcon   onClick={()=>handleChange()}/>:<UnfoldMoreIcon   onClick={()=>handleChange()}/>} */}
    <Grid style={{backgroundColor:'#F6F9FF',paddingLeft:"24px",paddingRight:'24px',display:'flex',justifyContent:"center"}}>
      <div style={{display:'flex',alignItems:'center'}}>
        <img src={props.icon} alt={props.itemName}/> 
        <Typography style={{fontFamily: "Inter",fontSize: "14px",fontStyle:'normal',fontWeight:'600',lineHeight:"18px",marginLeft:'8px'

}}>{props.itemName}</Typography>  
        
        </div>
    </Grid>
    {/* deletingRow={deletingRow} setListData={setListData}  */}
      <ListTable columns={props.columns}  listData={props.listData} accordion={fullAccordianOpen} checkbox={props.checkbox} hover={props.hover}  
      clickedIcon={clickedIcon} eachAccordion={eachAccordion}
      
      />
      
      </div>
   
    );
  });
  
  export default TableVirtuoso;