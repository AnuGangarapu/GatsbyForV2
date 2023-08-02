
import './layout.css'


import React from 'react'

import Navbar from './Navbar'
const tabsData1 = [
  { name: "Files", label: "Files", tab: 0 },
  { name: "Checklist", label: "Checklist", tab: 1 },
  { name: "Status", label: "Status", tab: 2 },
];
const tabsData2 = [
  { name: "Imports", label: "Imports", tab: 0 },
  { name: "Exports", label: "Exports", tab: 1 },
];

const Layout = ({ element, props }) => {
  if (props.location.pathname.match(/^\/app/)) {
  //   let data={}
  //   if (props.location.pathname='app/job/import'){
  //     data={sentinelIcon:true,
  //     selectOptions:true,
  //     jobNo:"ICB/1363/2023-24",
  //     tabsData:tabsData2}

  //  }
  //  let newData={...props,...data}
  let items = props.location.pathname.includes("import")?'Import':'MyJobs'

  localStorage.setItem('items', JSON.stringify(items));
    return <Navbar   {...props} >{element}</Navbar>
  }
}


export default Layout
