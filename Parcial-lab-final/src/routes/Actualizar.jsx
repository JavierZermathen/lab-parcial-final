import React, {useState, useEffect}  from 'react'
import Navbar from '../components/Navbar';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Actualizar() {
    const[firstName, setFirstName] = useState('');
    const[lastName, setLastName] = useState('');
    const[ID, setID] = useState(null);
    const sendDataToAPI = () => {
        // e.PreventDefault();
        axios.put(`http://localhost:5000/contactos/${ID}` , {
            firstName,
            lastName
        })
        .then(res => console.log('posting data', res))
        .catch(err => console.log(err))

        console.warn(firstName, lastName);

        console.log(firstName);
        console.log(lastName);    
    }

    useEffect(() => {
        setFirstName(localStorage.getItem('firstName'));
        setLastName(localStorage.getItem('lastName'));
        setID(localStorage.getItem('ID'));
    }, [])
    
  return (
    
        <div className='contentBox'>
            <Navbar />
            <div className="formBox">
                <h2> Editar el contacto elegido</h2>
                
                    <form>
                        <div className="inputBox">
                            <span> Nombre </span>
                            <input  name="fname" value={firstName} onChange= {(e) => setFirstName(e.target.value)}  placeholder='Ingresar nombre' />
                        </div>


                        <div className="inputBox">
                            <span> Apellido </span>
                            <input name="lname" value={lastName} onChange= {(e) => setLastName(e.target.value)}  placeholder='Ingresar apellido'/>
                        </div>
                       

                        <div className="inputBox">
                            <Link to ='/crear'>
                                <input type="button" onClick={sendDataToAPI} value="Actualizar" className="update" />
                            </Link>
                        </div>
                    </form>
            </div>
        </div>
    
  )
}

export default Actualizar;
