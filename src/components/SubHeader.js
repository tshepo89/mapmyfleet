import React, { Component } from 'react';
import { Link } from 'react-router';

class SubHeader extends Component {
    render() {
        return (
            <div style={{display:'flex', padding:'5px', backgroundColor:'black', color:'white'}}>
                    <Link style={{backgroundColor:'#00b1ff', textDecoration:'none',color:'white', padding:'10px 20px 10px 20px'}} to={'/taxi/1'}>taxi 1</Link>
                    <Link style={{padding:'10px 20px 10px 20px', textDecoration:'none', color:'white'}} to={'/taxi/2'}>taxi 2</Link>
                    <Link style={{padding:'10px 20px 10px 20px', textDecoration:'none', color:'white'}} to={'/taxi/3'}>taxi 3</Link>
            </div>
        );
    }
}

export default SubHeader;