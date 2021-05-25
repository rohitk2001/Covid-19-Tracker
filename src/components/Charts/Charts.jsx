import React,{useState,useEffect} from 'react';
import {fetchDailyData} from "../../api";
import {Line,Bar} from "react-chartjs-2";//chart.js is installed
import styles from "./Charts.module.css";
//Data is being sent from index.js from fetchDailyData() function
const Charts = ({data,country}) => {
    const [dailyData,setDailyData] = useState([]); //Empty [] array  value as initial value because dailyData is also array

    useEffect(()=>{
        const fetchAPI = async() =>{
            setDailyData(await fetchDailyData());
        }
        fetchAPI();
    },[]); //Empty array  is very important ,it stops the api calls 

    const lineChart = (
        dailyData.length
        ? (
          <Line
            data={{
              labels: dailyData.map(({ date }) => new Date(date).toLocaleDateString()),
              datasets: [{
                    data: dailyData.map(({confirmed}) => confirmed),
                    label: 'Infected',
                    borderColor: '#3333ff',
                    fill: true,
                }, {
                    data: dailyData.map(({deaths}) => deaths),
                    label: 'Deaths',
                    borderColor: 'red',
                    backgroundColor: 'rgba(255, 0, 0, 0.5)',
                    fill: true,
                }], 
            }}
          />
        ) : null
      );

      const barChart = (
        data.confirmed ? (
          <Bar
            data={{
              labels: ['Infected', 'Recovered', 'Deaths'],
              datasets: [
                {
                  label: 'People',
                  backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
                  data: [data.confirmed.value, data.recovered.value, data.deaths.value],
                },
              ],
            }}
            options={{
              legend: { display: false },
              title: { display: true, text: `Current state in ${country}` },
            }}
          />
        ) : null
      );
    
    return (
        <div className={styles.container}>
            {country ? barChart : lineChart}
        </div>
    );
}

export default Charts;
