import jobDetails from "../Images/jobDetails.svg";
import invoiceDetails from "../Images/invoiceDetails.svg";
import commercialTax from "../Images/commercialTax.svg";
import exchangeRates from "../Images/exchangeRates.svg";
import bondDetails from "../Images/bondDetails.svg";
import certificateDetails from "../Images/certificateDetails.svg";
import igmDetails from "../Images/igmDetails.svg";
import containerDetails from "../Images/containerDetails.svg";
import otherCharges from "../Images/otherCharges.svg";
import hssDetails from "../Images/hssDetails.svg";
import endUse from "../Images/endUseDetails.svg";
import licenseDetails from "../Images/licenseDetails.svg";
import reExport from "../Images/reExport.svg";
import swInfo from "../Images/swInfo.svg";
import swControl from "../Images/swControl.svg";
import swProduction from "../Images/swProduction.svg";
import swConstituent from "../Images/swConstituent.svg";
import imDetails from "../Images/imDetails.svg";
import igstPayment from "../Images/igstPayment.svg";
import cess from "../Images/cess.svg";
import thirdPartyDetails from "../Images/thirdPartyDetails.svg";
import ar4Details from "../Images/ar4Details.svg";
import drawbackDetails from "../Images/drawbackDetails.svg";
import depb from "../Images/depb.svg";
import rostcl from "../Images/rosctl.svg";
import rodtep from "../Images/rodtep.svg";
import dfia from "../Images/dfia.svg";
import deec from "../Images/deec.svg";
import packingDetails from "../Images/packingDetails.svg";
import epcg from "../Images/epcg.svg";
import supportingDocuments from "../Images/supportingDocuments.svg";
import statements from "../Images/statements.svg";
import TableVirtuoso from "../Inputs/EditTable/TableVirtuoso";
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
const ExchangeRate = [
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
        id: "currencyCode",
        numeric: false,
        minWidth: 125,
        isSortable: false,
        default: true,
        display: false,
        label: "Currency Code",
        sticky: true,
        flexGrow: 1,
        placeholder: "Currency Code",
      },
      {
        id: "unitInRs",
        numeric: false,
        minWidth: 125,
        isSortable: true,
        default: true,
        display: false,
        label: "Unit in Rs",
        placeholder: "Unit in Rs",
        flexGrow: 1,
      },
      {
        id: "rate",
        numeric: false,
        minWidth: 125,
        isSortable: false,
        default: true,
        display: true,
        label: "Rate",
        placeholder: "Rate",
        flexGrow: 1,
      },
      {
        id: "effDate",
        numeric: false,
        minWidth: 125,
        isSortable: false,
        default: true,
        display: true,
        label: "Effective Date",
        placeholder: "Effective Date",
        flexGrow: 1,
      },
      {
        id: "standardCurrency",
        numeric: false,
        minWidth: 125,
        isSortable: false,
        default: true,
        display: true,
        label: "Standard Currency",
        placeholder: "Standard Currency",
        flexGrow: 1,
      },
    ],
  },

  {
    row: [
      {
        id: "srNo",
        numeric: true,
        minWidth: 80,
        isSortable: true,
        default: true,
        label: "",
      }, //flexGrow:1
      {
        id: "bankNameCurrency",
        numeric: true,
        minWidth: 375,
        isSortable: true,
        default: true,
        label: "Bank Name Std Currency",
        placeholder: "Bank Name Std Currency",
        flexGrow: 3,
      }, //flexGrow:1
      {
        id: "certificateNo",
        numeric: false,
        minWidth: 125,
        isSortable: false,
        default: true,
        display: false,
        label: "Certificate No.",
        placeholder: "Certificate No.",
        sticky: true,
        flexGrow: 1,
      },
      {
        id: "certificateDate",
        numeric: false,
        minWidth: 125,
        isSortable: true,
        default: true,
        display: false,
        label: "Certificate Date",
        placeholder: "Certificate Date",
        flexGrow: 1,
      },
    ],
  },
];
const ExchangeRateData = [
  {
    currencyCode: "100",
    unitInRs: "ABC",
    rate: "FVFV",
    effDate: "234",
    standardCurrency: "",
    bankNameCurrency: "Euro",
    certificateDate: "512",
  },
  {
    currencyCode: "100",
    unitInRs: "",
    rate: "FVFV",
    effDate: "234",
    standardCurrency: "123",
    bankNameCurrency: "Euro",
    certificateDate: "512",
  },
  {
    currencyCode: "",
    unitInRs: "ABC",
    rate: "FVFV",
    effDate: "",
    standardCurrency: "123",
    bankNameCurrency: "Euro",
    certificateDate: "512",
  },
  {
    currencyCode: "100",
    unitInRs: "ABC",
    rate: "",
    effDate: "234",
    standardCurrency: "123",
    bankNameCurrency: "Euro",
    certificateDate: "512",
  },
  {
    currencyCode: "100",
    unitInRs: "ABC",
    rate: "FVFV",
    effDate: "234",
    standardCurrency: "123",
    bankNameCurrency: "Euro",
    certificateDate: "512",
  },
  {
    currencyCode: "100",
    unitInRs: "ABC",
    rate: "FVFV",
    effDate: "234",
    standardCurrency: "123",
    bankNameCurrency: "Euro",
    certificateDate: "512",
  },
];

