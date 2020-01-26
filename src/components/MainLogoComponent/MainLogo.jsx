import React, { Component } from 'react';
class Mainlogo extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        
        let { logo, logoTitleText, logoMainText, logoSubText } = this.props;
        return (
            <div className="page-title-logo">
                {/* <div className="animation-div">
                    <div className="animation-middle">
                        <div class="pyro">
                            <div class="before"></div>
                            <div class="after"></div>
                        </div>
                    </div>
                </div> */}

                <img src={logo ? logo : "src\assets\img\firework.jpg"}></img>
                <div className="fire-text">
                    <span className="fire-text-1"> {( logoTitleText || logoTitleText === "") ? logoTitleText : "Tokyo"}</span>
                    <span className="fire-text-2"> {(logoMainText || logoMainText === "" ) ? logoMainText : "정글뉴스"}</span>
                    <span className="fire-text-3"> {( logoSubText  || logoSubText === "") ? logoSubText : "광고안내"}</span>
                </div>
            </div>
        )
    }
}
export default Mainlogo;