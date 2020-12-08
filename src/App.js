import React from 'react';
import {Cards, Charts, Countrypicker} from './Coponents';
import styles from './App.module.css';
import {fetchData} from './api';
import covidImage from './images/cimg.png'

class App extends React.Component{


  // data and country are the two objects in the state and are used afterwards in the pgm:-
  state = {
    data:{},
    country:'',

  }

// The componentDidMount is making the request to fetchData() which is in the API module..
  async componentDidMount () {

      const fetchedData = await fetchData();
      this.setState({data:fetchedData});

  }

  handleCountryChange = async(country) =>{

    //we are fetching data from the api or url by passing country as a parameter
    const fetchedData = await fetchData(country);

    //  console.log(fetchedData);

        this.setState({data: fetchedData, country: country});
    
  }

  render(){

        const {data, country} = this.state
      return (
        <>
            <div className= {styles.container}>
            <img  className = {styles.image} src={covidImage} alt='COVID-img'/>
            <Cards data = {data}/>
            <Countrypicker handleCountryChange ={this.handleCountryChange}/>
            <Charts data={data} country = {country}/>
            </div>
        </>
      )

  }

}

export default App;