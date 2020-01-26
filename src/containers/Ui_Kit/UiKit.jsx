import React, { Component } from 'react';

class UiKit extends Component {
    render() {
        return (
            <div id="ui-lit-page">
                <div className="container">
                    <div className="mian-ui">
                        <div className="main-content">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="ui-title-div">
                                        <div className="ui-title-data">
                                            <span className="ui-title-left-data">정글뉴스 Tokyo UI Kit </span>
                                            <span className="ui-title-right-data">V  1.2 </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="ui-color-div">
                                        <div className="ui-color-div-title">Colours</div>
                                        <div className="ui-main-color-div">
                                            <div className="title-text">Main</div>
                                            <div className="main-color-circle">
                                                <div className="main-color-1"></div>
                                                <div className="main-color-2"></div>
                                            </div>
                                            <div className="color-code">
                                                <span className="color-1">#e15f2c</span>
                                                <span className="color-2">#3889ff</span>
                                            </div>
                                        </div>
                                        <div className="ui-sub-main-color-div">
                                            <div className="title-text">Sub Main</div>
                                            <div className="sub-main-color-circle">
                                                <div className="sub-main-color-1"></div>
                                                <div className="sub-main-color-2"></div>
                                            </div>
                                            <div className="color-code">
                                                <span className="color-1"> #2eeb24</span>
                                                <span className="color-2">#2eeb24</span>
                                            </div>
                                        </div>
                                        <div className="ui-color-pending-decline-div">
                                            <div className="title-text">Pending & decline</div>
                                            <div className="pending-decline-color-circle">
                                                <div className="pending-decline-color-1"></div>
                                                <div className="pending-decline-color-2"></div>
                                            </div>
                                            <div className="color-code">
                                                <span className="color-1">#ff0040</span>
                                                <span className="color-2">#ff4463</span>
                                            </div>
                                        </div>
                                        {/* background color */}
                                        <div className="ui-background-color-div">
                                            <div className="title-text">Backgrounds / Defaults: #fffffff</div>
                                            <div className="background-color-circle">
                                                <div className="background-color-1"></div>
                                                <div className="background-color-2"></div>
                                                <div className="background-color-3"></div>
                                                <div className="background-color-4"></div>
                                                <div className="background-color-5"></div>
                                            </div>
                                            <div className="color-code">
                                                <span className="color">#e15f2c</span>
                                                <span className="color">#3889ff</span>
                                                <span className="color">#e15f2c</span>
                                                <span className="color">#3889ff</span>
                                                <span className="color">#e15f2c</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="ui-typeface-div">
                                        <div className="ui-typeface-div-title">Typefaces</div>
                                        <div className="typeface-tag-div">
                                            <div className="tag-h1">H1</div>
                                            <div className="tag">H2</div>
                                            <div className="tag">H3</div>
                                            <div className="tag">H4</div>
                                        </div>
                                        <div className="typeface-style-div"></div>
                                        <div className="typeface-value-div"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default UiKit;