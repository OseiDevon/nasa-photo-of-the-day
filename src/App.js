import React, {useState, useEffect} from "react";
import axios from 'axios';
import Img from './Components/Image';
import Copyright from './Components/Copyright';
import DateImg from './Components/Date';
import Summary from './Components/Summary';
import Title from './Components/Title';
import "./App.css";

function App() {
  const [data, setData] = useState({})

  const baseURL = 'https://api.nasa.gov/planetary/apod?api_key=1XcrC3xroozQArT3QJTKfIW0acN4yfDqhwHVqWZm'
    useEffect(() => {
      axious.get(`${baseURL}`)
    .then((res) => {
      setData(res.data)
        console.log(res.data)
    })
    .catch( err => {
      console.log(err);
    })
    }, [])

    return (
      <div className = "App">


      <Title title = {data.title}/>
      <Img image = {data.url}/>
      <DateImg date = {data.date}/>
      <Summary summary = {data.explanation}/>
      <Copyright copyright = {data.copyright}/>
    </div>
  );
 }


export default App;
