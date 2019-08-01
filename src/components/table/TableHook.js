import React, { useState, useEffect } from 'react'
import './Table.scss';
import json from '../../ticketInfo';
import rightArrow from './imgs/rightarrow.png';
import leftArrow from './imgs/leftarrow.png';
import newData from '../../newData';

export default function TableHook(props) {
    let [show, setShow] = useState(2);
    let [slide, setSlide] = useState(3);
    let [speed, setSpeed] = useState(.3);
    let [tableData, settableData] = useState([]);
    let [R_ButtonHide, setR_ButtonHide] = useState(true);
    let [L_ButtonHide, setL_ButtonHide] = useState(false);
    let [id, setId] = useState(10);
    let [row, setRow] = useState(0);
    let [col, setCol] = useState(0);
    let [count, setCount] = useState(0);


    const tableRight = () => {
        setCount(count += slide);
        setL_ButtonHide(true);
        if (count >= (7 - show)) {
            setCount(7 - show);
            setR_ButtonHide(false);
        };
    }

    const tableLeft = () => {
        setCount(count -= slide);
        setR_ButtonHide(true);
        if (count <= 0) {
            setCount(0);
            setL_ButtonHide(false);
        }
    }

    const activeClass = (e) => {
        const el = e.currentTarget;
        setCol(el.id % 7);
        setRow(Math.floor(el.id / 7));
        setId(+el.id);
    }

    useEffect(() => {
        settableData(json.data[0].data);
        setShow(props.show||3);
        setSlide(props.slide||3);
        setSpeed(props.speed||.3);
    })

    return (
        <div className="table">
            <a className={`m-Button m-rightButton ${R_ButtonHide ? ` ` : `buttonHide`}`} onClick={tableRight}>
                <img src={rightArrow} alt="" />
            </a>
            <a className={`m-Button m-leftButton ${L_ButtonHide ? ` ` : `buttonHide`}`} onClick={tableLeft}>
                <img src={leftArrow} alt="" />
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
                            <div className={`nowrap transform_init move-${show}-${count} `} style={{ transition: `all ${speed}s ease-in-out 0s` }} >
                                <div className={`navDate-bg show-${show}`}><span>12/30(六)</span></div>
                                <div className={`navDate-bg show-${show}`}><span>12/31(日)</span></div>
                                <div className={`navDate-bg show-${show}`}>
                                    <span className="yearTitle">2018</span>
                                    <span>1/1(一)</span>
                                </div>
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
                                    {data.goDate === "01/01(一)" ? <span className="nav-yearTitle">2018</span> : false}

                                    <span>{data.goDate}</span>
                                </div>

                            </td>
                            <td className="hidden">
                                <div className={`nowrap transform_init move-${show}-${count}`} style={{ transition: `all ${speed}s ease-in-out 0s` }}>
                                    {data.detail.map((detail, index2) => {
                                        return <div key={`${detail.backDate}+${detail.price}+${index2}`}
                                            id={(index1 * 7) + index2}
                                            className={`tableItem show-${show} 
                                        ${detail.cheapest ? 'cheapest' : ''} 
                                        ${id === ((index1 * 7) + index2) ? 'active' : ''}
                                        ${col === ((index1 * 7) + index2) % 7 ? 'cross-bg' : ''}
                                        ${row === Math.floor(((index1 * 7) + index2) / 7) ? 'cross-bg' : ''}
                                        `}
                                            onClick={activeClass}
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