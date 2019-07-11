import React, { Component } from 'react'
import Table from '../compnents/table/Table';

export default class App extends Component {
  constructor(){
    super();
    this.tableRef = React.createRef();
  }
  addData(){
    this.tableRef.current.addData();
  }
  componentDidMount(){
    console.log("ref",this.tableRef);
  }
  render() {
    return (
      <div className="App">

          <Table  slide={ 1 } 
                  show={ 4 } 
                  speed={ .3 } 
                  whenClick={ ()=>console.log('dosomething') }
                  ref={this.tableRef}
          />

      </div>
    )
  }
}
