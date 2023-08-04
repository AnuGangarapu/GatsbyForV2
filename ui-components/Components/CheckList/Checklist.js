import React from 'react'
import {useState,useCallback} from 'react'
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
import TableVirtuoso from '../Inputs/EditTable/TableVirtuoso'
const CommercialTaxDetails= [{
  row: [
  {id : 'srNo' ,numeric: true , minWidth:80,isSortable: true , default :true , label:'S.No' , },//flexGrow:1
  { id: 'statusCode', numeric: false, minWidth: 160, isSortable: false, default: true, display: false, label: 'Status Code', sticky: true,flexGrow:1,},
  { id: 'commercialTaxType', numeric: false, minWidth: 480, isSortable: true, default: true, display: false, label: 'Commercial Tax Type',flexGrow:1,},
  { id: 'commercialTaxReg', numeric: false, minWidth: 320,isSortable: false, default: true, display: true, label: 'Commercial Tax Reg. No.' ,flexGrow:1,},
 
  
 
]
},

];
const CommercialTaxDetailsData=[
    {statusCode:'100',commercialTaxType:'ABC',commercialTaxReg:'FVFV'},
    {statusCode:'200',commercialTaxType:'DEF',commercialTaxReg:'VRFVCFVF'},
    {statusCode:'300',commercialTaxType:'HGBVF',commercialTaxReg:'FVFGVG'},
    {statusCode:'400',commercialTaxType:'GVFCDX',commercialTaxReg:'GVFGFVGF'},
    {statusCode:'500',commercialTaxType:'AVGFCFVFG',commercialTaxReg:'GVFVGV'},
  




]
const ExchangeRate= [
  
{
  row: [
    {id : 'srNo' ,numeric: true , minWidth:80,isSortable: true , default :true , label:'S.No' , },//flexGrow:1
    { id: 'currencyCode', numeric: false, minWidth: 125, isSortable: false, default: true, display: false, label: 'Currency Code', sticky: true,flexGrow:1,placeholder:'Currency Code'},
    { id: 'unitInRs', numeric: false, minWidth: 125, isSortable: true, default: true, display: false, label: 'Unit in Rs',placeholder:'Unit in Rs',flexGrow:1,},
    { id: 'rate', numeric: false, minWidth: 125,isSortable: false, default: true, display: true, label: 'Rate' ,placeholder:"Rate",flexGrow:1,},
    { id: 'effDate', numeric: false, minWidth: 125,isSortable: false, default: true, display: true, label: 'Effective Date' ,placeholder:'Effective Date',flexGrow:1,},
    { id: 'standardCurrency', numeric: false, minWidth: 125,isSortable: false, default: true, display: true, label: 'Standard Currency' , placeholder:'Standard Currency',flexGrow:1,},
  
 
]
},

{
  row: [
    {id : 'srNo' ,numeric: true , minWidth:80,isSortable: true , default :true , label:'' , },//flexGrow:1
    {id : 'bankNameCurrency' ,numeric: true , minWidth:375,isSortable: true , default :true , label:'Bank Name Std Currency' ,placeholder:'Bank Name Std Currency', flexGrow:3,},//flexGrow:1
    { id: 'certificateNo', numeric: false, minWidth: 125, isSortable: false, default: true, display: false, label: 'Certificate No.', placeholder:'Certificate No.',sticky: true,flexGrow:1,},
    { id: 'certificateDate', numeric: false, minWidth: 125, isSortable: true, default: true, display: false, label: 'Certificate Date',placeholder: 'Certificate Date',flexGrow:1,},
   
     
  ]
},

];
const ExchangeRateData=[
    {currencyCode:'100',unitInRs:'ABC',rate:'FVFV',effDate:'234',standardCurrency:'',bankNameCurrency:'Euro',certificateDate:'512'},
    {currencyCode:'100',unitInRs:'',rate:'FVFV',effDate:'234',standardCurrency:'123',bankNameCurrency:'Euro',certificateDate:'512'},
    {currencyCode:'',unitInRs:'ABC',rate:'FVFV',effDate:'',standardCurrency:'123',bankNameCurrency:'Euro',certificateDate:'512'},
    {currencyCode:'100',unitInRs:'ABC',rate:'',effDate:'234',standardCurrency:'123',bankNameCurrency:'Euro',certificateDate:'512'},
    {currencyCode:'100',unitInRs:'ABC',rate:'FVFV',effDate:'234',standardCurrency:'123',bankNameCurrency:'Euro',certificateDate:'512'},
    {currencyCode:'100',unitInRs:'ABC',rate:'FVFV',effDate:'234',standardCurrency:'123',bankNameCurrency:'Euro',certificateDate:'512'},




]


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
      type:"EditTable",
      columns:CommercialTaxDetails,
      data:CommercialTaxDetailsData,
      hover:false
    },
    {
      name: "Exchange Rate",
      checked: false,
      id: "exchangeRate",
      icon: exchangeRates,
      type:"EditTable",
      columns:ExchangeRate,
      data:ExchangeRateData,
      hover:true
    },
    // {
    //   name: "Bond Details",
    //   checked: false,
    //   id: "bondDetails",
    //   icon: bondDetails,
    //   type:"EditTable"
    // },
    // {
    //   name: "Certificate Details",
    //   checked: false,
    //   id: "certificateDetails",
    //   icon: certificateDetails,
    //   type:"EditTable",
     
    // },
    // { name: "IGM Details", checked: false, id: "igmDetails", icon: igmDetails, type:"EditTable" },
    // {
    //   name: "Container Details",
    //   checked: false,
    //   id: "container Details",
    //   icon: containerDetails,
    //   type:"EditTable"
    // },
    // {
    //   name: "Other Charges",
    //   checked: false,
    //   id: "otherCharges",
    //   icon: otherCharges,
    // },
    // { name: "HSS Details", checked: false, id: "hssDetails", icon: hssDetails, type:"EditTable" },
    // { name: "End Use", checked: false, id: "endUse", icon: endUse, type:"EditTable" },
    // {
    //   name: "Licence Details",
    //   checked: false,
    //   id: "licenceetails",
    //   icon: licenseDetails,
    //   type:"EditTable"
    // },
    // { name: "ReExport", checked: false, id: "reExport", icon: reExport,type:"EditTable" },
    // {
    //   name: "Single Window Info",
    //   checked: false,
    //   id: "singleWindowInfo",
    //   icon: swInfo,
    //   type:"EditTable"
    // },
    // {
    //   name: "Single Window Control",
    //   checked: false,
    //   id: "singleWindowControl",
    //   icon: swControl,
    //   type:"EditTable"
    // },
    // {
    //   name: "Single Window Production",
    //   checked: false,
    //   id: "singleWindowProduction",
    //   icon: swProduction,
    //   type:"EditTable"
    // },
    // {
    //   name: "Single Window Constutient",
    //   checked: false,
    //   id: "singleWindowConstutient",
    //   icon: swConstituent,
    //   type:"EditTable"
    // },
    // { name: "RODTEP", checked: false, id: "rodtep", icon: rodtep, type:"EditTable" },
    // { name: "DFIA", checked: false, id: "dfia", icon: dfia , type:"EditTable"},
    // { name: "DEEC", checked: false, id: "deec", icon: deec, type:"EditTable" },
    // { name: "AR4 Details", checked: false, id: "ar4Details", icon: ar4Details, type:"EditTable"},
    // {
    //   name: "Third Party Details",
    //   checked: false,
    //   id: "thirddPartyDetails",
    //   icon: thirdPartyDetails,
    //   type:"EditTable",
    // },
    // {
    //   name: "Packing Details",
    //   checked: false,
    //   id: "packingDetails",
    //   icon: packingDetails,
    //   type:"EditTable"
    // },
    // { name: "Cess", checked: false, id: "cess", icon: cess, type:"EditTable" },
    // {
    //   name: "IGST Payment",
    //   checked: false,
    //   id: "igstPayment",
    //   icon: igstPayment,
    //   type:"EditTable"
    // },
    //  {
    //   name: "Drawback Details ",
    //   checked: false,
    //   id: "drawbackDetails",
    //   icon: drawbackDetails,
    //   type:"EditTable"
    // },
    // { name: "depb", checked: false, id: "depb", icon: depb , type:"EditTable"},
    // // { name: "imDetails", checked: false, id: "imDetails", icon: imDetails, type:"EditTable" },
    // // { name: "ROSCTL", checked: false, id: "rosctl", icon: rostcl, type:"EditTable" },
    // // { name: "EPCG", checked: false, id: "epcg", icon: epcg, type:"EditTable" },
    // {
    //   name: "Supporting Documents",
    //   checked: false,
    //   id: "supportingDocuments",
    //   icon: supportingDocuments,
    //   type:"EditTable"
    // },
    // { name: "Statements", checked: false, id: "statements", icon: statements, type:"EditTable" },
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
  const importColumns= [{
    row: [
    {id : 'srNo' ,numeric: true , minWidth:80,isSortable: true , default :true , label:'S.No' , },//flexGrow:1
    { id: 'No', numeric: false, minWidth: 90, isSortable: false, default: true, display: false, label: 'Job No', sticky: true,flexGrow:1,},
    { id: 'jobCreationDate', numeric: false, minWidth: 90, isSortable: true, default: true, display: false, label: 'Date' ,filter:true,flexGrow:1,},
    { id: 'transactionRefNo', numeric: false, minWidth: 90,isSortable: false, default: true, display: true, label: 'Reference No.' ,flexGrow:1,},
    { id: 'consigneeName', numeric: false, minWidth: 90, isSortable: false, default: true, display: true, label: 'Importer',filter:true,flexGrow:1,},
    { id: 'shipperName', numeric: false, minWidth: 90, isSortable: false, default: true, display: true, label: 'Supplier',filter:true,flexGrow:1,},
    
   
  ]
  },
 
  {
    row: [
     
       {id:"" , display:true ,isSortable: false, default: true, minWidth:80 , label:"",},
       {id:"a" , display:true , isSortable: false, default: true, minWidth:80,  label:"Updated Date& Time",flexGrow:1,},
       {id:"customsHouseCode" , display:true , isSortable: false, default: true, minWidth:80 ,  label:"Port Of Loading",flexGrow:1,filter:true},
       { id: 'beSbNo', numeric: false, minWidth:80, isSortable: false, default: true, display: true, label: 'Custom House Code',flexGrow:1,filter:true },
       { id: 'beSbDate', numeric: false, minWidth: 80, isSortable: false, default: true, display: true, label: 'BE Number' ,flexGrow:1,filter:true},
       { id: 'beSbType', numeric: false, minWidth: 80, isSortable: false, default: true, display: true, label: 'BE Date',flexGrow:1,filter:true },
       
       
    ]
  },];
  const scrolledListData=[
    
    {id:0, a:'14/09/2022 4:00pm',
    No: "AICB/1438/2023-24",
    jobCreationDate:'14/09/2022 4:00pm',beSbType:'14/09/2022',time:'14/09/2022 4:00pm',transactionRefNo:'FJIMAAMIMP-2213033 2',shipperName:'Harmo International Pvt Ltd.',consigneeName:"XYZ",f:'Tokyo',
  status:"Success",customsHouseCode:"12345678",customsHouseCode:'',no:"123",createdBy:'XYZ',beSbNo:"INCCV4",update:'XYZ',email:'Invoice No M3/ 009 M3 OverseasInvoice No M3/ 009 M3 Overseas',FromAddress:'xyz@ccu@flyjacLogistics.comdice@unifo.in',ToAddress:'xyz@unifo.inyz@unifo.in'},
  
    {id:0, a:'sxdgfvbnc fgbh',No: "ECB/1438/2023-24",beSbType:'rfsdgelijmko,',jobCreationDate:'22-05-2023',time:'22-05-2023',transactionRefNo:'123',shipperName:'XYZ',consigneeName:"XYZ",f:'sdefrgthiu',
  status:"Success",customsHouseCode:"12345678",customsHouseCode:'cxbgvvbh',createdBy:'XYZ',no:"123",beSbNo:"sdfghj",update:'wsdetfgh',email:'wertyuioASDFGHJ',FromAddress:'23456789012345',ToAddress:'23456789'},
  
  {id:0, No: "ECB/1438/2023-24",jobCreationDate:'22-05-2023',transactionRefNo:'123',shipperName:'XYZ',consigneeName:"XYZ",no:"123",
  status:"Success",customsHouseCode:"12345678",createdBy:'XYZ',beSbNo:"sdfghj",email:'werfghjsdfgthygtfdesedfrgthy@mail',FromAddress:'2389012345678123456782345678234234567823456',ToAddress:'234567321123456789'},
  
  {id:0, No: "ECB/1438/2023-24",jobCreationDate:'22-05-2023',transactionRefNo:'123',shipperName:'XSDFGHJKQW',consigneeName:"XYZ",no:"123",
  status:"Success",customsHouseCode:"12345678",createdBy:'XYZ',beSbNo:"sdfghj",},
   
  {id:0, No: "ECB/1438/2023-24",jobCreationDate:'22-05-2023',transactionRefNo:'123',shipperName:'XYZ',consigneeName:"XYZ",no:"123",
  status:"Success",customsHouseCode:"12345678",createdBy:'XYZ',beSbNo:"sdfghj",email:'wertyuioASDFGHJKdfghjsdfgthygtfdesedfrgthy@mail',FromAddress:'23456789012345678902345678901234567890123456781234567823456782345678234567823456',ToAddress:'23456789012345678123456789987654321123456789'},
  
  
  {id:0, No: "ECB/1438/2023-24",jobCreationDate:'22-05-2023',transactionRefNo:'123',shipperName:'XYZ',consigneeName:"XYZ",no:"123",
  status:"Success",customsHouseCode:"12345678",createdBy:'XYZ',beSbNo:"sdfghj",},
  
  {id:0, No: "ECB/1438/2023-24",jobCreationDate:'22-05-2023',transactionRefNo:'123',shipperName:'XYZ',consigneeName:"XYZ",no:"123",
  status:"Success",customsHouseCode:"12345678",createdBy:'XYZ',beSbNo:"sdfghj"},
  
  {id:0, No: "ECB/1438/2023-24",jobCreationDate:'22-05-2023',transactionRefNo:'123',shipperName:'XYZ',consigneeName:"XYZ",no:"123",
  status:"Success",customsHouseCode:"12345678",createdBy:'XYZ',beSbNo:"sdfghj",},
  
  {id:0, No: "ECB/1438/2023-24",jobCreationDate:'22-05-2023',transactionRefNo:'123',shipperName:'XYZ',consigneeName:"XYZ",no:"123",
  status:"Success",customsHouseCode:"12345678",createdBy:'XYZ',beSbNo:"sdfghj"},
  
  
  {id:0, No: "123",jobCreationDate:'22-05-2023',transactionRefNo:'123',shipperName:'XYZ',consigneeName:"XYZ",
  status:"Success",customsHouseCode:"12345678",createdBy:'XYZ',beSbNo:"sdfghj",},{id:0, No: "ECB/1438/2023-24",jobCreationDate:'22-05-2023',transactionRefNo:'123',shipperName:'XYZ',consigneeName:"XYZ",
  status:"Success",customsHouseCode:"12345678",createdBy:'XYZ',beSbNo:"sdfghj",},{id:0, No: "ECB/1438/2023-24",jobCreationDate:'22-05-2023',transactionRefNo:'123',shipperName:'XYZ',consigneeName:"XYZ",
  status:"Success",customsHouseCode:"12345678",createdBy:'XYZ',beSbNo:"sdfghj"},{id:0, No: "ECB/1438/2023-24",jobCreationDate:'22-05-2023',transactionRefNo:'123',shipperName:'XYZ',consigneeName:"XYZ",
  status:"Success",customsHouseCode:"12345678",createdBy:'XYZ',beSbNo:"sdfghj"},
  
  
  ]

function Checklist() {
    const [isOpened,isSetOpened]=React.useState(true) 

    const[leftNavigationFields,setLeftNavigationFields]=React.useState([])

  return (
    <>
    <LeftNavigation invoicesData={invoiceData} homeData={homeData} isSetOpened={isSetOpened} setLeftNavigationFields={setLeftNavigationFields}/>
    <AddFields name={'Job Details'} SectionFields={JobDetailsSectionFields} dataInfo={{}} data={data} isOpened={isOpened}/>
    {leftNavigationFields.map(item => (
                item.name!=='Job Details' && item.checked === true ?  <TableVirtuoso itemName={item.name} icon={item.icon} columns={item.columns} listData={item.data} checkbox={true} hover={item.hover}  isOpened={isOpened}/>  : null ))}

   
    </>
  )
}

export default Checklist


