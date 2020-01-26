import React, { Component } from 'react';
import BlogDetailLogo from "./../../assets/img/blog-detail-logo.jpg";
import Mainlogo from "../../components/MainLogoComponent/MainLogo.jsx";
import BlogListLogo from "./../../assets/img/blog-list-logo.jpg";
import { connect } from "react-redux";
import { findIndex } from "lodash";
import { 
        Grid,
        Paper, 
        Container ,
        TextField, 
        Button, 
        Select, 
        InputAdornment, 
        IconButton, 
        MenuItem, 
        InputLabel, 
        FormControl, 
        ListItem,
        Input,
        InputBase,
        FormHelperText,
        Divider,
        Box
        
         } from '@material-ui/core';
import {
        AlternateEmail,
        AttachFile,
        Mood
        } from '@material-ui/icons';

import CircleName from '../../components/UtilityComponent/CircleName.jsx';
class ChattingRoom extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            sendMessage: "",
            loggedinUser: "Sonny",
        chatting:[]
        }
           // { username:"", datetime:"", message: "" }
this.sendChattingMessage= this.sendChattingMessage.bind(this);
this.handleKeyUp = this.handleKeyUp.bind(this);
    }

    sendChattingMessage(){
let message=  { username:this.state.loggedinUser, datetime: new Date(), message: this.state.sendMessage };
let chatting= [...this.state.chatting];
chatting.push(message);
this.setState({chatting, sendMessage:""})

    }
    handleKeyUp(e){
        // 13 - enter 
  if(e.keyCode==13){
    this.sendChattingMessage();
  }
}
    render() {
        const {chatting} = this.state;
      console.log(chatting)
        return (
            <div>
                <Grid container spacing={0}>
                    <Grid item xs={2} >
                        <Paper className="chattingCotainer" style={{background:"#eee", boxShadow:"unset"}}  >xs=6</Paper>
                    </Grid>
                    <Grid item xs={8}>
                    {/* <Container fixed>
                        
                    </Container> */}
                        <Paper className="chattingCotainer">
                     <div className="chattingMsgBox" >
{
            chatting.map((x, i)=> 
                <Grid container spacing={0} style={{marginLeft:'3vh', marginBottom: '3vh'}}>
                <Grid item xs={1}>  <CircleName username={x.username}/>  </Grid>
                <Grid item xs={8} style={{    width: '249vh',
    marginLeft: '-10vh'}}> 
               <Box>
              <div> {x.username} | <span title={x.datetime.toDateString()}>{x.datetime.toLocaleTimeString()}</span></div>
               
                <div>{x.message}</div>
               </Box>
                </Grid>
                </Grid>
                )
}

                       
</div>           


                             <Paper className="chattingBar">
                                <IconButton aria-label="menu">
                                    <AttachFile />
                                </IconButton>
                                <InputBase style={{minWidth: "1050px"}}
                                    placeholder="정글챗"
                                    inputProps={{ 'aria-label': 'search google maps', 'class': 'chattingBottomBar' }}
                                    value={this.state.sendMessage}
                                    onChange={(e)=> this.setState({sendMessage : e.target.value})}
                                    onKeyUp={(e)=> this.handleKeyUp(e)}
                                />
                                <IconButton aria-label="search">
                                    <Mood />
                                </IconButton>
                                <IconButton color="primary" aria-label="directions">
                                    <AlternateEmail/>
                                </IconButton>

                            </Paper>                        
                        </Paper>
                    </Grid>
                    <Grid item xs={2}>
                        <Paper className="chattingCotainer" style={{background:"#eee"}} >xs=3</Paper>
                    </Grid>                    
                </Grid>
          </div>
        )
    }
}
// export default ChattingList;
export default ChattingRoom;