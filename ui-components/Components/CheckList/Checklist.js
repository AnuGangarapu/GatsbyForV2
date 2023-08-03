import React from 'react'
import LeftNavigation from '../LeftNavigation/LeftNavigation'
import AddFields from '../AddItemDetails/AddFields'
import JobDetailsSectionFields from '../AddItemDetails/JobDetailsSectionFields'

import jobDetails from "../Images/jobDetails.svg"
import invoiceDetails from "../Images/invoiceDetails.svg"
import commercialTax from "../Images/commercialTax.svg"
import exchangeRates from "../Images/exchangeRates.svg"
import bondDetails from "../Images/bondDetails.svg"
import certificateDetails from "../Images/certificateDetails.svg"
import igmDetails from "../Images/igmDetails.svg"
import containerDetails from "../Images/containerDetails.svg"
import otherCharges from "../Images/otherCharges.svg"
import hssDetails from "../Images/hssDetails.svg"
import endUse from "../Images/endUseDetails.svg"
import licenseDetails from "../Images/licenseDetails.svg"
import reExport from "../Images/reExport.svg"
import swInfo from "../Images/swInfo.svg"
import swControl from "../Images/swControl.svg"
import swProduction from "../Images/swProduction.svg"
import swConstituent from "../Images/swConstituent.svg"
import imDetails from "../Images/imDetails.svg"
import igstPayment from "../Images/igstPayment.svg"
import cess from "../Images/cess.svg"
import thirdPartyDetails from "../Images/thirdPartyDetails.svg"
import ar4Details from "../Images/ar4Details.svg"
import drawbackDetails from "../Images/drawbackDetails.svg"
import depb from "../Images/depb.svg"
import rostcl from "../Images/rosctl.svg"
import rodtep from "../Images/rodtep.svg"
import dfia from "../Images/dfia.svg"
import deec from "../Images/deec.svg"
import packingDetails from "../Images/packingDetails.svg"
import epcg from "../Images/epcg.svg"
import supportingDocuments from "../Images/supportingDocuments.svg"
import statements from "../Images/statements.svg"
const homeData = [
    { name: "Job Details", checked: true, id: "jobDetails", icon: jobDetails },
    // {
    //   name: "Invoice Details",
    //   checked: true,
    //   id: "invoiceDetails",
    //   icon: invoiceDetails,
    // },
    {
      name: "Commercial Tax Details",
      checked: false,
      id: "commercialTaxDetails",
      icon: commercialTax,
    },
    {
      name: "Exchange Rate",
      checked: false,
      id: "exchangeRate",
      icon: exchangeRates,
    },
    {
      name: "Bond Details",
      checked: false,
      id: "bondDetails",
      icon: bondDetails,
    },
    {
      name: "Certificate Details",
      checked: false,
      id: "certificateDetails",
      icon: certificateDetails,
    },
    { name: "IGM Details", checked: false, id: "igmDetails", icon: igmDetails },
    {
      name: "Container Details",
      checked: false,
      id: "container Details",
      icon: containerDetails,
    },
    {
      name: "Other Charges",
      checked: false,
      id: "otherCharges",
      icon: otherCharges,
    },
    { name: "HSS Details", checked: false, id: "hssDetails", icon: hssDetails },
    { name: "End Use", checked: false, id: "endUse", icon: endUse },
    {
      name: "Licence Details",
      checked: false,
      id: "licenceetails",
      icon: licenseDetails,
    },
    { name: "ReExport", checked: false, id: "reExport", icon: reExport },
    {
      name: "Single Window Info",
      checked: false,
      id: "singleWindowInfo",
      icon: swInfo,
    },
    {
      name: "Single Window Control",
      checked: false,
      id: "singleWindowControl",
      icon: swControl,
    },
    {
      name: "Single Window Production",
      checked: false,
      id: "singleWindowProduction",
      icon: swProduction,
    },
    {
      name: "Single Window Constutient",
      checked: false,
      id: "singleWindowConstutient",
      icon: swConstituent,
    },
    { name: "RODTEP", checked: false, id: "rodtep", icon: rodtep },
    { name: "DFIA", checked: false, id: "dfia", icon: dfia },
    { name: "DEEC", checked: false, id: "deec", icon: deec },
    { name: "AR4 Details", checked: false, id: "ar4Details", icon: ar4Details },
    {
      name: "Third Party Details",
      checked: false,
      id: "thirddPartyDetails",
      icon: thirdPartyDetails,
    },
    {
      name: "Packing Details",
      checked: false,
      id: "packingDetails",
      icon: packingDetails,
    },
    { name: "Cess", checked: false, id: "cess", icon: cess },
    {
      name: "IGST Payment",
      checked: false,
      id: "igstPayment",
      icon: igstPayment,
    },
    {
      name: "Drawback Details ",
      checked: false,
      id: "drawbackDetails",
      icon: drawbackDetails,
    },
    { name: "depb", checked: false, id: "depb", icon: depb },
    { name: "imDetails", checked: false, id: "imDetails", icon: imDetails },
    { name: "ROSCTL", checked: false, id: "rosctl", icon: rostcl },
    { name: "EPCG", checked: false, id: "epcg", icon: epcg },
    {
      name: "Supporting Documents",
      checked: false,
      id: "supportingDocuments",
      icon: supportingDocuments,
    },
    { name: "Statements", checked: false, id: "statements", icon: statements },
  ]
  
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
  ]
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
    const [isOpened,isSetOpened]=React.useState(true)
  return (
    <>
    <LeftNavigation invoicesData={invoiceData} homeData={homeData} isSetOpened={isSetOpened}/>
    <AddFields name={'Job Details'} SectionFields={JobDetailsSectionFields} dataInfo={{}} data={data} isOpened={isOpened}/>
    </>
  )
}

export default Checklist