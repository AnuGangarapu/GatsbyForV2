import React, { Component } from 'react'
import LeftNavigation from '../../../../../ui-components/Components/LeftNavigation/LeftNavigation';



//import LeftNavigation from '../../Components/LeftNavigation/LeftNavigation';

import jobDetails from '../../../../../ui-components/Components/Images/jobDetails.svg'
import invoiceDetails from '../../../../../ui-components/Components/Images/invoiceDetails.svg'
import commercialTax from '../../../../../ui-components/Components/Images/commercialTax.svg'
import exchangeRates from '../../../../../ui-components/Components/Images/exchangeRates.svg'
import bondDetails from '../../../../../ui-components/Components/Images/bondDetails.svg'
import certificateDetails from '../../../../../ui-components/Components/Images/certificateDetails.svg'
import igmDetails from '../../../../../ui-components/Components/Images/igmDetails.svg'
import containerDetails from '../../../../../ui-components/Components/Images/containerDetails.svg'
import otherCharges from '../../../../../ui-components/Components/Images/otherCharges.svg'
import hssDetails from '../../../../../ui-components/Components/Images/hssDetails.svg'
import endUse from '../../../../../ui-components/Components/Images/endUseDetails.svg'
import licenseDetails from '../../../../../ui-components/Components/Images/licenseDetails.svg'
import reExport from '../../../../../ui-components/Components/Images/reExport.svg'
import swInfo from '../../../../../ui-components/Components/Images/swInfo.svg'
import swControl from '../../../../../ui-components/Components/Images/swControl.svg'
import swProduction from '../../../../../ui-components/Components/Images/swProduction.svg'
import swConstituent from '../../../../../ui-components/Components/Images/swConstituent.svg'
import imDetails from '../../../../../ui-components/Components/Images/imDetails.svg'
import igstPayment from '../../../../../ui-components/Components/Images/igstPayment.svg'
import cess from '../../../../../ui-components/Components/Images/cess.svg'
import thirdPartyDetails from '../../../../../ui-components/Components/Images/thirdPartyDetails.svg'
import ar4Details from '../../../../../ui-components/Components/Images/ar4Details.svg'
import drawbackDetails from '../../../../../ui-components/Components/Images/drawbackDetails.svg'
import depb from '../../../../../ui-components/Components/Images/depb.svg'
import rostcl from '../../../../../ui-components/Components/Images/rosctl.svg'
import rodtep from '../../../../../ui-components/Components/Images/rodtep.svg'
import dfia from '../../../../../ui-components/Components/Images/dfia.svg'
import deec from '../../../../../ui-components/Components/Images/deec.svg'
import packingDetails from '../../../../../ui-components/Components/Images/packingDetails.svg'
import epcg from '../../../../../ui-components/Components/Images/epcg.svg'
import supportingDocuments from '../../../../../ui-components/Components/Images/supportingDocuments.svg'
import statements from '../../../../../ui-components/Components/Images/statements.svg'

const homeData = [
  { name:"Job Details",checked:true,id:"jobDetails",icon:jobDetails},
  { name:"Invoice Details",checked:true,id:"invoiceDetails", icon:invoiceDetails},
  { name:"Commercial Tax Details",checked:false, id:"commercialTaxDetails",icon:commercialTax},
  { name: "Exchange Rate",checked:false, id: "exchangeRate",icon:exchangeRates },
  { name: "Bond Details", checked: false, id: "bondDetails", icon:bondDetails },
  { name: "Certificate Details", checked: false, id: "certificateDetails", icon:certificateDetails},
  { name: "IGM Details", checked: false, id: "igmDetails", icon:igmDetails},
  { name: "Container Details", checked: false, id: "container Details", icon:containerDetails },
  { name: "Other Charges", checked: false, id: "otherCharges", icon: otherCharges },
  { name: "HSS Details", checked: false, id: "hssDetails" , icon:hssDetails},
  { name: "End Use", checked: false, id: "endUse", icon:endUse},
  { name: "Licence Details", checked: false, id: "licenceetails", icon:licenseDetails },
  { name: "ReExport", checked: false, id: "reExport", icon: reExport},
  { name: "Single Window Info", checked: false, id: "singleWindowInfo",icon:swInfo },
  { name: "Single Window Control", checked: false, id: "singleWindowControl", icon:swControl},
  { name: "Single Window Production", checked: false, id: "singleWindowProduction", icon:swProduction },
  { name: "Single Window Constutient", checked: false, id: "singleWindowConstutient" ,icon:swConstituent},
  { name: "RODTEP", checked: false, id: "rodtep", icon:rodtep },
  { name: "DFIA", checked: false, id: "dfia", icon:dfia },
  { name: "DEEC", checked: false, id: "deec", icon: deec},
  { name: "AR4 Details", checked: false, id: "ar4Details", icon:  ar4Details},
  { name: "Third Party Details", checked: false, id: "thirddPartyDetails",icon:thirdPartyDetails },
  { name: "Packing Details", checked: false, id: "packingDetails", icon:packingDetails },
  { name: "Cess", checked: false, id: "cess", icon:cess },
  { name: "IGST Payment", checked: false, id: "igstPayment", icon:igstPayment },
  { name: "Drawback Details ", checked: false, id: "drawbackDetails", icon:drawbackDetails },
  { name: "depb", checked: false, id: "depb", icon:depb },
  { name: "imDetails", checked: false, id: "imDetails", icon:imDetails },
  { name: "ROSCTL", checked: false, id: "rosctl", icon:rostcl },
  { name: "EPCG", checked: false, id: "epcg", icon:epcg },
  { name: "Supporting Documents", checked: false, id: "supportingDocuments", icon:supportingDocuments },
  { name: "Statements", checked: false, id: "statements", icon:statements },
 
 
]

const invoiceData =[
      {invNo:"A41984209"},
      {invNo:"A41984209"},
      {invNo:"A41984209"},
      {invNo:"A41984209"},
      {invNo:"A41984209"},
      {invNo:"A41984209"},
      {invNo:"A41984209"},
      {invNo:"A41984209"},
      {invNo:"A41984209"},
      {invNo:"A41984209"},
      {invNo:"A41984209"},
      {invNo:"A41984209"},
      {invNo:"A41984209"},
      {invNo:"A41984209"},
      {invNo:"A41984209"},
      {invNo:"A41984209"},
      {invNo:"A41984209"},
      {invNo:"A41984209"},
      {invNo:"A41984209"},
      {invNo:"A41984209"},
      {invNo:"A41984209"},
      {invNo:"A41984209"},
      {invNo:"A41984209"},
      {invNo:"A41984209"},
      {invNo:"A41984209"},
      {invNo:"A41984209"},
      {invNo:"A41984209"},
      {invNo:"A41984209"},
  ]

export default class ImportCheckList extends Component {
    
 
  
    render() {
        console.log(this.props , "porsssss")
      return (
        <div>
        {this.props.tabName==='Checklist'?<LeftNavigation    invoicesData={invoiceData}
    homeData={homeData}/>:''}</div>
      );
    }
  }
