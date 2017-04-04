import React, { Component } from 'react';

import TaxisInfo from '../components/TaxisInfo';
import SubHeader from '../components/SubHeader';
import HomeChart from '../components/HomeChart';
import Map from '../components/Map';
import DriversSideBar from '../components/DriversSide';
class HomePage extends Component {
    render() {
        return (
            <section style={{height:'100%'}}>
                <SubHeader />
                <div style={{backgroundColor:'gray', display:'flex', flexDirection:'column', padding:'10px', height:'100%'}}>
                    <div style={{display:'flex', flex:2}}>
                        <section style={{backgroundColor:'white', display:'flex', flex:3, margin:'10px', flexDirection:'column'}}>
                            <Map />
                            <TaxisInfo />
                        </section>
                        <DriversSideBar />
                    </div>
                    <HomeChart />
                
                </div>
            </section>

        );
    }
}

export default HomePage;