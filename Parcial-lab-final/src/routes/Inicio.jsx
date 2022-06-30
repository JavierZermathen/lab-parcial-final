import React, { useEffect, useState } from "react";
// import {Table } from 'reactstrap'
import axios from "axios";
import Navbar from "../components/Navbar";


function Home() {
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/contactos`)
      .then((getData) => {
        setApiData(getData.data);
      });
  }, []);

  const setData = (id, firstName, lastName) => {
    console.log(id);
    localStorage.setItem("ID", id);
    localStorage.getItem("firstName");
    localStorage.getItem("lastName");
  };

  const getData = () => {
    axios
      .get(`http://localhost:5000/contactos`)
      .then((getData) => {
        setApiData(getData.data);
      });
  };



  return (
    <>
      <div className="tableBox">

      <Navbar />
      <h1> Lista de contactos</h1>
      
        <table>
          <thead className="thead-class">
            <tr>
              <th>Id</th>
              <th>Nombre</th>
              <th>Apellido</th>
              
              
            </tr>
          </thead>


          <tbody>
            {apiData.map((data) => {
              return (
                <tr>
                  <th scope="row">{data.id}</th>
                  <td>{data.firstName}</td>
                  <td>{data.lastName}</td>
                  


                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

    </>
  );
}

export default Home;
