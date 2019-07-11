import React, { Component } from 'react';
import './Table.scss';
import json from '../../ticketInfo';

export default class Table extends Component {
    constructor() {
        super();
        this.state = {
            show: 4,
            slide: 2,
            tableData: [],
            n: 0,
            R_ButtonHide: true,
            L_ButtonHide: false,
            moveClass: 'move-1-0',
            activeClass: false,
            id: 10,
            row: '',
            col: '',
            count: 0,

        }

    }

    tableRight() {
        const { show, slide, count } = this.state;
        // this.setState((prevState) => { count: prevState.count + 1 })
        if (show === 1) {
            if (slide < 4 || slide === 6) {
                this.setState({ moveClass: `move-1-${this.state.count += this.state.slide}` });
            } else {
                let moveTmp = slide;
                if (count >= slide) { moveTmp = (6 - slide) };
                this.setState({
                    moveClass: `move-1-${this.state.count += moveTmp}`,
                })
            }
            if (this.state.count >= 6) { this.setState({ R_ButtonHide: false, }) };
        }



        if (show === 2) {
            if (slide === 1 || slide === 5) {
                this.setState({ moveClass: `move-2-${this.state.count += this.state.slide}` });
            } else {
                if (slide === 2) {//7除2餘1 %% 5-2=3 ELSE的判斷正確進行,另外為2寫一個
                    let moveTmp = slide;
                    if (count - 1 >= slide) { moveTmp = 1 };
                    this.setState({
                        moveClass: `move-2-${this.state.count += moveTmp}`,
                    })

                } else {
                    let moveTmp = slide;
                    if (count >= slide) { moveTmp = (5 - slide) };
                    this.setState({
                        moveClass: `move-2-${this.state.count += moveTmp}`,
                    })
                }
            }
            if (this.state.count >= 5) { this.setState({ R_ButtonHide: false, }) };
        }

        if (show === 3) {
            if (slide === 1 || slide === 4) {
                this.setState({ moveClass: `move-3-${this.state.count += this.state.slide}` });
            } else {


                let moveTmp = slide;
                if (count >= slide) { moveTmp = (4 - slide) };
                this.setState({
                    moveClass: `move-3-${this.state.count += moveTmp}`,
                })
            }
            if (this.state.count >= 4) { this.setState({ R_ButtonHide: false, }) };

        }
        if (show === 4) {
            if (slide === 1 || slide === 3) {
                this.setState({ moveClass: `move-4-${this.state.count += this.state.slide}` });
            } else {
                let moveTmp = slide;
                if (count >= slide) { moveTmp = (3 - slide) };
                this.setState({
                    moveClass: `move-4-${this.state.count += moveTmp}`,
                })
            }
            if (this.state.count >= 3) { this.setState({ R_ButtonHide: false, }) };

        }
        this.setState({ L_ButtonHide: true, })


    }

    tableLeft() {
        const { slide, count, show } = this.state;

        if (this.state.count > 0) {
            if (show === 1) {
                if (slide < 4 || slide === 6) {
                    this.setState({
                        moveClass: `move-1-${this.state.count -= slide}`
                    })
                } else {
                    let moveTmp = slide;
                    if (count <= slide) { moveTmp = (6 - slide) }
                    this.setState({
                        moveClass: `move-1-${this.state.count -= moveTmp}`
                    })
                }
            }

            if (show === 2) {
                if (slide < 2 || slide === 5) {
                    this.setState({
                        moveClass: `move-2-${this.state.count -= slide}`
                    })
                } else {
                    if (slide === 2) {
                        let moveTmp = slide;
                        if (count <= slide) { moveTmp = 1 }
                        this.setState({
                            moveClass: `move-2-${this.state.count -= moveTmp}`
                        })
                    } else {
                        let moveTmp = slide;
                        if (count <= slide) { moveTmp = (5 - slide) }
                        this.setState({
                            moveClass: `move-2-${this.state.count -= moveTmp}`
                        })
                    }

                }

            }
            if (show === 3) {
                if (slide === 1 || slide === 4) {
                    this.setState({
                        moveClass: `move-3-${this.state.count -= slide}`
                    })
                } else {
                    let moveTmp = slide;
                    if (count <= slide) { moveTmp = (4 - slide) }
                    this.setState({
                        moveClass: `move-3-${this.state.count -= moveTmp}`
                    })
                }
            }
            if (show === 4) {
                if (slide === 1 || slide === 3) {
                    this.setState({
                        moveClass: `move-4-${this.state.count -= slide}`
                    })
                } else {
                    let moveTmp = slide;
                    if (count <= slide) { moveTmp = 1 }
                    this.setState({
                        moveClass: `move-4-${this.state.count -= moveTmp}`
                    })
                }
            }

        }


        if (this.state.count === 0) {
            this.setState({
                R_ButtonHide: true,
                L_ButtonHide: false,
            })
        }




    }
   
    activeClass(e) {
        //init
        const allTableClass = `.tableItem`;

        const allTableItem = document.querySelectorAll(allTableClass);
        allTableItem.forEach((e) => {
            e.classList.remove('active', 'cross-bg');
        });
        // aaa active
        const el = e.currentTarget;
        el.classList.add('active');
        const newTable = [...allTableItem];
        const columnTable = newTable.filter((e) => {
            return e.id % 7 === (el.id % 7)
        })

        const rowTable = newTable.filter((e) => {
            return Math.floor(e.id / 7) === Math.floor(el.id / 7)
        })

        columnTable.forEach((e) => {
            e.classList.add('cross-bg');
        })

        rowTable.forEach((e) => {
            e.classList.add('cross-bg');
        })

    }
    addData(d){
       //something
        console.log('get outside')
    }
    componentDidMount() {

        this.setState({ tableData: json.data[0].data, });

    }
    render() {
        const { show, n, tableData, R_ButtonHide, L_ButtonHide, moveClass, activeClass } = this.state;
        return (
            <div className="table">
                <button className={`m-Button m-rightButton ${R_ButtonHide ? ` ` : `buttonHide`}`} onClick={this.tableRight.bind(this)}>{'>'}</button>
                <button className={`m-Button m-leftButton ${L_ButtonHide ? ` ` : `buttonHide`}`} onClick={this.tableLeft.bind(this)}>{'<'}</button>
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
                                <div className={`nowrap transform_init  ${moveClass}`}  >
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
                                    <div className={`nowrap transform_init ${moveClass}`} >
                                        {data.detail.map((detail, index2) => {
                                            return <div key={`${detail.backDate}+${detail.price}+${index2}`} id={(index1 * 7) + index2}
                                                className={`tableItem show-${show} ${detail.cheapest ? 'cheapest' : ''} ${activeClass ? 'active' : ''}`}
                                                onClick={this.activeClass.bind(this)}
                                            >
                                                <span>
                                                    {detail.price === "--" ? '查看' : (detail.price === " " ? "--" : detail.price + ' 起')}
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