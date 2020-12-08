import axios from 'axios';

// const url = 'https://api.covid19api.com/summary';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) =>{
    
    let changeableUrl = url;


    // The fetchData is called from app.js under handleCountryChange section and passing country 
    // as a parameterwe are checking if we get the country from the url the change the url
    // and the changeavleUrl can be used further.
    if(country){

        changeableUrl = `${url}/countries/${country}`
    }
    
    
    try{
            const {data:{confirmed,recovered, deaths, lastUpdate}} = await axios.get(changeableUrl);
            
            return {confirmed,recovered, deaths, lastUpdate};
            
            
          
    }
    catch (error){
        console.log(error)
    }

}


export const fetchDailyData = async () =>{

    try {
        const {data} = await axios.get(`${url}/daily`)
        return data.map(({ confirmed, deaths, reportDate: date }) => (
            { 
        confirmed: confirmed.total, 
        deaths: deaths.total,
        date }));
               
    } catch (error) {
        console.log(error)
    }

}


export const fetchCountries = async () =>{

    try{
            const {data: {countries}} = await axios.get(`${url}/countries`)
            return countries.map((country => country.name))

    }
    catch(error){
        console.log(error)
    }
} 