const homeData = [
  // {
  //   fieldName: "Job Details",
  //   checked: true,
  //   id: "jobDetails",
  //   icon: jobDetails,
  //   index:0,
  //   columns: CommercialTaxDetails,
  //   data: CommercialTaxDetailsData,
  //   hover: false,
  //   index:0
  // },
  // {
  //   name: "Invoice Details",
  //   checked: true,
  //   id: "invoiceDetails",
  //   icon: invoiceDetails,
  // },
  {
    fieldName: "Commercial Tax Details",
    checked: false,
    id: "commercialTaxDetails",
    icon: commercialTax,
    type: "EditTable",
    columns: CommercialTaxDetails,
    data: CommercialTaxDetailsData,
    hover: false,
    index:1
  },
  {
    fieldName: "Exchange Rate",
    checked: false,
    id: "exchangeRate",
    icon: exchangeRates,
    type: "EditTable",
    columns: ExchangeRate,
    data: ExchangeRateData,
    hover: true,
    index:2
  },
  {
    fieldName: "Bond Details",
    checked: false,
    id: "bondDetails",
    icon: bondDetails,
    type: "EditTable",
    columns: CommercialTaxDetails,
    data: CommercialTaxDetailsData,
    hover: false,
    index:3
  },
  {
    fieldName: "Certificate Details",
    checked: false,
    id: "certificateDetails",
    icon: certificateDetails,
    type: "EditTable",
    columns: CommercialTaxDetails,
    data: CommercialTaxDetailsData,
    hover: false,
    index:4
  },
  {
    fieldName: "IGM Details",
    checked: false,
    id: "igmDetails",
    icon: igmDetails,
    type: "EditTable",

    columns: ExchangeRate,
    data: ExchangeRateData,
    hover: true,
    index:5
  },
  {
    fieldName: "Container Details",
    checked: false,
    id: "container Details",
    icon: containerDetails,
    type: "EditTable",
    columns: ExchangeRate,
    data: ExchangeRateData,
    hover: true,
    index:6
  },
  {
    fieldName: "Other Charges",
    checked: false,
    id: "otherCharges",
    icon: otherCharges,
    columns: ExchangeRate,
    data: ExchangeRateData,
    hover: true,
    index:7
  },
  {
    fieldName: "HSS Details",
    checked: false,
    id: "hssDetails",
    icon: hssDetails,
    type: "EditTable",
    columns: ExchangeRate,
    data: ExchangeRateData,
    hover: true,
    index:8
  },
  {
    fieldName: "End Use",
    checked: false,
    id: "endUse",
    icon: endUse,
    type: "EditTable",
    columns: ExchangeRate,
    data: ExchangeRateData,
    hover: true,
    index:9
  },
  {
    fieldName: "Licence Details",
    checked: false,
    id: "licenceetails",
    icon: licenseDetails,
    type: "EditTable",
    columns: ExchangeRate,
    data: ExchangeRateData,
    hover: true,
    index:10
  },
  {
    fieldName: "ReExport",
    checked: false,
    id: "reExport",
    icon: reExport,
    type: "EditTable",
    columns: ExchangeRate,
    data: ExchangeRateData,
    hover: true,
    index:11
  },
  {
    fieldName: "Single Window Info",
    checked: false,
    id: "singleWindowInfo",
    icon: swInfo,
    type: "EditTable",
    columns: ExchangeRate,
    data: ExchangeRateData,
    hover: true,
    index:12
  },
  {
    fieldName: "Single Window Control",
    checked: false,
    id: "singleWindowControl",
    icon: swControl,
    type: "EditTable",
    columns: ExchangeRate,
    data: ExchangeRateData,
    hover: true,
    index:13
  },
  {
    fieldName: "Single Window Production",
    checked: false,
    id: "singleWindowProduction",
    icon: swProduction,
    type: "EditTable",
    columns: ExchangeRate,
    data: ExchangeRateData,
    hover: true,
    index:14
  },
  {
    fieldName: "Single Window Constutient",
    checked: false,
    id: "singleWindowConstutient",
    icon: swConstituent,
    type: "EditTable",
    columns: ExchangeRate,
    data: ExchangeRateData,
    hover: true,
    index:15
  },
  {
    fieldName: "RODTEP",
    checked: false,
    id: "rodtep",
    icon: rodtep,
    type: "EditTable",
    columns: ExchangeRate,
    data: ExchangeRateData,
    hover: true,
    index:16
  },
  // {
  //   fieldName: "DFIA",
  //   checked: false,
  //   id: "dfia",
  //   icon: dfia,
  //   type: "EditTable",
  //   columns: ExchangeRate,
  //   data: ExchangeRateData,
  //   hover: true,
  //   index:16
  // },
  // {
  //   fieldName: "DEEC",
  //   checked: false,
  //   id: "deec",
  //   icon: deec,
  //   type: "EditTable",
  //   columns: ExchangeRate,
  //   data: ExchangeRateData,
  //   hover: true,
  //   index:17
  // },
  // {
  //   fieldName: "AR4 Details",
  //   checked: false,
  //   id: "ar4Details",
  //   icon: ar4Details,
  //   type: "EditTable",
  //   columns: ExchangeRate,
  //   data: ExchangeRateData,
  //   hover: true,
  //   index:18
  // },
  {
    fieldName: "Third Party Details",
    checked: false,
    id: "thirddPartyDetails",
    icon: thirdPartyDetails,
    type: "EditTable",
    columns: ExchangeRate,
    data: ExchangeRateData,
    hover: true,
    index:17
  },
  {
    fieldName: "Packing Details",
    checked: false,
    id: "packingDetails",
    icon: packingDetails,
    type: "EditTable",
    columns: ExchangeRate,
    data: ExchangeRateData,
    hover: true,
    index:18
  },
  {
    fieldName: "Cess",
    checked: false,
    id: "cess",
    icon: cess,
    type: "EditTable",
    columns: ExchangeRate,
    data: ExchangeRateData,
    hover: true,
    index:19
  },
  {
    fieldName: "IGST Payment",
    checked: false,
    id: "igstPayment",
    icon: igstPayment,
    type: "EditTable",
    columns: ExchangeRate,
    data: ExchangeRateData,
    hover: true,
    index:20
  },
  {
    fieldName: "Drawback Details ",
    checked: false,
    id: "drawbackDetails",
    icon: drawbackDetails,
    type: "EditTable",
    columns: ExchangeRate,
    data: ExchangeRateData,
    hover: true,
    index:21
  },
  // {
  //   fieldName: "depb",
  //   checked: false,
  //   id: "depb",
  //   icon: depb,
  //   type: "EditTable",
  //   columns: ExchangeRate,
  //   data: ExchangeRateData,
  //   hover: true,
  //   index:24
  // },
  // {
  //   fieldName: "imDetails",
  //   checked: false,
  //   id: "imDetails",
  //   icon: imDetails,
  //   type: "EditTable",
  //   columns: ExchangeRate,
  //   data: ExchangeRateData,
  //   hover: true,
  //   index:25
  // },
  // {
  //   fieldName: "ROSCTL",
  //   checked: false,
  //   id: "rosctl",
  //   icon: rostcl,
  //   type: "EditTable",
  //   columns: ExchangeRate,
  //   data: ExchangeRateData,
  //   hover: true,
  //   index:26
  // },
  // {
  //   fieldName: "EPCG",
  //   checked: false,
  //   id: "epcg",
  //   icon: epcg,
  //   type: "EditTable",
  //   columns: ExchangeRate,
  //   data: ExchangeRateData,
  //   hover: true,
  //   index:27
  // },
  {
    fieldName: "Supporting Documents",
    checked: false,
    id: "supportingDocuments",
    icon: supportingDocuments,
    type: "EditTable",
    columns: ExchangeRate,
    data: ExchangeRateData,
    hover: true,
    index:22
  },
  {
    fieldName: "Statements",
    checked: false,
    id: "statements",
    icon: statements,
    type: "EditTable",
    columns: ExchangeRate,
    data: ExchangeRateData,
    hover: true,
    index:23
  },
];

export default homeData