import React, { Component } from 'react';
import {range} from 'lodash';




class Pagenation extends Component {
    constructor(props) {
        super(props);
        
    }
    
    renderPage() {
        return range(this.props.pageSize);
    }

    render() { 
        return ( 
            <div className="blog-pagination">
                {
                    this.renderPage().map(x => 
                        <span key = {x}>{x + 1}</span>
                    )
                }
        </div>
         );
    }
}
 
export default Pagenation;