import Head from './Head'
import Stats from './Stats';
import { BAR_CHART, BAR_CHART_SERIES, LINE_CHART, LINE_CHART_SERIES, STATS } from './utils';
import { IoIosRadioButtonOn } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { GoDotFill } from "react-icons/go";
import ReactApexChart from 'react-apexcharts';

const Dashboard = () => {

  return (
    <div className='dashboard'>
      <Head />
      <div className='stats-zone'>
        {STATS.map(({ id, logo, stats, total, percent, arrow }) => (
          <Stats key={id} logo={logo} stats={stats} total={total} percent={percent} arrow={arrow} />
        ))}
      </div>
      <div className='charts'>
        <div className="left-chart">
          <div className='upper'>
            <div className='revenue'>
              <h3 style={{ color: '#3b50df' }}><IoIosRadioButtonOn /> Total Revenue</h3><br />
              <div>12.04.2022 - 12.05.2022</div>
            </div>
            <div className='revenue'>
              <h3 style={{ color: '#80caed' }}><IoIosRadioButtonOn /> Total Revenue</h3><br />
              <div>12.04.2022 - 12.05.2022</div>
            </div>
            <div className='day'>
              <span>Day</span>
              <span>Week</span>
              <span>Month</span>
            </div>
          </div>
          <div className="graph">
            <ReactApexChart
              options={LINE_CHART}
              series={LINE_CHART_SERIES}
              type="area"
              height={350}
            />
          </div>
        </div>
        <div className="right-chart">
          <div className='profit'>
            <h1>Profit this week</h1>
            <span>This Week <IoIosArrowDown /></span>
          </div>
          <div className='profit-graph'>
            <ReactApexChart
              options={BAR_CHART}
              series={BAR_CHART_SERIES}
              type="bar"
              height={400}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard