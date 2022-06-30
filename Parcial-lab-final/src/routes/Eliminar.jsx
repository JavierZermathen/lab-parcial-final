import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { Link } from "react-router-dom";


function Delete() {
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/contactos`)
      .then((getData) => {
        setApiData(getData.data);
      });
  }, []);



  const getData = () => {
    axios
      .get(`http://localhost:5000/contactos`)
      .then((getData) => {
        setApiData(getData.data);
      });
  };

  const onDelete = (id) => {
    axios
      .delete(`http://localhost:5000/contactos/${id}`)
      .then(() => {
        getData();
      });
  };

  return (
    <>
      <div className="tableBox">
      <Navbar />
      <h1> Borrar Contactos</h1>
        <table>
          <thead className="thead-class">
            <tr>
              <th>Id</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Accion</th>
              
            </tr>
          </thead>


          <tbody>
            {apiData.map((data) => {
              return (
                <tr>
                  <th scope="row">{data.id}</th>
                  <td>{data.firstName}</td>
                  <td>{data.lastName}</td>
              
                  <td>
                    <Link to="/eliminar">
                      <button
                        type="button"
                        value="lastName"
                        onClick={() => onDelete(data.id)}
                        className="delete"
                      >
                        Borrar
                      </button>
                    </Link>
                  </td>

                  
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

    </>
  );
}

export default Delete;
