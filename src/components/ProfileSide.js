import React, { Component } from 'react';
import logo from '../../images/user-male-icon.png';
import Chart from './HomeChart';
class DriverSideBar extends Component {
    render() {
        return (
            <section style={{
                backgroundColor:'black', 
                display:'flex',
                padding: '10px', 
                flexDirection: 'column',
                flex:1, 
                margin:'10px'
                }}>
                <div style={{flex:1, display:'flex', flexDirection:'column', padding:'10px', borderRadius:10, backgroundColor:'white'}}>
                    <section style={{flex:1}}>
                        <header style={{display:'flex', justifyContent:'space-between'}}>
                            <span>Drivers</span>
                            <input placeholder="search" />
                        </header>
                        <Chart />
                    </section>
       
                </div>
                <div style={{display:'flex', justifyContent:'space-between', backgroundColor:'#212121', color:'white', padding:'10px', margin:'10px'}}>
                    <span>Total Kilometers travelled</span>
                    <span>302 KM</span>
                </div>
            </section>
        );
    }
}

export default DriverSideBar;