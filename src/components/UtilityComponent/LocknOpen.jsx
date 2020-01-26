import React, { Component } from 'react';
import {Lock, LockOpen} from '@material-ui/icons';


class LocknOpen extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            currentLockStatus: "open",
            lockStatusName: "",
            lockStatusIcons: [
                {lock: <Lock/>},
                {open: <LockOpen/>}
            ],
         }
    }

    renderLocknOpenName()
      
       {
        if(currentLockStatus== "open") {
            return this.props.lockStatusName="공개";
        } else {
            return this.props.lockStatusName="비공개";
        }

    }

    renderLocknOpenIcons() {
        if(currentLockStatus== "open") {
            return this.props.lockStatusIcons=<Lock/>;
        } else {
            return this.props.lockStatusName=<LockOpen/>;
        }
    }

    render() { 
        return ( 
           <div><span>{this.renderLocknOpenName()}</span>{this.renderLocknOpenName()}</div> 
         );
    }
}
 
export default LocknOpen;