
import React from "react";
import { UserContext, UserProvider } from "./UserContext";
import { useContext } from "react";
   import  './index.css'
export default  function Results({ element }) {
  // reference the context for the "name".
     const { Name } = useContext(UserContext);
     var imag;
  if (element === "Fire") {imag="https://th.bing.com/th/id/OIP.lRDqJXyYCv2NYan-StktwAHaF7?w=250&h=220&c=7&r=0&o=5&dpr=1.3&pid=1.7"}
  else if (element === "Water") {imag='https://th.bing.com/th/id/OIP.qT5mE4UmMFBskk8LDUz5pQHaFj?w=250&h=220&c=7&r=0&o=5&dpr=1.3&pid=1.7'}
  else if (element === "Earth") {imag='https://th.bing.com/th/id/OIP.-W_DO8N5nzn31VXJDxoIzQHaF0?w=250&h=220&c=7&r=0&o=5&dpr=1.3&pid=1.7'}
  else if (element === "Air") {imag='https://th.bing.com/th/id/OIP.KzgezwQN2YTvu31Qc8bf4wHaNK?w=250&h=260&c=7&r=0&o=5&dpr=1.3&pid=1.7'}
  return (
    <div className='result'style={{height:'60vh',width:'90vw'}}>
      <p >
       <div style={{fontSize:'30px',color:'orange'}}> <strong>{Name}</strong>, your element is: {element}</div>
      </p>
      <div style={{fontSize:'20px',color:'pink'}}>, And you belong to</div>
     <img src={imag} />
        <p>No artwork found.</p>
      
    </div>
  );
}