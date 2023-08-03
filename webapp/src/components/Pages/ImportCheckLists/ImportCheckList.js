import React, { Component } from "react"
import Checklist from "../../../../../ui-components/Components/CheckList/Checklist"

export default class ImportCheckList extends Component {
  render() {
    return <div>{this.props.tabName === "Checklist" ? <Checklist /> : ""}</div>
  }
}
