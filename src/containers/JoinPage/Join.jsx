import React, { Component } from 'react';
import listLogo from "./../../assets/img/join-v1-clean-logo.jpg";
import Footer from "../../components/FooterComponent/Footer.jsx";
import LoginSection from "../../components/LoginSectionComponent/LoginSection.jsx"
import Mainlogo from "../../components/MainLogoComponent/MainLogo.jsx"
import {findIndex} from "lodash";


class JoinV1Clean extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedList: []
        };
        this.onListchange = this.onListchange.bind(this);
    }

    onListchange(selectedItem){
        let { selectedList } = this.state;
        let updatedList = [];
        if(selectedItem === 0){
            if(selectedList.length < 5 ){
                for (let item = 1; item <= 5; item++) {
                    if(updatedList.indexOf(item) < 0){
                        updatedList.push(item);
                    }
                }
            }
            this.setState({
                selectedList: updatedList
            });
        }
        else{
            if(selectedList.indexOf(selectedItem) >= 0 ){ // Remove item from list
                const index = selectedList.findIndex((x) => x == selectedItem);
                selectedList.splice(index, 1);
            }
            else{  // Add item to list
                selectedList.push(selectedItem);
            }
            this.setState({
                selectedList: selectedList
            })
        }
    }

    toggleCheckboxIcon(item){
        let { selectedList } = this.state;
        if(selectedList.indexOf(item) >= 0){
            return "body-list active-list";
        }
        else{
            return "body-list";
        }
    }

    renderCheckboxIcon(item){
        let { selectedList } = this.state;
        if(selectedList.indexOf(item) >= 0){
            return "fas fa-check-circle fa-lg";
        }
        else{
            return "fa fa-check-circle-o fa-lg";
        }
    }

    render() {
        let { selectedList } = this.state;
       
        return (
            <div id="join-v1-clean-page">
                <div>
                    <div className="container">
                        <div className="join-main">
                            <div className="join-logo">
                                <Mainlogo logo={listLogo} logoTitleText ="Tokyo"  logoMainText="정글뉴스" logoSubText="회원가입"></Mainlogo>
                                <div className="ad-text">
                                    <div className="div-text-1">정글뉴스에 오신 여러분을 환영합니다!</div>

                                    <div className="div-text-2">왼쪽의 약관 동의를 체크하신 후 우측의 버튼을 통해서 가입하실 수있습니다.</div>
                                </div>
                            </div>
                            <div className="join-list-content">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-7">
                                            <div className="join-left-section">
                                                <div className="join-left-content">
                                                    <div className="join-data-head">
                                                        <span className="left-data">이용약관 내용 동의</span>
                                                        <span className={ selectedList.length === 5 ? 'right-data  active-list' : 'right-data'} onClick={() => this.onListchange(0)}> <i style={{color:selectedList.length ==5? "#6e47d4": ""}} className={selectedList.length ==5 ? "fas fa-check-circle fa-lg" : "fa fa-check-circle-o fa-lg"}></i><span style={{marginLeft: "1rem"}}>전체 동의</span></span>
                                                    </div>
                                                    <div className="join-data-body">
                                                        <div className={ this.toggleCheckboxIcon(1) } onClick={() => this.onListchange(1)}> <span className="align-span"><i className={this.renderCheckboxIcon(1)}></i> <span style={{marginLeft: "1rem"}}>만 14세 이상입니다 (필수) </span></span></div>
                                                        <div className={ this.toggleCheckboxIcon(2) } onClick={() => this.onListchange(2)}> <span className="align-span"><i className={this.renderCheckboxIcon(2)}></i> <span style={{marginLeft: "1rem"}}>서비스 이용약관 동의 (필수) </span></span></div>
                                                        <div className={ this.toggleCheckboxIcon(3) } onClick={() => this.onListchange(3)}> <span className="align-span"><i className={this.renderCheckboxIcon(3)}></i> <span style={{marginLeft: "1rem"}}>개인정보 수집/이용에 대한 동의 (필수)</span></span></div>
                                                        <div className={ this.toggleCheckboxIcon(4) } onClick={() => this.onListchange(4)}> <span className="align-span"><i className={this.renderCheckboxIcon(4)}></i> <span style={{marginLeft: "1rem"}}>전자적 전송매체를 이용한 광고성 정보의 수신에 동의 (선택)</span></span></div>
                                                        <div className={ this.toggleCheckboxIcon(5) } onClick={() => this.onListchange(5)}> <span className="align-span"><i className={this.renderCheckboxIcon(5)}></i> <span style={{marginLeft: "1rem"}}>장기 미접속 시 계정 활성 상태 유지 (선택)</span></span></div>
                                                    </div>
                                                </div>
                                                <div className="join-data-footer">거래 관련, 시스템 및 기타 SMS 수신 설정은 가입 후  [계정관리] - [알림설정] 에서 별도 지정해주시기 바랍니다</div>
                                            </div>
                                        </div> 
                                        <div className="col-md-5">
                                            <LoginSection></LoginSection>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
export default JoinV1Clean;