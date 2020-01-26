import React, { Component } from 'react';
import { TextField, Button, Select, MenuItem, FormControl, InputLabel, Input, InputAdornment, Checkbox, FormControlLabel, FormGroup } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";
import {DialogContent, Dialog} from '@material-ui/core';

class AdSelectWarningModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.autoClose = this.autoClose.bind(this);
    }
    // onWarnigModalDisplay(val) {
    //     this.props.onWarnigModalDisplay(val)
    // }

    autoClose() {
        this.props.onWarnigModalDisplay(false)
        this.props.history.push("/letest-ad-select")
    }

    render() {
        let { isWarnigPopupActive } = this.props;
        
        return (           
            <Dialog
            open={isWarnigPopupActive}
            className="warning-modal"
            onClose={()=>this.props.onWarnigModalDisplay(false)}
            maxWidth="lg"
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
      >
            <DialogContent>
          
            <div id="letest-ad-select-warning-popup">
                <div className="letest-ad-select-warning-popup-inner">
                    <div className="ad-select-warning-popup-top-bar" >
                        <div style={{marginLeft:"25px"}} >
                            <h3>광고 의뢰하기</h3>                    
                        </div>                    
                        <i className="cursor-pointer" ><CloseIcon onClick={() => this.props.onWarnigModalDisplay(false)}/></i>
                    </div>
                    <div className="ad-select-warning-popup-body" style={{overflow: "scroll", height: "90vh"}}>
                        <div className="ad-select-warning-popup-body-title">
                            <h3>광고 의뢰하기</h3>
                            <p>정글뉴스 페이지에  광고를 기재할 수 있는 기능입니다.</p>
                        </div>
                        <div className="ad-select-warning-popup-body-boxs-img">
                            <div className="ad-title">노출 방법</div>
                            <div className="sub-boxs-connt">
                                <div className="sub-boxs-connt-1 sub-box">
                                    <img src="src/assets/img/AdSelectBanner/AdSelectPageView1.png" alt="" />
                                    <p>헤더 위 배너</p>
                                </div>
                                <div className="sub-boxs-connt-2 sub-box">
                                    <img src="src/assets/img/AdSelectBanner/AdSelectPageView2.png" alt="" />
                                    <p>헤더 위 배너</p>
                                </div>
                                <div className="sub-boxs-connt-3 sub-box">
                                    <img src="src/assets/img/AdSelectBanner/AdSelectPageView3.png" alt="" />
                                    <p>헤더 위 배너</p>
                                </div>
                                <div className="sub-boxs-connt-4 sub-box">
                                    <img src="src/assets/img/AdSelectBanner/AdSelectPageView4.png" alt="" />
                                    <p>헤더 위 배너</p>
                                </div>
                                <div className="sub-boxs-connt-5 sub-box">
                                    <img src="src/assets/img/AdSelectBanner/AdSelectPageView5.png" alt="" />
                                    <p>헤더 위 배너</p>
                                </div>
                            </div>
                        </div>
                        <div className="ad-select-warning-popup-body-boxs-text">
                            <div className="popup-body-boxs-text-1">
                                <div className="popup-body-boxs-text-1-title">예약 방법</div>
                                <div className="popup-body-boxs-text-1-text">
                                    <p>- 원하는 노출 방식에 맞는 광고 이미지 준비해주세요. 사이즈에 주의하여 주십시오.</p>
                                    <p>- 광고 예약은 사이트에 이미지를 직접 올리는 방식 </p>
                                    <p>- 이미지가 없을경우 정글뉴스 영업 사원에게 요청하는 방식 (디자인 비용 미화 50불 약 5만2천원)</p>
                                    <p>- 2가지 방식 중 하나를 선택해 진행하시면 됩니다.</p>
                                </div>
                            </div>
                            <div className="popup-body-boxs-text-2">
                                <div className="popup-body-boxs-text-1-title">기재 방법</div>
                                <div className="popup-body-boxs-text-1-text">
                                    <p>- 광고 신청 후 다음날 관리자의 확인 후 12시간 이내에 광고는 예약 대기 상태가 됩니다.</p>
                                    <p>  예약된 광고는 순서에 따라 차례대로 개시 예정일 0시부터 기재됩니다. </p>
                                </div>
                            </div>
                        </div>
                        <div className="ad-select-warning-popup-body-boxs-icons">
                            <div className="popup-body-boxs-icons-title">
                                <h3>광고 기재 불가한 이미지</h3>
                                <p>허용되지 않는 광고는 임의로 심사에서 탈락 있습니다.</p>
                            </div>
                            <div className="popup-body-boxs-icons-text">
                                <div className="popup-body-icons-box">
                                    <img src="src/assets/img/AdSelectBanner/AdSelectPageViewIcons1.png" alt="" />
                                    <p>사행성 강한 광고</p>
                                </div>
                                <div className="popup-body-icons-box">
                                    <img src="src/assets/img/AdSelectBanner/AdSelectPageViewIcons2.png" alt="" />
                                    <p>비방성 문구가 들어간 광고</p>
                                </div>
                                <div className="popup-body-icons-box">
                                    <img src="src/assets/img/AdSelectBanner/AdSelectPageViewIcons3.png" alt="" />
                                    <p>불필요한 노출이 심한 광고</p>
                                </div>
                                <div className="popup-body-icons-box">
                                    <img src="src/assets/img/AdSelectBanner/AdSelectPageViewIcons4.png" alt="" />
                                    <p>정치성이 강한 광고</p>
                                </div>
                            </div>
                            <div className="popup-body-boxs-icons-button">
                              <Button onClick={()=> this.autoClose()}>광고 올리기</Button>

                            </div>
                        </div>
                    </div>
                </div>
            </div> 

            </DialogContent>

      </Dialog>
     
          
        )
    }

}

export default withRouter(AdSelectWarningModal);