import React from 'react'
import { AreaChart, Area, XAxis,  CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './chart.scss'

const data = [
  {
    name: 'January',
    total: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'February',
    total: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'March',
    total: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'April',
    total: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'May',
    total: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'June',
    total: 2390,
    pv: 3800,
    amt: 2500,
  }
];

function Chart({aspect,title}) {
 
  return (
    <div className='chart'>
      <div className="title">{title}</div>
      <ResponsiveContainer width="100%"  aspect={aspect}>
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" className='chartGrid'/>
          <XAxis dataKey="name" stroke='gray'/>
          
          <Tooltip />
          <Area type="monotone" dataKey="total" stackId="1" stroke="#8884d8" fill="#8884d8" />
          
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart