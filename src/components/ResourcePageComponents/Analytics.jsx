import './Css/Analytics.css'
import StudentHeader from "../Header/StudentHeader";
import Sidebar from './Sidebar.jsx';
import { Pie, PieChart, Sector } from 'recharts';
import React,{ useCallback,useState } from "react";

const datas = [
    { name: "Average", value: 12 },
    { name: "Highest", value: 30 },
];
const placementData = [
    {name: "DSA" ,value: 50},
    {name: "Aptitude" , value : 20},
    {name : "Technical", value : 10},
    {name: "Soft skills", value: 20}
]
const renderActiveShape = (props) => {
    const RADIAN = Math.PI / 180;
    const {
      cx,
      cy,
      midAngle,
      innerRadius,
      outerRadius,
      startAngle,
      endAngle,
      fill,
      payload,
      percent,
      value
    } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? "start" : "end";

    return (
        <g>
          <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
            {payload.name}
          </text>
          <Sector
            cx={cx}
            cy={cy}
            innerRadius={innerRadius}
            outerRadius={outerRadius}
            startAngle={startAngle}
            endAngle={endAngle}
            fill={fill}
          />
          <Sector
            cx={cx}
            cy={cy}
            startAngle={startAngle}
            endAngle={endAngle}
            innerRadius={outerRadius + 6}
            outerRadius={outerRadius + 10}
            fill={fill}
          />
          <path
            d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
            stroke={fill}
            fill="none"
          />
          <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
          <text
            x={ex + (cos >= 0 ? 1 : -1) * 12}
            y={ey}
            textAnchor={textAnchor}
            fill="#333"
          >{`Ratio ${value}`}</text>
          <text
            x={ex + (cos >= 0 ? 1 : -1) * 12}
            y={ey}
            dy={18}
            textAnchor={textAnchor}
            fill="#999"
          >
            {`(Rate ${(percent * 100).toFixed(2)}%)`}
          </text>
        </g>
      );
    }; 

const Analysis = () => {
    const [productInformation, setProductInformatino] = useState()
    const [activeIndex, setActiveIndex] = useState(0);
    const onPieEnter = useCallback(
    (_, index) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
    );
    return ( 
        <>  
            <StudentHeader />
            <div className="main-analysis-container">
                <Sidebar />
                <div className="main-content-container">
                    <h1>Placement analytics</h1>

                    <div className="charts-container">
                        <div className="pdeu-placement-chart">
                        <h1>PDEU Placement analytics</h1>
                        <PieChart width={400} height={400}>
                          <Pie
                            activeIndex={activeIndex}
                            activeShape={renderActiveShape}
                            data={datas}
                            cx={180}
                            cy={120}
                            innerRadius={60}
                            outerRadius={80}
                            fill="rgba(50, 220, 250,0.5)"
                            dataKey="value"
                            onMouseEnter={onPieEnter}
                          />
                    </PieChart>
                        </div>
                        <div className="question-chart">
                            <h1>Analytics about topics</h1>
                        <PieChart width={400} height={400}>
                          <Pie
                            activeIndex={activeIndex}
                            activeShape={renderActiveShape}
                            data={placementData}
                            cx={180}
                            cy={120}
                            innerRadius={60}
                            outerRadius={80}
                            fill="rgba(30, 120, 200,0.5)"
                            dataKey="value"
                            onMouseEnter={onPieEnter}
                          />
                    </PieChart>
                        </div>
                    </div>
                    
                </div>
            </div>
            
        </>
     );
}
 
export default Analysis;