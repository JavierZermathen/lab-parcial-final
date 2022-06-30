import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { Link } from "react-router-dom";

function Read() {
  
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


  return (
    <>

      <div className="tableBox">
      <Navbar />
      <h1> Editar Contactos</h1>
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
                    <Link to="/actualizar">
                     
                      <button
                        type="button"
                        value="firstName"
                        onClick={() =>
                          setData(data.id, data.firstName, data.lastName)
                        }
                        className="update"
                      >
                        Actualizar
                      </button>
                    </Link>
                  </td>

                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      
      <div className="contentBox">
        <div className="formBox">
          <form>

          </form>

        </div>
      </div>
    </>
  );
}

export default Read;
