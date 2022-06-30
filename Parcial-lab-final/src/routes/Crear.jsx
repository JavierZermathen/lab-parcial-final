import React, {useState, useEffect}  from 'react'
import axios from 'axios';
import swal from 'sweetalert';
import Navbar from '../components/Navbar';

function Create() {
  
    const[firstName, setFirstName] = useState('');
    const[lastName, setLastName] = useState('');

    const mostrarAlerta=()=> {
        swal("Eviado exitosamente");

    }
    

    const sendDataToAPI = () => {
        // e.PreventDefault();
        axios.post(`http://localhost:5000/contactos` , {
            firstName,
            lastName
        })

        .then(() => {

            
 
        }
         
            )
        .catch(err => console.log(err))

        console.warn(firstName, lastName);
        console.log(firstName);
        console.log(lastName);
        
    }
    
  return (

       
    
        <div className='contentBox'>
            <Navbar />
            
            <div className="formBox">
            <h1> Crear Contactos</h1>

                    <form>
                        <div className="inputBox">
                            <span> Nombre </span>
                            <input  name="fname" onChange= {(e) => setFirstName(e.target.value)}  placeholder='Ingresar nombre' />
                        </div>

                        <div className="inputBox">
                            <span> Apellido </span>
                            <input name="lname"  onChange= {(e) => setLastName(e.target.value)}  placeholder='Ingresar apellido'/>
                        </div>

                       
                        <div className="inputBox">
                           
                                <input type="button" value="Enviar" onClick={ (sendDataToAPI) }   />

                            
                        </div>

  
                    </form>
            </div>
        </div>
    
  )
}

export default Create;