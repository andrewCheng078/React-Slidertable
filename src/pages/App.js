import React, { Component } from 'react'
import Table from '../components/table/Table';
import TableHook from '../components/table/TableHook';

export default class App extends Component {
  constructor(){
    super();
    this.tableRef = React.createRef();
  }

  addData(n){
    this.tableRef.current.addData(n);
  }

  render() {
    return (
      <div className="App">
          <TableHook slide={ 3 } 
                  show={ 3 } 
                  speed={ .3 } 
                  whenClick={ ()=>console.log('call back') }/>
  
      </div>
    )
  }
}
