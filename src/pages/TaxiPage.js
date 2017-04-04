import React, { Component } from 'react';

import TaxisInfo from '../components/ProfleInfo';
import SubHeader from '../components/SubHeader';
import HomeChart from '../components/HomeChart';
import Map from '../components/Map2';
import DriversSideBar from '../components/ProfileSide';
class HomePage extends Component {
    render() {
        return (
            <section style={{height:'100%'}}>
                <div style={{backgroundColor:'gray', display:'flex', flexDirection:'column', padding:'10px', height:'100%'}}>
                    <div style={{display:'flex', flex:2}}>
                        <section style={{backgroundColor:'white', display:'flex', flex:3, margin:'10px', flexDirection:'column'}}>
                            <Map />
                            <TaxisInfo />
                        </section>
                        <DriversSideBar />
                    </div>
                </div>
            </section>

        );
    }
}

export default HomePage;