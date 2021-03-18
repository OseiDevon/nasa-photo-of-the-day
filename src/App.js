import React, {useState, useEffect} from "react";
import axios from 'axios'
import Img from './Components/Image'
import DateImg from './Components/Date'
import Summary from './Components/Summary'
import Title from './Components/Title'
import "./App.css";

function App() {
  const [data, setData] = useState({})

  useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=1XcrC3xroozQArT3QJTKfIW0acN4yfDqhwHVqWZm")
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
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>

     <Title title = {data.title}/>
     <Img image = {data.url}/>
     <DateImg date = {data.date}/>
     <Summary summary = {data.explanation}/>
    </div>
  );
 }


export default App;
