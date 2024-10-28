
import { useEffect, useState } from 'react';
import './App.css'
import LineReachart from './components/LineReachart/LineReachart';
// import DaisyUI from './components/daisyuinav/DaisyUI'
import Navbar from './components/Navbar/Navbar'
import Phones from './components/Phones/Phones';
import PriceOption from './components/PriceOption/PriceOption';

import axios from 'axios';

function App() {

  const [phones, setPhones] = useState([]);
  // console.log(phones);


  useEffect(() => {
    // fetch("https://openapi.programming-hero.com/api/phones?search=iphone")
    //   .then((res) => res.json())
    //   .then((data) => setPhones(data.data));


    axios.get("https://openapi.programming-hero.com/api/phones?search=iphone")
      .then(data => {
        const phoneData = data.data.data;
        const phonesWithFakeData = phoneData.map(phone => {
          const obj = {
            name: phone.phone_name,
            price: parseInt(phone.slug.split('-')[1])
          }
          return obj;
        })
        console.log(phonesWithFakeData);
        setPhones(phonesWithFakeData)
      })
    
  },[])

  

  return (
    <>
      <div className="container mx-auto">

      <Navbar></Navbar>
        {/* <DaisyUI></DaisyUI> */}
        <PriceOption></PriceOption>
        <LineReachart></LineReachart>
        <Phones phones={phones}></Phones>
      </div>

    </>
  );
}

export default App
