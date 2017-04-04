import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
        <div className="page-header" style={{backgroundColor:'white'}}>
          
            <div style={{
                    display:'flex', 
                    justifyContent:'space-between', 
                    height:'40px',
                    padding:'20px',
                    backgroundColor:'white',
                    alignItems: 'center'
                }}>
                <div style={{display:'flex', flexDirection:'column', alignContent:'flex-end', flex:1}}>
                <div style={{fontWeight:'bold'}}>MapMyFleet</div>
                <div>Dashboard</div>
                </div>

                
                <div style={{display:'flex', flex:1, justifyContent:'space-between'}}>
                <div>HOME</div>
                <div>DASHBOARD</div>
                <div>DRIVER PROFILE</div>
                </div>
            </div>
          
          </div>
        );
    }
}

export default Header;