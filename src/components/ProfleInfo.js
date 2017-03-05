import React, { Component } from 'react';

class TaxisInfo extends Component {
    state = {
        taxis: 4
    }
    render() {
        return (
            <div style={{display:'flex', backgroundColor:'white', flex:1}}>
                <section style={{padding:'10px', flex:1}}>
                    Motion:
                </section>
                <section style={{flex:2, padding:'10px'}}>
                    <div style={{padding:'5px', display:'flex', justifyContent:'space-between'}}>
                        <span>Speed Avg </span>
                        <span> 80 KM </span>
                    </div>
                    <div style={{padding:'5px', display:'flex', justifyContent:'space-between'}}>
                        <span>Speed MAX </span>
                        <span> 125 KM </span>
                    </div>
                    <div style={{padding:'5px', display:'flex', justifyContent:'space-between'}}>
                        <span>Distance </span>
                        <span> 120 KM </span>
                    </div>
                    <div style={{padding:'5px', display:'flex', justifyContent:'space-between'}}>
                        <span>Current Location </span>
                        <span> Woodstock  Plain Street 124</span>
                    </div>
                    <div style={{padding:'5px', display:'flex', justifyContent:'space-between'}}>
                        <span>Round Trips </span>
                        <span> 4</span>
                    </div>
                </section>
                
            </div>
        );
    }
}

export default TaxisInfo;