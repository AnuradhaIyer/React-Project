import React, { useState, useEffect } from "react";
import { encode } from "base-64"
import PropertyList from "../ListView/PropertyList";
import axios from 'axios';

const SimplyRets = () => {
    let username = 'simplyrets';
    let password = 'simplyrets';
    let errMessage =' No  Data '
    var UserID = Number(localStorage.getItem('userID'));
    const [hasError, setErrors] = useState(false);
    const [data, setData] = useState([]);

    //user ID random number genertor
    function randomNumber() {
      var min = 1;
      var max = 9999999999;
      return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // async function to fetch data on page load
  async function fetchDataApp() {
    const res = await fetch('https://api.simplyrets.com/properties' , 
    { method:'GET', 
    headers: {'Authorization': 'Basic ' + encode(username + ":" + password)}})
    .then(res =>res.json())
    .then(res => setData(res))
    .catch(err => setErrors(err));   
    
  }
   useEffect(()=>{
    fetchDataApp();
    },[])

    // Storing API Data to local storage 
    var dataToStore = JSON.stringify(data);
    localStorage.setItem('API Data', dataToStore);
    //Checking if User ID already exists if not create a new random number 
    UserID ? (localStorage.getItem('userID')) : localStorage.setItem('userID', randomNumber())

  return(
    <div>
 {localStorage.getItem('API Data') ? <PropertyList setdata={data}/> : errMessage }

    </div>
    );
  };

export default  SimplyRets;