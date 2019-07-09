import React, { Component } from 'react';
import './Table.scss';
export default class Table extends Component {
    constructor(){
        super();
        this.state={

        }
    }
    componentDidMount(){

    }
    render() {
        return (
            <div className="table">
            {/* <table>
                <tr className="column-box">
                    <td>去程</td>
                    <td>12/27(一)</td>
                    <td>12/27(二)</td>
                    <td>12/27(三)</td>
                    <td>12/27(四)</td>
                    <td>12/27(五)</td>
                    <td>12/27(六)</td>
                    <td>12/27(日)</td>
                </tr>
            </table> */}
               {/* <ul className="column-list">
                   <li className="text">
                       <span>去程</span>
                       <span>回程</span>
                   </li>
                   <li>12/27(一)</li>
                   <li>12/27(二)</li>
                   <li>12/27(三)</li>
                   <li>12/27(四)</li>
                   <li>12/27(五)</li>
                   <li>12/27(六)</li>
                   <li>12/27(日)</li>
               </ul> */}
                   
                        <table className="row-box m-table">
                      
                        
                        <tbody>
                             <tr>
                                 <td>
                                    <div>
                                        <span>text</span>
                                        <span>text</span>
                                    </div>
                                 </td>
                                 <td className="hidden">
                                     <div className="nowrap">
                                        <div><span>12/31</span></div>
                                        <div><span>12/31</span></div>
                                        <div><span>12/31</span></div>
                                        <div><span>12/31</span></div>
                                        <div><span>12/31</span></div>
                                        <div><span>12/31</span></div>
                                        <div><span>12/31</span></div>
                                     </div>
                                    
                                    
                                 </td>
                            </tr>
                            <tr>
                                 <td>
                                    <div>
                                        <span>12/31(1)</span>
                                    </div>
                                 </td>
                                 <td >
                                     <div className="nowp">
                                        <div><span>body</span></div>
                                        <div><span>body</span></div>
                                        <div><span>body</span></div>
                                        <div><span>body</span></div>
                                        <div><span>body</span></div>
                                        <div><span>body</span></div>
                                        <div><span>body</span></div>
                                     </div>
                                 </td>
                            </tr>
                            {/* <tr>
                                <td>body</td>
                                <td>body</td>
                                <td>body</td>
                                <td>body</td>
                                <td>body</td>
                                <td>body</td>
                                <td>body</td>
                            </tr>  
                            <tr>
                                <td>body</td>
                                <td>body</td>
                                <td>body</td>
                                <td>body</td>
                                <td>body</td>
                                <td>body</td>
                                <td>body</td>
                            </tr>  
                            <tr>
                                <td>body</td>
                                <td>body</td>
                                <td>body</td>
                                <td>body</td>
                                <td>body</td>
                                <td>body</td>
                                <td>body</td>
                            </tr>
                            <tr>
                                <td>body</td>
                                <td>body</td>
                                <td>body</td>
                                <td>body</td>
                                <td>body</td>
                                <td>body</td>
                                <td>body</td>
                            </tr>
                            <tr>
                                <td>body</td>
                                <td>body</td>
                                <td>body</td>
                                <td>body</td>
                                <td>body</td>
                                <td>body</td>
                                <td>body</td>
                            </tr> 
                            <tr>
                                <td>body</td>
                                <td>body</td>
                                <td>body</td>
                                <td>body</td>
                                <td>body</td>
                                <td>body</td>
                                <td>body</td>
                            </tr>  
                         */}
                        </tbody>
                    </table> 
                        
                    
              
            </div>
        )
    }
}
