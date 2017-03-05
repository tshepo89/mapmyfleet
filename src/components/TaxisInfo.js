import React, { Component } from 'react';

class TaxisInfo extends Component {
    state = {
        taxis: 4
    }
    render() {
        return (
            <div style={{display:'flex', backgroundColor:'white', flex:1}}>
                <section style={{padding:'10px', flex:1}}>
                    Totals:
                </section>
                <section style={{flex:2, padding:'10px'}}>
                    <div style={{padding:'5px', display:'flex', justifyContent:'space-between'}}>
                        <span>Taxis </span>
                        <span> {this.state.taxis} </span>
                    </div>
                    <div style={{padding:'5px', display:'flex', justifyContent:'space-between'}}>
                        <span>In Operation </span>
                        <span> 3 </span>
                    </div>
                    <div style={{padding:'5px', display:'flex', justifyContent:'space-between'}}>
                        <span>Distance </span>
                        <span> 120 KM </span>
                    </div>
                </section>
                
            </div>
        );
    }
}

export default TaxisInfo;