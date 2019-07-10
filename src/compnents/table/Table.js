import React, { Component } from 'react';
import './Table.scss';
import json from '../../ticketInfo';
console.log('data',json.data[0].data);
export default class Table extends Component {
    constructor(){
        super();
        this.state={
            show:'3',
            moveRight:'1',
            slide:'3',
            tableData:[],
            dateArray:['12/30(六)','12/31(日)','1/1(一)','1/2(二)','1/3(三)','1/4(四)','1/5(五)']
        }
        
    }

    tableRight(){
        this.setState({
            moveRight:'3'
        })
        console.log(this.state.moveRight)
    }

    tableLeft(){
        console.log('left')
    }

    componentDidMount(){

        this.setState({tableData:json.data[0].data,});    

    }
    render() {
        const { show,dateArray,moveRight,n,tableData } = this.state;
        return (
        <div className="table">
            <button onClick={this.tableRight.bind(this)} className="m-Button m-rightButton">{'>'}</button>
            <button onClick={this.tableLeft.bind(this)} className="m-Button m-leftButton">{'<'}</button>
                <table className="row-box m-table">
                    <tbody>
                            <tr>
                                <td className="navDate-title-bg">
                                    <div className="dateTitle">
                                        <span>回程</span>
                                        <span>去程</span>
                                    </div>
                                </td>
                                <td className="hidden">
                                    <div className={`nowrap moveRight-${moveRight}`} style={{transform: `translateX(${n})`}}>
                                        <div className={`navDate-bg show-${show}`}><span>12/30(六)</span></div>
                                        <div className={`navDate-bg show-${show}`}><span>12/31(日)</span></div>
                                        <div className={`navDate-bg show-${show}`}><span>1/1(一)</span></div>
                                        <div className={`navDate-bg show-${show}`}><span>1/2(二)</span></div>
                                        <div className={`navDate-bg show-${show}`}><span>1/3(三)</span></div>
                                        <div className={`navDate-bg show-${show}`}><span>1/4(四)</span></div>
                                        <div className={`navDate-bg show-${show}`}><span>1/5(五)</span></div>
                                    </div>
                                </td>
                            </tr>

                        {tableData.map((data,index)=>{
                            return    <tr key={`${data.goDate}+${index}`}>
                                        <td className="navDate-title-bg">
                                            <div>
                                                <span>{data.goDate}</span>
                                            </div>
                                        </td>
                                        
                                        <td className="hidden">
                                            <div className={ `nowrap moveRight-${ moveRight }` } style={{transform: `translateX(${n})`}}>
                                                {data.detail.map((detail,index)=>{
                                                    return  <div key={`${detail.backDate}+${detail.price}+${index}`} className={`show-${ show }`}><span>
                                                    { detail.price === "--"?'查看':(detail.price === " "?"--":detail.price)
                                                       
                                                                                    }
                                                    </span></div>
                                                })}
                                            </div> 
                                        </td>                              
                                    </tr>
                        })}
                         
                    </tbody>
            </table> 
        </div>
        )
    }
}



{/* template
                        <tr>
                            <td className="navDate-title-bg">
                                <div>
                                    <span>12/27(三)</span>
                                </div>
                            </td>
                            <td className="hidden">
                                <div className={`nowrap moveRight-${moveRight}`} style={{transform: `translateX(${n})`}}>
                                    <div className={`show-${show}`}><span>$15,568</span></div>
                                    <div className={`show-${show}`}><span>$15,568</span></div>
                                    <div className={`show-${show}`}><span>$15,568</span></div>
                                    <div className={`show-${show}`}><span>$15,568</span></div>
                                    <div className={`show-${show}`}><span>$15,568</span></div>
                                    <div className={`show-${show}`}><span>$15,568</span></div>
                                    <div className={`show-${show}`}><span>$15,568</span></div>
                                </div> 
                            </td>                              
                        </tr> */}