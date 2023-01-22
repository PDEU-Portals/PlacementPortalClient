import React from "react";
import Footer from "../Footer";
import Header from "../Header/Header";
import './PlacementStats.css';
import Google_img from './Google_img.png';
import Reliance_img from './Reliance_img.png';
import Nvidia_img from './Nvidia_img.png';
import intel_img from './intel_img.png';
import Goldman_sachs_img from './Goldman_sachs_img.png';
import Microsoft_img from './Microsoft_img.png';
import IBM_img from './IBM_img.png';

import { ResponsiveContainer,Tooltip,CartesianGrid,XAxis,YAxis
    ,Legend, LineChart, Line } from 'recharts';

    const placementData = [
        {
            Year: "2016",
            avg : 4,
            highest : 15
        },
        {
            Year: "2017",
            avg : 6,
            highest : 16
        },
        {
            Year: "2018",
            avg : 20,
            highest : 8
        },
        {
            Year : "2019",
            avg : 12,
            highest : 19
        },
        {
            Year: "2020",
            avg : 10,
            highest : 25
        },
    ]

    const yearData = [
        {
            Branch: "CSE",
            avg : 4,
            highest : 15
        },
        {
            Branch: "ICT",
            avg : 6,
            highest : 10
        },
        {
            Branch: "EC",
            avg : 18,
            highest : 8
        },
        {
            Branch : "Chemical",
            avg : 14,
            highest : 17
        },
        {
            Branch: "Electrical",
            avg : 7,
            highest : 10
        },
    ]

    const yearData2 = [
        {
            Branch: "CSE",
            avg : 15,
            highest : 20
        },
        {
            Branch: "ICT",
            avg : 12,
            highest : 18
        },
        {
            Branch: "EC",
            avg : 8,
            highest : 14
        },
        {
            Branch : "Chemical",
            avg : 15,
            highest : 12
        },
        {
            Branch: "Electrical",
            avg : 16,
            highest : 15
        },
    ]

const Placement_stats = () => {
    return ( 
        <>
            <Header />
                <div className="Heading">
                    <p>
                        Placement statistic 2022
                    </p>
                </div>
                <div className="general-info">
                    <div className="info-container">
                        <div className="info">
                            <p className="info-heading">
                                Highest Package
                            </p>
                            <p className="info-details">
                                57.5 Lakh
                            </p>
                        </div>

                        <div className="info">
                            <p className="info-heading">
                                Total Placed
                            </p>
                            <p className="info-details">
                                700 + 
                            </p>
                        </div>

                        <div className="info">
                            <p className="info-heading">
                                Average Package
                            </p>
                            <p className="info-details">
                                15 LPA+ 
                            </p>
                        </div>
                    </div>
                </div>
                <div className="graph-section">
                    
                        <div className="div-color">
                            <h3>Branches</h3>
                            <p>
                                <button className="orange-button" >Computer Science</button>
                            </p>
                            <p>
                                <button className="blue-button" >ICT</button>
                            </p>
                            <p>
                                <button className="orange-button" >Mechanical Engineering</button>
                            </p>
                            <p>
                                <button className="blue-button" >Elecrical Engineering</button>
                            </p>
                            <p>
                                <button className="orange-button" >EC Engineering</button>
                            </p>  
                            <p>
                                <button className="blue-button" >Chemical Engineering</button>
                            </p>  
                                
                        </div>
                    
                    <ResponsiveContainer width="70%" height="50%" aspect={3}>
                        <LineChart data={placementData} width = {500} height = {800} margin={{top:15 , right: 30
                        }}>
                            <CartesianGrid strokeDasharray={5} vertical={false} />
                            <XAxis dataKey="Year"
                            />
                                <Line  dataKey="avg" stroke="green" 
                                />
                                <Line dataKey="highest" stroke="cyan"/>
                            <YAxis />
                            <Tooltip contentStyle={{ backgroundColor:'#f1f1f1'}} />
                            <Legend />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
                <div className="top-recruiter">
                    <p>
                        Top Reruiters
                    </p>
                    <div className="images-1">
                        <img src={Google_img} alt="" />
                        <img src={Reliance_img} alt="" />
                        <img src={Nvidia_img} alt="" />
                        <img src={intel_img} alt="" />
                    </div>
                    <div className="images-2">
                        <img src={Goldman_sachs_img} alt="" />
                        <img src={Microsoft_img} alt="" />
                        <img src={IBM_img} alt="" />
                    </div>
                </div>
                <p className="analytics-heading">
                        yearly Placement Analytics
                    </p>
                <div className="yearly-graphs">
                <ResponsiveContainer width="45%" height="50%" aspect={3}>
                        <LineChart data={yearData2} width = {500} height = {800} margin={{top:15 , right: 30
                        }}>
                            <CartesianGrid strokeDasharray={5} vertical={false} />
                            <XAxis dataKey="Branch"
                            />
                                <Line  dataKey="avg" stroke="orange" 
                                />
                                <Line dataKey="highest" stroke="blue"/>
                            <YAxis />
                            <Tooltip contentStyle={{ backgroundColor:'#f1f1f1'}} />
                            <Legend />
                        </LineChart>
                    </ResponsiveContainer>
                    <ResponsiveContainer width="45%" height="50%" aspect={3}>
                        <LineChart data={yearData} width = {500} height = {800} margin={{top:15 , right: 30
                        }}>
                            <CartesianGrid strokeDasharray={5} vertical={false} />
                            <XAxis dataKey="Branch"
                            />
                                <Line  dataKey="avg" stroke="grey" 
                                />
                                <Line dataKey="highest" stroke="purple"/>
                            <YAxis />
                            <Tooltip contentStyle={{ backgroundColor:'#f1f1f1'}} />
                            <Legend />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            <Footer />
        </>
     );
}
 
export default Placement_stats;