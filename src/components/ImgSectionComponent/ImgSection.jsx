import React, { Component } from 'react';

class ImgSection extends Component {
    constructor(props) {
        super(props);
        const baseUrl =window.location.href;
        this.state = {
            sliderIMage: [
                {pathName:`${baseUrl}src/assets/img/sec-img-1.jpg`},
                {pathName:`${baseUrl}src/assets/img/sec-img-2.jpg`},
                {pathName:`${baseUrl}src/assets/img/sec-img-3.jpg`},
                {pathName:`${baseUrl}src/assets/img/sec-img-4.jpg`},
                {pathName:`${baseUrl}src/assets/img/sec-img-5.jpg`},
                {pathName:`${baseUrl}src/assets/img/sec-img-6.jpg`},
                {pathName:`${baseUrl}src/assets/img/sec-img-7.jpg`},
                {pathName:`${baseUrl}src/assets/img/sec-img-8.jpg`}
            ]
        }
    }
    
    render() {
        return (
            <div id="img-section-comp">
                <div className="img-section">
                        <div id="carousel" className="slider">
                        {
                            this.state.sliderIMage.map((x, index)=>
                                <div className="slider-item" key={index}>
                                    <div className="img-div">
                                        <img src={x.pathName}></img>
                                    </div>
                                </div>
                            )
                        }
                        </div>
                </div>
            </div>

        )
    }
}
export default ImgSection;