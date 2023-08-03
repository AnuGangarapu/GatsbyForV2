import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import MyJobs from "../components/Pages/MyJobs/MyJobs"
import { Router } from "@reach/router"
import PrivateRoute from "../components/api/PrivateRoute"
import ImportCheckList from "../components/Pages/ImportCheckLists/ImportCheckList"


const App = () => {
  return(
    <Router basepath="/app">
    <PrivateRoute path='/myJobs' component={MyJobs}/>
    <PrivateRoute path='/jobs/import' component={ImportCheckList} pageTitle="ImportCheckList" />
  
    </Router>
  )
}
export default App

