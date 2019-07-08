import React, { Component } from 'react'
import Table from '../compnents/table/Table';

export default class App extends Component {
  render() {
    return (
      <div className="App">

          <Table  slide={ 1 } 
                  show={ 4 } 
                  speed={ .3 } 
                  whenClick={ ()=>console.log('dosomething') }
          />

      </div>
    )
  }
}
