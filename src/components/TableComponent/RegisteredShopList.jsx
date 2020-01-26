import React, { Component } from 'react';
import Pagenation from "./../../components/PaginationComponent/Pagination.jsx";

class Table extends Component {
    render() {
        return (
            <div id="table-comp">
                <div className="table-panel">
                    <div className="container-table">
                        <table >
                            <tr className="header">
                                <th>
                                    <span className="header-title">업소 이름</span>
                                </th>
                                <th>
                                    <span className="header-no">업 종</span>
                                </th>
                                <th>
                                    <span className="header-no">업종 설명</span>
                                </th>
                                <th colSpan="2">
                                    <span className="header-no">적립 요율</span>
                                </th>
                                <th>
                                    <span className="header-no">연락처</span>
                                </th>
                            </tr>
                            <tr className="header" id="colleps-row">
                                <td>
                                    <span className="header-title">한국 맛집</span>
                                </td>
                                <td>
                                    <span className="header-title">한국 식당</span>
                                </td>
                                <td>
                                    <span className="header-title">정말 맛있는 김치찌게</span>
                                </td>
                                <td colSpan="2">
                                    <span className="header-title">10% 적립</span>
                                </td>
                                <td className="table-td-collapse" >
                                    <span className="header-title">734-0923</span>
                               
                                </td>
                            </tr>
                           
                            <tr className="header" id="colleps-row">
                                <td>
                                    <span className="header-title">영국 맛집</span>
                                </td>
                                <td>
                                    <span className="header-title">서양식 식당</span>
                                </td>
                                <td>
                                    <span className="header-title">빵이 맛있어요</span>
                                </td>
                                <td colSpan="2">
                                    <span className="header-title">5% 적립 </span>
                                </td>
                                <td className="table-td-collapse" >
                                    <span className="header-title">739-0994</span>
                                </td>
                            </tr>
                           
                            <tr className="header" id="colleps-row">
                                <td>
                                    <span className="header-title">영국 맛집</span>
                                </td>
                                <td>
                                    <span className="header-title">서양식 식당</span>
                                </td>
                                <td>
                                    <span className="header-title">빵이 맛있어요</span>
                                </td>
                                <td colSpan="2">
                                    <span className="header-title">5% 적립 </span>
                                </td>
                                <td className="table-td-collapse" >
                                    <span className="header-title">739-0994</span>
                                </td>
                            </tr>

                       </table>
                    </div>
                </div>
                <Pagenation></Pagenation>
            </div>
        )
    }
}
export default Table;