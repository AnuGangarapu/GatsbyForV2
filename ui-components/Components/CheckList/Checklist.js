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
    { fieldName: "Job Details", checked: true, id: "jobDetails", icon: jobDetails, width: '302px' },
    {
      fieldName: "Invoice Details",
      checked: true,
      id: "invoiceDetails",
      icon: invoiceDetails,
    },
    {
      fieldName: "Commercial Tax Details",
      checked: false,
      id: "commercialTaxDetails",
      icon: commercialTax,
    },
    {
      fieldName: "Exchange Rate",
      checked: false,
      id: "exchangeRate",
      icon: exchangeRates,
    },
    {
      fieldName: "Bond Details",
      checked: false,
      id: "bondDetails",
      icon: bondDetails,
    },
    {
      fieldName: "Certificate Details",
      checked: false,
      id: "certificateDetails",
      icon: certificateDetails,
    },
    { fieldName: "IGM Details", checked: false, id: "igmDetails", icon: igmDetails },
    {
      fieldName: "Container Details",
      checked: false,
      id: "container Details",
      icon: containerDetails,
    },
    {
      fieldName: "Other Charges",
      checked: false,
      id: "otherCharges",
      icon: otherCharges,
    },
    { fieldName: "HSS Details", checked: false, id: "hssDetails", icon: hssDetails },
    { fieldName: "End Use", checked: false, id: "endUse", icon: endUse },
    {
      fieldName: "Licence Details",
      checked: false,
      id: "licenceetails",
      icon: licenseDetails,
    },
    { fieldName: "ReExport", checked: false, id: "reExport", icon: reExport },
    {
      fieldName: "Single Window Info",
      checked: false,
      id: "singleWindowInfo",
      icon: swInfo,
    },
    {
      fieldName: "Single Window Control",
      checked: false,
      id: "singleWindowControl",
      icon: swControl,
    },
    {
      fieldName: "Single Window Production",
      checked: false,
      id: "singleWindowProduction",
      icon: swProduction,
    },
    {
      fieldName: "Single Window Constutient",
      checked: false,
      id: "singleWindowConstutient",
      icon: swConstituent,
    },
    { fieldName: "RODTEP", checked: false, id: "rodtep", icon: rodtep },
    { fieldName: "DFIA", checked: false, id: "dfia", icon: dfia },
    { fieldName: "DEEC", checked: false, id: "deec", icon: deec },
    { fieldName: "AR4 Details", checked: false, id: "ar4Details", icon: ar4Details },
    {
      fieldName: "Third Party Details",
      checked: false,
      id: "thirddPartyDetails",
      icon: thirdPartyDetails,
    },
    {
      fieldName: "Packing Details",
      checked: false,
      id: "packingDetails",
      icon: packingDetails,
    },
    { fieldName: "Cess", checked: false, id: "cess", icon: cess },
    {
      fieldName: "IGST Payment",
      checked: false,
      id: "igstPayment",
      icon: igstPayment,
    },
    {
      fieldName: "Drawback Details ",
      checked: false,
      id: "drawbackDetails",
      icon: drawbackDetails,
    },
    { fieldName: "depb", checked: false, id: "depb", icon: depb },
    { fieldName: "imDetails", checked: false, id: "imDetails", icon: imDetails },
    { fieldName: "ROSCTL", checked: false, id: "rosctl", icon: rostcl },
    { fieldName: "EPCG", checked: false, id: "epcg", icon: epcg },
    {
      fieldName: "Supporting Documents",
      checked: false,
      id: "supportingDocuments",
      icon: supportingDocuments,
    },
    { fieldName: "Statements", checked: false, id: "statements", icon: statements },
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
    <LeftNavigation invoicesData={invoiceData} homeData={homeData} isSetOpened={isSetOpened} data={data} />
    <AddFields name={'Job Details'} SectionFields={JobDetailsSectionFields} dataInfo={{}} data={data} isOpened={isOpened}/>
    </>
  )
}

export default Checklist