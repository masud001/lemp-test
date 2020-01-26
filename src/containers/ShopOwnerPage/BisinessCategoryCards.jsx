import React, { Component } from 'react';


class BusinessCategoryCards extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
        const {cardDetails} = this.props;
        return ( 
            <>
<div className="pagination-main">
                      <div className="container-main">
                          <div className="pagination-grid d-flex">
{
    cardDetails.map(x=>
        <div className="pagination-box mar-r-27">
                    <div className="pagination-upper-box">
                        <span className="pagination-head">{x.companyName}</span>
                            <span className="pagination-green-box">{x.businessType}</span>
                             <span className="pagination-heart-icon"><i className="fa fa-map-marker" data-toggle="modal" data-target="#exampleModal"></i></span>
                          </div>
                    <div className="pagination-lower-box">
                            <span className="pagination-title">{x.address}</span>
                            <span className="pagination-contact-no">{x.telephone}</span>
                    </div>
                </div>
        
        )
}
               
                </div>
                </div>
                </div>
            </>
         );
    }
}
 
export default BusinessCategoryCards;