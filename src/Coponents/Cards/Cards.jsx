import React from 'react';
import {Card, CardContent, Typography, Grid} from '@material-ui/core';
import styles from './Cards.module.css';
import CountUp from 'react-countup';
import cx from 'classnames';


const Cards = ({data:{confirmed,recovered, deaths, lastUpdate}}) =>{

      

    console.log(confirmed,recovered,deaths);
  
         
    return(

        <>
               
        <div className = {styles.container}>
            <Grid container spacing ={3} justify = 'center'>
                <Grid item component={Card} xs ={12} md= {3} className = {cx(styles.card, styles.infected)}>
                        <CardContent>
                            <Typography color = 'textSecondary'>Infected</Typography>
                            <Typography variant = 'h5' >
                            {/* <CountUp start={0} end={confirmed?.value} duration={2.5} separator=","/>  */}
                            

                            {confirmed?.value}
                            </Typography>
                            <Typography color = 'textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
                            <Typography variant='body2'>No.of active cases of COVID-19</Typography>
                        </CardContent>
                </Grid> 
                <Grid item component={Card}  xs ={12} md= {3} className = {cx(styles.card, styles.deaths)}>
                        <CardContent>
                            <Typography color = 'textSecondary' gutterBottom>Total Deaths</Typography>
                            <Typography variant = 'h5' >{deaths?.value}</Typography>
                            <Typography color = 'textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
                            <Typography variant='body2'>No.of deaths due to COVID-19</Typography>
                        </CardContent>
                </Grid>
                <Grid item component={Card} xs ={12} md= {3} className = {cx(styles.card, styles.recovered)}>
                        <CardContent>
                            <Typography color = 'textSecondary' gutterBottom>Recovered</Typography>
                            <Typography variant = 'h5' >{recovered && recovered.value}</Typography>
                            <Typography color = 'textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
                            <Typography variant='body2'>No.of recovered cases of COVID-19</Typography>
                        </CardContent>
                </Grid>
            </Grid>


        </div>

       
        </>
    );

} 

export default Cards;