import React, { Component } from 'react';
import Mainlogo from "../../components/MainLogoComponent/MainLogo.jsx";
import BlogListLogo from "./../../assets/img/blog-list-logo.jpg";
import Footer from "../../components/FooterComponent/Footer.jsx";
import CafeIconsModal from "../../containers/CafePage/Modal/CafeIconsModal.jsx";
import { TextField,Card,CardActions,CardContent,Typography,Grid, Button, Select, MenuItem, FormControl, InputLabel, Checkbox, FormControlLabel, FormGroup } from '@material-ui/core';
import { SportsBasketball,SportsCricket,SportsBaseball } from '@material-ui/icons';

class CafeHome extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }

    }


    render() {

        return (
            <>
            <div id="create-cafe-blog-page">
                <Mainlogo logo={BlogListLogo} logoTitleText="Tokyo" logoMainText="CAFE NAME HERE" logoSubText="홈" ></Mainlogo>
                <div className="create-cafe-blog-container">
                    <div className="ad-text">
                        <div className="div-text-1">정글뉴스에 오신 여러분을 환영합니다!</div>
                        <div className="div-text-2">왼쪽의 약관 동의를 체크하신 후 우측의 버튼을 통해서 가입하실 수있습니다.</div>
                    </div>
                    <Grid container  spacing={3}>
                      <Grid  xs={4}>
                      <Card style={{width:"15rem", height:"15rem" }}>
                        <CardContent>
                            <Typography variant="h5" component="h2">
                               1st Blog Category
                            </Typography>
                            <Typography  color="textSecondary" style={{fontSize:"0.8rem"}}>
                             엄마들이 모이는 카페입니다.
                            </Typography>
                            <br>                            
                            </br>
                            <SportsBaseball className="cafehome-icon"></SportsBaseball>
                        </CardContent>
                        <CardActions>
                            <Button size="small"style={{color:"#4824a7"}} >바로가기</Button>
                        </CardActions>
                        </Card>
                     </Grid>
                     <Grid  xs={4}>
                        <Card style={{marginLeft:"1rem", width:"15rem", height:"15rem" }}>
                        <CardContent>
                            <Typography variant="h5" component="h2">
                               2nd Blog Category
                            </Typography>
                            <Typography  color="textSecondary"style={{fontSize:"0.8rem"}}>
                             엄마들이 모이는 카페입니다.
                            </Typography>
                            <br>                            
                            </br>
                            <SportsBaseball className="cafehome-icon"></SportsBaseball>
                        </CardContent>
                        <CardActions>
                            <Button size="small"style={{color:"#4824a7"}} >바로가기</Button>
                        </CardActions>
                        </Card>
                     </Grid>
                     <Grid  xs={4}>
                     <Card style={{marginLeft:"2rem", width:"15rem", height:"15rem" }}>
                        <CardContent>
                            <Typography variant="h5" component="h2">
                               3rd Blog Category
                            </Typography>
                            <Typography  color="textSecondary" style={{fontSize:"0.8rem"}}>
                             아빠들이 모이는 카페입니다.
                            </Typography>
                            <br>                            
                            </br>
                            <SportsBaseball className="cafehome-icon"></SportsBaseball>
                        </CardContent>
                        <CardActions>
                            <Button size="small"style={{color:"#4824a7"}} >바로가기</Button>
                        </CardActions>
                        </Card>
                     </Grid>
                     <Button variant="contained" size="medium" className="btn-blue mat-input-aftert-btn px-5 mt-4 float-center ">참여하기</Button>
                    </Grid>   

                    </div>
                </div>
 
                <Footer></Footer>
            </>
        )
    }
}
export default CafeHome;