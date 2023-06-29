import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Books from './components/books';
import { useEffect, useState } from 'react';

const API_URL = "http://localhost:3000/api/v1/books"; //create the const for api url

//create a function to get the api data
function getApiData(){
  return axios.get(API_URL).then((response)=> response.data)
}

function App() {
  const [books, setBooks] = useState([]);

  useEffect(()=>{
    let mounted = true;
    getApiData().then((items) => {
      if(mounted){
        setBooks(items)
      }
    });
    return () => (mounted = false);
  }, [])

  return (
    <div className="App">
      <h1>Hello</h1>
      <Books books={books}></Books>
    </div>
  );
}

export default App;
