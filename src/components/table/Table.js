import React, { Component } from 'react';
import './Table.scss';
import json from '../../ticketInfo';
import newData from '../../newData';
import rightArrow  from './imgs/rightarrow.png';
import leftArrow from './imgs/leftarrow.png';

export default class Table extends Component {
    constructor() {
        super();
        this.state = {
            show: 2,
            slide: 3,
            speed: .3,
            tableData: [],
            n: 0,
            R_ButtonHide: true,
            L_ButtonHide: false,
            id: 10,
            row: 0,
            col: 0,
            count: 0,
        }

    }

    tableRight() {
        let { show, slide, count } = this.state;
        this.setState({
            count:count+=slide,
            L_ButtonHide:true
        });
        if (count >= (7-show)) { 
            this.setState({ 
                R_ButtonHide: false,
                count:(7-show),
            }); 
        };
    }
    
    tableLeft() {
        let { slide, count } = this.state;
        this.setState({
            count:count-=slide,
            R_ButtonHide:true
        });
        if (count<=0) { 
            this.setState({ 
                L_ButtonHide: false,
                count:0, 
            }) 
        }
    }

    activeClass(e) {
        const el = e.currentTarget;
        const colId = el.id % 7
        const rowId = Math.floor(el.id / 7)
        this.setState({
            col: colId,
            row: rowId,
            id: +el.id,
        })
    }

    addData(d) {
        const tableData = this.state.tableData;
        const data = newData;
        tableData.push(data);
        this.setState({
            tableData: tableData
        })
        console.log('push new data!!', d);
    }

    componentDidMount() {
        let defaultShow = 3;
        let defaultSlide = 3;
        let defaultSpeed = .3;
        if(this.props.show!==undefined){defaultShow = this.props.show }
        if(this.props.slide!==undefined){defaultSlide = this.props.slide }
        if(this.props.speed!==undefined){defaultSpeed = this.props.speed }
        this.setState({ 
            tableData: json.data[0].data, 
            show:defaultShow,
            slide:defaultSlide,
            speed:defaultSpeed,
        });
    }

    render() {
        const { show, count, tableData, R_ButtonHide, L_ButtonHide, id, col, row, speed } = this.state;
        return (
            <div className="table">
                <a className={`m-Button m-rightButton ${R_ButtonHide ? ` ` : `buttonHide`}`} onClick={this.tableRight.bind(this)}>
                    <img src={rightArrow} alt=""/>
                </a>
                <a className={`m-Button m-leftButton ${L_ButtonHide ? ` ` : `buttonHide`}`} onClick={this.tableLeft.bind(this)}>
                    <img src={leftArrow} alt=""/>
                </a>
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
                                <div className={`nowrap transform_init move-${ show }-${ count } `} style={{ transition: `all ${speed}s ease-in-out 0s` }} >
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

                        {tableData.map((data, index1) => {

                            return <tr key={`${data.goDate}+${index1}`}>
                                <td className="navDate-title-bg">
                                    <div>
                                        <span>{data.goDate}</span>
                                    </div>
                                </td>
                                <td className="hidden">
                                    <div className={`nowrap transform_init move-${ show }-${ count }`} style={{ transition: `all ${speed}s ease-in-out 0s` }}>
                                        {data.detail.map((detail, index2) => {
                                            return <div key={`${detail.backDate}+${detail.price}+${index2}`}
                                                id={(index1 * 7) + index2}
                                                className={`tableItem show-${show} 
                                                ${detail.cheapest ? 'cheapest' : ''} 
                                                ${id === ((index1 * 7) + index2) ? 'active' : ''}
                                                ${col === ((index1 * 7) + index2) % 7 ? 'cross-bg' : ''}
                                                ${row === Math.floor(((index1 * 7) + index2) / 7) ? 'cross-bg' : ''}
                                                `}
                                                onClick={this.activeClass.bind(this)}
                                            >
                                                <span>
                                                    {detail.price === "--" ? '查看' : (detail.price === " " ? "--" : <b>{detail.price + ' 起'}</b>)}
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