import React, { Component } from 'react';
import './Table.scss';
import json from '../../ticketInfo';
console.log('json',json);

export default class Table extends Component {
    constructor(){
        super();
        this.state={
            show:'3',
            moveRight:'3',
            slide:'3',
            tableData:[],
            n:0,
            R_ButtonHide:true,
            L_ButtonHide:false,
            moveClass:'',
            activeClass:false,
        }
        
    }

    tableRight(){
        this.setState({n:'-100%', L_ButtonHide:true,})
        if(this.state.n === '-100%'){this.setState({n:'-133%', R_ButtonHide:false,})}
        if(this.state.n === '-133%'){this.setState({n:'-133%'})}
    }

    tableLeft(){
        if(this.state.n === '-133%'){this.setState({n:'-100%'})}
        if(this.state.n === '-100%'){this.setState({n:'0%', L_ButtonHide:false,R_ButtonHide:true})}
       
    }
    activeClass(e){
        console.log(e.target)
        //加上一個class變成active
        //計算餘數
        //
        // this.setState({
        //     activeClass:!this.activeClass
        // })

    }
    componentDidMount(){

        this.setState({tableData:json.data[0].data,});    

    }
    render() {
        const { show,moveRight,n,tableData,R_ButtonHide,L_ButtonHide,moveClass,activeClass } = this.state;
        return (
        <div className="table">
            <button className={`m-Button m-rightButton ${R_ButtonHide?` `:`buttonHide`}`} onClick={this.tableRight.bind(this)}>{'>'}</button>
            <button className={`m-Button m-leftButton ${L_ButtonHide?` `:`buttonHide`}`} onClick={this.tableLeft.bind(this)}>{'<'}</button>
                <table className="row-box m-table">
                    <tbody>
                            <tr>
                                <td className="navDate-title-bg block">
                                    <div className="dateTitle">
                                        <span>回程</span>
                                        <span>去程</span>
                                    </div>
                                </td>
                                <td className="hidden">
                                    <div className={`nowrap moveRight-${moveRight}  ${ moveClass }`}  style={{transform: `translateX(${n})`}}>
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

                        {tableData.map((data,index1)=>{
                            return    <tr key={`${ data.goDate }+${ index1 }`}>
                                        <td className="navDate-title-bg">
                                            <div>
                                                <span>{ data.goDate }</span>
                                            </div>
                                        </td>
                                        <td className="hidden">
                                            <div className={ `nowrap moveRight-${ moveRight } ${ moveClass }` } style={{transform: `translateX(${ n })`}}>
                                                {data.detail.map((detail,index2)=>{
                                                    return  <div key={`${ detail.backDate }+${ detail.price }+${ index2 }`} id={ (index1*7)+index2 } 
                                                                className={`show-${ show } ${ detail.cheapest ? 'cheapest' : '' } ${activeClass?'active':''}` }
                                                                onClick={this.activeClass.bind(this)}
                                                                >
                                                                <span>
                                                                    { detail.price === "--" ? '查看' : (detail.price === " " ? "--" : detail.price +' 起') }
                                                                </span>
                                                            </div>
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