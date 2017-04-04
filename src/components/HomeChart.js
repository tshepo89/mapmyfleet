import React, { Component } from 'react';
import { ResponsiveContainer, ComposedChart, Line, Bar, Area, XAxis, YAxis,
  ReferenceLine, ReferenceDot, Tooltip, Legend, CartesianGrid, Brush } from 'recharts';

const data = [
  { name: 'Taxi 1', speed: 50, stops: 23, breaks: 60 },
  { name: 'Taxi 2', speed: 60, stops: 32, breaks: 50 },
  { name: 'Taxi 3', speed: 80, stops: 33, breaks: 66 },
  { name: 'Taxi 4', speed: 100, stops: 21, breaks: 50 },
  { name: 'Taxi 5', speed: 120, stops: 40, breaks: 73 },
  { name: 'Taxi 6', speed: 60, stops: 10, breaks: 45 },
];

export default class HomeChart extends Component {
    render() {
        return (
            <div style={{display:'flex', flex:1}}>
                <section style={{backgroundColor:'white', flex:3, margin:'10px'}}>
                    <div className="line-charts" style={{backgroundColor:'white'}}>
                        <p>Todays Taxi Stats</p>
                        <div className="composed-chart-wrapper">
                        <ResponsiveContainer width="100%" height={300}>
                            <ComposedChart width={800} height={400} data={data}
                            margin={{ top: 20, right: 20, bottom: 5, left: 20 }}>
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend layout="vertical" align="right" verticalAlign="middle"/>
                            <CartesianGrid stroke="#f5f5f5" />
                            <Area type="monotone" dataKey='breaks' fill="#8884d8" stroke="#8884d8" />
                            <Line type="monotone" dataKey="speed" stroke="#ff7300" />
                            <Bar dataKey="stops" barSize={20} fill="#413ea0" />
                            <Brush/>
                            </ComposedChart>
                        </ResponsiveContainer>
                        </div>
                    </div>
                </section>
        
            </div>
        );
    }
}