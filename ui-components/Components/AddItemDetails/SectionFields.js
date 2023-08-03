const SectionFields = [
    {
      fieldName: "Part Code",
      id: "partCode",

      checked:false,
      input: [
        {
          labelName: "partCode",
          type: "textField",
          name: "partCode",
          width: "100%",
        },
      ],
    },
    
    {
      fieldName: "Description",
      id: "description",

      checked:false,
      input: [
        {
          labelName: "description",
          type: "textField",
          name: "description",
          width: "100%",
        },
      ],
    },
    {
      fieldName: "HSN",
      id: "hsn",
      checked:false,

      input: [
        {
          labelName: "hsn",
          type: "dropDown",
          name: "hsn",
          add: true,
          width: "100%",
        },
      ],
    },
    {
      fieldName: "Generic Description",
      id: "genericDescription",
  
      checked:false,
      input: [
        {
          labelName: "genericDescription",
          type: "dropDown",
          name: "genericDescription",
          width: "100%",
        },
      ],
    },
    {
      fieldName: "Shipper",
      id: "shipper",
  
      checked:false,
      input: [
        {
          labelName: "shipperName",
          type: "textField",
          name: "shipperName",
          width: "100%",
        },
        {
          labelName: "Code",
          type: "textField",
          name: "shipperCode",
          width: "100%",
        },
        {
          labelName: "CodeNumber",
          type: "textField",
          name: "shipperCodeNumber",
          width: "100%",
        },
        {
          labelName: "Address 1",
          type: "textField",
          name: "codeAddress1",
          width: "100%",
        },
        {
          labelName: "Address 1",
          type: "textField",
          name: "shipperAddress1",
          width: "100%",
        },
        {
          labelName: "Address 2 ",
          type: "textField",
          name: "shipperAddress2",
          width: "100%",
        },
        {
          labelName: "City",
          type: "dropDown",
          name: "shipperCity",
          optionName: "City",
          add: true,
          width: "45%",
        },
        { labelName: "CodeNumber", type: "separator", name: "", width: "5%" },
        {
          labelName: "Pin",
          type: "textField",
          name: "shipperPincode",
          width: "45%",
        },
        {
          labelName: "Country Subdivision",
          type: "textField",
          name: "shipperCountrySubdivision",
          width: "45%",
        },
        { labelName: "CodeNumber", type: "separator", name: "", width: "5%" },
        {
          labelName: "Country",
          type: "dropDown",
          name: "shipperCountry",
          optionName: "CountryList",
          width: "45%",
        },
      ],
    },
    {
      fieldName: "Customer",

      checked:false,
  
      id: "customer",
      input: [
        {
          labelName: "customerName",
          type: "textField",
          name: "customerName",
          width: "100%",
        },
        {
          labelName: "customerCode",
          type: "textField",
          name: "customerCode",
          width: "75%",
        },
        { labelName: "CodeNumber", type: "separator", name: "", width: "5%" },
        {
          labelName: "CodeNumber",
          type: "textField",
          name: "customerCodeNumber1",
          width: "10%",
        },
        {
          labelName: "CodeNumber",
          type: "textField",
          name: "customerCodeNumber",
          width: "45%",
        },
        { labelName: "CodeNumber", type: "separator", name: "", width: "5%" },
        {
          labelName: "CodeNumber",
          type: "textField",
          name: "customerCodeNumber2",
          width: "45%",
        },
        {
          labelName: "Address 1",
          type: "textField",
          name: "customerAddress1",
          width: "100%",
        },
        {
          labelName: "Address 2 ",
          type: "textField",
          name: "customerAddress2",
          width: "100%",
        },
        {
          labelName: "City",
          type: "dropDown",
          name: "customerCity",
          optionName: "City",
          add: true,
          width: "45%",
        },
        { labelName: "CodeNumber", type: "separator", name: "", width: "5%" },
        {
          labelName: "Pin",
          type: "textField",
          name: "customerPincode",
          width: "45%",
        },
        {
          labelName: "Country Subdivision",
          type: "textField",
          name: "customerCountrySubdivision",
          width: "45%",
        },
        { labelName: "CodeNumber", type: "separator", name: "", width: "5%" },
        {
          labelName: "Country",
          type: "dropDown",
          name: "imCountry",
          optionName: "customerCountryList",
          width: "45%",
        },
      ],
    },
    {
      fieldName: "Manufacturer",

      checked:false,
      id: "manufacturer",
      input: [
        {
          labelName: "customerName",
          type: "textField",
          name: "customerName",
          width: "100%",
          placeholder:'Select Customer Name'
        },
        {
          labelName: "customerCode",
          type: "textField",
          name: "customerCode",
          width: "75%",
          placeholder:'Select Customer Code'
        },
        { labelName: "CodeNumber", type: "separator", name: "", width: "5%" },
        {
          labelName: "CodeNumber",
          type: "textField",
          name: "customerCodeNumber1",
          width: "10%",
        },
        {
          labelName: "CodeNumber",
          type: "textField",
          name: "customerCodeNumber",
          width: "45%",
        },
        { labelName: "CodeNumber", type: "separator", name: "", width: "5%" },
        {
          labelName: "CodeNumber",
          type: "textField",
          name: "customerCodeNumber2",
          width: "45%",
        },
        {
          labelName: "Address 1",
          type: "textField",
          name: "Select Address",
          width: "100%",
        },
        {
          labelName: "Address 2 ",
          type: "textField",
          name: "customerAddress2",
          width: "100%",
          placeholder:'Select Address'
        },
        {
          labelName: "City",
          type: "dropDown",
          name: "customerCity",
          optionName: "City",
          add: true,
          width: "45%",
          placeholder:'Select City'
        },
        { labelName: "CodeNumber", type: "separator", name: "", width: "5%" ,placeholder:'Select Code Number'},
        {
          labelName: "Pin",
          type: "textField",
          name: "customerPincode",
          width: "45%",
          placeholder:'Select Customer Pincode'
        },
        {
          labelName: "Country Subdivision",
          type: "textField",
          name: "customerCountrySubdivision", placeholder:'Select Country SubDivision',
  
          width: "45%",
        },
        { labelName: "CodeNumber", type: "separator", name: "", width: "5%" , placeholder:'Select Code'},
        {
          labelName: "Country",
          type: "dropDown",
          name: "imCountry",
          optionName: "customerCountryList",
          width: "45%",
          placeholder:'Select Country'
        },
      ],
    },
    {
      fieldName: "End Use",
      id: "endUse",
  
      checked:false,
      input: [
        { labelName: "End Use", type: "dropDown", name: "endUse", width: "100%" },
      ],
    },
    {
      fieldName: "Model",
      id: "model",
 
      checked:false,
      input: [
        { labelName: "Model", type: "textField", name: "model", width: "100%" },
      ],
    },
    {
      fieldName: "Brand",
      id: "brand",
      checked:false,
      input: [
        { labelName: "brand", type: "textField", name: "brand", width: "100%" },
      ],
    },
    {
      fieldName: "Country Of Origin",
      id: "countryOfOrigin",

      checked:false,
      input: [
        {
          labelName: "countryOfOrigin",
          type: "textField",
          name: "countryOfOrigin",
          width: "100%",
        },
      ],
    },
    {
      fieldName: "Country Of Source",
      id: "countryOfSource",
    
      checked:false,
      input: [
        {
          labelName: "countryOfSource",
          type: "textField",
          name: "countryOfSource",
          width: "100%",
        },
      ],
    },
    {
      fieldName: "Country Of Transit",
      id: "countryOfTransit",

      checked:false,
      input: [
        {
          labelName: "countryOfTransit",
          type: "textField",
          name: "countryOfTransit",
          width: "100%",
        },
      ],
    },
    {
      fieldName: "Cus. Notn. Exmp Central Ex. Flag ",
      id: "centralFlag",
 
      checked:false,
      input: [
        { labelName: "toggle", type: "textField", name: "toggle", width: "100%" },
        { labelName: "info", type: "textField", name: "info", width: "100%" },
      ],
    },
    {
      fieldName: "EXIM Scheme",
      id: "eximScheme",

      checked:false,
      input: [
        {
          labelName: "eximCode",
          type: "dropDown",
          name: "eximCode",
          width: "100%",
        },
        {
          labelName: "section",
          type: "textField",
          name: "section",
          width: "100%",
        },
        { labelName: "year", type: "textField", name: "year", width: "100%" },
        {
          labelName: "sectionId",
          type: "textField",
          name: "sectionId",
          width: "100%",
        },
        {
          labelName: "sectionNumber",
          type: "textField",
          name: "sectionNumber",
          width: "100%",
        },
      ],
    },
  
    {
      fieldName: "BCD",
      id: "bcd",
    
      checked:false,
      input: [
        {
          labelName: "bcdNotificationNo",
          type: "dropDown",
          name: "bcdNotificationNo",
          width: "45%",
        },
        { labelName: "CodeNumber", type: "separator", name: "", width: "5%" },
        {
          labelName: "bcdNotificationNumber",
          type: "textField",
          name: "bcdNotificationNumber",
          width: "45%",
        },
      ],
    },
    {
      fieldName: "Customs Additional Duty",
      id: "customsAdditionalDuty",
  
      checked:false,
      input: [
        {
          labelName: "bcdNotificationNo",
          type: "dropDown",
          name: "bcdNotificationNo",
          width: "45%",
        },
        { labelName: "CodeNumber", type: "separator", name: "", width: "5%" },
        {
          labelName: "bcdNotificationNumber",
          type: "textField",
          name: "bcdNotificationNumber",
          width: "45%",
        },
      ],
    },
    {
      fieldName: "Health Cess,",
      id: "healthCess,",
   
      checked:false,
      input: [
        {
          labelName: "bcdNotificationNo",
          type: "dropDown",
          name: "bcdNotificationNo",
          width: "45%",
        },
        { labelName: "CodeNumber", type: "separator", name: "", width: "5%" },
        {
          labelName: "bcdNotificationNumber",
          type: "textField",
          name: "bcdNotificationNumber",
          width: "45%",
        },
      ],
    },
    {
      fieldName: "CAIDC",
      id: "caidc",
 
      checked:false,
      input: [
        {
          labelName: "bcdNotificationNo",
          type: "dropDown",
          name: "bcdNotificationNo",
          width: "45%",
        },
        { labelName: "CodeNumber", type: "separator", name: "", width: "5%" },
        {
          labelName: "bcdNotificationNumber",
          type: "textField",
          name: "bcdNotificationNumber",
          width: "45%",
        },
      ],
    },
    {
      fieldName: "SWS Notification",
      id: "swsNotification",
  
      checked:false,
      input: [
        {
          labelName: "bcdNotificationNo",
          type: "dropDown",
          name: "bcdNotificationNo",
          width: "45%",
        },
        { labelName: "CodeNumber", type: "separator", name: "", width: "5%" },
        {
          labelName: "bcdNotificationNumber",
          type: "textField",
          name: "bcdNotificationNumber",
          width: "45%",
        },
      ],
    },
    {
      fieldName: "Customs Education Cess",
      id: "customsEducationCess ",

      checked:false,
      input: [
        {
          labelName: "bcdNotificationNo",
          type: "dropDown",
          name: "bcdNotificationNo",
          width: "45%",
        },
        { labelName: "CodeNumber", type: "separator", name: "", width: "5%" },
        {
          labelName: "bcdNotificationNumber",
          type: "textField",
          name: "bcdNotificationNumber",
          width: "45%",
        },
      ],
    },
    {
      fieldName: "NCCD",
      id: "nccd",
  
      checked:false,
      input: [
        {
          labelName: "bcdNotificationNo",
          type: "dropDown",
          name: "bcdNotificationNo",
          width: "45%",
        },
        { labelName: "CodeNumber", type: "separator", name: "", width: "5%" },
        {
          labelName: "bcdNotificationNumber",
          type: "textField",
          name: "bcdNotificationNumber",
          width: "45%",
        },
      ],
    },
    {
      fieldName: "SAPTA",
      id: "sapta",
  
      checked:false,
      input: [
        {
          labelName: "bcdNotificationNo",
          type: "dropDown",
          name: "bcdNotificationNo",
          width: "45%",
        },
        { labelName: "CodeNumber", type: "separator", name: "", width: "5%" },
        {
          labelName: "bcdNotificationNumber",
          type: "textField",
          name: "bcdNotificationNumber",
          width: "45%",
        },
      ],
    },
    {
      fieldName: "Tariff Value",
      id: "tariffValue",
   
      checked:false,
      input: [
        {
          labelName: "bcdNotificationNo",
          type: "dropDown",
          name: "bcdNotificationNo",
          width: "45%",
          placeholder: "Enter Notification No",
        },
        { labelName: "CodeNumber", type: "separator", name: "", width: "5%" },
        {
          labelName: "bcdNotificationNumber",
          type: "textField",
          name: "bcdNotificationNumber",
          width: "45%",
          placeholder: "Enter Notification Sr No",
        },
        {
          labelName: "Number",
          type: "textField",
          name: "Number",
          width: "100%",
          placeholder: "Enter Section Number",
        },
      ],
    },
    {
      fieldName: "Aggregate Duty",
      id: "aggregateDuty",
      checked:false,
   
      input: [
        {
          labelName: "bcdNotificationNo",
          type: "dropDown",
          name: "bcdNotificationNo",
          width: "45%",
        },
        { labelName: "CodeNumber", type: "separator", name: "", width: "5%" },
        {
          labelName: "bcdNotificationNumber",
          type: "textField",
          name: "bcdNotificationNumber",
          width: "45%",
        },
      ],
    },
    {
      fieldName: "Safeguard Duty",
      id: "safeguardDuty",
  
      checked:false,
      input: [
        {
          labelName: "bcdNotificationNo",
          type: "dropDown",
          name: "bcdNotificationNo",
          width: "45%",
        },
        { labelName: "CodeNumber", type: "separator", name: "", width: "5%" },
        {
          labelName: "bcdNotificationNumber",
          type: "textField",
          name: "bcdNotificationNumber",
          width: "45%",
        },
      ],
    },
    {
      fieldName: "CVD",
      id: "cvd",
     
      checked:false,
      input: [
        {
          labelName: "bcdNotificationNo",
          type: "dropDown",
          name: "bcdNotificationNo",
          width: "45%",
        },
        { labelName: "CodeNumber", type: "separator", name: "", width: "5%" },
        {
          labelName: "bcdNotificationNumber",
          type: "textField",
          name: "bcdNotificationNumber",
          width: "45%",
        },
      ],
    },
    {
      fieldName: "Additional CVD",
      id: "additionalCVD",
   
      checked:false,
      input: [
        {
          labelName: "bcdNotificationNo",
          type: "dropDown",
          name: "bcdNotificationNo",
          width: "45%",
        },
        { labelName: "CodeNumber", type: "separator", name: "", width: "5%" },
        {
          labelName: "bcdNotificationNumber",
          type: "textField",
          name: "bcdNotificationNumber",
          width: "45%",
        },
      ],
    },
    {
      fieldName: "IGST Levy",
      id: "igstLevy",
  
      checked:false,
      input: [
        {
          labelName: "bcdNotificationNo",
          type: "dropDown",
          name: "bcdNotificationNo",
          width: "45%",
        },
        { labelName: "CodeNumber", type: "separator", name: "", width: "5%" },
        {
          labelName: "bcdNotificationNumber",
          type: "textField",
          name: "bcdNotificationNumber",
          width: "45%",
        },
      ],
    },
    {
      fieldName: "IGST Exemption",
      id: "igstexemption",

      checked:false,
      input: [
        {
          labelName: "bcdNotificationNo",
          type: "dropDown",
          name: "bcdNotificationNo",
          width: "45%",
        },
        { labelName: "CodeNumber", type: "separator", name: "", width: "5%" },
        {
          labelName: "bcdNotificationNumber",
          type: "textField",
          name: "bcdNotificationNumber",
          width: "45%",
        },
      ],
    },
    {
      fieldName: "CETH",
      id: "ceth",
    
      checked:false,
      input: [
        {
          labelName: "bcdNotificationNo",
          type: "textField",
          name: "bcdNotificationNo",
          width: "100%",
          placeholder: "Enter Preference",
        },
      ],
    },
    {
      fieldName: "Anti-Dumping Duty",
      id: "antiDumpingDuty",
     
      checked:false,
      input: [
        {
          labelName: "bcdNotificationNo",
          type: "dropDown",
          name: "bcdNotificationNo",
          width: "45%",
        },
        { labelName: "CodeNumber", type: "separator", name: "", width: "5%" },
        {
          labelName: "bcdNotificationNumber",
          type: "textField",
          name: "bcdNotificationNumber",
          width: "45%",
        },
      ],
    },
   
    {
      fieldName: "CTH Serial Number",
      id: "cthSerialNumber",
   
      checked:false,
      input: [
        {
          labelName: "bcdNotificationNo",
          type: "dropDown",
          name: "bcdNotificationNo",
          width: "100%",
          placeholder:"Enter Serial Number"
        },
       
      ],
    },
    {
      fieldName: "Supplier Serial Number",
      id: "supplierSerialNumber",
  
      checked:false,
      input: [
        {
          labelName: "bcdNotificationNo",
          type: "dropDown",
          name: "bcdNotificationNo",
          width: "100%",
          placeholder:"Enter Serial Number"
        },
       
      ],
    },
    {
      fieldName: "Qty. as per Anti-Dumping Notn.",
      id: "qtyAntiDumpingNotn",
     checked:false,
      input: [
        {
          labelName: "bcdNotificationNo",
          type: "dropDown",
          name: "bcdNotificationNo",
          width: "100%",
          placeholder:"Enter Serial Number"
        },
       
      ],
    },
    {
      fieldName: "Qty. as per Anti-Dumping Notn.",
      id: "qtyAntiDumpingNotn",
      checked:false,
     input: [
        
        { labelName: "CodeNumber", type: "textField", name: "number", width: "100%",placeholder:'Enter Notification No.'},
        
        
      ],
    },
    {
      fieldName: "ADD Currency",
      id: "addCurrency",
      checked:false,
      input: [
        
        { labelName: "CodeNumber", type: "dropDown", name: "number", width: "100%",placeholder:'Enter Currency'},
        
        
      ],
    },
    {
      fieldName: "ADD Amount",
      checked:false,
      id: "addAmount",
      input: [
        
        { labelName: "CodeNumber", type: "textField", name: "number", width: "100%",placeholder:'Enter Amount'},
        
        
      ],
    },
    {
      fieldName: "Add Rate",
      id: "addRate",
    checked:false,
      input: [
        
        { labelName: "CodeNumber", type: "dropDown", name: "number", width: "100%",placeholder:'Enter Add Rate'},
        
        
      ],
    },
    {
      fieldName: "Additional Notification1",
      id: "additionalNotification1",
      checked:false,
      input: [
        {
          labelName: "bcdNotificationNo",
          type: "dropDown",
          name: "bcdNotificationNo",
          width: "45%",
          placeholder: "Select Notification",
        },
        { labelName: "CodeNumber", type: "separator", name: "", width: "5%" },
        {
          labelName: "bcdNotificationNumber",
          type: "dropDown",
          name: "bcdNotificationNumber",
          width: "45%",
          placeholder: "Select Notification Sr.no",
        },
      ],
    },
    {
      fieldName: "Additional Notification2",
      id: "additionalNotification2",
      checked:false,
      input: [
        {
          labelName: "bcdNotificationNo",
          type: "dropDown",
          name: "bcdNotificationNo",
          width: "45%",
          placeholder: "Select Notification",
        },
        { labelName: "CodeNumber", type: "separator", name: "", width: "5%" },
        {
          labelName: "bcdNotificationNumber",
          type: "dropDown",
          name: "bcdNotificationNumber",
          width: "45%",
          placeholder: "Select Notification Sr.no",
        },
      ],
    },
    {
      fieldName: "Other Notification",
      id: "otherNotification",
      checked:false,
      input: [
        {
          labelName: "bcdNotificationNo",
          type: "dropDown",
          name: "bcdNotificationNo",
          width: "45%",
          placeholder: "Select Notification",
        },
        { labelName: "CodeNumber", type: "separator", name: "", width: "5%" },
        {
          labelName: "bcdNotificationNumber",
          type: "dropDown",
          name: "bcdNotificationNumber",
          width: "45%",
          placeholder: "Select Notification Sr.no",
        },
      ],
    },
    {
      fieldName: "IGST Compensation Cess Levy",
      id: "igstCessLevy",
     checked:false,
      input: [
        {
          labelName: "bcdNotificationNo",
          type: "dropDown",
          name: "bcdNotificationNo",
          width: "45%",
          placeholder: "Select Notification",
        },
        { labelName: "CodeNumber", type: "separator", name: "", width: "5%" },
        {
          labelName: "bcdNotificationNumber",
          type: "dropDown",
          name: "bcdNotificationNumber",
          width: "45%",
          placeholder: "Select Notification Sr.no",
        },
      ],
    },
    {
      fieldName: "IGST Compensation Cess Exmptn",
      id: "igstCompCessExmp",
      checked:false,
      input: [
        {
          labelName: "bcdNotificationNo",
          type: "dropDown",
          name: "bcdNotificationNo",
          width: "45%",
          placeholder: "Select Notification",
        },
        { labelName: "CodeNumber", type: "separator", name: "", width: "5%" },
        {
          labelName: "bcdNotificationNumber",
          type: "dropDown",
          name: "bcdNotificationNumber",
          width: "45%",
          placeholder: "Select Notification Sr.no",
        },
      ],
    },
    {
      fieldName: "Additional Duty(Excise)",
      id: "additionalDuty",
      checked:false,
      input: [
        {
          labelName: "bcdNotificationNo",
          type: "dropDown",
          name: "bcdNotificationNo",
          width: "45%",
          placeholder: "Select Notification",
        },
        { labelName: "CodeNumber", type: "separator", name: "", width: "5%" },
        {
          labelName: "bcdNotificationNumber",
          type: "dropDown",
          name: "bcdNotificationNumber",
          width: "45%",
          placeholder: "Select Notification Sr.no",
        },
      ],
    },
    {
      fieldName: "Edu Cess",
      id: "eduCess",
      checked:false,
      input: [
        {
          labelName: "bcdNotificationNo",
          type: "dropDown",
          name: "bcdNotificationNo",
          width: "45%",
          placeholder: "Select Notification",
        },
        { labelName: "CodeNumber", type: "separator", name: "", width: "5%" },
        {
          labelName: "bcdNotificationNumber",
          type: "dropDown",
          name: "bcdNotificationNumber",
          width: "45%",
          placeholder: "Select Notification Sr.no",
        },
      ],
    },
  
    {
      fieldName: "S & HS Edu Cess",
      id: "shsEduCess",
      checked:false,
      input: [
        {
          labelName: "bcdNotificationNo",
          type: "dropDown",
          name: "bcdNotificationNo",
          width: "45%",
          placeholder: "Select Notification",
        },
        { labelName: "CodeNumber", type: "separator", name: "", width: "5%" },
        {
          labelName: "bcdNotificationNumber",
          type: "dropDown",
          name: "bcdNotificationNumber",
          width: "45%",
          placeholder: "Select Notification Sr.no",
        },
      ],
    },
    {
      fieldName: "CVD(Sub section 5)",
      id: "cvbSec5",
      checked:false,
      input: [
        {
          labelName: "bcdNotificationNo",
          type: "dropDown",
          name: "bcdNotificationNo",
          width: "45%",
          placeholder: "Select Notification",
        },
        { labelName: "CodeNumber", type: "separator", name: "", width: "5%" },
        {
          labelName: "bcdNotificationNumber",
          type: "dropDown",
          name: "bcdNotificationNumber",
          width: "45%",
          placeholder: "Select Notification Sr.no",
        },
      ],
    },
    {
      fieldName: "Addl Duty of Excise(GSI)",
      id: "addiDutyofExcise",
      checked:false,
      input: [
        {
          labelName: "bcdNotificationNo",
          type: "dropDown",
          name: "bcdNotificationNo",
          width: "45%",
          placeholder: "Select Notification",
        },
        { labelName: "CodeNumber", type: "separator", name: "", width: "5%" },
        {
          labelName: "bcdNotificationNumber",
          type: "dropDown",
          name: "bcdNotificationNumber",
          width: "45%",
          placeholder: "Select Notification Sr.no",
        },
      ],
    },
    {
      fieldName: "Spl Excise Duty(Schedule II)",
      id: "splExcise",
      checked:false,
      input: [
        {
          labelName: "bcdNotificationNo",
          type: "dropDown",
          name: "bcdNotificationNo",
          width: "45%",
          placeholder: "Select Notification",
        },
        { labelName: "CodeNumber", type: "separator", name: "", width: "5%" },
        {
          labelName: "bcdNotificationNumber",
          type: "dropDown",
          name: "bcdNotificationNumber",
          width: "45%",
          placeholder: "Select Notification Sr.no",
        },
      ],
    },
    
    {
      fieldName: "Spl Excise Duty(Schedule II)",
      id: "splExcise",
     checked:false,
      input: [
        {
          labelName: "bcdNotificationNo",
          type: "dropDown",
          name: "bcdNotificationNo",
          width: "45%",
          placeholder: "Select Notification",
        },
        { labelName: "CodeNumber", type: "separator", name: "", width: "5%" },
        {
          labelName: "bcdNotificationNumber",
          type: "dropDown",
          name: "bcdNotificationNumber",
          width: "45%",
          placeholder: "Select Notification Sr.no",
        },
      ],
    },
    {
      fieldName: "Spl Excise Duty(Schedule II)",
      id: "splExcise",
      checked:false,
      input: [
        {
          labelName: "bcdNotificationNo",
          type: "dropDown",
          name: "bcdNotificationNo",
          width: "45%",
          placeholder: "Select Notification",
        },
        { labelName: "CodeNumber", type: "separator", name: "", width: "5%" },
        {
          labelName: "bcdNotificationNumber",
          type: "dropDown",
          name: "bcdNotificationNumber",
          width: "45%",
          placeholder: "Select Notification Sr.no",
        },
      ],
    },
    {
      fieldName: "Addl Duty of Excise(TTA)",
      id: "addiDutyofExcise",
      checked:false,
      input: [
        {
          labelName: "bcdNotificationNo",
          type: "dropDown",
          name: "bcdNotificationNo",
          width: "45%",
          placeholder: "Select Notification",
        },
        { labelName: "CodeNumber", type: "separator", name: "", width: "5%" },
        {
          labelName: "bcdNotificationNumber",
          type: "dropDown",
          name: "bcdNotificationNumber",
          width: "45%",
          placeholder: "Select Notification Sr.no",
        },
      ],
    },
    {
      fieldName: "Excise Health Cess",
      id: "exciseHealthCess",
      checked:false,
      input: [
        {
          labelName: "bcdNotificationNo",
          type: "dropDown",
          name: "bcdNotificationNo",
          width: "45%",
          placeholder: "Select Notification",
        },
        { labelName: "CodeNumber", type: "separator", name: "", width: "5%" },
        {
          labelName: "bcdNotificationNumber",
          type: "dropDown",
          name: "bcdNotificationNumber",
          width: "45%",
          placeholder: "Select Notification Sr.no",
        },
      ],
    },
    {
      fieldName: "Excise Cess",
      id: "exciseCess",
      checked:false,
      input: [
        {
          labelName: "bcdNotificationNo",
          type: "dropDown",
          name: "bcdNotificationNo",
          width: "45%",
          placeholder: "Select Notification",
        },
        { labelName: "CodeNumber", type: "separator", name: "", width: "5%" },
        {
          labelName: "bcdNotificationNumber",
          type: "dropDown",
          name: "bcdNotificationNumber",
          width: "45%",
          placeholder: "Select Notification Sr.no",
        },
      ],
    },
    {
      fieldName: "Excise Agri Infra Cess",
      id: "exciseAgriInfraCess",
      checked:false,
      input: [
        {
          labelName: "bcdNotificationNo",
          type: "dropDown",
          name: "bcdNotificationNo",
          width: "45%",
          placeholder: "Select Notification",
        },
        { labelName: "CodeNumber", type: "separator", name: "", width: "5%" },
        {
          labelName: "bcdNotificationNumber",
          type: "dropDown",
          name: "bcdNotificationNumber",
          width: "45%",
          placeholder: "Select Notification Sr.no",
        },
      ],
    },
    {
      fieldName: "Infrastructure Cess",
      id: "infrastructureCess",
      checked:false,
      input: [
        {
          labelName: "bcdNotificationNo",
          type: "dropDown",
          name: "bcdNotificationNo",
          width: "45%",
          placeholder: "Select Notification",
        },
        { labelName: "CodeNumber", type: "separator", name: "", width: "5%" },
        {
          labelName: "bcdNotificationNumber",
          type: "dropDown",
          name: "bcdNotificationNumber",
          width: "45%",
          placeholder: "Select Notification Sr.no",
        },
      ],
    },
    {
      fieldName: "SAD Notification Duty",
      checked:false,
      id: "sadNotificationDuty",
      input: [
        {
          labelName: "bcdNotificationNo",
          type: "dropDown",
          name: "bcdNotificationNo",
          width: "45%",
          placeholder: "Select Notification",
        },
        { labelName: "CodeNumber", type: "separator", name: "", width: "5%" },
        {
          labelName: "bcdNotificationNumber",
          type: "dropDown",
          name: "bcdNotificationNumber",
          width: "45%",
          placeholder: "Select Notification Sr.no",
        },
      ],
    },
  ];
  
  export default SectionFields;