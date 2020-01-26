import React, { Component } from 'react';
import { createMuiTheme, Button, Dialog, DialogActions, 
    DialogContent, DialogContentText, DialogTitle, TextField } from '@material-ui/core';
import { SportsBasketball,SportsCricket,SportsBaseball } from '@material-ui/icons';

class CafeIconsModal extends Component {
    constructor(props) 
    {
        super(props);
        this.state = {
           
        };

    }

    
    render() {   
        const {isCafeModalOpen, onCafeModalClose, onSelectedIcons}= this.props;
        return (
            <>
              <Dialog 
              open={isCafeModalOpen}
              maxWidth={"lg"}
              onClose={()=>onCafeModalClose()}
              aria-labelledby="form-dialog-title">
                  <DialogContent style={{cursor:"pointer"}}>
                    <SportsBaseball onClick={() => onSelectedIcons("SportsBaseball")}></SportsBaseball>
                    <SportsBasketball onClick={() => onSelectedIcons("SportsBasketball")}></SportsBasketball>
                    <SportsCricket onClick={() => onSelectedIcons("SportsCricket")}></SportsCricket>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={()=>onCafeModalClose()} color="primary">
                      Close
                    </Button>        
                  </DialogActions>
                </Dialog>
            </>
        )}
}


export default CafeIconsModal;