import React, { Component } from 'react';

class Table extends Component {
    render() {
        return (
            <div id="table-comp">
                <div className="table-panel">
                    <div className="container-table">
                        <table >
                            <tr className="header">
                                <th>
                                    <span className="header-title">회원 유저 네임</span>
                                </th>
                                <th>
                                    <span className="header-no">Join 날짜</span>
                                </th>
                                <th>
                                    <span className="header-no">Expire Date</span>
                                </th>
                                <th colSpan="2">
                                    <span className="header-no">Membershop No.</span>
                                </th>
                                <th>
                                    <span className="header-no">Total Points</span>
                                </th>
                            </tr>
                            <tr className="header" id="colleps-row">
                                <td>
                                    <span className="header-title">UserName</span>
                                </td>
                                <td>
                                    <span className="header-title">2019 Mar 22</span>
                                </td>
                                <td>
                                    <span className="header-title">2019 Mar 22</span>
                                </td>
                                <td colSpan="2">
                                    <span className="header-title">2154 2511 2163 6281 </span>
                                </td>
                                <td className="table-td-collapse" >
                                    <span className="header-title">734</span>
                                    <span ><i className="fa fa-angle-down arrow-icon" aria-hidden="true"></i></span>
                                    <span ><i className="fa fa-angle-up arrow-icon" aria-hidden="true"></i></span>
                                </td>
                            </tr>
                            <tr className="collapse-main-row">
                                <td colSpan="6" className="collapse-main-col">
                                    <table className="collapse-table">
                                        <tr className="collapse-main-header">
                                            <td className="collapse-header">Ref. No</td>
                                            <td className="collapse-header">날짜</td>
                                            <td className="collapse-header">적립 / 사용처</td>
                                            <td className="collapse-header">포인트 적립</td>
                                            <td className="collapse-header">포인트 사용</td>
                                            <td className="collapse-header">발란스</td>
                                        </tr>

                                        <tr className="collapse-main-body">
                                            <td className="collapse-body">20190325-01</td>
                                            <td className="collapse-body">2019 Mar 22</td>
                                            <td className="collapse-body">SonnyHotel App</td>
                                            <td className="collapse-body">500</td>
                                            <td className="collapse-body"></td>
                                            <td className="collapse-body">751</td>
                                        </tr>
                                        <tr className="collapse-main-body">
                                            <td className="collapse-body">20190325-01</td>
                                            <td className="collapse-body">2019 Mar 22</td>
                                            <td className="collapse-body">SonnyHotel App</td>
                                            <td className="collapse-body"></td>
                                            <td className="collapse-body" >500</td>
                                            <td className="collapse-body">751</td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                            <tr className="header" id="colleps-row">
                                <td>
                                    <span className="header-title">UserName</span>
                                </td>
                                <td>
                                    <span className="header-title">2019 Mar 22</span>
                                </td>
                                <td>
                                    <span className="header-title">2019 Mar 22</span>
                                </td>
                                <td colSpan="2">
                                    <span className="header-title">2154 2511 2163 6281 </span>
                                </td>
                                <td className="table-td-collapse" >
                                    <span className="header-title">734</span>
                                    <span ><i className="fa fa-angle-down arrow-icon" aria-hidden="true"></i></span>
                                    <span ><i className="fa fa-angle-up arrow-icon" aria-hidden="true"></i></span>
                                </td>
                            </tr>
                            <tr className="collapse-main-row">
                                <td colSpan="6" className="collapse-main-col">
                                    <table className="collapse-table">
                                        <tr className="collapse-main-header">
                                            <td className="collapse-header">Ref. No</td>
                                            <td className="collapse-header">날짜</td>
                                            <td className="collapse-header">적립 / 사용처</td>
                                            <td className="collapse-header">포인트 적립</td>
                                            <td className="collapse-header">포인트 사용</td>
                                            <td className="collapse-header">발란스</td>
                                        </tr>

                                        <tr className="collapse-main-body">
                                            <td className="collapse-body">20190325-01</td>
                                            <td className="collapse-body">2019 Mar 22</td>
                                            <td className="collapse-body">SonnyHotel App</td>
                                            <td className="collapse-body">500</td>
                                            <td className="collapse-body"></td>
                                            <td className="collapse-body">751</td>
                                        </tr>
                                        <tr className="collapse-main-body">
                                            <td className="collapse-body">20190325-01</td>
                                            <td className="collapse-body">2019 Mar 22</td>
                                            <td className="collapse-body">SonnyHotel App</td>
                                            <td className="collapse-body"></td>
                                            <td className="collapse-body" >500</td>
                                            <td className="collapse-body">751</td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                            <tr className="header" id="colleps-row">
                                <td>
                                    <span className="header-title">UserName</span>
                                </td>
                                <td>
                                    <span className="header-title">2019 Mar 22</span>
                                </td>
                                <td>
                                    <span className="header-title">2019 Mar 22</span>
                                </td>
                                <td colSpan="2">
                                    <span className="header-title">2154 2511 2163 6281 </span>
                                </td>
                                <td className="table-td-collapse" >
                                    <span className="header-title">734</span>
                                    <span ><i className="fa fa-angle-down arrow-icon" aria-hidden="true"></i></span>
                                    <span ><i className="fa fa-angle-up arrow-icon" aria-hidden="true"></i></span>
                                </td>
                            </tr>
                            <tr className="collapse-main-row">
                                <td colSpan="6" className="collapse-main-col">
                                    <table className="collapse-table">
                                        <tr className="collapse-main-header">
                                            <td className="collapse-header">Ref. No</td>
                                            <td className="collapse-header">날짜</td>
                                            <td className="collapse-header">적립 / 사용처</td>
                                            <td className="collapse-header">포인트 적립</td>
                                            <td className="collapse-header">포인트 사용</td>
                                            <td className="collapse-header">발란스</td>
                                        </tr>

                                        <tr className="collapse-main-body">
                                            <td className="collapse-body">20190325-01</td>
                                            <td className="collapse-body">2019 Mar 22</td>
                                            <td className="collapse-body">SonnyHotel App</td>
                                            <td className="collapse-body">500</td>
                                            <td className="collapse-body"></td>
                                            <td className="collapse-body">751</td>
                                        </tr>
                                        <tr className="collapse-main-body">
                                            <td className="collapse-body">20190325-01</td>
                                            <td className="collapse-body">2019 Mar 22</td>
                                            <td className="collapse-body">SonnyHotel App</td>
                                            <td className="collapse-body"></td>
                                            <td className="collapse-body" >500</td>
                                            <td className="collapse-body">751</td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                            <tr className="header" id="colleps-row">
                                <td>
                                    <span className="header-title">UserName</span>
                                </td>
                                <td>
                                    <span className="header-title">2019 Mar 22</span>
                                </td>
                                <td>
                                    <span className="header-title">2019 Mar 22</span>
                                </td>
                                <td colSpan="2">
                                    <span className="header-title">2154 2511 2163 6281 </span>
                                </td>
                                <td className="table-td-collapse" >
                                    <span className="header-title">734</span>
                                    <span ><i className="fa fa-angle-down arrow-icon" aria-hidden="true"></i></span>
                                    <span ><i className="fa fa-angle-up arrow-icon" aria-hidden="true"></i></span>
                                </td>
                            </tr>
                            <tr className="collapse-main-row">
                                <td colSpan="6" className="collapse-main-col">
                                    <table className="collapse-table">
                                        <tr className="collapse-main-header">
                                            <td className="collapse-header">Ref. No</td>
                                            <td className="collapse-header">날짜</td>
                                            <td className="collapse-header">적립 / 사용처</td>
                                            <td className="collapse-header">포인트 적립</td>
                                            <td className="collapse-header">포인트 사용</td>
                                            <td className="collapse-header">발란스</td>
                                        </tr>

                                        <tr className="collapse-main-body">
                                            <td className="collapse-body">20190325-01</td>
                                            <td className="collapse-body">2019 Mar 22</td>
                                            <td className="collapse-body">SonnyHotel App</td>
                                            <td className="collapse-body">500</td>
                                            <td className="collapse-body"></td>
                                            <td className="collapse-body">751</td>
                                        </tr>
                                        <tr className="collapse-main-body">
                                            <td className="collapse-body">20190325-01</td>
                                            <td className="collapse-body">2019 Mar 22</td>
                                            <td className="collapse-body">SonnyHotel App</td>
                                            <td className="collapse-body"></td>
                                            <td className="collapse-body" >500</td>
                                            <td className="collapse-body">751</td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
export default Table;