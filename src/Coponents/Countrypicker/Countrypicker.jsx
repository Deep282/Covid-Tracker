import React,{useState,useEffect} from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import {fetchCountries} from '../../api'
import styles from './Countrypicker.module.css';
const Countrypicker = ({handleCountryChange}) =>{


    const [fetchCountry, setFetchCountry] = useState([])


    useEffect (() => {
        const fetchApi = async () =>{
            setFetchCountry(await fetchCountries());
        }

               
        fetchApi()
    }, [setFetchCountry])
    
    return(

        <>
            <FormControl className = {styles.FormControl}>
                    <NativeSelect defaultValue = '' onChange = {(e)=> handleCountryChange(e.target.value) }>

                        <option value= ''>Global</option>
                        {fetchCountry.map((country, i) => <option key = {i} value= {country}>{country}</option>)}
                    </NativeSelect>
                </FormControl>    
        </>
    );

} 

export default Countrypicker;