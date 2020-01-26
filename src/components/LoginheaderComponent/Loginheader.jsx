import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter
} from "react-router-dom";
import {
  Badge,
  Avatar,
  IconButton,
  Menu,
  MenuItem,
  Button
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import MailIcon from "@material-ui/icons/Mail";
import { Add, Face } from "@material-ui/icons";

const StyledBadge2 = withStyles(theme => ({
  badge: {
    backgroundColor: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "$ripple 1.2s infinite ease-in-out",
      border: "1px solid #44b700",
      content: '""'
    }
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0
    }
  }
}))(Badge);

class Loginheader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profileMenu: null,
      isLoggedIn: false
    };
    this.handleProfileMenuClick = this.handleProfileMenuClick.bind(this);
    this.handleProfileMenuClose = this.handleProfileMenuClose.bind(this);
    this.handleLoginLogout = this.handleLoginLogout.bind(this);
    this.handleJoin = this.handleJoin.bind(this);
  }

  handleLoginLogout() {
    const { isLoggedIn } = this.state;
    this.setState({ isLoggedIn: !isLoggedIn, profileMenu: null });
    if (!isLoggedIn == false) {
      //logout
      window.location.href = "/";
       // this.props.navHistory.push("/");
    } else {
      this.props.navHistory.push("/login-v1-clean");
    }
  }

  renderClass() {
    return window.location.pathname != "/" ? "headerWhiteLogin" : "afterLogin";
  }

  handleProfileMenuClick(e) {
    this.setState({
      profileMenu: e.currentTarget
    });
  }
  handleProfileMenuClose() {
    this.setState({
      profileMenu: null
    });
  }

  handleJoin() {
    this.props.navHistory.push("/join-v1-clean");
  }

  render() {
    let { profileMenu, isLoggedIn } = this.state;
    return (
      <div className="user-main-info-div">
        {!isLoggedIn && (
          <>
            <div className={this.renderClass()} style={{ marginTop: "0.7rem" }}>
              <span
                style={{ cursor: "pointer" }}
                onClick={this.handleLoginLogout}
              >
                <Face style={{ fontSize: "1rem" }} /> 로그인
              </span>
              <span
                style={{ marginLeft: "1rem", cursor: "pointer" }}
                onClick={this.handleJoin}
              >
                <Add style={{ fontSize: "1rem" }} /> 회원가입
              </span>
              {/* <Link to="/JoinV1Clean" style={{marginLeft: "1rem", cursor: "pointer"}}><Add/>회원가입</Link> */}
            </div>

            {/* <Button variant="contained" onClick={this.handleLoginLogout} size="medium" className="btn-blue mat-input-aftert-btn">Login</Button> */}
            {/* <div className="mini-menu">
                        <ul className="navbar-nav mr-auto menu-setting">
                            <li className="nav-item active" onClick={this.toggleAvatar}>로그인</li>
                            <li className="nav-item active">
                            <Link to="/JoinV1Clean" className="nav-link nav-cust">회원가입</Link>
                            </li>
                        </ul>
                      </div> */}
          </>
        )}
        {isLoggedIn && (
          <>
            <Button
              aria-controls="profileMenu"
              className="user-main-info-drop-div-btn"
              aria-haspopup="true"
              onClick={this.handleProfileMenuClick}
            >
              <div className="user-img-logo">
                <StyledBadge2
                  overlap="circle"
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right"
                  }}
                  variant="dot"
                >
                  <Avatar
                    alt="Stock avatar"
                    src="src\assets\img\user-icon.png"
                  />
                </StyledBadge2>
              </div>
              <div className="welcome-text">Welcome Sonny</div>
            </Button>
            <Menu
              id="profileMenu"
              anchorEl={profileMenu}
              keepMounted
              open={Boolean(profileMenu)}
              onClose={this.handleProfileMenuClose}
            >
              <MenuItem onClick={this.handleProfileMenuClose}>
                <Link to="/MyAccount" className="color-black">
                  My account
                </Link>
              </MenuItem>
              <MenuItem
                onClick={this.handleLoginLogout}
                className="color-black"
              >
                Logout
              </MenuItem>
            </Menu>

            <div className="massage-icon">
              <Badge color="secondary" badgeContent={4} invisible={false}>
                <MailIcon />
              </Badge>
            </div>
          </>
        )}
      </div>
      //     <div className="mt-4 login_btn_wrp">
      //     <ul className="list-inline mb-0">
      //         <li className="list-inline-item loginTest"  onClick={this.toggleAvatar}>로그인</li>
      //         <li className="list-inline-item">
      //             <Link to="/JoinV1Clean" className="text-white"  >회원가입</Link>
      //         </li>
      //         <li>
      //             <div className="avatar_toggle_wrp">
      //                 <div className="avatar_toggle_wrp_inner" style={{display: this.state.showAvatar ? 'flex' : 'none' }}>
      //                     <div className="d-flex align-items-center">
      //                         <figure className="avatar_pic mb-0">
      //                             <img alt="Stock avatar" src="src\assets\img\user-icon.png" />
      //                         </figure>
      //                         <p className="avatar_name ml-3">
      //                             WELCOME SONNY
      //                         </p>
      //                     </div>
      //                     <div className="message_box d-flex align-items-center ml-2">
      //                         <span className="position-relative" >
      //                             <i className="fa fa-envelope" aria-hidden="true"></i>
      //                             <span className="badge badge-danger position-absolute">4</span>
      //                         </span>
      //                     </div>
      //                 </div>
      //             </div>
      //         </li>
      //     </ul>
      // </div>
    );
  }
}

export default Loginheader;
