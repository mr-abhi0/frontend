import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {

  const axios = require('axios');

  const options = {
    method: 'GET',
    url: 'https://alpha-vantage.p.rapidapi.com/query',
    params: {
      interval: '5min',
      function: 'TIME_SERIES_INTRADAY',
      symbol: 'MSFT',
      datatype: 'json',
      output_size: 'compact'
    },
    headers: {
      'X-RapidAPI-Key': '9feba2bbd8msh5b6930a2401e5cep10a601jsn610328ab4017',
      'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com'
    }
  };

  const [students, setStudents] = useState([])

  useEffect(() => {
    async function getAllStudents() {
      try {
        const students = await axios.get(options);
        console.log(students.data)
        setStudents(students.data)
      } catch (error) {
        console.log(error)
      }
    }
    getAllStudents()


  }, [])

  return (
    <div className="App">
      <h1>Connect Rest Api</h1>{

        students.map((students, i) => {
          return (
            <h2> {students.id} {students.stuname} {students.email} </h2>
          )
        })

      }
      <p>
        Environment: <b> {process.env.NODE_ENV} </b>
      </p>
    </div>
  );
}

export default App;
