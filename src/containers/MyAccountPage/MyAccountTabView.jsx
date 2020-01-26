import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import MyAccountTable from "./MyAccountTable.jsx";
import MyAccountMyCafeTable from "./MyAccountMyCafeTable.jsx";
import MyAccountMyShopTable from "./MyAccountMyShopTable.jsx";
import MyAccountMyAdTable from "./MyAccountMyAdTable.jsx";
import { findIndex } from "lodash";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            <Box p={3}>{children}</Box>
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}




export default class MyAccountTabView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tableKey: 0,
            myAccountDataList: 
            [
                {
                    tableKey: 0,  data:
                    [
                        { sequence: 9,  section: '정글장터', category: '삽니다', title: '영등포 구청앞 2룸',date: '2019 Sep 21', view: '23' },
                        { sequence: 8,  section: '부동산', category: '방구해요', title: '영등포 구청앞 2룸', date: '2019 Oct 21',  view: '23' },
                        { sequence: 7,  section: '맘카페', category: '아기들 블로그', title: '기저귀 가는법', date: '2019 Dec 21',view: '23' }
                    ],
                },
                {
                    tableKey: 1,  data:
                    [
                        { sequence: 9,  cafeName: '중고카페', position: '일반회원', date: '2019 Sep 21', members:'25', management: '' },
                        { sequence: 8,  cafeName: '골프카페', position: '카페주인', date: '2019 Oct 21', members:'25', management: '' },
                        { sequence: 7,  cafeName: '맘카페', position: '카페매니저', date: '2019 Dec 21', members:'25', management: '' }
                    ],
                },
               {
                    tableKey: 2,  data:
                    [
                        { sequence: 9,  businessCategory: '식당', shopName: '김치맛집', telephone: '03-2589-2544',openingHours:'', holiday:'', pointCard: '글로벌 | 숍카드' },
                        { sequence: 8,  businessCategory: '컨설팅', shopName: '비자 컨설팅', telephone: '03-2589-2544',openingHours:'', holiday:'',pointCard: '숍카드' },
                        { sequence: 7,  businessCategory: '노래방', shopName: '잘해 노래방', telephone: '03-2589-2544',openingHours:'', holiday:'',pointCard: '해당없음' }
                    ],
               },
               {
                    tableKey: 3,  data:
                    [
                        { sequence: 9,  locationId: 'MC001', image: 'http://media1.santabanta.com/full5/Nature/Aquatic/aquatic-175a.jpg', dateOfStart: '2019 Sep 21',dateOfEnd: '2019 Sep 21', view: '23' },
                        { sequence: 8,  locationId: 'MP003', image: 'http://media1.santabanta.com/full5/Nature/Aquatic/aquatic-175a.jpg', dateOfStart: '2019 Sep 21', dateOfEnd: '2019 Oct 21',  view: '23' },
                        { sequence: 7,  locationId: 'MC005', image: 'http://media1.santabanta.com/full5/Nature/Aquatic/aquatic-175a.jpg', dateOfStart: '2019 Sep 21', dateOfEnd: '2019 Dec 21',view: '23' }
                    ]
               }
                
            ]
        };
        this.handleChange = this.handleChange.bind(this);
    }


    handleChange(event, newValue) {
            this.setState({              
                tableKey:newValue
            })
    }


    renderTableValue() {
        const tableKey = this.state.tableKey;
        const index = findIndex(this.state.myAccountDataList, function (o) { return o.tableKey == tableKey });
        return this.state.myAccountDataList[index].data;
      };

    handleTab(event, value) {
        this.setState({ tableKey: value })
    };  

    render() {
        let { tableKey } = this.state;

        return (

            <div id="my-account-tab-view">
                <AppBar position="static" color="default">
                    <Tabs
                        value={tableKey}
                        onChange={this.handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        variant="fullWidth"
                        aria-label="full width tabs example"
                    >
                        <Tab label="내 포스트" {...a11yProps(0)} />
                        <Tab label="내 카페" {...a11yProps(1)} />
                        <Tab label="내 매장" {...a11yProps(2)} />
                        <Tab label="내 광고" {...a11yProps(3)} />
                    </Tabs>
                </AppBar>
                <SwipeableViews
                    axis='x'
                    index={tableKey}
                >
                    <TabPanel value={tableKey} index={0} >
                        <MyAccountTable  tableRow={this.renderTableValue()}/>
                    </TabPanel>
                    <TabPanel value={tableKey} index={1} >
                        <MyAccountMyCafeTable  tableRow={this.renderTableValue()} />
                    </TabPanel>
                    <TabPanel value={tableKey} index={2} >
                        <MyAccountMyShopTable  tableRow={this.renderTableValue()}/>
                    </TabPanel>
                    <TabPanel value={tableKey} index={3} >
                        <MyAccountMyAdTable  tableRow={this.renderTableValue()} />
                    </TabPanel>
                </SwipeableViews>
            </div>
        );
    }
}