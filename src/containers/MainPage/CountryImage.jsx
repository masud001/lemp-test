import React, { Component } from 'react';
import {findIndex} from "lodash";

class CountryImage extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            Currentlocation : "Singapre",
            Region: [
               {country: "Malaysia", bannerImage: "src/assets/img/Banner/asian-laughing-banner-1.jpg"},     
               {country: "Singapre", bannerImage: "src/assets/img/Banner/asian-laughing-banner-2.jpg"},
               {country: "Indonesia", bannerImage: "src/assets/img/Banner/asian-laughing-banner-3.jpg"}
            ],
         }
    }

     matchingRegion() {

         const {Currentlocation, Region} = this.state;
         const selectedCountry = findIndex(Region, function(o) {
             return o.country == Currentlocation;
         })
         return Region[selectedCountry]; 
     }       


    render() { 
        const banner = this.matchingRegion();
        console.log(banner.bannerImage);
        return (  
            <>
                <div className="carousel-item active">
                    <img src={banner.bannerImage}  alt={banner.country} width="100%" height="100%" />
                </div>
            </>
        );
    }
}
 
export default CountryImage;
