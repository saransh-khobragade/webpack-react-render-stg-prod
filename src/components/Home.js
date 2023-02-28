import React,{ useEffect,useState } from 'react';
import axios from "axios";

export default function Home() {

  const [data,setData]=useState([])

  useEffect(()=>{
    (async()=>{
      const backendUrl = process.env.backendUrl
      const response = await axios.get(backendUrl)
      setData(response.data.movies)

    })()
  },[])
  
  return (
    <div>
      Hello React App
      <table border={1}>
      <tbody>
        <tr>
          <th>id</th>
          <th>title</th>
          <th>description</th>
        </tr>
        { data?data.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.id}</td>
              <td>{val.title}</td>
              <td>{val.description}</td>
            </tr>
          )
        }):null}
        </tbody>
      </table>
    </div>
  );
}
