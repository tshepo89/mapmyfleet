import React, { Component } from 'react';

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
                        <header>Drivers</header>
                        <div style={{overflow:'auto'}}>
                            <section>
                                PIC  name
                            </section>
                            <section style={{display:'flex'}}>
                                <span>PIC</span>  
                                <span>Tshepo</span>  
                            </section>
                            <section>
                                PIC  name
                            </section>
                            <section>
                                PIC  name
                            </section>
                        </div>
                    </section>
                    <section style={{display:'flex', justifyContent:'space-between'}}>
                        <div style={{display:'flex', alignItems:'center', flexDirection:'column', justifyContent:'center'}}>
                            <span>Drivers Live</span>
                            <span style={{
                                padding:'20px',
                                fontSize: '40px',
                                color:'white',
                                backgroundColor:'green', borderRadius:80}}>3</span>
                        </div>
                        <div style={{
                            display:'flex', 
                            alignItems:'center', 
                            flexDirection:'column', 
                            justifyContent:'center'}}>
                            <span>Drivers Offline</span>
                            <span style={{
                                padding:'20px',
                                fontSize: '40px',
                                color:'white',
                                backgroundColor:'red', borderRadius:80}}>4</span>
                        </div>
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