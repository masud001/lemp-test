import React, { Component } from 'react';
import Mainlogo from "../../components/MainLogoComponent/MainLogo.jsx";
import BlogListLogo from "./../../assets/img/blog-list-logo.jpg";
import Footer from "../../components/FooterComponent/Footer.jsx";
import CafeIconsModal from "../../containers/CafePage/Modal/CafeIconsModal.jsx";
import {FormControl, FormLabel,FormControlLabel,
       TextField,Card,CardActions,CardContent,Typography,
       Grid, Button, Radio, RadioGroup,
       FormHelperText, InputLabel, Checkbox, FormGroup } from '@material-ui/core';
import { SportsBasketball,SportsCricket,SportsBaseball } from '@material-ui/icons';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

class CafeJoin extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }

    }


    render() {

        return (
            <>
            <div id="create-cafe-blog-page">
                <Mainlogo logo={BlogListLogo} logoTitleText="Tokyo" logoMainText="CAFE NAME HERE" logoSubText="카페 회원 가입" ></Mainlogo>
                <div className="create-cafe-blog-container">
                    <div className="ad-text">
                        <div className="div-text-1">정글뉴스에 우리카페에 오신 여러분을 환영합니다!</div>
                        <div className="div-text-2">왼쪽의 약관 동의를 체크하신 후 우측의 버튼을 통해서 가입하실 수있습니다.</div>
                    </div>
                    <Grid >
                        <Card  >
                            <CardContent style={{padding:"30px"}}>
                            <FormControl component="fieldset">                               
                                <RadioGroup font-size="smaller" style={{color:"#000"}} aria-label="position" name="position" value={this.state.contractType} onChange={this.hanleContractType} row>       
                                <FormLabel component="legend" style={{color:"#000"}} >1. 카페에 가입하시겠습니까?</FormLabel>
                                    <FormControlLabel
                                    value="yes"
                                    control={<Radio color="primary"/>}
                                    label="네"
                                    labelPlacement="all"
                                    />
                                    <FormControlLabel
                                    value="no"
                                    control={<Radio  />}
                                    label="아니요"
                                    labelPlacement="self"
                                    />       
                                </RadioGroup>
                                </FormControl>
                                <br></br>
                                <br></br>
                                <FormControl component="fieldset"> 
                                <FormLabel component="legend" style={{color:"#000"}} >2. 카페에 가입하시겠습니까?</FormLabel>            
                                    <TextField
                                            id="standard-uncontrolled"
                                            label="가입 이유"
                                            margin="small"
                                            font-size="12px"
                                        />
                                </FormControl>    
                            </CardContent>
                            <CardActions>
                                 <Button variant="contained" size="medium" className="btn-blue mat-input-aftert-btn px-5 mb-2 mt-1 float-center ">카페 회원 가입</Button>
                            </CardActions>
                            </Card>
                        </Grid>


                    </div>
                </div>
                <Footer></Footer>
            </>
        )
    }
}
export default CafeJoin;