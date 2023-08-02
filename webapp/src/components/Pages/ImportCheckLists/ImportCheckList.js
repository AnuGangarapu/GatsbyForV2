import React, { Component } from 'react'

export default class ImportCheckList extends Component {
    
 
  
    render() {
        console.log(this.props , "porsssss")
      return (
        <div>
        {this.props.selectedTabName==='Checklist'?<h1>CheckList</h1>:''}</div>
      );
    }
  }
