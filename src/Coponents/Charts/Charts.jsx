import React, {useState, useEffect}from 'react';
import {fetchDailyData} from '../../api';
import {Line, Bar} from 'react-chartjs-2';
import styles from './Charts.module.css';

const Charts = ({data: {confirmed, deaths, recovered}, country}) =>{

     
   const [dailyData, setDailyData] = useState([]);
   
   useEffect (()=>{
       const fetchApi = async () =>
       {
            setDailyData(await fetchDailyData());

       }
          
       fetchApi();
   }, [dailyData]);


     const lineChart = (
         //dailyData.length check if it is not an empty array. if yes than skip to null. 
          dailyData.length
          ? ( 
          <Line
        //Below is the line chart data where we are looping through dailyData and destructing 
        //according to the need like date, inside datasets we are returning confirmed & deaths
        //dailyData.map(({date})=> date) tells us the we are labeling and destructring date 
        // from dailyData and returning as it is date..   
              data = {{
                    labels: dailyData.map(({ date }) => new Date(date).toLocaleDateString()),
                    datasets:[{
                    data: dailyData.map((data) => data.confirmed),
                    label: 'Infected',
                    borderColor: '#3333ff',
                    fill: true, 
                    },

                    {
                    data: dailyData.map((data) => data.deaths),
                    label: 'Deaths',
                    borderColor: 'red',
                    backgroundColor: 'rgba(255, 0, 0, 0.5)',
                    fill: true,


                  },],
              }}
          /> ):null  
     );

              const barChart = (

                    confirmed
                    ?(
                        <Bar
                                //{{}} one for making data dynamic n 2nd one is for objects...
                            data = {{
                                labels: ['Infected', 'Recovered', 'Deaths'],
                                
                                datasets: [{
                                    label: 'People',
                                    backgroundColor:[
                                        'rgba(0,0,255, 0.5)',
                                        'rgba(0,255,0, 0.5)',
                                        'rgba(255, 0, 0, 0.5)',
                                    ],
                                data: [confirmed.value, recovered.value, deaths.value]    

                                }]
                            }}
                            options = {{
                                legend: {display: false},
                                title: {display: true, text: `Current Covid state in ${country}`}

                            }}
                        />
                    ) : null


              )


              





    return(

        <>
        <div className = {styles.container}>
                {country ? barChart : lineChart}
        </div>
        </>
    );

} 

export default Charts;