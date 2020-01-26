import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from "./components/HeaderComponent/Header.jsx";

//imports routes
import AdSelect from "./containers/AdPage/AdSelect.jsx";
import AdInsert from "./containers/AdPage/AdInsert.jsx";

import LestestAdSelect from "./containers/AdPage/LetestAdSection.jsx";

import BlogDetail from "./containers/BlogPage/BlogDetail.jsx";
import BlogWriting from "./containers/BlogPage/BlogWriting.jsx";
import BlogList from "./containers/BlogPage/BlogList.jsx";
import CreateCafeBlog from "./containers/BlogPage/CreateCafeBlog.jsx";
import LocalInfoQanA from "./containers/BlogPage/LocalInfoQnA.jsx";
import NewsNNotice from "./containers/BlogPage/NewsNNotice.jsx";

import CafeList from "./containers/CafePage/CafeList.jsx";
import CafeManagement from "./containers/CafePage/CafeManagement.jsx";
import CreationCafe from "./containers/CafePage/CreationCafe.jsx";
import CafeHome from "./containers/CafePage/CafeHome.jsx";
import CafeJoin from "./containers/CafePage/CafeJoin.jsx";

import CreditCardPayment from "./containers/Credit_Card_Payment/CreditCardPayment.jsx";

import CustomerHome from "./containers/Customer_Home/CustomerHome.jsx";
import ShopOwnerList from "./containers/ShopOwnerPage/ShopOwnerList.jsx";
import CustomerRegister from "./containers/CustomerRegisterPage/CustomerRegister.jsx";

import ChattingList from "./containers/ChattingPage/ChattingList.jsx";
import ChattingRoom from "./containers/ChattingPage/ChattingRoom.jsx";

import JoinV1Clean from "./containers/JoinPage/Join.jsx";
import LoginV1Clean from "./containers/LoginPage/LoginV1Clean.jsx";

import Main from "./containers/MainPage/Main.jsx";
import RegisteredPointShops from "./containers/RegisteredPointShops/RegisteredPointShops.jsx";
// import UiKit from "./containers/Ui_Kit/UiKit.jsx";
// import BlogYoutube  from "./containers/Blog/BlogYoutube.jsx";
// import BlogYoutubeDetail from "./containers/Blog/BlogYoutubeDetail.jsx";

import Temp from "./containers/Temp/Temp.jsx";
import ContactUs from "./containers/StaticPages/ContactUs.jsx";
import MyAccount from "./containers/MyAccountPage/MyAccount.jsx";

import { createBrowserHistory } from "history";
import "./assets/css/main.css";

import "./assets/css/style.css";
import "./assets/js/scripts";
import $ from "jquery";
window.jQuery = $;
window.$ = $;

const customHistory = createBrowserHistory();
class App extends Component {
  render() {
    return (
      <Router history={customHistory}>
        <Header></Header>
        <div className="main pad-l-r-25">
          <Route exact path="/" component={Main} />

          <Route path="/ad-select" component={AdSelect} />
          <Route path="/letest-ad-select" component={LestestAdSelect} />
          <Route path="/ad-insert" component={AdInsert}/>

          <Route path="/blogList" component={BlogList} />
          <Route path="/blog-detail" component={BlogDetail} />
          <Route path="/blog-writing" component={BlogWriting} />
          <Route path="/newsnnotice" component={NewsNNotice} />
          {/* <Route path ="/blog-youtube" component={BlogYoutube} /> */}
          {/* <Route path ="/blog-youtube-detail" component={BlogYoutubeDetail} /> */}
          <Route path="/cafe-home" component={CafeHome} />
          <Route path="/cafe-join" component={CafeJoin} />
          <Route path="/cafe-list" component={CafeList} />
          <Route path="/createCafeBlog" component={CreateCafeBlog} />
          <Route path="/creation-cafe" component={CreationCafe} />
          <Route path="/cafe-management" component={CafeManagement} />

          <Route path="/chatting-List" component={ChattingList} />
          <Route path="/chatting-room" component={ChattingRoom} />

          <Route path="/credit-card-payment" component={CreditCardPayment} />

          <Route path="/customer-home" component={CustomerHome} />
          <Route path="/shopownerlist" component={ShopOwnerList} />
          <Route path="/customer-register" component={CustomerRegister} />

          {/* <Route path="/join-v1-commercial" component={JoinV1Commercial} /> */}
          <Route path="/login-v1-clean" component={LoginV1Clean} />
          <Route path="/main" component={Main} />
          <Route path="/registered-pointshops" component={RegisteredPointShops} />
          {/* <Route path="/ui-kit" component={UiKit} /> */}

          <Route path="/localinfoqna" component={LocalInfoQanA} />
          <Route path="/join-v1-clean" component={JoinV1Clean} />
          <Route path="/Temp" component={Temp} />

          <Route path="/contactUs" component={ContactUs} />
          <Route path="/MyAccount" component={MyAccount} />
        </div>
      </Router>
    );
  }
}
export default App;
